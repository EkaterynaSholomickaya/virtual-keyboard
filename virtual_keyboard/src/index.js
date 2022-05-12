import './styles/main.scss';
import Input from './Input';
import Header from './Header';
import initKeyboard from './utils/initKeyboard';
import { keys } from './utils/keysCode';
import rows from './utils/createRows';

let flag = true;

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

// input.onclick = () => {
//   console.log(input.selectionStart);
// };

// let corsorPosition = input.selectionStart;

// -----------------create KEYBOARD WRAPPER ----------------------------

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
wrapper.append(keyboard);

//  -----------------------create ROWS----------------------------------

rows(keyboard);
initKeyboard(keys.en);

const text = document.createElement('h2');
text.innerHTML = 'Windows';
wrapper.append(text);
const caption = document.createElement('h3');
caption.innerHTML = 'CTRL + SHIFT';
wrapper.append(caption);

// ----------------variables-------------------------------------------------
const keysItem = document.querySelectorAll('.key');
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

// ------------add atributes----------------------------------------

function addAtributes() {
  for (let i = 0; i < keysItem.length; i++) {
    keysItem[i].setAttribute('keyname', keysItem[i].innerText);
    keysItem[i].setAttribute(
      'lowerCaseName',
      keysItem[i].innerText.toLowerCase()
    );
  }
}
addAtributes();

// ---------------------keys events ---------------------------------------

function keyDown(e) {
  for (let i = 0; i < keysItem.length; i++) {
    if (
      e.key == keysItem[i].getAttribute('keyname') ||
      e.key == keysItem[i].getAttribute('lowerCaseName')
    ) {
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
        capslock.classList.toggle('active');
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
}

function keyUp(e) {
  for (let i = 0; i < keysItem.length; i++) {
    if (
      e.key == keysItem[i].getAttribute('keyname') ||
      e.key == keysItem[i].getAttribute('lowerCaseName')
    ) {
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
}

function changeLanguge(e) {
  if (e.code == 'AltLeft' || e.code == 'AltRight') {
    document.onkeydown = (event) => {
      if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        keyboard.innerHTML = '';
        if (flag) {
          rows(keyboard);
          initKeyboard(keys.rus);
          flag = false;
          console.log('поменяли на рус');
        } else {
          rows(keyboard);
          initKeyboard(keys.en);
          flag = true;
          console.log('поменяли на англ');
        }

        // addAtributes();
      } else document.onkeydown = null;
    };
  }
}
document.addEventListener('keydown', changeLanguge);
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function insertKey(value, key) {
  const position = input.selectionStart;
  const str = value;
  return str.slice(0, position) + key + str.slice(position);
}

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
  //!------------------------------------------
  if (e.target.closest('.key_capslock')) {
    const caps = document.querySelector('.key_capslock');
    caps.classList.toggle('.active');
    console.log(caps);

    if (caps.classList.contains('.active')) {
      for (let i = 0; i < keysItem.length; i++) {
        keysItem[i].innerText = keysItem[i].innerText.toUpperCase();
        caps.style.backgpoundColor = 'red';
      }
    } else {
      keysItem.forEach((el) => {
        el.innerText = el.innerText.toLowerCase();
      });
    }
  }

  input.focus();
  // input.setSelectionRange(corsorPosition, corsorPosition);
};
