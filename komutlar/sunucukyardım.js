const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("<a:sren:667367167355781140>**Sunucu Kur Komutları WOW**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:ykle:684006012122169369>**Sunucu Kur**<a:ykle:684006012122169369>" , "**e!sunucukur** güzel bir sunucu kurar.")
.addField("<a:ykle:684006012122169369>**Nitro Sunucusu Kur**<a:ykle:684006012122169369>" , "**e!nsunucukur** nitro sunucusu kurar.")
.addField("<a:ykle:684006012122169369>**Rol Kur**<a:ykle:684006012122169369>" , "**e!rolkur** sadece efsane rol kurar.")
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
    name: 'sunucu', 
    description: 'The Help Command',
    usage: 'help'
  };