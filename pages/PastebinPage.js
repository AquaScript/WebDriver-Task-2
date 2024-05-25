class PastebinPage {
    constructor() {
        this.url = 'https://pastebin.com/';
        this.acceptCookiesButton = $('//*[@id="qc-cmp2-ui"]/div[2]/div/button[2]');
        this.codeTextarea = $('//*[@id="postform-text"]');
        this.expirationDropdown = $('//*[@id="select2-postform-expiration-container"]');
        this.tenMinutesOption = $('//li[contains(text(), "10 Minutes")]');
        this.nameInput = $('//*[@id="postform-name"]');
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
}

export default PastebinPage;
