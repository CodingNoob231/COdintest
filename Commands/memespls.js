const randomPuppy = require("random-puppy");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
 
   let Reddit = [
       "MemeEconomy",
       "ComedyCemetery",
       "memes",
       "dankmemes",
       "PrequelMemes",
       "PewdiepieSubmissions",
       "funny",
       "teenagers",
       "AdviceAnimals",
       "CrappyDesign",
       "ksi"
   ]

   let subreddit = Reddit[Math.floor(Math.random() * Reddit.length -1)];

   message.channel.startTyping();

   randomPuppy(subreddit).then(URL => {
       snekfetch.get(URL).then(async res => {
           await message.channel.send({
               files: [{
                   attachment: res.body,
                   name: "meme.png"
               }]     
       }).then(() => message.channel.stopTyping())
    }).catch(err => console.error(err));


 }).catch(err => console.error(err));

};

module.exports.help = {
    name: "memes"
    
}
