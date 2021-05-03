const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5; // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);


describe('Clicking "Poppa stacken!"', () => {
	it('should alert the user', async () => {
    // Kontrollerar om alert pop up aktiveras inom 20 sekunder
    let pop = await driver.findElement(By.id('pop'));
    await pop.click();
    await driver.wait(() => until.alertIsPresent(), 20000);
    let alert = await driver.switchTo().alert();
    let alertText = await alert.getText();
    await alert.accept();
	});
});
