import './index.scss';

class Header {
  constructor(text) {
    this.text = text;
  }

  createHeader() {
    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerText = this.text;
    return header;
  }
}

export default Header;
