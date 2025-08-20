function loadCSV(file) {
  Papa.parse("data/" + file, {
    download: true,
    header: true,
    complete: function(results) {
      displayTable(results.data);
    }
  });
}

function displayTable(data) {
  const tableHead = document.querySelector("#data-table thead");
  const tableBody = document.querySelector("#data-table tbody");
  tableHead.innerHTML = "";
  tableBody.innerHTML = "";

  if (data.length === 0) return;

  // Header
  const headers = Object.keys(data[0]);
  let headerRow = "<tr>";
  headers.forEach(h => headerRow += `<th>${h}</th>`);
  headerRow += "</tr>";
  tableHead.innerHTML = headerRow;

  // Rows
  data.forEach(row => {
    let rowHTML = "<tr>";
    headers.forEach(h => rowHTML += `<td>${row[h] || ""}</td>`);
    rowHTML += "</tr>";
    tableBody.innerHTML += rowHTML;
  });

  // Search
  document.getElementById("search").addEventListener("input", function() {
    const q = this.value.toLowerCase();
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach(r => {
      r.style.display = r.innerText.toLowerCase().includes(q) ? "" : "none";
    });
  });
}

// Default load
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("dataset");
  loadCSV(select.value);
  select.addEventListener("change", () => loadCSV(select.value));
});
