const puppeteer = require('puppeteer');
const { Telegraf, Markup } = require('telegraf')
require('dotenv').config()
const text = require('./const')


const bot = new Telegraf(process.env.BOT_TOKEN)

//Start menu

bot.start((ctx) => ctx.reply(`Вітаю, ${ctx.message.from.first_name}! \n` +
    'Всю корисну інформацію, ти можеш знайти в нижньому меню. \n' +
    'Викликати його можна за допомогою команди /start, або ж інтерфейсу самого Telegram \n' +
    'Бережи себе!', Markup.keyboard([
    ['Актуальні новини'],
    ['Адреси пунктів допомоги на кордоні', 'Адреси пунктів допомоги в Польщі'],
    ['Допомога громадянам України', 'Гарячі лінії'],
    ['Інфолінія для глухих','Медична допомога'],
    ['Знайти житло в Польщі', 'Знайти житло на мапі'],
    ['Мовна шпаргалка', 'Допомога армії'],


]).resize()
));


//Help menu
// bot.help((ctx) => ctx.reply(text.commands))

//Адреси інформаційно-рецепційних пунктів

bot.hears('Адреси пунктів допомоги в Польщі', async (ctx) => {
    await ctx.replyWithPhoto({ source: './images/infoDlyaBizhenciv.png' })
    await ctx.replyWithHTML('<b>ВОЄВОДСТВА | АДРЕСИ РЕЦЕПЦІЙНИХ ЦЕНТРІВ, де можна отримати допомогу:</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Dolnośląskie (Нижньосілезьке)', 'btn_1')],
        [Markup.button.callback('Kujawsko-Pomorskie (Куявсько-Поморське)', 'btn_2')],
        [Markup.button.callback('Lubelskie (Люблінське)', 'btn_3')],
        [Markup.button.callback('Lubuskie (Любуське)', 'btn_4')],
        [Markup.button.callback('Łódzkie (Лодзьке)', 'btn_5')],
        [Markup.button.callback('Małopolska (Малопольське)', 'btn_6')],
        [Markup.button.callback('Mazowieckie (Мазовецьке)', 'btn_7')],
        [Markup.button.callback('Opolskie (Опольське)', 'btn_8')],
        [Markup.button.callback('Podkarpackie (Підкарпатське)', 'btn_9')],
        [Markup.button.callback('Podlaskie (Підляшське)', 'btn_10')],
        [Markup.button.callback('Pomorskie (Поморське)', 'btn_11')],
        [Markup.button.callback('Śląskie (Сілезьке)', 'btn_12')],
        [Markup.button.callback('Świętokrzyskie (Свєнтокшиське)', 'btn_13')],
        [Markup.button.callback('Warmińsko - Mazurskie (Вармінсько-Мазурське)', 'btn_14')],
        [Markup.button.callback('Wielkopolskie (Великопольське)', 'btn_15')],
        [Markup.button.callback('Zachodniopomorskie (Західнопоморське)', 'btn_16')]

    ]))
});

//Допомога громадянам України

bot.hears('Допомога громадянам України', async (ctx) => {
    await ctx.replyWithPhoto({ source: './images/zelenaLinia.png' }, { caption: "❗️«Зелена лінія». Це сучасний онлайн-уряд праці, відкритий для всіх, у будь-який час. Це інтернет-портал і гаряча лінія, де можна отримати всю необхідну інформацію про допомогу, яку надають 16 воєводств, 340 повітових урядів праці та Добровільні трудові корпуси. Портал також пропонує систему пошуку роботи, а також інформацію, поради та відео про те, як шукати роботу." })
    await ctx.reply('🔺 «Зелена лінія» включає широкий спектр каналів зв’язку: телефон, електронна пошта, соціальні мережі та у формі чату з консультантом. \n' +
        '\n' +
        '🔺 Гаряча лінія 19524 ')
    await ctx.replyWithHTML('🔺 <b>Портал «Зелена лінія» доступний за адресою: www.zielonalinia.gov.pl</b>')
    await ctx.replyWithHTML('🔺 На яку підтримку ви можете розраховувати як громадянин України?\n' +
        '\n' +
        '🔺 Набравши номер <b>19524</b> або зайшовши на вебсайт www.zielonalinia.gov.pl, ви можете отримати інформацію про: \n' +
        '\n' +
        '🔺 вакансії, \n' +
        '🔺 права на ринку праці, \n' +
        '🔺 навчання та перепідготовку, \n' +
        '🔺 форми підтримки з боку уряду праці, \n' +
        '🔺 процедури працевлаштування іноземців, \n' +
        '🔺 інструменти ринку праці (включаючи стажування, ваучери, професійне навчання для дорослих, громадські роботи чи інтервенційні роботи).\n' +
        '🔺 Консультанти гарячої лінії поінформують вас про діючі процедури працевлаштування та найважливіші події на ринку праці, а також про форми підтримки, які можуть отримати безробітні та шукачі роботи в урядах праці. Вони проконсультують і допоможуть знайти відповідне навчання, вказавши можливості співфінансування навчання урядом праці та з інших джерел. l')
         await ctx.replyWithHTML('🔺 Наразі інформація на порталі та допомога на гарячій лінії надається польською, російською та англійською мовами, але незабаром вона буде надаватися й українською мовою. <b>Гаряча лінія працює з 8:00 до 18:00 з понеділка по п’ятницю.</b> ')

});

// Допомога громадянам України
bot.hears('Медична допомога', async (ctx) => {
    await ctx.replyWithPhoto({ source: './images/nfz.jpg' }, { caption: "❗️Цілодобова гаряча лінія НФЗ надає пацієнтам інформацію кількома мовами, зокрема польською та українською." })
    await ctx.replyWithHTML('🔺 На безкоштовній гарячій лінії <b>НФЗ: 800 190 590</b> (Телефонна Інформація для Пацієнта) ви можете отримати, наприклад, інформацію про те, де можна знайти медичну допомогу.')
    await ctx.reply('🔺 Обслуговування пацієнтів у стаціонарних закладах НФЗ також буде доступним українською мовою.')
    await ctx.replyWithHTML('🔺 За телефоном <b>800 190 590 Ви дізнаєтесь:</b> \n' +
        '🔺 де знайти найближчий медичний заклад: клініку сімейного лікаря (лікаря загальної практики), медичну допомогу в нічний час (від 18.00 до 8.00 наступного дня) або лікарню,\n' +
        '🔺 де знаходиться найближча аптека,\n' +
        '🔺 як діяти у разі зараження коронавірусом, як отримати направлення на тестування на вірус SARS-CoV-2 та де взяти мазок для тестування,\n' +
        '🔺 як записатися на щеплення від COVID-19.\n' +
        '🔺 онкологічні пацієнти з України можуть продовжити лікування у Польщі')
})

// Гарячі лінії
bot.hears('Гарячі лінії', async (ctx) => {
    await ctx.replyWithHTML('<b>Гарячі лінії:</b>\n' +
        '🔺 Якщо ви не знайшли потрібну інформацію, телефонуйте на гарячу лінію: +48 47 721 75 75. \n' +
        '🔺 Якщо вам потрібна інформація про детальні правила перетину кордону, звертайтеся до прикордонної служби: +48 82 568 51 19.\n' +
        '🔺 Гаряча лінія для громадян Польщі та власників Карти поляка, які проживають в Україні: +48 22 523 88 80.\n' +
        '🔺 Гаряча лінія поліції (охорона та особи зниклих безвісти): +48 47 721 23 07.\n')
    await ctx.replyWithHTML('<b>Телефони довіри воєводських управлінь:</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Bydgoszcz', 'btn_16'),Markup.button.callback('Lublin', 'btn_17')],
        [Markup.button.callback('Gorzów Wielkopolski, Zielona Góra', 'btn_18')],
        [Markup.button.callback('Łódź', 'btn_19'),Markup.button.callback('Kraków', 'btn_20')],
        [Markup.button.callback('Warszawa', 'btn_21'),Markup.button.callback('Rzeszów', 'btn_22')],
        [Markup.button.callback('Białystok', 'btn_23'),Markup.button.callback('Gdańsk', 'btn_24')],
        [Markup.button.callback('Katowice', 'btn_25'),Markup.button.callback('Kielce', 'btn_26')],
        [Markup.button.callback('Olsztyn', 'btn_27'),Markup.button.callback('Poznań', 'btn_28')],
        [Markup.button.callback('Szczecin', 'btn_29')],
    ]))
})

// Інфолінія для глухих
bot.hears('Інфолінія для глухих', async (ctx) => {
    await ctx.replyWithPhoto({ source: './images/pzg.png' }, { caption: "❗️Польська Асоціація Глухих організовує допомогу глухим з України.\n" +
            "Залежно від потреб у спілкуванні, біженці можуть зв’язатися з Польскою\n" +
            "Асоціацією Глухих через:" })
    await ctx.reply('🔺 SKYPE: DeafUkraine')
    await ctx.reply('🔺 E-MAIL: glusiukraina@pzg.org.pl \n' +
        'deafukraine@pzg.org.pl')
    await ctx.replyWithPhoto({ source: './images/whatsAppViber.png' }, {caption: "https://docs.google.com/spreadsheets/u/1/d/1nJGYQwVo27B1uBASncnDSKJCToCsvLpox6nM6-TM5nw/htmlview"})
    await ctx.reply('👀 https://www.youtube.com/watch?v=7EzSn3SH2sM')
})

bot.hears('Адреси пунктів допомоги на кордоні', async (ctx) => {
    ctx.replyWithPhoto({ source: './images/broshura.png' })
})

bot.hears('Знайти житло в Польщі', async (ctx) => {
    await ctx.reply('Ось сайт допомоги біженцям з житлом, на території Польщі 👇')
    await ctx.reply('🇵🇱 https://ukrainesupport.net/uk/ad_category/mieszkanie/')
})

bot.hears('Знайти житло на мапі', async (ctx) => {
    await ctx.reply('Ось сайт для пошуку житла зі зручною мапою 👇')
    await ctx.reply('🗺 https://icanhelp.host/')
})

bot.hears('Допомога армії', async (ctx) => {
    await ctx.reply('🇺🇦 https://savelife.in.ua/donate/')
})

bot.action('btn_1', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Dolnośląskie (Нижньосілезьке): \n' +
        'Wrocław, ul. Wittiga 4 \n' +
        '(Вроцлав, вул. Віттіга, 4) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/MMwTD5X6oSUoMZMx7 ')
})

bot.action('btn_2', async (ctx) => {
    await ctx.reply('✅ Доступні 2 пункти допомоги 👇')
    await ctx.reply('🔺 Kujawsko-Pomorskie (Куявсько-Поморське): \n' +
        'Hotel Kopernik, Toruń, ul. Wola Zamkowa 16 \n' +
        '(Готель «Копернік», Торунь, вул. Воля Замкова, 16) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/jgwu2qRJay27uHCz7 ')
    await ctx.reply('🔺 Kujawsko-Pomorskie (Куявсько-Поморське): \n' +
        'Bydgoszcz, ul. Zygmunta Augusta 20 \n' +
        '(Бидґощ, вул. Зіґмунда Авґуста, 20) \n' +
        '🗺 Подивитись на мапі: https://goo.gl/maps/MhgyDoK3R3BXMRg19 ')
})

bot.action('btn_3', async (ctx) => {
    await ctx.reply('✅ Доступні 8 пунктів допомоги 👇')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        ' Pałac Suchodolskich Gminny Ośrodek Kultury i Turystyki, ul. Parkowa 5, 22-175 Dorohusk – osiedle \n' +
        '(Палац Суходольських, Ґмінний центр культури і туризму, вул. Паркова, 5, 22-175 Дорогуськ  – житловий масив) \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Gminny+O%C5%9Brodek+Kultury+i+Turystyki/@51.1653246,23.8026394,17z/data=!3m1!4b1!4m5!3m4!1s0x4723890b09b9cd4d:0x5747c0a6dfbbb992!8m2!3d51.1653213!4d23.8048281 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Przygraniczne Centrum Kultury i Rekreacji, ul. Spółdzielcza 8, 22-540 Dołhobyczów \n' +
        '(Прикордонний центр культури і відпочинку, вул. Спулдзельча, 8 22-540 Долгобичів) \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Sp%C3%B3%C5%82dzielcza+8,+22-540+Do%C5%82hobycz%C3%B3w/@50.5879307,24.0283211,17z/data=!3m1!4b1!4m5!3m4!1s0x4724ebc1d634e40b:0xd5f90534ea38bc2!8m2!3d50.5879273!4d24.0305098 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Zespół Szkół w Horodle, ul. Piłsudskiego 58, 22-523 Horodło \n' +
        '(Обєднання шкіл у Городлі, вул. Пілсудського, 58 22-523 Городло) \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Pi%C5%82sudskiego+58,+22-523+Horod%C5%82o/@50.8926628,24.0368682,17z/data=!3m1!4b1!4m5!3m4!1s0x472462183af3e259:0xd69367888104506d!8m2!3d50.8926594!4d24.0390569 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Szkoła Podstawowa w Lubyczy Królewskiej (zaplecze hali sportowej), ul. Jana III Sobieskiego 5, 22-680 Lubycza Królewska \n' +
        '(Початкова школа у Любичі Королівській (ззаду спортивного залу), вул. Яна Собєського,5 5, 22-680 Любича Королівська) \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Jana+III+Sobieskiego+5,+22-680+Lubycza+Kr%C3%B3lewska/@50.3394224,23.5188553,17z/data=!3m1!4b1!4m5!3m4!1s0x4724b3bd755b9765:0x26f2a4990b2faa5e!8m2!3d50.339419!4d23.521044 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): Miejski Ośrodek Sportu i Rekreacji w Chełmie – ul. Graniczna 2A, 22-100 Chełm \n' +
        '(Міський центр спорту і відпочинку у Холмі –вул. Ґранічна, 2A, 22-100 Холм) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/ymLx3NmMkqKPcSaN9 \n')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Hrubieszowski Ośrodek Sportu i Rekreacji – ul. Ciesielczuka 2, 22-500 Hrubieszów \n' +
        '(Грубешовський центр спорту і відпочинку – вул. Цєсєльчука, 2, 22-500 Грубешів) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/dQjxhLTeH87tBqY97 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Ośrodek Sportu i Rekreacji – Aleja Sportowa 8, 22-600 Tomaszów Lubelski \n' +
        '(Центр спорту і відпочинку – алея Спортова, 8, 22-600 Томашів Люблінський) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/FTa9HfdArr2BEtf17 ')
    await ctx.reply('🔺 Lubelskie (Люблінське): \n' +
        'Hala OSiR, ul. Jana Zamojskiego 62a, 22-400 Zamość Zosin-Uściług \n' +
        '(Зала Центру спорту і відпочинку, вул. Яна Замойського, 62a, 22-400 Замосць Зосін-Устилуг) \n' +
        '🗺 Подивитись на мапі: https://goo.gl/maps/FyMFeMYMGmwzFQR36 ')
})

bot.action('btn_4', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Lubuskie (Любуське): \n' +
        'Lubuski Urząd Wojewódzki w Gorzowie Wielkopolskim, ul. Jagiellończyka 8, 66-400 Gorzów Wielkopolski \n' +
        '(Любуське Воєводське управління у Ґожуві Великопольському, вул. Ягеллончика, 8, 66-400 Ґожув Великопольський) \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/ATedzzv8j3T9HXiA9 ')
})

bot.action('btn_5', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Łódzkie (Лодзьке): \n' +
        'Łódzki Dom Kultury, Łódź, ul. Traugutta 18 \n' +
        'Лодзький будинок культури, Лодзь, вул. Трауґутта, 18 \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/JHdQX3ZRpq6czog27 ')
})

bot.action('btn_6', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Małopolska (Малопольське): \n' +
        'Kraków, Dworzec Główny, przy wejściu na czwarty peron od strony kas biletowych – ul. Pawia, 31-154 Kraków \n' +
        'Краків, Головний залізничний вокзал, біля входу на четвертий перон, з боку кас, вул. Павя, 31-154 Краків  \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/swiaAWg2SckkZEKB6 ')
})

bot.action('btn_7', async (ctx) => {
    await ctx.reply('✅ Доступні 2 пункти допомоги 👇')
    await ctx.reply('🔺 Mazowieckie (Мазовецьке): \n' +
        'Dworzec Warszawa Zachodnia, Al. Jerozolimskie 142 \n' +
        'Вокзал Варшава-Західна, Ієрусалимські алеї, 142 \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/X2EmTJ4ciHJ9Vmdc7 ')
    await ctx.reply('🔺 Mazowieckie (Мазовецьке): \n' +
        'COS Torwar, Łazienkowska 6A, 00-449 Warszawa \n' +
        'Центральний спортивний центр «ТОРВАР», вул. Лазенковска, 6A, 00-449 Варшава \n' +
        '🗺 Подивитись на мапі: https://goo.gl/maps/BumLwX6X4MfdTckx5 ')

})

bot.action('btn_8', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Opolskie (Опольське): \n' +
        'Dom Studenta „Sokrates”, ul. Małopolska 22, 45-301 Opole \n' +
        'Студентський гуртожиток «Сократ», вул. Малопольська, 22 22, 45-301 Ополе \n' +
            '🗺 Подивитись на мапі: http://goo.gl/maps/eE2Lcj7oaLMuJc1dA ')

})

bot.action('btn_9', async (ctx) => {
    await ctx.reply('✅ Доступні 6 пунктів допомоги 👇')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): \n' +
        'Świetlica, Korczowa 155 37-552 Korczowa \n' +
        'Клуб, Корчова 155, 37-552 Корчова \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Korczowa+155,+37-552+Korczowa/@49.9561414,23.0772052,17z/data=!3m1!4b1!4m5!3m4!1s0x473b661c37c1543d:0x53c763b3848f116f!8m2!3d49.956138!4d23.0793939 ')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): ' +
        'Hala sportowa - Medyka 285, 37-732 Medyka \n' +
        'Спортивний зал – Медика285, 37-732 Медика \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Medyka+285,+37-732+Medyka/@49.8051923,22.929263,17z/data=!3m1!4b1!4m5!3m4!1s0x473b7a1b8d10b8ef:0xfefb13192f90c961!8m2!3d49.8051889!4d22.9314517 ')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): \n' +
        'HSzkoła Podstawowa w m. Krowica Sama 183, 37-625 Krowica Sama \n' +
        'Початкова школа у м. Кровіца Сама, 183, 37-625 Кровіца Сама \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/Krowica+Sama+183,+37-625+Krowica+Sama/@50.1010344,23.2304753,17z/data=!3m1!4b1!4m5!3m4!1s0x473b44b9036f5299:0x4dbc0df5ae661a69!8m2!3d50.101031!4d23.232664 ')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): \n' +
        'Była Szkoła Podstawowa w Łodynie, Łodyna 41, 38-700 Ustrzyki Dolne \n' +
        'Колишня початкова школа у Лодині,  Лодиня 41, 38-700 Устшикі Дольне \n' +
        '🗺 Подивитись на мапі: http://www.google.pl/maps/place/%C5%81odyna+41,+38-700+%C5%81odyna/@49.4601555,22.5926813,17z/data=!3m1!4b1!4m5!3m4!1s0x473b8d201b3780cd:0xa2cdd669984b3272!8m2!3d49.460152!4d22.59487 ')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): \n' +
        'Centrum Handlu i Magazynowania Korczowa Dolina - Hala Kijowska - Młyny 90, 37-552 Młyny \n' +
        'Центр торгівлі і складування Корчова Долина – Київський хол – Млини, 90, 37-552 Млини \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/twdqFYg4LVDsiJNf8 ')
    await ctx.reply('🔺 Podkarpackie (Підкарпатське): \n' +
        'Przemyśl Dworzec kolejowy, plac legionów 1, 37-700 Przemyśl \n' +
        'Перемишль, Залізничний вокзал, пл. Легіонів, 1, 37-700 Перемишль \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/iFm4m2s5XT8E9yiB6 ')
})

    bot.action('btn_10', async (ctx) => {
        await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
        await ctx.reply('🔺 Podlaskie (Підляшське): \n' +
            'Kompleks Hotelowy JARD "Nad Zalewem", ul. Białostocka 94-98, 16-010 Wasilków \n' +
            'Готельний комплекс JARD „Над Заливом”, вул. Білостоцька, 94-98, 16-010 Васильків \n' +
            '🗺 Подивитись на мапі: http://goo.gl/maps/pTXaAEeVeAzmjaLh9 ')
    })

        bot.action('btn_11', async (ctx) => {
            await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
            await ctx.reply('🔺 Pomorskie (Поморське): \n' +
                'Dom Harcerza. Gdańsk ul. Za murami 2/10 \n' +
                'Дім харцера, Гданськ, вул. За мурами 2/10 \n' +
                '🗺 Подивитись на мапі: http://goo.gl/maps/wk3yPTQ14Rh1WKhv6 ')
        })

            bot.action('btn_12', async (ctx) => {
                await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
                await ctx.reply('🔺 Śląskie (Сілезьке): \n' +
                    'CARITAS, 40-042 Katowice, ul. Wita Stwosza 10 \n' +
                    'CARITAS, 40-042 Катовіце, вул. Віта Ствоша, 10 \n' +
                    '🗺 Подивитись на мапі: http://g.page/caritas_katowice?share ')
            })

                bot.action('btn_13', async (ctx) => {
                await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
                await ctx.reply('🔺 Świętokrzyskie (Свєнтокшиське): \n' +
                    'Świętokrzyski Urząd Wojewódzki w Kielcach, al. IX Wieków Kielc 3 \n' +
                    'Свєнтокшиське Воєводське управління у Кєльце, алея IX Сторіч Кєльце, 3 \n' +
                    '🗺 Подивитись на мапі: http://goo.gl/maps/AsPb7Rn5aCLznoKM7 ')
})

bot.action('btn_13', async (ctx) => {
                await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
                await ctx.reply('🔺 Warmińsko - Mazurskie (Вармінсько-Мазурське): \n' +
                    'Olsztyn, ul. Niepodległości 53/55 \n' +
                    'Ольштин, вул. Незалежності, 53/55 \n' +
                    '🗺 Подивитись на мапі: http://goo.gl/maps/WUKmqhX2zUPN8N48A ')
})

bot.action('btn_15', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Wielkopolskie (Великопольське): \n' +
        'Międzynarodowe Targi Poznańskie, ul. Głogowska 14, Poznań \n' +
        'Міжнародний познанський ярмарок, вул. Глоговська, 14, Познань \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/83SHSB5eRCYDsVoB6 ')
})

bot.action('btn_15', async (ctx) => {
    await ctx.reply('✅ Доступний 1 пункт допомоги 👇')
    await ctx.reply('🔺 Zachodniopomorskie (Західнопоморське): \n' +
        'ul. Al. Piastów 40A, Szczecin \n' +
        'Алея П’ястів, 40A, Шчецін \n' +
        '🗺 Подивитись на мапі: http://goo.gl/maps/VZbhkxfoouRuJmUg7 ')
})

bot.action('btn_16', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Bydgoszcz): \n' +
        'Infolinia (język ukraiński i rosyjski) \n' +
        'czynna od poniedziałku do piątku \n' +
        'w godz. 7:00-22:00 \n' +
        '+48 52 349 74 61, \n' +
        '+48 52 349 78 02 \n' +
        'Infolinia (język polski) czynna całodobowo:  \n' +
        '+48 52 587 27 71')
})

bot.action('btn_17', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Lublin): \n' +
        'Infolinia czynna codziennie \n' +
        '(w godzinach 7.00 – 18.00): \n' +
        '+48 692 268 717, \n' +
        '+48 883 849 598 \n' +
        'Infolinia całodobowa: +48 692 476 823')
})

bot.action('btn_18', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Gorzów Wielkopolski, Zielona Góra): \n' +
       'Infolinia: +48 95 785 18 59')
})

bot.action('btn_19', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Łódź): \n' +
        'Infolinia: +48 42 664 10 81')
})

bot.action('btn_20', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Kraków): \n' +
        'Całodobowa infolinia: +48 12 210 2002')
})

bot.action('btn_21', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Warszawa): \n' +
        'Infolinia: 987, +48 22 595 13 00')
})

bot.action('btn_22', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Rzeszów): \n' +
        'Infolinia: +48 800 100 990')
})

bot.action('btn_23', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Białystok): \n' +
        'Infolinia: +48 85 743 96 00')
})

bot.action('btn_24', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Gdańsk): \n' +
        'Infolinia: +48 58 30 77 772')
})

bot.action('btn_25', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Katowice): \n' +
        'Infolinia: +48 32 606 32 32 \n' +
        '(poniedziałki, środy, czwartki i piątki – \n' +
        'od 7.30 do 15.30, wtorki – od 7.30 do 18.00)')
})

bot.action('btn_26', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Kielce): \n' +
        'Infolinia: +48 573 338 377')
})

bot.action('btn_27', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Olsztyn): \n' +
        'Infolinia: 987')
})

bot.action('btn_28', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Poznań): \n' +
        'Infolinia: +48 61 850 87 77 (w godz. 8-20)')
})

bot.action('btn_29', async (ctx) => {
    await ctx.reply('🔺 Infolinia (Szczecin): \n' +
        'Infolinia całodobowa: +48 91 430 30 33')
})


// Мовна шпаргалка

bot.hears('Мовна шпаргалка', async (ctx) => {
    await ctx.reply('🔺 Дізнатись більше: http://vsetutpl.com/ ', {disable_web_page_preview: true})
    await ctx.replyWithHTML( '<b>Нижче наведені мовні шпаргалки, які можуть бути корисними у повсякденному житті в Польщі 👇:</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Особи та роди', 'btn_30'), Markup.button.callback('Числівники', 'btn_31')],
        [Markup.button.callback('Дні тижня', 'btn_32'), Markup.button.callback('Пори року і місяці', 'btn_33')],
        [Markup.button.callback('Кольори', 'btn_34'), Markup.button.callback('Одяг', 'btn_35')],
        [Markup.button.callback('В магазині', 'btn_36'), Markup.button.callback('Годинник', 'btn_37')]
    ]))
})

bot.action('btn_30', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Особи та роди):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/osoby.png' })
    await ctx.reply('🔺 Liczba pojedyncza – Однина\n' +
        'Ja /Я/ - Я\n' +
        'Ty /Ти/ - Ти\n' +
        'On /Он/, ona /Она/, ono /Оно/ - Він, вона, воно\n' +
        ' \n' +
        '🔺 Liczba mnoga – Множина\n' +
        'My /Ми/ - Ми\n' +
        'Wy /Ви/ - Ви\n' +
        'Oni /Оні/ – Вони (коли мова йде про чоловіків або чоловіків і жінок разом)\n' +
        'One /Оне/ – Вони (коли мова йде лише про жінок)')
})

bot.action('btn_31', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Числівники):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/liczebniki_chisl_vniki.png' })
    await ctx.reply('🔺\n' +
        '0 - zero (зеро) \n' +
        '1 - jeden (йеден) \n' +
        '2 -  dwa (два) \n' +
        '3 -  trzy (тши) \n' +
        '4 - cztery (чтери) \n' +
        '5 - pięć (пєнчь) \n' +
        '6 - sześć (шєшчь)\n' +
        '7 - siedem (шєдем)\n' +
        '8 - osiem (ошєм) \n' +
        '9 - dziewięć (джєвєнчь) \n' +
        '10 - dziesięć (джєшєнчь) \n' +
        '🔺\n' +
        '11 - jedenaście (єденащє) \n' +
        '12 - dwanaście (дванащє) \n' +
        '13 - trzynaście (тшинащє) \n' +
        '14 - czternaście (чтернащє) \n' +
        '15 - piętnaście (пєтнащє) \n' +
        '16 - szesnaście (шешьнащє) \n' +
        '17 - siedemnaście (шєдемнащє) \n' +
        '18 - osiemnaście (ошємнащє) \n' +
        '19 - dziewiętnaście (джєвєнтнащє) \n' +
        '20 - dwadzieścia (дваджища) \n' +
        '🔺\n' +
        '30 - trzydzieści (тшиджєщі) \n' +
        '40 - czterdzieści (чтерджєщі) \n' +
        '50 - pięćdziesiąt (пєнчджєшьонт)' +
        '60 - sześćdziesiąt (шещджєшьонт) \n' +
        '70 - siedemdziesiąt (шеєдемджєшонт) \n' +
        '80 - osiemdziesiąt (ошємджєшонт) \n' +
        '90 - dziewięćdziesiąt (джєвєнчджєшьонт) \n' +
        '100 - sto (сто)\n')

})

bot.action('btn_32', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Дні тижня):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/den_tizhnya_tizhden_.png' })
    await ctx.reply('🔺 Poniedziałek (понєджялек) – Понеділок;\n' +
        '🔺 Wtorek (вторек) – Вівторок;\n' +
        '🔺 Środa (шьрьода) – Середа;\n' +
        '🔺 Czwartek (чвартек) – Четвер;\n' +
        '🔺 Piątek (пйонтек) – П’ятниця;\n' +
        '🔺 Sobota (собота) – Субота;\n' +
        '🔺 Niedizela (нєджєля) – Неділя.')
})
bot.action('btn_33', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Пори року і місяці):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/pori_roku_ukr.png' })
    await ctx.reply('🔺 Zima (жіма) - Зима\n' +
        'Grudzień (Ґруджєнь) – Грудень;\n' +
        'Styczeń (стичєнь) – Січень;\n' +
        'Luty (люти) – Лютий;\n' +
        '🔺 Wiosna (вьосна) - Весна\n' +
        'Marzec (мажец) – Березень;\n' +
        'Kwiecień (квєчєнь) – Квітень;\n' +
        'Maj (май)– Травень;\n' +
        '🔺 Lato (лято) - Літо\n' +
        'Czerwiec (чєрвєц) – Червень;\n' +
        'Lipiec (ліпєц) – Липень;\n' +
        'Sierpień (шєрпєнь) – Серпень;\n' +
        '🔺 Jesień (йешень) – Осінь\n' +
        'Wrzesień (вжешєнь) – Вересень;\n' +
        'Październik (пажджєрнік) – Жовтень;\n' +
        'Listopad (лістопад) – Листопад;\n')
})



bot.action('btn_34', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Кольори):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/kolori.png' })
    await ctx.reply('Biały (бяли) - Білий\n' +
        'Czarny (чарни) - Чорний\n' +
        'Czerwony (червони) - Червоний\n' +
        'Niebieski (нєбєскі) - Синій\n' +
        'Zielony (жєльони) - Зелений\n' +
        'Żółty (жулти) - Жовтий\n' +
        'Pomarańczowy (помаранчьови) - Помаранчевий\n' +
        'Fioletowy (фіолетови) - Фіолетовий\n' +
        'Szary (шари) - Сірий\n' +
        'Różowy (ружови) - Рожевий\n' +
        'Brązowy (бранзови) - Коричневий')
})

bot.action('btn_35', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Одяг):')
    await ctx.replyWithPhoto({ source: './images/shpargalka/odyag_polska.png' })
    await ctx.reply('Koszula (кошуля) - Сорочка\n' +
        'Sweter (светер) - Светр\n' +
        'Koszulka (кошулька) - Футболка\n' +
        'Spodnie (споднє) - Штани\n' +
        'Spódnica (спудніца) - Спідниця\n' +
        'Suknia (сукня) - Сукня\n' +
        'Marynarka (маринарка) - Піджак\n' +
        'Kostium damski (костюм дамскі) – Жіночий костюм\n' +
        'Garnitur (ґарнітур) – Чоловічий костюм\n' +
        'Pas (пасек) - Пояс\n' +
        'Skarpety (скарпети) - Шкарпетки\n' +
        'Rajstopy (райстопи) - Колготи\n' +
        'Podkoszulek (подкошулєк) - Майка\n' +
        'Stanik (станік) - Бюстгальтер\n' +
        'Bluza (блуза) - Блузка\n' +
        'Kurtka (куртка) - Куртка\n' +
        'Płaszcz (плащ) - Плащ\n' +
        'Szalik (шалік) - Шарф\n' +
        'Czapka (чапка) - Шапка\n' +
        'Dżinsy (джінси) - Джинси\n' +
        'Bezrękawnik (безренкавнік) - Безрукавка\n' +
        'Koszula nocna (кошуля ноцна) – Нічна сорочка\n' +
        'Buty (бути) - Черевики\n' +
        'Obuwie (обувє) - Взуття\n')
})

bot.action('btn_36', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (В магазині). Якщо тяжко вимовити, просто покажи, що потрібно ☺️')
    await ctx.replyWithPhoto({ source: './images/shpargalka/frukti.png' })
    await ctx.replyWithPhoto({ source: './images/shpargalka/ovoch_.png' })
    await ctx.replyWithPhoto({ source: './images/shpargalka/riba_m_yaso.png' })
})
bot.action('btn_37', async (ctx) => {
    await ctx.reply('🔺 Мовна шпаргалка (Годинник)')
    await ctx.replyWithPhoto({ source: './images/shpargalka/godina.png' })
    await ctx.reply('1:00 - pierwsza (пєрвша)\n' +
        '2:00 - druga (друґа)\n' +
        '3:00 - trzecia (тшечя)\n' +
        '4:00 - czwarta (чварта)\n' +
        '5:00 - piąta (пйонта)\n' +
        '6:00 - szósta (шуста)\n' +
        '7:00 - siódma (шюдма)\n' +
        '8:00 - ósma (усма)\n' +
        '9:00 - dziewiąta (джєвьонта)\n' +
        '10:00 - dziesiąta (джєшьонта)\n' +
        '11:00 - jedenasta (йеденаста)\n' +
        '12:00 - dwunasta (двунаста)\n' +
        '13:00 - trzynasta (тшинаста)\n' +
        '14:00 - czternasta (чтернаста)\n' +
        '15:00 - piętnasta (пйентнаста)\n' +
        '16:00 - szesnasta (шеснаста)\n' +
        '17:00 - siedemnasta (шьедемнаста)\n' +
        '18:00 - osiemnasta (ошьемнаста)\n' +
        '19:00 - dziewiętnasta (джєвєнтнаста)\n' +
        '20:00 - dwudziesta (двуджєста)\n' +
        '21:00 - dwudziesta pierwsza (двуджєста пєрвша)\n' +
        '22:00 - dwudziesta  druga (двуджєста друґа)\n' +
        '23:00 - dwudziesta  trzecia (двуджєста тшечя)\n' +
        '24:00 - dwudziesta czwarta (двуджєста чварта)')

})


let date ;
let title ;
let intro ;

let date1 ;
let title1 ;
let intro1 ;


let date2 ;
let title2 ;
let intro2 ;


(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.gov.pl/web/mswia/aktualnosci');

    const element = await page.waitForSelector('li:first-child .date');
    date = await element.evaluate(el => el.textContent);

    const element1 = await page.waitForSelector('li:first-child .title');
    title = await element1.evaluate(el => el.textContent);

    const element2 = await page.waitForSelector('li:first-child .intro');
    intro = await element2.evaluate(el => el.textContent);


    const element3 = await page.waitForSelector('li:nth-child(2) .date');
    date1 = await element3.evaluate(el => el.textContent);

    const element4 = await page.waitForSelector('li:nth-child(2) .title');
    title1 = await element4.evaluate(el => el.textContent);

    const element5 = await page.waitForSelector('li:nth-child(2) .intro');
    intro1 = await element5.evaluate(el => el.textContent);

    const element6 = await page.waitForSelector('li:nth-child(3) .date');
    date2 = await element6.evaluate(el => el.textContent);

    const element7 = await page.waitForSelector('li:nth-child(3) .title');
    title2 = await element7.evaluate(el => el.textContent);

    const element8 = await page.waitForSelector('li:nth-child(3) .intro');
    intro2 = await element8.evaluate(el => el.textContent);

    await browser.close();
})();

bot.hears('Актуальні новини', async (ctx) => {
    await ctx.reply('Наразі відбвувається завантаження актуальних новин, наданих Міністерством внутрішніх справ та адміністрації \n' +
        '\n' +
        'Більше новин (також українською): https://www.gov.pl/web/mswia/aktualnosci', {disable_web_page_preview: true})

    for (let i = 0; i <=10; i++){
        if (date && title && intro){
            await ctx.replyWithHTML(`Дата:<b>${date} </b> \n` +
                `<b>🔺 ${title}</b>\n` +
                `\n` +
                `${intro}`)
            break
        }
    }
    await ctx.replyWithHTML( '<b>Більше новин (також українською) 👇</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Завантажити', 'btn_38')]
    ]))
})

bot.action('btn_38', async (ctx) => {
    for (let i = 0; i <=10; i++){
        if (date1 && title1 && intro1){
            await ctx.replyWithHTML(`Дата:<b>${date1} </b> \n` +
                `<b>🔺 ${title1}</b>\n` +
                `\n` +
                `${intro1}`)
            break
        }
    }
    for (let i = 0; i <=10; i++){
        if (date2 && title2 && intro2){
            await ctx.replyWithHTML(`Дата:<b>${date2} </b> \n` +
                `<b>🔺 ${title2}</b>\n` +
                `\n` +
                `${intro2}`)
            break
        }
    }
    await ctx.reply('Більше новин (також українською): https://www.gov.pl/web/mswia/aktualnosci', {disable_web_page_preview: true})
})

bot.launch()