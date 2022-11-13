module.exports.config = {
	name: "taofile",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trọng Đông",
	description: "Tạo 1 file phương tiện trong modules/event/cache hoặc modules/command/cache",
	commandCategory: "Bruh",
	usages: "+ [command/event] + [Tên file] + [Link ảnh hoặc video hoặc gif hoặc audio để gắn vào file]",
	cooldowns: 5
};
module.exports.run = async function({ api, event, args, Users }) {
    if (args[0] && args[0] == "command" || args[0] == "event") {
        if (args[1]) {
            if (args[2] {
                const fs = require('fs-extra');
                const request = require ('request');
                const { threadID, messageID } = event;
                var bruh = args[0];
                var tenfile = args[1];
                var linkfile = args[2];
                if args[0] == "event" {
                    request(`${linkfile}`).pipe(fs.createWriteStream(__dirname+`/events/cache/${tenfile}`));
                    api.sendMessage(`Đã thêm file ${tenfile} từ link ${linkfile} vào thư mục events/cache , threadID, messageID);
                };
                request(`${linkfile}`).pipe(fs.createWriteStream(__dirname+`/commands/cache/${tenfile}`));
                api.sendMessage(`Đã thêm file ${tenfile} từ link ${linkfile} vào thư mục commands/cache, threadID, messageID);
            };
            api.sendMessage('Phải có đường link file để copy vào thư mục !', threadID, messageID);
        };
        api.sendMessage('Phải có tên file cần tạo !', threadID, messageID);
    };
    api.sendMessage('Phải có tên thư mục cần tạo file !', threadID, messageID);
};
    
    
