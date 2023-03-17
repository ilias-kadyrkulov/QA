const LoginPage = require( "../pageobjects/LoginPage");
const ClientsPage = require( "../pageobjects/ClientsPage");

describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create client', async ()=> {
        await $('button.clients-add-user-dialog').click();
        await browser.pause(5000);

        await ClientsPage.doFill('Roronoa', 'Zoro', 'roronoazoro@gmail.com', '999666666', '04.12.1999')
        await browser.pause(6000);

        await browser.acceptAlert();
        await browser.pause(5000);
    })

    it('Open to read', async() => {
        const userForm = await $('form.add-user-modal__form');
        await expect(userForm).toExist();
    })
})