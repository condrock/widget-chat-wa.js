(function () {
  const style = document.createElement("style");
  style.innerHTML = `
    .wa-widget { position: fixed; bottom: 20px; right: 20px; z-index: 999; }
    .wa-toggle { background: #4dc247; color: white; border-radius: 50%; width: 50px; height: 50px; border: none; cursor: pointer; font-size: 20px; }
    .wa-box { display: none; background: white; border: 1px solid #ddd; padding: 15px; border-radius: 10px; margin-top: 10px; }
    .wa-box a { color: #4dc247; text-decoration: none; font-weight: bold; }
  `;
  document.head.appendChild(style);

  const html = `
    <div class="wa-widget">
      <button class="wa-toggle" onclick="document.getElementById('waBox').style.display =
        document.getElementById('waBox').style.display === 'block' ? 'none' : 'block'">💬</button>
      <div class="wa-box" id="waBox">
        Hai! Ada yang bisa kami bantu?
        <br />
        <a href="https://wa.me/6285855559325?text=Halo%2C%20saya%20ingin%20bertanya." target="_blank">Mulai Chat</a>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = html;
  document.body.appendChild(container);
})();
