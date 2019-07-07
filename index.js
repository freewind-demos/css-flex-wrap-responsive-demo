const cells = [
  document.getElementById('a'),
  document.getElementById('b'),
  document.getElementById('c'),
];

setInterval(() => {
  for (const cell of cells) {
    cell.textContent = cell.offsetWidth;
  }
}, 100);
