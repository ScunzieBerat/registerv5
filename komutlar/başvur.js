const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
 
message.delete()
if(message.channel.id !== '754674947728867349') return message.channel.send('Bot komutlarını bu kanalda kullanamazsın kullanıcaksan <#754674947728867349> adlı kanalda kullanabilirsin!').then(message => message.delete(6000));
 
let hata = args.slice(0).join(' ')
if(!hata) return message.channel.send('Lütfen bir istek belirtin!')
 
const embed = new Discord.RichEmbed()
.setTitle("Scunzie Kode  İstek Kod")
.setColor('BLUE')
.setDescription(`**Kodu isteyen kullanıcı:** <@${message.author.id}> \n **Hata kod:** \`${hata}\``)
client.channels.get('754674793516761129').send(embed)
 
message.channel.send("Hatalı Kod Bildirildi.").then(message => message.delete(6000));
message.delete(10)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
 
exports.help = {
  name: 'hata',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'hata-kod <hata>'
}