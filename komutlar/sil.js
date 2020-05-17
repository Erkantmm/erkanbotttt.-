const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  return message.author.send(':x: | Bu komut özel mesajlarda kullanıma kapatılmıştır.'); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send('Bu komutu kullanabilmek için "`Mesajları Yönet`" yetkisine sahip olmalısın.');
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    return message.channel.send(`${messagecount} adet mesaj tarihe gömüldü!`).then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['temizle'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <sayı>'
};