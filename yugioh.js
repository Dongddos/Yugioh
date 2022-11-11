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
        if (args[0] && args[0] == "name" || args[0] == "id") {
 return api.sendMessage("Dùng sai lệnh rồi kìa",threadID,messageID)
         }
    if (args[1]){
return api.sendMessage("Dùng sai lệnh rồi kìa",threadID,messageID)
         }
      }
}
        var all = args.slice(1).join(" ");
	const ygo = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${args[0]}=${all}`);
        var name = ygo.data.data[0].data.name;
        
        
