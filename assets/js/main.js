const scroll = document.getElementById('scroll');
const scrollDown = ({ target }) => document.getElementById('main').scrollIntoView();
scroll.onclick = scrollDown;