
function classifyPlayer(runs, wickets) {
  if (runs >= 1000 && wickets < 100) {
      return 'batsman';
  } else if (runs < 1000 && wickets >= 100) {
      return 'bowler';
  } else if (runs >= 1000 && wickets >= 100) {
      return 'allrounder';
  } else {
      return 'unknown';
  }
}


function addPlayer() {
  const name = document.getElementById("name").value;
  const runs = parseFloat(document.getElementById("runs").value);
  const wickets = parseFloat(document.getElementById("wickets").value);
  const role = classifyPlayer(runs, wickets);

  if (role === 'batsman') {
      addToTable(name, runs, wickets, 'batsman-table');
  } else if (role === 'bowler') {
      addToTable(name, runs, wickets, 'bowler-table');
  } else if (role === 'allrounder') {
      addToTable(name, runs, wickets, 'allrounder-table');
  } else {
      alert('Invalid classification. Please check runs and wickets.');
  }

  
  document.getElementById("name").value = "";
  document.getElementById("runs").value = "";
  document.getElementById("wickets").value = "";
}

function addToTable(name, runs, wickets, tableId) {
  const table = document.getElementById(tableId);
  const newRow = table.insertRow(table.rows.length);

  const cells = [name, runs, wickets];

  for (let i = 0; i < cells.length; i++) {
      const cell = newRow.insertCell(i);
      cell.innerHTML = cells[i];
  }
}

document.getElementById("add-player-button").addEventListener("click", addPlayer);
