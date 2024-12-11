const messages = [
  "Nhớ nhớ nhớ Trang!"
];

function generateRandomNotifications() {
  const notificationCount = 100;

  const audio = new Audio('./TBN.mp3');
  audio.addEventListener('error', () => {
    console.error("Không thể tải tệp âm thanh. Kiểm tra đường dẫn và định dạng tệp.");
  });
  audio.play().catch(error => console.error("Không thể phát âm thanh:", error));


  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn ngập bộ</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#80;&#97;&#110;&#98;&#97;&#112;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText;
  document.body.appendChild(footer);
});
