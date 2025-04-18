export const games = [
    {
      id: "valorant",
      name: "Valorant",
      creator: "Riot Games",
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2231380/header.jpg",
      category: "Shooter",
      description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.",
      controls: {
        "move": "WASD",
        "shoot": "Left Click",
        "aim": "Right Click",
        "ability": "E",
        "ultimate": "X"
      }
    },
    {
      id: "league-of-legends",
      name: "League of Legends",
      creator: "Riot Games",
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1276790/header.jpg",
      category: "MOBA",
      description: "A team-based strategy game where two teams of five powerful champions face off to destroy the enemy's base.",
      controls: {
        "move": "Right Click",
        "abilities": "QWER",
        "summoner spells": "DF",
        "shop": "P",
        "scoreboard": "Tab"
      }
    },
    {
      id: "genshin-impact",
      name: "Genshin Impact",
      creator: "HoYoverse",
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg",
      category: "RPG",
      description: "An open-world action RPG where you embark on a journey across Teyvat to find your lost sibling.",
      controls: {
        "move": "WASD",
        "jump": "Space",
        "attack": "Left Click",
        "elemental skill": "E",
        "elemental burst": "Q"
      }
    },
    {
      id: "roblox",
      name: "Roblox",
      creator: "Roblox Corporation",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg",
      category: "Sandbox",
      description: "An online platform where you can play millions of different games created by the community.",
      controls: {
        "move": "WASD",
        "jump": "Space",
        "interact": "E",
        "inventory": "Tab",
        "chat": "Enter"
      }
    },
    {
      id: "minecraft",
      name: "Minecraft",
      creator: "Mojang",
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1672970/header.jpg",
      category: "Sandbox",
      description: "A game about placing blocks and going on adventures. Build anything you can imagine!",
      controls: {
        "move": "WASD",
        "jump": "Space",
        "attack/break": "Left Click",
        "place/use": "Right Click",
        "inventory": "E"
      }
    },
    {
      id: "pokemon-go",
      name: "Pokemon GO",
      creator: "Niantic",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1468550/header.jpg",
      category: "Adventure",
      description: "An augmented reality game where you explore the real world to catch, battle, and train Pokémon.",
      controls: {
        "throw pokeball": "Swipe",
        "rotate camera": "Drag",
        "menu": "Tap",
        "catch": "Tap",
        "zoom": "Pinch"
      }
    },
    {
      id: "clash-royale",
      name: "Clash Royale",
      creator: "Supercell",
      imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1869090/header.jpg",
      category: "Strategy",
      description: "A real-time strategy game where you collect and upgrade cards to battle other players in 1v1 or 2v2 matches.",
      controls: {
        "place card": "Tap & Drag",
        "select card": "Tap",
        "emote": "Hold & Select",
        "menu": "Settings Icon",
        "chat": "Chat Icon"
      }
    },
    {
      id: "brawl-stars",
      name: "Brawl Stars",
      creator: "Supercell",
      imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1238840/header.jpg",
      category: "Action",
      description: "A fast-paced multiplayer shooter where you collect and upgrade brawlers to compete in various game modes.",
      controls: {
        "move": "Left Joystick",
        "attack": "Right Joystick",
        "super ability": "Yellow Button",
        "gadget": "Green Button",
        "emote": "Blue Button"
      }
    }
]

export const categories = [
    "All Games",
    "Action",
    "Adventure",
    "RPG",
    "Sandbox",
    "Shooter",
    "Strategy",
    "Puzzle",
    "Sports",
    "Racing",
    "Horror",
    "Survival",
]