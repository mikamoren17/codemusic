// ambil elemen tbody
const tableBody = document.getElementById("musicTable");

// render table
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach((music, index) => {
    const row = `
      <tr>
        <td>${music.name}</td>
        <td>${music.code}</td>
        <td><button class="copy-btn" onclick="copyCode('${music.code}')">Copy</button></td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// copy code
function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert("Code copied: " + code);
}

// search music
function searchMusic() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const filtered = musicList.filter(m =>
    m.name.toLowerCase().includes(keyword) || m.code.includes(keyword)
  );
  renderTable(filtered);
}

// tampilkan data awal
renderTable(musicList);
