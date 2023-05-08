const { SlashCommandBuilder } = require('discord.js');
const roll = [];
for (let i = 0; i <= 36; i++) {
	roll.push(''+i);
 }

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roulette')
		.setDescription('plays roulette!')
		.addStringOption(option =>
			option.setName('number')
				.setDescription('The number you are betting on.')
				.setRequired(false)
		),
	async execute(interaction) {
		const result = roll[Math.floor(Math.random()*roll.length)]
		await interaction.reply(result);
	},
};