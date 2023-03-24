class CouponPage {
    get typeDropdown () { return $('//div[@class="coupons-filter"]//div[contains(text(), "Тип купона")]') }
    get couponType () { return $('//div[@class="coupons-category-select__body coupons-category-select__body--activated"]//span[contains(text(), "Процент общей скидки")]') }
    get statusDropdown () { return $('//div[@class="coupons-filter"]//div[contains(text(), "Статус купона")]') }
    get couponStatus () { return $('//div[@class="coupons-category-select__body coupons-category-select__body--activated"]//span[contains(text(), "Действителен")]') }
    get couponSearch () { return $('input[name="search"]') }
    get resetButton () { return $('button[class="resetFilters mat-button ng-star-inserted"]') }

    async open() {
        await browser.url('http://167.114.201.175:5000/coupons'); 
        await browser.pause(5000);
    }

    async doSearch(coupon) {
        await this.couponSearch.click();
        await this.couponSearch.setValue(coupon);
        await browser.keys('\uE007');
        await browser.pause(3000);
        await this.resetButton.click();
        await browser.pause(3000);
        await this.typeDropdown.click();
        await browser.pause(3000);
        await this.couponType.click();
        await browser.pause(3000);
        await this.statusDropdown.click();
        await browser.pause(3000);
        await this.couponStatus.click();
        await browser.pause(3000);
    }
}

module.exports = new CouponPage();