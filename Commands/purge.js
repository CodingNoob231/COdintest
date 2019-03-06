const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**❌You don't have permission to use this command.❌**")
   if(!args[0]) return message.channel.send("**❌You have to sepcify a number of messages to delete.❌**");
   message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`✔️Purged ${args[0]} messages.✔️`).then(msg => msg.delete(2000));
   });
}

module.exports.help = {
    name: "purge",
    description: "Bulkdelete a specified amount of messages."
}