const puppeteer = require('puppeteer');

let date ;
let title ;
let intro ;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.gov.pl/web/mswia/aktualnosci');

    const element = await page.waitForSelector('li:first-child .date');
    date = await element.evaluate(el => el.textContent);
    date = JSON.stringify(date)

    const element1 = await page.waitForSelector('li:first-child .title');
    title = await element1.evaluate(el => el.textContent);

    const element2 = await page.waitForSelector('li:first-child .intro');
    intro = await element2.evaluate(el => el.textContent);


    await browser.close();
})();

exports.date = date;
exports.title = title;
exports.intro = intro;
