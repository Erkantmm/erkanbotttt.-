const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("<a:sren:667367167355781140>**Biraz Yardım Almak İstemişe Benziyorsun!**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:palan:683713230002061378>**Radyo**<a:palan:683713230002061378>" , "**e!radyo** sesli kanalda radyo açarsınız")
message.channel.sendEmbed(sembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'müzik', 
    description: 'The Help Command',
    usage: 'müzik'
  };