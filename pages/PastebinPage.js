class PastebinPage {
    constructor() {
        this.url = 'https://pastebin.com/';
        this.acceptCookiesButton = $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        this.codeTextarea = $('//*[@id="postform-text"]');
        this.expirationDropdown = $('//*[@id="select2-postform-expiration-container"]');
        this.tenMinutesOption = $('//li[contains(text(), "10 Minutes")]');
        this.nameInput = $('//*[@id="postform-name"]');
        this.syntaxHighlightingDropdown = $('//*[@id="select2-postform-format-container"]');
        this.bashOption = $('//li[contains(@id, "select2-postform-format-result") and contains(text(), "Bash")]');
        this.createNewPasteButton = $('//button[contains(@class, "btn -big") and text()="Create New Paste"]');
        this.pasteTitle = $('/html/body/div[1]/div[2]/div[1]/div[1]/div[2]/div[3]/div[1]/h1');

    }

    async open() {
        await browser.url(this.url);
    }

    async acceptCookies() {
        await this.acceptCookiesButton.waitForDisplayed({ timeout: 10000 });
        await this.acceptCookiesButton.click();
    }

    async setCode(code) {
        await this.codeTextarea.waitForDisplayed({ timeout: 10000 });
        await this.codeTextarea.setValue(code);
    }

    async setSyntaxHighlighting() {
        await this.syntaxHighlightingDropdown.waitForDisplayed({ timeout: 10000 });
        await this.syntaxHighlightingDropdown.click();
        await this.bashOption.waitForDisplayed({ timeout: 5000 });
        await this.bashOption.click();
    }

    async setExpiration() {
        await this.expirationDropdown.waitForDisplayed({ timeout: 10000 });
        await this.expirationDropdown.click();
        await this.tenMinutesOption.waitForDisplayed({ timeout: 5000 });
        await this.tenMinutesOption.click();
    }

    async setName(name) {
        await this.nameInput.waitForDisplayed({ timeout: 10000 });
        await this.nameInput.setValue(name);
    }

    async savePaste() {
        await this.createNewPasteButton.waitForDisplayed({ timeout: 10000 });
        await this.createNewPasteButton.click();
    }

    async verifyPasteTitle(expectedTitle) {
        await this.pasteTitle.waitForDisplayed({ timeout: 10000 });
        const actualTitle = await this.pasteTitle.getText();
        expect(actualTitle).toEqual(expectedTitle);
    }

}

export default PastebinPage;
