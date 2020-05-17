const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');



exports.run = (client, message, args) => {
message.channel.sendMessage('<a:sren:667367167355781140>**Biraz Yardım Almak İstemişe Benziyorsun!**<a:sren:667367167355781140>  \n<a:ku:683706846548459523>Eğlence komutları için **1** yazınız.<a:ku:683706846548459523> \n  <a:ldr:677846869682028554>Yetkili komutları için **2**yazınız. <a:ldr:677846869682028554>  \n <a:palan:683713230002061378>Müzik komutları için **3** yazınız.<a:palan:683713230002061378> \n <a:azrail:683714185271836719>Kullanıcı komutları için **4** yazınız.<a:azrail:683714185271836719> \n <a:ykle:684006012122169369> Gelişmiş Sunucu için **5** yazınız<a:ykle:684006012122169369>  \n <a:yldz:683714143433654363>Premium Komutlar için **6** yazınız.<a:yldz:683714143433654363> \n <a:sren:667367167355781140> Bu Arada Eğer Bi Kodu Çalıştıramadıysan e!canlıdestek Yaz Seninle İletişime Geçelim <a:sren:667367167355781140>')
                          

  .then(() => {
  message.channel.awaitMessages(response => response.content === "4", {
    max: 1,
    time: 30000,
    errors: ['time'],
   }) 
    .then((collected) => {
      message.channel.sendMessage(`<a:azrail:683714185271836719>**Kullanıcı Komutları**<a:azrail:683714185271836719> \n <a:azrail:683714185271836719>e!seviye:Seviyenizi gösteriri \n <a:azrail:683714185271836719>e!öneri:Bota öneride bulunuz`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri biraz eğlenmek için eğlence menüsünü açmış olmalı!`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('')
    });
})
  
  .then(() => {
  message.channel.awaitMessages(response => response.content === "1", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`<a:ku:683706846548459523> **Eğlence Komutları** <a:ku:683706846548459523> \n <a:ku:683706846548459523>e!hapishane:hapishane efekti ekler  \n <a:ku:683706846548459523>e!düello:düello yapar \n <a:ku:683706846548459523>e!atasözü:atasözü atar. \n <a:ku:683706846548459523>e!resimçiz:resim çizersini`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri biraz eğlenmek için eğlence menüsünü açmış olmalı!`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('')
    });
  })
    .then(() => {
  message.channel.awaitMessages(response => response.content === "6", {
    max: 1,
    time: 30000,
    errors: ['time'],
   }) 
    .then((collected) => {
      message.channel.sendMessage(`<a:yldz:683714143433654363>**Premium Komutları**<a:yldz:683714143433654363> \n <a:yldz:683714143433654363>premium almak için sunucuma gel yetkiliye yaz preminumu verirler buraya e!davet yaz sunucuma gel\n <a:yldz:683714143433654363>e!söyle:sesli kanalda yazdığınızı söyler \n <a:yldz:683714143433654363>e!kanalsil:tüm kanalları siler`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri biraz eğlenmek için eğlence menüsünü açmış olmalı!`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('')
    });
})
  
  
  .then(() => {
  message.channel.awaitMessages(response => response.content === "5", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`<a:ykle:684006012122169369> ** Sunucu Kur Komutları**<a:ykle:684006012122169369>  \n <a:ykle:684006012122169369>e!sunucukur:normal sunucu kurar \n <a:ykle:684006012122169369>e!nsunucukur:nitrolu sunucu kurar \n <a:ykle:684006012122169369>e!rolkur:müthiş roller kurar `).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri biraz eğlenmek için eğlence menüsünü açmış olmalı!`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('')
    });
})


.then(() => {
  message.channel.awaitMessages(response => response.content === "2", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`<a:ldr:677846869682028554> Yetkili Komutları <a:ldr:677846869682028554> \n <a:ldr:677846869682028554>e!panelkur:Sunucu anlık panel kurar\n <a:ldr:677846869682028554>e!oylama:Oylama yapar.\n <a:ldr:677846869682028554>e!ban:Ban atar.\n <a:ldr:677846869682028554>e!uyar:Özelden uyarır. \n <a:ldr:677846869682028554>!sil:Mesaj siler.\n <a:ldr:677846869682028554>e!güvenlik:Hesapların güvenliliğine bakar.\n <a:ldr:677846869682028554>e!çekiliş:Çekiliş yapar.\n <a:ldr:677846869682028554>e!sustur:Süreli susturma.\n <a:ldr:677846869682028554>e!oykick:Oylama ile sunucudan atma.\n <a:ldr:677846869682028554>e!reklamengel:Sunucudaki reklamları engeller.`).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] birileri yetkili menüsünü açtı (interesting dimi)`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('')
     });
})

.then(() => {
  message.channel.awaitMessages(response => response.content === "3", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(`<a:palan:683713230002061378> **Müzik Komutları**<a:palan:683713230002061378> \n <a:palan:683713230002061378> e!radyo:Radyo çalar. `).then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] saatinde birileri müzik menüsünü istedi ^^`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage('İşlem, hiçbir komut seçmediğiniz için iptal edildi.');
    });
});
};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım menüsünü açarsınız. Only Code bir şeyler yapmış olmalı :S',
  usage: 'yardım'
};
