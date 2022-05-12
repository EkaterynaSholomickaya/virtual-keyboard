export default function rows(keyboard) {
  for (let i = 1; i <= 5; i++) {
    const row = document.createElement('div');
    row.classList.add(`row_${i}`);
    row.classList.add('row');
    keyboard.append(row);
    // console.log(row);
  }
}
