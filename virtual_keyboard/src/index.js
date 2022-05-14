import './styles/main.scss';
import Input from './Input';
import Header from './Header';
import initKeyboard from './utils/initKeyboard';
import { keys } from './utils/keysCode';
import rows from './utils/createRows';

// -------------- define keyboard layout -------------------

let flag = localStorage.getItem('flag') || true;
if (typeof flag === 'string') {
  flag = flag === 'true';
}

let caps = false;

// ---------------create WRAPPER -------------------------------------

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

// ---------------create HEADER -------------------------------------

const headerClass = new Header('Virtual Keyboard');
const header = headerClass.createHeader();
wrapper.append(header);

// --------------create INPUT------------------------------------------

const input = Input.createInput();
wrapper.append(input);

// -----------------create KEYBOARD WRAPPER ----------------------------

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

//  -----------------------create ROWS----------------------------------

rows(keyboard);

//  -----------------------initialisation KEYBOARD----------------------------------

if (flag) {
  initKeyboard(keys.en);
} else initKeyboard(keys.rus);

//  -----------------------create CAPTION----------------------------------

const text = document.createElement('h2');
text.innerHTML = 'Windows';
wrapper.append(text);
const caption = document.createElement('h3');
caption.innerHTML = 'ALT + SHIFT';
wrapper.append(caption);

const caption2 = document.createElement('h3');
caption2.innerHTML =
  'Если язык виртуальной и реальной клавиатуры не совпадают, то виртуальная клавиатура изменит язык после первого ввода';
wrapper.append(caption2);

// ----------------variables-------------------------------------------------
const space = document.querySelector('.key_space');
const shiftRight = document.querySelector('.key_shift_right');
const shift = document.querySelector('.key_shift');
const capslock = document.querySelector('.key_capslock');
const ctrlRight = document.querySelector('.key_ctrl_right');
const ctrl = document.querySelector('.key_ctrl');
const altRight = document.querySelector('.key_alt_right');
const alt = document.querySelector('.key_alt');
const enter = document.querySelector('.key_enter');
const tab = document.querySelector('.key_tab');
const backspace = document.querySelector('.backspace');
const del = document.querySelector('.key_del');
const win = document.querySelector('.key_win');
const up = document.querySelector('.key_top');
const down = document.querySelector('.key_bottom');
const left = document.querySelector('.key_left');
const right = document.querySelector('.key_right');

if (capslock.classList.contains('active')) console.log('капс включен');

// ---------------------redrow KEYBOARD ---------------------------------------

function redraw(current) {
  const row_1 = document.querySelector('.row_1').querySelectorAll('.key');
  const row_2 = document.querySelector('.row_2').querySelectorAll('.key');
  const row_3 = document.querySelector('.row_3').querySelectorAll('.key');
  const row_4 = document.querySelector('.row_4').querySelectorAll('.key');

  row_1.forEach((el, i) => {
    el.innerHTML = String.fromCharCode(current.row_1[i]);
  });
  row_2.forEach((el, i) => {
    el.innerHTML = String.fromCharCode(current.row_2[i]);
  });
  row_3.forEach((el, i) => {
    el.innerHTML = String.fromCharCode(current.row_3[i]);
  });
  row_4.forEach((el, i) => {
    el.innerHTML = String.fromCharCode(current.row_4[i]);
  });
}

// ---------------------keys events ---------------------------------------

const keyDown = (e) => {
  const keysItem = document.querySelectorAll('.key');
  for (let i = 0; i < keysItem.length; i++) {
    if (e.key.toLowerCase() == keysItem[i].innerHTML.toLowerCase()) {
      keysItem[i].classList.add('active');
    }

    switch (e.code) {
      case 'Space': {
        space.classList.add('active');
        break;
      }
      case 'ShiftLeft': {
        shift.classList.add('active');
        break;
      }
      case 'ShiftRight': {
        shiftRight.classList.add('active');
        break;
      }
      case 'CapsLock': {
        if (!caps && flag) {
          caps = true;
          redraw(keys.shiftEn);
          capslock.classList.add('active');
        } else if (caps && flag) {
          caps = false;
          redraw(keys.en);
          capslock.classList.remove('active');
        } else if (!caps && !flag) {
          caps = true;
          redraw(keys.shiftRus);
          capslock.classList.add('active');
        } else if (caps && !flag) {
          caps = false;
          redraw(keys.rus);
          capslock.classList.remove('active');
        }
        break;
      }
      case 'ControlRight': {
        ctrlRight.classList.add('active');
        break;
      }
      case 'ControlLeft': {
        ctrl.classList.add('active');
        break;
      }
      case 'AltRight': {
        altRight.classList.add('active');
        break;
      }
      case 'AltLeft': {
        alt.classList.add('active');
        break;
      }
      case 'Tab': {
        tab.classList.add('active');
        setTimeout(() => {
          tab.classList.remove('active');
        }, 200);
        break;
      }
      case 'Delete': {
        del.classList.add('active');
        break;
      }
      case 'Backspace': {
        backspace.classList.add('active');
        break;
      }
      case 'Enter': {
        enter.classList.add('active');
        break;
      }
      case 'ArrowLeft': {
        left.classList.add('active');
        break;
      }
      case 'ArrowRight': {
        right.classList.add('active');
        break;
      }
      case 'ArrowUp': {
        up.classList.add('active');
        break;
      }
      case 'ArrowDown': {
        down.classList.add('active');
        break;
      }
      case 'MetaLeft': {
        win.classList.add('active');
        break;
      }

      default:
        break;
    }
  }
};

const keyUp = (e) => {
  const keysItem = document.querySelectorAll('.key');

  const codeKey = e.key.toLowerCase().charCodeAt(0);

  if (e.key.length == 1 && e.code !== 'Space') {
    if (
      Math.abs(codeKey - keysItem[20].innerHTML.toLowerCase().charCodeAt(0)) >
      100
    ) {
      flag = !flag;
      localStorage.setItem('flag', flag);
      if (flag) {
        redraw(keys.en);
      } else redraw(keys.rus);
    }
  }
  for (let i = 0; i < keysItem.length; i++) {
    if (e.key.toLowerCase() == keysItem[i].innerHTML.toLowerCase()) {
      keysItem[i].classList.remove('active');
    }

    switch (e.code) {
      case 'Space': {
        space.classList.remove('active');
        break;
      }
      case 'ShiftLeft': {
        shift.classList.remove('active');
        break;
      }
      case 'ShiftRight': {
        shiftRight.classList.remove('active');
        break;
      }
      case 'ControlRight': {
        ctrlRight.classList.remove('active');
        break;
      }
      case 'ControlLeft': {
        ctrl.classList.remove('active');
        break;
      }
      case 'AltRight': {
        altRight.classList.remove('active');
        break;
      }
      case 'AltLeft': {
        alt.classList.remove('active');
        break;
      }
      case 'Tab': {
        tab.classList.remove('active');
        break;
      }
      case 'Delete': {
        del.classList.remove('active');
        break;
      }
      case 'Backspace': {
        backspace.classList.remove('active');
        break;
      }
      case 'Enter': {
        enter.classList.remove('active');
        break;
      }
      case 'ArrowLeft': {
        left.classList.remove('active');
        break;
      }
      case 'ArrowRight': {
        right.classList.remove('active');
        break;
      }
      case 'ArrowUp': {
        up.classList.remove('active');
        break;
      }
      case 'ArrowDown': {
        down.classList.remove('active');
        break;
      }
      case 'MetaLeft': {
        win.classList.remove('active');
        break;
      }

      default:
        break;
    }
  }
  input.focus();
};

const changeLanguge = (e) => {
  if (e.code == 'AltLeft' || e.code == 'AltRight') {
    document.onkeydown = (event) => {
      if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if (!caps && flag) {
          flag = false;
          redraw(keys.rus);
          localStorage.setItem('flag', false);
        } else if (caps && flag) {
          flag = false;
          redraw(keys.shiftRus);
          localStorage.setItem('flag', false);
        } else if (!caps && !flag) {
          flag = true;
          redraw(keys.en);
          localStorage.setItem('flag', true);
        } else if (caps && !flag) {
          flag = true;
          redraw(keys.shiftEn);
          localStorage.setItem('flag', true);
        }
      } else document.onkeydown = null;
    };
  }
};
document.addEventListener('keydown', changeLanguge);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

const insertKey = (value, key) => {
  const position = input.selectionStart;
  const str = value;
  return str.slice(0, position) + key + str.slice(position);
};

document.onclick = (e) => {
  if (e.target.closest('.key')) {
    const currentKey = e.target.closest('.key');
    currentKey.classList.add('active');
    setTimeout(() => {
      currentKey.classList.remove('active');
    }, 150);

    const position = input.selectionStart;
    const str = input.value;
    input.value =
      str.slice(0, position) + currentKey.innerText + str.slice(position);
  }

  if (e.target.closest('.keyFunc') && !e.target.closest('.key_capslock')) {
    const currentKey = e.target.closest('.keyFunc');
    currentKey.classList.add('active');
    setTimeout(() => {
      currentKey.classList.remove('active');
    }, 150);

    if (currentKey.classList.contains('key_space')) {
      input.value = insertKey(input.value, ' ');
    }

    if (
      currentKey.classList.contains('key_top') ||
      currentKey.classList.contains('key_bottom') ||
      currentKey.classList.contains('key_left') ||
      currentKey.classList.contains('key_right')
    ) {
      input.value = insertKey(input.value, currentKey.innerText);
    }

    if (currentKey.classList.contains('key_tab')) {
      input.value = insertKey(input.value, '  ');
    }
    if (currentKey.classList.contains('key_enter')) {
      input.value = insertKey(
        input.value,
        `
`
      );
    }

    if (currentKey.classList.contains('backspace')) {
      const str = input.value;
      input.value = str.slice(0, str.length - 1);

      // corsorPosition += 1;
    }
  }

  if (e.target.closest('.key_capslock')) {
    if (!caps && flag) {
      caps = true;
      redraw(keys.shiftEn);
      localStorage.setItem('caps', true);
      capslock.classList.add('active');
    } else if (caps && flag) {
      caps = false;
      redraw(keys.en);
      capslock.classList.remove('active');
      localStorage.setItem('caps', false);
    } else if (!caps && !flag) {
      caps = true;
      redraw(keys.shiftRus);
      capslock.classList.add('active');
      localStorage.setItem('caps', true);
    } else if (caps && !flag) {
      caps = false;
      redraw(keys.rus);
      capslock.classList.remove('active');
      localStorage.setItem('caps', true);
    }
  }

  input.focus();
};
