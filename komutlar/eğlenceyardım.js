const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("#5ab1bb")//isim amaç
.setTitle("<a:sren:667367167355781140>**Eğlence Komutları WOW**<a:sren:667367167355781140>")
message.channel.sendEmbed(lembed)
.then;
const sembed = new Discord.RichEmbed()
.setColor("#5ab1bb")
.addField("<a:ku:683706846548459523> **Hapishane** <a:ku:683706846548459523>","**e!hapishane:** avatarınıza hapishane efekti ekler.")
.addField("<a:ku:683706846548459523>**Düello**<a:ku:683706846548459523>" , "**e!düello:** birisiyle düello atarsınız.")
.addField("<a:ku:683706846548459523>**Atasözü**<a:ku:683706846548459523>" , "**e!atasözü:** atasözü atar.")
.addField("<a:ku:683706846548459523>**Resim**<a:ku:683706846548459523> " , "**e!resim:** resim çizersiniz.")
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
    name: 'eğlence', 
    description: 'The Help Command',
    usage: 'help'
  };