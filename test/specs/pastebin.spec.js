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
        await pastebinPage.setCode(`git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`);
    });
    
    it('should select Bash syntax highlighting', async () => {
        await pastebinPage.setSyntaxHighlighting();
    });

    it('should select paste expiration', async () => {
        await pastebinPage.setExpiration();
    });

    it('should fill out the paste name', async () => {
        await pastebinPage.setName('how to gain dominance among developers');
    });

    it('should save the paste', async () => {
        await pastebinPage.savePaste();
    });

    it('should have the correct paste title', async () => {
        const expectedTitle = 'how to gain dominance among developers';
        await pastebinPage.verifyPasteTitle(expectedTitle);
    });
    
});
