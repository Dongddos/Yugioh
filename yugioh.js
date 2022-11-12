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
            var name = ygo.data.data[0].name ? `${ygo.data.data[0].name}` : "Không có";
            var id = ygo.data.data[0].id ? `${ygo.data.data[0].id}` : "Không có";
            var type = ygo.data.data[0].type ? `${ygo.data.data[0].type}` : "Không có";
            var desc = ygo.data.data[0].desc ? `${ygo.data.data[0].desc}` : "Không có";
            var atk = ygo.data.data[0].atk ? `${ygo.data.data[0].atk}` : "Không có";
            var def = ygo.data.data[0].def ? `${ygo.data.data[0].def}` : "Không có";
            var level = ygo.data.data[0].level ? `${ygo.data.data[0].level}` : "Không có";
            var race = ygo.data.data[0].race ? `${ygo.data.data[0].race}` : "Không có";
            var attribute = ygo.data.data[0].attribute ? `${ygo.data.data[0].attribute}` : "Không có";
            var archetype = ygo.data.data[0].archetype ? `${ygo.data.data[0].archetype}` : "Không có";
            var linkval = ygo.data.data[0].linkval ? `${ygo.data.data[0].linkval}` : "Không có";
            var scale = ygo.data.data[0].scale ? `${ygo.data.data[0].scale}` : "Không có";
            var linkmarkers = ygo.data.data[0].linkmarkers;
            var linkmarker = linkmarkers.join(', ');
            api.sendMessage(`𝒀𝒖𝒈𝒊𝒐𝒉 𝑪𝒂𝒓𝒅 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏\n»Name: ${name}\n»Id: ${id}\n»Type: ${type}\n»Description: \n${desc}\n»Attack: ${atk}\n»Defense: ${def}\n»Level: ${level}\n»Race: ${race}\n»Attribute: ${attribute}\n»Archetype: ${archetype}\n»Linkval: ${linkval}\n»Linkmarkers: ${linkmarker}\n»Pendulum Scale: ${scale} `, threadID, messageID);
        };
    };
};
