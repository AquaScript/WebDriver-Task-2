import PastebinPage from '../../pages/PastebinPage.js';

describe('Pastebin Test', () => {
    let pastebinPage;

    before(() => {
        pastebinPage = new PastebinPage();
    });

    it('should open Pastebin website', async () => {
        await pastebinPage.open();
    });

    it('should accept cookies', async () => {
        await pastebinPage.acceptCookies();
    });

    it('should fill out the code field', async () => {
        await pastebinPage.setCode('Hello from WebDriver');
    });

    it('should select paste expiration', async () => {
        await pastebinPage.setExpiration();
    });

    it('should fill out the paste name', async () => {
        await pastebinPage.setName('helloweb');
    });
});
