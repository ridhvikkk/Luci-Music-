const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "features",
  description: "Know about the features of the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle('Features of Luci Music Bot')
      .setDescription('Thank you for choosing Luci Music!\n\n- Here are the features that this bot offers for free unlike other music bots.\n\n' +
        '**1. :** >If a playlist is queued, the bot will remain in the voice channel until the playlist ends, it doesn't matter if someone is listening to the music or not. Indirectly, you can keep this bot in the voice channel 24x7.\n' +
        '**2. :** >The bot has an easy button interface, no hustle to type the commands again and again for skipping, queueing etc.\n' +
        '**3. :** >The bot supports 3 music platforms: Spotify, Sound Cloud, YouTube. \n' +
        '**4. :** >Enjoy music with 8D sound quality and minimal lagging.);

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
