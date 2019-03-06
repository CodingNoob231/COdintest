const Discord = require("discord.js");
const moment = require("moment");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    let user;
    if(message.mentions.users.first()) {
        user = message.mentions.users.first();

    } else {
        user = message.author
    }

    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .setTitle(`${user.username}#${user.discriminator}`)
    .addField("Nickname:", `${member.nickname !== null ?  `${member.nickname}` :`None`}`, true)
    .addField("Created At:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField("Bot:", `${user.bot}`, true)
    .addField("Status:", `${user.presence.status}`, true)
    .addField("Game:", `${user.presence.status}`, true)
    .addField("Roles", member.roles.map(roles => `${roles.name}`).join(`, `), true)
    .addField("Today's date.:", `${moment.utc(member.RegisteredAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`) 
    message.channel.send({embed})
}

module.exports.help = {
    name: "userinfo",
    Description: "Displays a user's info"

}

