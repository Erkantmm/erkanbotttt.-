const Discord = require ("discord.js");
exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")//isim amaç
.setTitle("<a:sren:667367167355781140>**Ytkili Komutları WOW**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:ldr:677846869682028554> **Oylama** <a:ldr:677846869682028554>","**e!oylama:** sunucuda oylama yapar.")
.addField("<a:ldr:677846869682028554>**Panel**<a:ldr:677846869682028554>" , "**e!panelkur:** sunucunuzun panelini kurar.")
.addField("<a:ldr:677846869682028554>**Ban**<a:ldr:677846869682028554>" , "**e!ban:** birisini sunucudan yasaklarsınız.")
.addField("<a:ldr:677846869682028554>**Uyar**<a:ldr:677846869682028554>" , "**e!uyar:** etiketlenen kişiyi özelden uyarır.")
.addField("<a:ldr:677846869682028554>**Sil**<a:ldr:677846869682028554>" , "**e!sil:** istedeğiniz kadar mesaj siler.")
.addField("<a:ldr:677846869682028554>**Sustur**<a:ldr:677846869682028554>" , "**e!sustur:** sunucudaki birini susturursunuz.")
.addField("<a:ldr:677846869682028554>**Oy Kick**<a:ldr:677846869682028554>" , "**e!oykick:** oylama sunucudan atarsınız.")
.addField("<a:ldr:677846869682028554>**Reklam Engel**<a:ldr:677846869682028554>" , "**e!reklamengel:** sunucuda reklam yapılmasını engellersiniz.")
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
    name: 'yetkili', 
    description: 'The Help Command',
    usage: 'help'
  };