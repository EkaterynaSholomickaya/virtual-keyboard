import './index.scss';

class Input {
  static createInput() {
    const input = document.createElement('textarea');
    input.innerHTML = 'first text';
    input.classList.add('keyboard-input');
    input.autofocus = true;
    return input;
  }
}

export default Input;
