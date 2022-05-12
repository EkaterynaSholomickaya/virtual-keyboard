//  ---------------------------create keys----------------------------------------

function addElement(name, className, inner, classNameSecond) {
  const e = document.createElement(name);
  e.classList.add(className);
  e.classList.add(classNameSecond);
  e.innerHTML = inner;
  return e;
}

export default function initKeyboard(currentKeys) {
  const row_1 = document.querySelector('.row_1');

  row_1.append(
    addElement('div', 'key_yo', String.fromCharCode(currentKeys.row_1[0]))
  );
  document.querySelector('.key_yo').classList.add('key');

  for (let i = 1; i < currentKeys.row_1.length; i++) {
    row_1.append(
      addElement(
        'div',
        `key_${String.fromCharCode(currentKeys.row_1[i])}`,
        String.fromCharCode(currentKeys.row_1[i]),
        'key'
      )
    );
  }
  row_1.append(addElement('div', 'backspace', 'Backspace', 'keyFunc'));

  const row_2 = document.querySelector('.row_2');

  row_2.append(addElement('div', 'key_tab', 'Tab', 'keyFunc'));

  for (let i = 0; i < currentKeys.row_2.length; i++) {
    row_2.append(
      addElement(
        'div',
        `key_${String.fromCharCode(currentKeys.row_2[i])}`,
        String.fromCharCode(currentKeys.row_2[i]),
        'key'
      )
    );
  }

  row_2.append(addElement('div', 'key_del', 'Del', 'keyFunc'));

  const row_3 = document.querySelector('.row_3');

  row_3.append(addElement('div', 'key_capslock', 'Caps lock', 'keyFunc'));

  for (let i = 0; i < currentKeys.row_3.length; i++) {
    row_3.append(
      addElement(
        'div',
        `key_${String.fromCharCode(currentKeys.row_3[i])}`,
        String.fromCharCode(currentKeys.row_3[i]),
        'key'
      )
    );
  }

  row_3.append(addElement('div', 'key_enter', 'Enter', 'keyFunc'));

  const row_4 = document.querySelector('.row_4');

  row_4.append(addElement('div', 'key_shift', 'Shift', 'keyFunc'));

  for (let i = 0; i < currentKeys.row_4.length; i++) {
    row_4.append(
      addElement(
        'div',
        `key_${String.fromCharCode(currentKeys.row_4[i])}`,
        String.fromCharCode(currentKeys.row_4[i]),
        'key'
      )
    );
  }
  row_4.append(addElement('div', 'key_top', '&#11165;', 'keyFunc'));
  row_4.append(addElement('div', 'key_shift_right', 'Shift', 'keyFunc'));

  const row_5 = document.querySelector('.row_5');

  row_5.append(addElement('div', 'key_ctrl', 'Ctrl', 'keyFunc'));
  row_5.append(addElement('div', 'key_win', 'Win', 'keyFunc'));
  row_5.append(addElement('div', 'key_alt', 'Alt', 'keyFunc'));
  row_5.append(addElement('div', 'key_space', ' ', 'keyFunc'));
  row_5.append(addElement('div', 'key_alt_right', 'Alt', 'keyFunc'));
  row_5.append(addElement('div', 'key_left', '&#11164;', 'keyFunc'));
  row_5.append(addElement('div', 'key_bottom', '&#11167;', 'keyFunc'));
  row_5.append(addElement('div', 'key_right', '&#11166;', 'keyFunc'));
  row_5.append(addElement('div', 'key_ctrl_right', 'Ctrl', 'keyFunc'));
}
