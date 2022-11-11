module.exports.config = {
	name: "yugioh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trọng Đông",
	description: "Lấy thông tin của một thẻ bài Yugioh",
	commandCategory: "Game",
	usages: "id + [id card] hoặc ${prefix} name + [card name]",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users }) => {
	const axios = require('axios');
	const ygo = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${args[0]}=${args[1]}`);
