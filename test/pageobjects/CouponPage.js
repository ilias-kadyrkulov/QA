class CouponPage {
    get typeDropdown () { return $('.coupons-category__item:nth-child(1)')}
    get couponType () { return $('.coupons-hidden-select__item:nth-child(2)')}
    get statusDropdown () { return $('.coupons-category__item:nth-child(2)')}
    get couponStatus () { return $('.coupons-hidden-select__item:nth-child(2)')}

    async open() {
        await browser.url('http://167.114.201.175:5000/coupons'); 
        await browser.pause(5000);
    }
}