const LoginPage = require('../pageobjects/LoginPage');
const CouponsPage = require('../pageobjects/CouponPage');

describe('Coupon suit', () => {
    it('Coupon search', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');
        await browser.url('http://167.114.201.175:5000/coupons');
        await browser.pause(2000);

        await CouponsPage.doSearch('324300133');
    })
})