//server join
const {  Events, ButtonBuilder, EmbedBuilder, ButtonStyle, ActionRowBuilder, ComponenType, ChannelType }

module.exports = {
name: Events.GuildCreate,
async execute (guild, client) {

  if (!guild) return;

const sendChannel = await client.channels.fetch('1256955078695190647');
const name = guild.name;
const id = guild.id;
const memberCount = await guild.members.cache.size;
const owner = await guild.members.fetch(guild.ownerId;
const clientGuildCount = await client.guilds.cache.size;
}

const embed = new EmbedBuilder()
.setColor("Green")
.setTitle('**New Server Joined**')
.addFields({ name: 'Server Name', value: `\`${name}\``})
.addFields({ name: 'Server ID', value: `> ${id}`})
.addFields({ name: 'Server Owner', value: `> ${owner.user.username} ($(owner.id})\``})
.addFields({ name: 'Server Member Count', value: `\`${memberCount}\``})
.setDescription(`This is my \`${clientGuildCount}\` server that I am in. Use the button below to fetch the invite link to this guild.`)
.setFooter({ text: `Server Join Logs.`})
.setTimestamp();

const button = new ButtonBuilder()
.setCustomId('fetchInviteforJoin')
.setLabel(`Fetch Invite`)
.setStyle(ButtonStyle.Danger);

const row = new ActionRowBuilder()
.addComponents(
button
);

const msg= await sendChannel.send({ embeds:[embed], components: [row] }).catch(err => {});

var time = 300000;
const collector = await msg.createMessageComponentCollector({
  componentType: ComponentType.Button,
  time
});

collector.on('collect', async i => {
  if (i.customId == 'fetchInviteforJoin') {
    var channel;
    const channels = await guild.channels.cache.filter(c => c.type === ChannelType.GuildText);
    for (const c of channels.values()) {
      channel = c;
      break;
    }
    
    if (!channel) return await i.reply({ content: `:( Sorry, I couldn't find any channels in this server to create an invite to the server.`, ephemeral: true});
    
    const invite = await channel.createInvite().catch(err => {})
    await i.reply({ content: `Heres the invite to ${name}: https://discord.gg/${invite.code}`, ephemeral:true})
  }
});

collector.on('end', async () => {
  button.setDisabled(true);
  embed.setFooter({ text: `Server Join Logs. -- the invite fetch has expired`
  await msg.edit({ embeds: [embed], components:[row]})                 
});
