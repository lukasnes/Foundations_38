const {Builder, Browser, By, Until, Key} = require("selenium-webdriver");

let driver;

beforeEach(async ()=>{
     driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async ()=>{
    await driver.quit()
})

describe('test our movie app', ()=>{
    test('can we add a movie', async()=>{
        await driver.get('http://127.0.0.1:5500/Foundations_38/week_3/day_3/js-interactivity/index.html')
        await driver.findElement(By.css('input[placeholder="Add Movie"]')).sendKeys("titanic", Key.RETURN)
        let movie = await driver.findElement(By.xpath('//li/span'))

        expect(await movie.getText()).toBe('titanic')
    })
})