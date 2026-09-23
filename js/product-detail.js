document.addEventListener('DOMContentLoaded', function() {

    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.qty-input');

    if (minusBtn && plusBtn && qtyInput) {
        minusBtn.addEventListener('click', function() {
            let val = parseInt(qtyInput.value, 10);
            if (val > 1) qtyInput.value = val - 1;
        });
        plusBtn.addEventListener('click', function() {
            let val = parseInt(qtyInput.value, 10);
            qtyInput.value = val + 1;
        });
    }

    // Add to cart functionality
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn && qtyInput) {
        addToCartBtn.addEventListener('click', function() {
            const originalText = addToCartBtn.textContent;
            addToCartBtn.textContent = 'Added to cart';
            addToCartBtn.classList.add('added');
            qtyInput.value = 1;
            addToCartBtn.disabled = true;
            setTimeout(() => {
                addToCartBtn.textContent = originalText;
                addToCartBtn.classList.remove('added');
                addToCartBtn.disabled = false;
            }, 2000);
        });
    }

    // Buy now button
    const buyNowBtn = document.querySelector('.buy-now');
    const orderModal = document.getElementById('orderCompleteModal');
    const goHomeBtn = document.getElementById('goHomeBtn');
    const continueBrowsingBtn = document.getElementById('continueBrowsingBtn');

    if (buyNowBtn && qtyInput && orderModal && goHomeBtn && continueBrowsingBtn) {
        buyNowBtn.addEventListener('click', () => {
            qtyInput.value = 1;
            orderModal.style.display = 'flex';
        });
        goHomeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        continueBrowsingBtn.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }
});