const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "features",
  description: "Why this music bot?",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Features',
              iconURL: 'https://cdn3.emoji.gg/emojis/7215_thonk.png',
          })
            .setDescription(`**Reasons to choose me over other music bots**`)
            .setImage('https://cdn.discordapp.com/attachments/1250810751573299312/1251088161057280041/image.png?ex=666d4e25&is=666bfca5&hm=2b434e940ba76bd301bd70438efd777889f50ecce8d796dd94a807b6fdfbdca4&')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
