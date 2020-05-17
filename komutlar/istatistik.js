const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');
const paket = require('../package.json');

exports.run = (client, message) => {
  
   const embed = new Discord.RichEmbed()
   .setColor('GREEN')
   .setAuthor(`${client.user.username} İstatistikleri`, client.user.avatarURL)
   .setDescription(`Botumuz çok fonksiyonlu özellikleri barındırıp sunucunuzu güzelleştirebilecek komutlara sahiptir.\n\n**:crown: Sahibi:** <@${ayarlar.sahip}>\n\n**:fax: Versiyon:** ${paket.version}\n\n**:floppy_disk: Botun Olduğu Sunucu Sayısı:** ${client.guilds.size}\n\n**:printer: Toplam Kullanıcı Sayısı:** ${client.users.size}\n\n**:computer: Toplam Kanal Sayısı:** ${client.channels.size}\n\n**:robot: Botun Aktif Olduğu Süre:** ${moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]^')}\n\n**:lock: Kitaplık Türü:** discord.js`)     
   .setFooter(`Code - Bot İstatistik`, client.user.avatarURL)
   .setThumbnail(message.author.avatarURL)
   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-istatistik', 'botistatistik', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: 'Botun istatistiklerini gösterir.',
  usage: 'istatistik'
};