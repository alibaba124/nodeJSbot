const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
//const token = '302900357:AAHt9OvChQgyYDnb1meLWqY5K3_79aonVpI';//him
const token = '308523131:AAGES3E4I6cMsl7KiHfn3PRXPNGJv-XF4L0';//me
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });




var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';





// Matches "/echo [whatever]"
//mmnmnnm
bot.onText(/\/echo (.+)/, (msg, match) => {
	// 'msg' is the received Message from Telegram
	// 'match' is the result of executing the regexp above on the text content
	// of the message

	const chatId = msg.chat.id;
	const resp = match[1]; // the captured "whatever"

	// send back the matched "whatever" to the chat
	bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
	const chatId = msg.chat.id;

	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, 'Received your message');
});