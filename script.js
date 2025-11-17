document.getElementById('myButton').addEventListener('click', function() {
    let messageElement = document.getElementById('message');
    messageElement.textContent = '按鈕被點擊了！網頁內容已更新。';
});


// script.js

// === 1. RWD 漢堡選單切換功能 ===
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const utilNav = document.getElementById('utilNav');

    if (menuToggle && mainNav && utilNav) {
        menuToggle.addEventListener('click', function() {
            // 點擊時，切換 CSS 類別 is-open 來顯示/隱藏選單
            mainNav.classList.toggle('is-open');
            utilNav.classList.toggle('is-open');

            // 改變漢堡圖示文字
            if (mainNav.classList.contains('is-open')) {
                menuToggle.textContent = '✕'; // 變成 X 關閉圖示
            } else {
                menuToggle.textContent = '☰'; // 變回漢堡圖示
            }
        });
    }

    // === 2. 加入購物車按鈕提示功能 ===
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-item').querySelector('h3').textContent;
            
            // 使用 alert 彈出提示，通知使用者已加入購物車
            alert(`"${productName}" 已成功加入購物車！ (此為前端提示，無實際功能)`);
        });
    });
});