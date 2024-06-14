const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "help",
  description: "Get a list of my commands",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Commands',
              iconURL: 'https://cdn3.emoji.gg/emojis/7215_thonk.png',
          })
            .setImage('https://media.discordapp.net/attachments/1250810751573299312/1251096894948638813/image.png?ex=666d5648&is=666c04c8&hm=4ce19a28f1a70441832de7a2c104ea0355538e2475de4efa80ffca9fc8c6fb4b&=&format=webp&quality=lossless&width=660&height=258')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
