import os
import argparse

def convert_to_bin(path: str):
    return os.system("nodejs connector/replay.js convert {} {}".format(path, path + ".bin"))
def convert_all(path: str):
    num_all = 0
    num_suc = 0
    for subdir, dirs, files in os.walk(path):
        for file in files:
            try:
                code = convert_to_bin(os.path.join(subdir, file))
            except Error:
                continue
            if code == 0:
                num_suc += 1
            num_all += 1
            
    print("Total files: {}; Success: {} ({})".format(num_all, num_suc, num_suc/num_all))

parser = argparse.ArgumentParser()
parser.add_argument("--path", type=str, help="Folder with replays must be put here.")
args   = parser.parse_args()

print("Starting to convert...")
convert_all(args.path)
print("Done.")
