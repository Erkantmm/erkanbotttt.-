const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, params) => {
  var request = require('request');
  request('http://api-rate.glitch.me/api/atasozu', function (error, response, body) {
    if (error) return console.log('Atasozu Hatası:', error);
    else if (!error) {
      var site = JSON.parse(body);
      message.channel.send(`${site.api}`)
    }
  })
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['atasozu'],
  permLevel: 0
};

exports.help = {
  name: 'atasözü',
  description: 'Bot rastgele atasözü gönderir.',
  usage: 'atasözü'
};
 