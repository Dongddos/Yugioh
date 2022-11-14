module.exports.config = {
	name: "yugioh",
	version: "1.0.4",
	hasPermssion: 0,
	credits: "Trọng Đông",
	description: "Lấy thông tin của một thẻ bài Yugioh",
	commandCategory: "Game",
	usages: "id + [id card] hoặc name + [card name]",
	cooldowns: 5,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require('axios');
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    let { threadID, messageID } = event;
    if (args[0] && args[0] == "name" || args[0] == "id") {
        if (args[1]) {
            var all = args.slice(1).join(" ");
            const ygo = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?${args[0]}=${all}`);
            var name = ygo.data.data[0].name ? `${ygo.data.data[0].name}` : "None";
            var id = ygo.data.data[0].id ? `${ygo.data.data[0].id}` : "None";
            var type = ygo.data.data[0].type ? `${ygo.data.data[0].type}` : "None";
            var desc = ygo.data.data[0].desc ? `${ygo.data.data[0].desc}` : "None";
            var atk = ygo.data.data[0].atk ? `${ygo.data.data[0].atk}` : "None";
            var def = ygo.data.data[0].def ? `${ygo.data.data[0].def}` : "None";
            var level = ygo.data.data[0].level ? `${ygo.data.data[0].level}` : "None";
            var race = ygo.data.data[0].race ? `${ygo.data.data[0].race}` : "None";
            var attribute = ygo.data.data[0].attribute ? `${ygo.data.data[0].attribute}` : "None";
            var archetype = ygo.data.data[0].archetype ? `${ygo.data.data[0].archetype}` : "None";
            var linkval = ygo.data.data[0].linkval ? `${ygo.data.data[0].linkval}` : "None";
            var scale = ygo.data.data[0].scale ? `${ygo.data.data[0].scale}` : "None";
            var cardmarket_price = ygo.data.data[0].card_prices[0].cardmarket_price ? `${ygo.data.data[0].card_prices[0].cardmarket_price}` : "None";
            var tcgplayer_price = ygo.data.data[0].card_prices[0].tcgplayer_price ? `${ygo.data.data[0].card_prices[0].tcgplayer_price}` : "None";
            var ebay_price = ygo.data.data[0].card_prices[0].ebay_price ? `${ygo.data.data[0].card_prices[0].ebay_price}` : "None";
            var amazon_price = ygo.data.data[0].card_prices[0].amazon_price ? `${ygo.data.data[0].card_prices[0].amazon_price}` : "None";
            var coolstuffinc_price = ygo.data.data[0].card_prices[0].coolstuffinc_price ? `${ygo.data.data[0].card_prices[0].coolstuffinc_price}` : "None";
            var linkanh = ygo.data.data[0].card_images[0].image_url;
            
            if (ygo.data.data[0].linkmarkers) {
                 var linkmarkers = ygo.data.data[0].linkmarkers;
                 var linkmarker = linkmarkers.join(', ');
            } else {
                 var linkmarker = "None";
            };
           var callback = () => api.sendMessage({
                 body:`𝒀𝒖𝒈𝒊𝒐𝒉 𝑪𝒂𝒓𝒅 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏\n
   [🔎]𝐵𝑎𝑠𝑖𝑐 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑡𝑖𝑜𝑛[🔍]\n»Name: ${name}\n»Id: ${id}\n»Type: ${type}\n»Description: \n${desc}\n»Attack: ${atk}\n»Defense: ${def}\n»Level: ${level}\n»Race: ${race}\n»Attribute: ${attribute}\n»Archetype: ${archetype}\n»Linkval: ${linkval}\n»Linkmarkers: ${linkmarker}\n»Pendulum Scale: ${scale}\n\n           [💵]𝑃𝑟𝑖𝑐𝑒[💵]\n»Cardmarket Price: ${cardmarket_price}\n»TCG Player Price: ${tcgplayer_price}\n»Ebay Price: ${ebay_price}\n»Amazon Price: ${amazon_price}\n»Coolstuffinc Price: ${coolstuffinc_price}\n\nImage Url: ${linkanh}`,
                 attachment:  fs.createReadStream(__dirname + "/cache/yugioh.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/yugioh.png"), event.messageID);
          request(encodeURI(`${linkanh}`)).pipe(fs.createWriteStream(__dirname+'/cache/yugioh.png')).on('close',
        () => callback());
        };
    };
};
