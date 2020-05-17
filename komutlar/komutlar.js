const Discord = require('discord.js');

exports.run = function(client, message) {
const tirrek = new Discord.RichEmbed()
.setColor('GREEN')
.setTitle(`${client.user.username} - Komutlarım`)
.addField('Komut Açıklaması', '```<prefix>yardım```')
.addField('Komut Açıklaması', '```<prefix>çayiç```')
.addField('Komut Açıklaması', '```<prefix>öldür```')
.setFooter(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
message.channel.send(tirrek)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardim', 'help'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Only Codenin yaptığı bir yardım kodu.',
  usage: 'yardım'
};