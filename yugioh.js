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

module.exports.run = async function({ api, event, args, Users }) => {
    const axios = require('axios');
    if (args[0] && args[0] == "name" || args[0] == "id") {
        if (args[1]) {
            var all = args.slice(1).join(" ");
            const ygo = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${args[0]}=${all}`);
            var name = ygo.data.data[0].data.name;
            var id = ygo.data.data[0].data.id;
            var type = ygo.data.data[0].data.type;
            var des = ygo.data.data[0].data.desc;
            var atk = ygo.data.data[0].data.atk;
            var def = ygo.data.data[0].data.def;
            var level = ygo.data.data[0].data.level;
            var race = ygo.data.data[0].data.race;
            var attribute = ygo.data.data[0].data.attribute;
            var archetype = ygo.data.data[0].data.archetype;
        }
    }
}
        
        
