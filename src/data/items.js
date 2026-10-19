const items = [
    {
        id: 1,
        nombre: "The Witcher 3: Wild Hunt",
        genero: "RPG",
        plataforma: "PC / Console",
        puntaje: 9.8,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg"
    },
    {
        id: 2,
        nombre: "Elden Ring",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.6,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
        id: 3,
        nombre: "Hollow Knight: Silksong",
        genero: "Metroidvania",
        plataforma: "PC / Switch / Console",
        puntaje: 9.7,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg"
    },
    {
        id: 4,
        nombre: "Cyberpunk 2077",
        genero: "RPG",
        plataforma: "PC / Console",
        puntaje: 8.7,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
        id: 5,
        nombre: "Stardew Valley",
        genero: "Simulación",
        plataforma: "PC / Switch / Mobile",
        puntaje: 9.4,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg"
    },
    {
        id: 6,
        nombre: "Batman: Arkham Knight",
        genero: "Acción / Aventura",
        plataforma: "PC / Console",
        puntaje: 9.2,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/208650/header.jpg"
    },
    {
        id: 7,
        nombre: "Red Dead Redemption 2",
        genero: "Acción / Aventura",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg"
    },
    {
        id: 8,
        nombre: "Warhammer 40,000: Space Marine 2",
        genero: "Acción / TPS",
        plataforma: "PC / Console",
        puntaje: 9.3,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/2183900/header.jpg"
    },
    {
        id: 9,
        nombre: "Minecraft",
        genero: "Sandbox",
        plataforma: "Multiplataforma",
        puntaje: 9.5,
        multijugador: true,
        imagen: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/NewKeyArt_Header.jpg"
    },
    {
        id: 10,
        nombre: "God of War Ragnarök",
        genero: "Acción / Aventura",
        plataforma: "PlayStation / PC",
        puntaje: 9.6,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/2322010/header.jpg"
    },
    {
        id: 11,
        nombre: "Terraria",
        genero: "Sandbox / Aventura",
        plataforma: "PC / Mobile / Console",
        puntaje: 9.2,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg"
    },
    {
        id: 12,
        nombre: "Crimson Desert",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.3,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/3321460/header.jpg"
    },
    {
        id: 13,
        nombre: "Monster Hunter World",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 9.0,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg"
    },
    {
        id: 14,
        nombre: "Portal 2",
        genero: "Puzzle / Plataformas",
        plataforma: "PC / Console",
        puntaje: 9.8,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg"
    },
    {
        id: 15,
        nombre: "Outer Wilds",
        genero: "Exploración / Misterio",
        plataforma: "PC / Switch / Console",
        puntaje: 9.6,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg"
    },
    {
        id: 16,
        nombre: "Diablo IV",
        genero: "Action RPG",
        plataforma: "PC / Console",
        puntaje: 8.8,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/2344520/header.jpg"
    },
    {
        id: 17,
        nombre: "Baldur's Gate 3",
        genero: "RPG Táctico",
        plataforma: "PC / Console",
        puntaje: 9.9,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
    },
    {
        id: 18,
        nombre: "DOOM: The Dark Ages",
        genero: "FPS",
        plataforma: "PC / Console",
        puntaje: 9.4,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/3017860/header.jpg"
    },
    {
        id: 19,
        nombre: "Disco Elysium",
        genero: "RPG Narrativo",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg"
    },
    {
        id: 20,
        nombre: "Grand Theft Auto V",
        genero: "Acción / Mundo Abierto",
        plataforma: "PC / Console",
        puntaje: 9.7,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg"
    },
    {
        id: 21,
        nombre: "Resident Evil 9",
        genero: "Survival Horror",
        plataforma: "PC / Console",
        puntaje: 9.4,
        multijugador: false,
        imagen: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3764200/ce5437442768e38eb575f205ab9397d0264017b0/header.jpg?t=1779840172"
    },
    {
        id: 22,
        nombre: "Forza Horizon 5",
        genero: "Carreras",
        plataforma: "PC / Xbox",
        puntaje: 9.2,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg"
    },
    {
        id: 23,
        nombre: "Cuphead",
        genero: "Run and Gun",
        plataforma: "PC / Switch / Console",
        puntaje: 9.3,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg"
    },
    {
        id: 24,
        nombre: "Sekiro: Shadows Die Twice",
        genero: "Acción / Soulslike",
        plataforma: "PC / Console",
        puntaje: 9.5,
        multijugador: false,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg"
    },
    {
        id: 25,
        nombre: "Helldivers 2",
        genero: "Shooter Cooperativo",
        plataforma: "PC / PlayStation",
        puntaje: 9.0,
        multijugador: true,
        imagen: "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg"
    }
];

export default items;