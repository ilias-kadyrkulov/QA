describe('Coupon suit', () => {
    it('Coupon search', async () => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');

        const typeDropdown = await $('.coupons-category__item:nth-child(1)');
        await typeDropdown.click();
        await browser.pause(2000);

        const couponType = await $('.coupons-hidden-select__item:nth-child(2)');
        await couponType.click();
        await browser.pause(2000);

        const statusDropdown = await $('.coupons-category__item:nth-child(2)')
        await statusDropdown.click();
        await browser.pause(2000);
        
        const couponStatus = await $('.coupons-hidden-select__item:nth-child(2)');
        await couponStatus.click()
        await browser.pause(2000);
    })
})