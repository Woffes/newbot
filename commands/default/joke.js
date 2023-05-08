const { SlashCommandBuilder } = require('discord.js');
const jokes = ["What do you call a sussy noodle? An Impasta.",
"I would avoid the sushi if I was you. It’s a little fishy.",
"Want to hear a joke about paper? Nevermind it’s tearable.",
"I used to work in a shoe recycling shop. It was sole destroying.",
"What do you call a belt with a watch on it? A waist of time.",
"How do you organize an outer space party? You planet.",
"Why did the octopus beat the shark in a fight? Because it was well armed.",
"What did daddy spider say to baby spider? You spend too much time on the web.",
"Atheism is a non-prophet organisation.",
"There’s a new type of broom out, it’s sweeping the nation.",
"What cheese can never be yours? Nacho cheese.",
"What did the Buffalo say to his little boy when he dropped him off at school? Bison.",
"How was Rome split in two? With a pair of Ceasars.",
"The shovel was a ground breaking invention."];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('joke')
		.setDescription('tells a joke'),
	async execute(interaction) {
            const response = jokes[Math.floor(Math.random()*jokes.length)]
		await interaction.reply(response);
	},
};