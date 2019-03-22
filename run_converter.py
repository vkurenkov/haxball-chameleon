import os
import json
import argparse

from distance import levenshtein
from collections import defaultdict


def convert_to_bin(path: str, target_path: str):
    return os.system(f"nodejs haxball/replay.js convert \"{path}\" \"{target_path}\"")


def extract_metavar(path: str):
    with open(path, 'rb') as f:
        bytes_ = f.read()

    players = eval(bytes_[bytes_.find(b'{'):bytes_.find(b'}') + 1])
    players['path'] = path
    return players


def update_player_paths(player_paths: dict, metavar: dict):
    for key, val in metavar.items():
        if key == 'path': continue
        player_paths[val].append(metavar['path'])


def normalize_player_paths(player_paths: dict):
    normalized_player_paths = defaultdict(list)

    for key, val in player_paths.items():
        normalized = False
        for normalized_key in normalized_player_paths.keys():
            if levenshtein(key, normalized_key) == 1:
                normalized_player_paths[normalized_key].extend(val)
                normalized = True

        if not normalized:
            normalized_player_paths[key] = val
    return normalized_player_paths


def convert_all(replays_path: str):
    player_paths = defaultdict(list)
    num_all = 0
    num_suc = 0

    for subdir, dirs, files in os.walk(replays_path):
        for file in files:
            if file.split('.')[-1] == "bin":
                continue

            path = os.path.join(subdir, file)
            target_path = os.path.join(PREPROCESSED_PATH, str(num_suc) + '.bin')

            code = convert_to_bin(path, target_path)
            if code == 0:
                metavar = extract_metavar(target_path)
                update_player_paths(player_paths, metavar)

                num_suc += 1
            num_all += 1

    print(f"Total files: {num_all}; Success: {num_suc} ({num_suc/num_all:.2f})")
    return normalize_player_paths(player_paths)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("--path", type=str, default="replays/",
                        help="Folder with replays.")
    args = parser.parse_args()

    PREPROCESSED_PATH = "preprocessed/"
    os.makedirs(PREPROCESSED_PATH, exist_ok=True)

    print("Starting to convert...")
    statistics = convert_all(args.path)

    with open(PREPROCESSED_PATH + 'statistics.json', 'w') as f:
        json.dump(statistics, f)

    print("Done.")
