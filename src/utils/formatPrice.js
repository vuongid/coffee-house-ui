const formatPrice = (price) => {
    return price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
        currencyDisplay: 'symbol',
    });
};

export default formatPrice;
