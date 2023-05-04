const port = 4777;
const mySecret = process.env['TOKEN'];

module.exports = {
    client: {
        id: '1083058634382135356',
        token: mySecret,
        secret: 'hybO3Hovf4H42Iged0wy2AWsw5I1SKkx',
        prefix: 's!',
        owners: ["1032044072761831524"],
    },

    serverClient: {
        id: '1083058634382135356',
        prefix: 's!',
        token: mySecret,
        invite: 'https://discord.com/api/oauth2/authorize?client_id=1083058634382135356&permissions=8&scope=bot'
    },

    database: {
        url: 'mongodb+srv://sdvastrabot:Becky80!@cluster0.ttusjvj.mongodb.net/test', // Mongo url
    },

    website: {
        port: port,
        url: 'https://discord-bot-list-v3.louiefell.repl.co', // default url
        callback: 'https://discord-bot-list-v3.louiefell.repl.co/callback', // default callback url

        // testingURL: 'http://localhost:' + port, // default testing url
        // testingCallback: 'http://localhost:' + port + '/callback', // default testing callback url

        support: 'https://discord.gg/eQrWhP6XMR', // discord support server
        roles: {
            administrator: ["1102603020929339513"]
        },
        botTags: [ // Botlist tags
            "Fun",
            "NSFW",
            "Game",
            "24/7",
            "OSU!",
            "Guard",
            "Anime",
            "Music",
            "Memes",
            "Invite",
            "Reddit",
            "Twitch",
            "Crypto",
            "Economy",
            "Logging",
            "Youtube",
            "Utility",
            "General",
            "Leveling",
            "Roleplay",
            "Fortnite",
            "Welcomer",
            "Chat bot",
            "Minecraft",
            "Community",
            "Minigames",
            "Moderation",
            "Protection",
            "Web Dashboard",
            "Reaction Roles",
            "Auto Moderation",
        ],
        serverTags: [
            "Fun",
            "Game",
            "NSFW",
            "Meme",
            "Shop",
            "Media",
            "Emoji",
            "Sound",
            "Stream",
            "Social",
            "Design",
            "Company",
            "Turkish",
            "Protest",
            "E-Sport",
            "Bot List",
            "Chatting",
            "Roleplay",
            "Challange",
            "Community",
            "Technology",
            "Server List",
            "Development",
        ]
    },

    server: {
        // Server ID
        id: '1102581749160083527',

        // Channel IDs
        channels: {
            errors: '1103409570505822208', // Sends errors to this channel
            login: '1103409570505822208', // Sends login logs to this channel (member login)
            botlogs: '1103420088121577583', // Bot Add, Remove, Approve, Deny, Edit
            votes: '1103409570505822208', // Bot votes channel
            serverlogs: '1103420088121577583', // Server Add, Remove, Approve, Deny, Edit
            welcome: '1103409570505822208', // welcome logs channel Member/Bot join & leave logs
            schedules: '1103409570505822208', // New schedule logs channel

            voiceChannelStatistics: '', // Voice channel statistics channel "Website Visitors: 1365"
        },

        // Role IDs
        roles: {
            botReviewer: '1103443306693808259', // Bot reviewer role
            botDeveloper: '1103442700453290055', // Bot developer role

            verifiedBot: '816650236733685784', // Verified bot role
            unverifiedBot: '816638129225596968', // Unverified bot role
        }
    },

    languages: [{
        flag: 'gr',
        code: 'el',
        name: 'Greek'
    }, {
        flag: 'gb',
        code: 'en',
        name: 'English'
    }, {
        flag: 'tr',
        code: 'tr',
        name: 'Türkçe'
    }, {
        flag: 'de',
        code: 'de',
        name: 'Deutsch'
    }, {
        flag: 'ru',
        code: 'ru',
        name: 'Russian'
    }, {
        flag: 'fr',
        code: 'fr',
        name: 'French'
    }, {
        flag: 'es',
        code: 'es',
        name: 'Spanish'
    }],
}