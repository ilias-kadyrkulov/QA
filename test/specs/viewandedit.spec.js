const LoginPage = require("../pageobjects/LoginPage");
const ViewAndEditPage = require("../pageobjects/ViewAndEditPage");

describe('Edit suit', () => {
    it('Edit client', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');

        await ViewAndEditPage.doEdit('Go D.', 'Usopp', '01.01.2000', '996999123456', 'godusopp@gmail.com');
    })
})