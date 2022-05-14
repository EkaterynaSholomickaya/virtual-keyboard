export default function events(e) {
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

    if (e.code == 'AltLeft' || e.code == 'AltRight') {
      document.onkeydown = (event) => {
        if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
          keyboard.innerHTML = '';
          rows(keyboard);

          initKeyboard(keys.rus);
        } else document.onkeydown = null;
      };
    }
  }
}
