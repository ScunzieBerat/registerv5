const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
 
message.delete()
if(message.channel.id !== '754553507809329163') return message.channel.send('Bot komutlarını bu kanalda kullanamazsın kullanıcaksan <#754553507809329163> adlı kanalda kullanabilirsin!').then(message => message.delete(6000));
 
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('Lütfen bir istek belirtin!')
 
const embed = new Discord.RichEmbed()
.setTitle("Scunzie Kode  İstek Kod")
.setColor('BLUE')
.setDescription(`**Kodu isteyen kullanıcı:** <@${message.author.id}> \n **İstenilen kod:** \`${istek}\``)
client.channels.get('754552765539418173').send(embed)
 
message.channel.send("İstek kod bildiriminiz gönderildi.").then(message => message.delete(6000));
message.delete(10)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
 
exports.help = {
  name: 'istek',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}