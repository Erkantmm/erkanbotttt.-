const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("<a:sren:667367167355781140>**Kullanıcı Komutları WOW**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:azrail:683714185271836719>**Seviye**<a:azrail:683714185271836719> " , "**e!seviye** o sunucudaki seviyenizi gösterir.")
.addField("<a:azrail:683714185271836719>**Öneri**<a:azrail:683714185271836719> " , "**e!öneri:** bota öneride bulunursunuz.")

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
    name: 'kullanıcı', 
    description: 'The Help Command',
    usage: 'help'
  };