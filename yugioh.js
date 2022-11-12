module.exports.config = {
	name: "yugioh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trọng Đông",
	description: "Lấy thông tin của một thẻ bài Yugioh",
	commandCategory: "Game",
	usages: "id + [id card] hoặc name + [card name]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require('axios');
    const { threadID, messageID } = event;
    if (args[0] && args[0] == "name" || args[0] == "id") {
        if (args[1]) {
            var all = args.slice(1).join(" ");
            const ygo = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${args[0]}=${all}`);
            var name = ygo.data.data[0].name;
            var id = ygo.data.data[0].id;
            var type = ygo.data.data[0].type;
            var desc = ygo.data.data[0].desc;
            var atk = ygo.data.data[0].atk;
            var def = ygo.data.data[0].def;
            var level = ygo.data.data[0].level;
            var race = ygo.data.data[0].race;
            var attribute = ygo.data.data[0].attribute;
            var archetype = ygo.data.data[0].archetype;
            api.sendMessage(desc, threadID, messageID);
        };
    };
};
