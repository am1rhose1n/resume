var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get('/', function(req, res) {
    res.render('index', {

        name: { first: "امیرحسین", last: "فرهودی", title: "fh" },
        calls: { number: "9036330386", mail: "am1rhose1n@yahoo.com" },
        resume: { head: "برنامه نویس سمت سرور و سمت کابر , طراح وب" },
        description: { title: "کار با فریم ورک های جاو اسکریپتی سمت سرور و سمت کاربر", adress: 'شهران/کوهسار/خ ولیعصر' },
        skils: { htcs: '95%', js: '90%', nodejs: '65%', photoshop: '50%', adobepr: '50%', vscode: '80%', publicalls: '70%', teamwork: '90%', mongoDb: '50%', pug: '50%', angular: '50%' },
        eduction: { diplom: { name: "دیپلم کامپیوتر", date: '1394', id: 'هنرسان سردار', details: 'مدرک دیپلم کامپیوتر در هنرستان سردار' }, webdes: { name: "طراحی وب", date: '1396', id: 'مجتمع فنی تهران', details: 'مدرک طراحی وب در مجتمع فنی تهران که با اموزش خوب استاد علی بخشی همراه بود' } },
        works: { corci: { date: '1395-1396', location: 'خدمات کامپیوتری و فروش', name: 'کرسی رایانه', position: 'بازاریابی و فروش رایانه ,و کار های خدماتی' }, rayadars: { date: '1396-1397', location: 'برنامه نویسی', name: "رایادرس", position: 'برنامه نویسی برای سامانه یه ال ام اس با مدیریت مهندس پرهام نیا' } },
    });
});






// app.use(bodyParser.json());
// const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
// const token = '557784736:AAEG0_MywuNWpG7GAFhoDGhIxyZ0Pl2JXwU';
// Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, { polling: true });







app.use(bodyParser.json())
app.post('/mass', function(req, res) {
    var bodyStr = '';
    req.on("data", function(chunk) {
        bodyStr = chunk.toString();
        console.log(bodyStr)
        console.log('telegram msg sends')

    });
    req.on("end", function() {
        res.send(bodyStr);
    });

});



app.get('/resume', function(req, res) {
    var file = 'fhgraphy.pdf';
    res.download(file); // Set disposition and send it.
});


app.listen(81, function() {
    console.log('express is running on port 80');
});