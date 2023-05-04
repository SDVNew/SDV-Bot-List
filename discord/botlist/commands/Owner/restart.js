module.exports = {
    name: "restart",
    category: "Owner",
    cooldown: 2,
    usage: "Restart SdvBots.xyz",
    description: "Restarts SdvBots.xyz",
    run: async (client, message) => {
        if (!global.config.client.owners.includes(message.author.id)) return message.reply('could not be granted access permission.');
        let embed = {};
        embed.title = "Restarting SdvBots.xyz";
        embed.description = "Restarting in 3 seconds...";
        embed.color = 0x7289DA;
        message.channel.send({
            embeds: [embed]
        });
        setTimeout(() => {
            process.exit(1); // restart the bot
        }, 3000);
    }
}