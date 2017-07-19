const TelegramBot = require('node-telegram-bot-api');

// const token = '302900357:AAHt9OvChQgyYDnb1meLWqY5K3_79aonVpI'; 
 const token = '308523131:AAGES3E4I6cMsl7KiHfn3PRXPNGJv-XF4L0';
const bot = new TelegramBot(token, { polling: true });

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var Storage = require('node-storage');
var store = new Storage('store');


bot.onText(/\$(\w+)\n\$([\w\W]*)/gu, (msg, regres)=>{
	const chatId = msg.chat.id;
    store.put(regres['1'], regres['2']);
	

});

bot.onText(/\/(\w+)/, (msg, regresult) => {
	const chatId = msg.chat.id;
	var temp = store.get(regresult['1']);
	if (temp != null) {
		bot.sendMessage(chatId, temp);
	}

});

