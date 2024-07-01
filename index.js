const config = require('./config.js');
require("./bot.js");

//server join
client.on(Events.GuildCreate, async guild => {
const channel = await client.channels.cache.get('1256955078695190647');
const name = guild.name;
const memberCount = guild.memberCount;
const owner = guild.ownerId;
const owner = await client.users.cache.get(ownerID);
const ownerName = owner.username;

const embed = new EmbedBuilder()
.setColor("Green")
.setTitle('New Server Joined')
.addFields({ nme: 'Server Name', value: `> ${name}`})
.addFields({ nme: 'Server Members', value: `> ${memberCount}`})
.addFields({ nme: 'Server Owner', value: `> ${owner}`})
.addFields({ nme: 'Server Age', value: `> <t:${parseInt(guild.createdTimestamp / 1000)}:R>`})
.setTimestamp()
.setFooter({ text: 'Guild Join'})

await channel.send({ embed: [embed] });

//server left
client.on(Events.GuildDelete async guild => {
const channel = await client.channels.cache.get('1256955078695190647');
const name = guild.name;
const memberCount = guild.memberCount;
const owner = guild.ownerId;
const owner = await client.users.cache.get(ownerID);
const ownerName = owner.username;

const embed = new EmbedBuilder()
.setColor("Green")
.setTitle('Server left! :(')
.addFields({ nme: 'Server Name', value: `> ${name}`})
.addFields({ nme: 'Server Members', value: `> ${memberCount}`})
.addFields({ nme: 'Server Owner', value: `> ${owner}`})
.addFields({ nme: 'Server Age', value: `> <t:${parseInt(guild.createdTimestamp / 1000)}:R>`})
.setTimestamp()
.setFooter({ text: 'Guild Leave'})

await channel.send({ embed: [embed] });



  /*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/

