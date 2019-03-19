
# Game Interaction and Replay Parser

## Setup
Install python requirements (Python must be >=3.5.3)
```bash
pip install -r requirements.txt
```

Add following line to hosts file (`c:\windows\system32\drivers\etc\hosts` on windows, `/etc/hosts` on linux)
```
127.0.0.1 inter.haxball.com
```

## Usage

Start server
```bash
python server.py
```

Only one connection from game and bot are active, new connections will close earlier.

Bot and game may connect and disconnect at any time.

Run bot example
```bash
python bot_example.py
```

Open `inter.haxball.com:8080` in browser, game will connect automatically.
This is the original game with slight modifications to sends state to bot and accepts input from bot.
