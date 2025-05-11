document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesBtn');
    const noButton = document.getElementById('noBtn');
    const rsvpMessage = document.getElementById('rsvp-message');
    const starNames = document.querySelectorAll('.star-name');

    // Google 表單連結
    const googleFormLink = "https://forms.gle/FSC2YDsaZedL3r4Y8";

    // "YES" 按鈕點擊事件 - 重定向到 Google 表單
    yesButton.addEventListener('click', () => {
        // 觸發按鈕的 "按下" 和 "浮動" 動畫
        yesButton.classList.remove('button-activated-float');
        requestAnimationFrame(() => {
            yesButton.classList.add('button-activated-float');
        });

        rsvpMessage.textContent = '正在帶您前往回函表單... 🚀';
        rsvpMessage.style.color = '#76FF03'; // 綠色訊息

        console.log("玩家選擇 YES! 前往 Google 表單:", googleFormLink);

        // 動畫效果顯示一小段時間後再跳轉
        setTimeout(() => {
            window.open(googleFormLink, '_blank'); // 在新分頁打開 Google 表單
            // 如果您希望在同一個分頁跳轉，可以使用:
            // window.location.href = googleFormLink;
        }, 700); // 稍微加長延遲，讓使用者看到訊息和動畫
    });

    // "NO" 按鈕點擊事件處理函數
    noButton.addEventListener('click', () => {
        noButton.classList.remove('button-activated-float');
        requestAnimationFrame(() => {
            noButton.classList.add('button-activated-float');
        });

        rsvpMessage.textContent = '太可惜了... GAME OVER FOR YOU THIS TIME. 💔😥';
        rsvpMessage.style.color = '#FF5252'; // 亮紅色表示拒絕
        console.log("玩家選擇跳過此關卡...也許下次吧！");

        setTimeout(() => {
            noButton.classList.remove('button-activated-float');
        }, 500);
    });


    // 壽星名字增加滑鼠懸停的額外互動
    starNames.forEach(name => {
        name.addEventListener('mouseenter', () => {
            name.style.transition = 'transform 0.2s ease-out, text-shadow 0.2s ease-out';
            name.style.transform = 'scale(1.3) rotate(-3deg)'; // 放大和旋轉幅度增加
            name.style.textShadow = '3px 3px 0px #FFFF00, -3px -3px 0px #ff66c4'; // 使用新點綴色
        });
        name.addEventListener('mouseleave', () => {
            name.style.transform = '';
            name.style.textShadow = '';
        });
    });

    // 頁面加載時的控制台訊息
    console.log("****************************************");
    console.log("* *");
    console.log("* INVITATION SYSTEM v2.0 ACTIVATED!   *");
    console.log("* - Custom Font & Pink Accent         *");
    console.log("* - Larger Text & Google Form Link    *");
    console.log("* *");
    console.log("****************************************");
    console.log("壽星大名: 呂侑達, 呂侑儒 - 特效已更新！");
    console.log("請確認 'fonts/' 資料夾及 'MyCustomFont' 字體檔案已正確放置。");
});
