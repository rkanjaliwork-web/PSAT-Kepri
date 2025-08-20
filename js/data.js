const data = [
  { nama: "Ceratitis capitata", komoditas: "Apel" },
  { nama: "Bactrocera dorsalis", komoditas: "Anggur" },
  { nama: "Erwinia amylovora", komoditas: "Pir" },
  { nama: "Fusarium oxysporum", komoditas: "Bawang Bombay" },
  { nama: "Peronospora destructor", komoditas: "Bawang Putih" }
];

const tbody = document.querySelector("#optkTable tbody");
const search = document.getElementById("search");

function renderTable(filter = "") {
  tbody.innerHTML = "";
  data.filter(item => item.nama.toLowerCase().includes(filter.toLowerCase()))
      .forEach(item => {
        const row = `<tr><td>${item.nama}</td><td>${item.komoditas}</td></tr>`;
        tbody.innerHTML += row;
      });
}

search.addEventListener("input", (e) => renderTable(e.target.value));
renderTable();
