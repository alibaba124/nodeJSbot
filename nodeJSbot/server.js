const TelegramBot = require('node-telegram-bot-api');

const token = '302900357:AAHt9OvChQgyYDnb1meLWqY5K3_79aonVpI';//him

const bot = new TelegramBot(token, { polling: true });




var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';




bot.on('message', (msg) => {
	const chatId = msg.chat.id;
	const messagetxt = msg.text;
	var   response;
	switch (messagetxt)
	{
		case "/aboutfilmdl":
			response = "ناموجود ";
			break;

		case "/newaddres":
			response = "ناموجود ";
			break;

		case "/report":
			response = "مشکل به وجود اومده چیه ؟ به محض اینکه راه حلش رو پیدا کنم بهتون اطلاع میدم. ";
			break;

		case "/backup":
			response = "درخواست پشتیبانی به کارشناسان فنی اطلاع داده شد.لطفا منتظر پاسخ تیم پشتیبانی باشید ";
			break;

		case "/subtitle":
			response = "برای دانلود زیر نویس به سایت ما مراجعه کنید  ";
			break;

		case "/dialogshut":
			response = "عالیه خوشحال میشم دیالوگ مورد علاقه تون رو بخونم ";
			break;

		case "/joinchannel":
			response = "@OfficialFilmDL آیدی کانال رسمی تلگرام ما ";
			break;

		case "/comment":
			response = "نظرات و پیشنهاداتتون رو به من اعلام کنید تا به اطلاع همکارانم برسونم ";
			break;

		case "/add":
			response = "ناموجود ";
			break;

		case "/aboutbot":
			response = "ناموجود ";
			break;

		default:
			response = "دستور شناخته نشده لطفا / را تایپ کرده تا لیست دستورات را مشاهده کنید  "
			break;

	}
	// send a message to the chat acknowledging receipt of their message
	bot.sendMessage(chatId, response);
});