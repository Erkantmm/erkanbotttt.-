const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("<a:sren:667367167355781140>**Birileri Biraz Yardım Almak İstiyor Herhalde!!**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:ku:683706846548459523>**Eğlence Komutları**<a:ku:683706846548459523>","**Eğlence komutları** için e!eğlence yaz")
.addField("<a:ldr:677846869682028554>**Yetkili komutları**<a:ldr:677846869682028554>" , "**Yetkili komutları** için e!yetkili yaz")
.addField("<a:palan:683713230002061378>**Müzik komutları**<a:palan:683713230002061378>" , "**Müzik komutları** için e!müzik yaz")
.addField("<a:azrail:683714185271836719>**Kullanıcı komutları**<a:azrail:683714185271836719> " , "**Kullanıcı komutları** için e!kullanıcı yaz")
.addField("<a:ykle:684006012122169369>**Sunucu kurma komutları**<a:ykle:684006012122169369>" , "**Sunucu kurma komutları** için e!sunucu yaz")
.addField("<a:yldz:683714143433654363>**Premium Komutları**<a:yldz:683714143433654363>" , "**Premium komutları** için e!premium yaz")
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
    name: 'help', 
    description: 'The Help Command',
    usage: 'help'
  };