const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection()
const moment = require("moment");







fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("Commands not found.");
        return;
    };

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props)
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!!`);
    bot.user.setActivity('Reflex', {type: "WATCHING"})
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix

    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    if(message.content.indexOf(prefix) !== 0) return;

    if(message.content == `${botconfig.prefix}help`)
    message.reply("```The creator who made this bot is center gaming aka virgin9000 For further information go to https://pastebin.com/raw/eBfidHEF```");

    

     


});



  







bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});





bot.on("error",err => {
   console.log(err);
});






bot.login(process.env.token);
