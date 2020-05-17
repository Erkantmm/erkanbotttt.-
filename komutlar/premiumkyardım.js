const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.setTitle("<a:sren:667367167355781140>**Biraz Yardım Almak İstemişe Benziyorsun!**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:yldz:683714143433654363>premium almak için sunucuma gel yetkiliye yaz preminumu verirler buraya e!davet yaz sunucuma gel.")
.addField("<a:yldz:683714143433654363>**Söyle**<a:yldz:683714143433654363>" , "**e!söyle** yazdığınız metni sesli kanalda söyler.")
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
    name: 'premium', 
    description: 'The Help Command',
    usage: 'help'
  };