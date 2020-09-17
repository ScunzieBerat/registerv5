const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
if (!message.member.roles.has('754555072368738484')) return message.channel.send(`Bu komutu kullanabilmek için \`Kod Paylaşımcı\` rolüne sahip olmasınız.`);
 
let kanal = args[0]
if(!kanal) return message.channel.send(`Kanal adı yazmalısın!`)
  
let link = args.slice(1).join(" ")
let l = args[1]
if(!l) return message.channel.send(`Hastebin linkini ve kodun açıklamasını yazmalısın!`)
  
const embed = new Discord.RichEmbed()
.setTitle('Kod Eklendi!')
.setDescription(`<a:sag:754617925788237854> **Kodun Adı: ${kanal}**\n <a:ayar:754645123941531708> **Paylaşan Kişi: ${message.author}**\n \n <a:elmass2:754645147115061258> **Eklenen Kod:** \n **${link}** \n \n <a:sar1:754645159152582737> **Bir Sorun Yaşarsanız <#754553790153097228> Kanalından Yardım Alabilirsiniz. Kod Bozuk ise: !hata <hatalı-kod> Şeklinde Bildirebilirsiniz! <a:tik1:754617926127976479> **`)
.setThumbnail(client.user.avatarURL)
.setColor('#04b0d6')
.setFooter('Scunzie  Kod Paylaşım', message.author.avatarURL)
//DarkCode
message.guild.createChannel(`↬📂↫${kanal}`, "text").then(ka => {

let rol = message.guild.roles.find(x => x.name === "@everyone")

let rol2 = message.guild.roles.find(z => z.id === "754555189838479490")


ka.overwritePermissions(rol,  {

    READ_MESSAGES: false,
    SEND_MESSAGES: false

})

ka.overwritePermissions(rol2,  {

    READ_MESSAGES: true,
    SEND_MESSAGES: false

})
ka.setParent("Kategori")

ka.send(embed)

})
   
}
exports.conf = {
enabled: true,
guildOnly: true,
permLevel: 0,
aliases: []
}


exports.help = {
name: 'kod-paylaş'    
}
﻿