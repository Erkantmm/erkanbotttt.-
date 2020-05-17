const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, args) => { 
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu işlemi yapabilmek için yönetici yetkisine sahip olmalısın.`)
  

    if (!args[0]) return message.reply(`e!reklam aç/kapat`);

    if (args[0] == 'aç') {
        var durum = db.fetch(`${message.guild.id}.kufur`)            
        if (durum == "acik") return message.channel.send("Zaten Açmışsın ?");
        db.set(`${message.guild.id}.reklam`, 'acik')
        message.channel.send(`Reklam Filtresi Artık Açık !`)
    }

    if (args[0] == 'kapat') {
        var durum =  db.fetch(`${message.guild.id}.kufur`)            
        if (durum == "kapali") return message.channel.send("Zaten Kapalı ?");
        db.set(`${message.guild.id}.reklam`, 'kapali')
        message.channel.send(`Reklam Filtresi Artık Kapalı !`)
    }
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: 'taslak', 
  usage: 'taslak'
}; 