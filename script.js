const details = document.querySelector('.details'),
  demoText = document.querySelector('#demo');

let demo = sessionStorage.getItem('textValue');
demoText.innerHTML = `Hi, ${demo} <i class="uil uil-smile-dizzy"></i>`;

document.querySelector('.play-game').style.display = 'none';
document.querySelector('.options').style.display = 'none';
document.querySelector('.set-time').style.display = 'none';

function myFunction() {
  validationSession();
  getSession();
}

function save() {
  validationSession();
  getSession();
}

function validationSession() {
  let x = document.getElementById('myText').value;
  if (x == '' || x == null) {
    details.classList.add('error');
    details.innerHTML = 'Please enter a valid name';
  } else {
    details.classList.remove('error');
    details.innerHTML = 'Success, enjoy the game!';
    location.replace('play-game.html');
  }
}

function getSession() {
  let textValue = document.getElementById('myText').value;
  sessionStorage.setItem('textValue', textValue);
}

function playDemo() {
  document.querySelector('.details').style.display = 'none';
  document.querySelector('.play-game').style.display = 'inline';
}

function playDemo1() {
  location.replace('Memory%20Card%20Game%20[Demo%201]/index.html');
}

function playDemo2() {
  document.querySelector('.set-time').style.display = 'inline';
  document.querySelector('.title').style.display = 'none';
  document.querySelector('.play-game').style.display = 'none';
}

function setTimer1() {
  let timeValue1 = document.getElementById('timeValue1').value;
  sessionStorage.setItem('timeValue', timeValue1);
  location.replace('Memory%20Card%20Game%20[Demo%202]/index.html');
}

function setTimer2() {
  let timeValue2 = document.getElementById('timeValue2').value;
  sessionStorage.setItem('timeValue', timeValue2);
  location.replace('Memory%20Card%20Game%20[Demo%202]/index.html');
}

function setTimer3() {
  let timeValue3 = document.getElementById('timeValue3').value;
  sessionStorage.setItem('timeValue', timeValue3);
  location.replace('Memory%20Card%20Game%20[Demo%202]/index.html');
}

function options() {
  document.querySelector('.title').innerHTML = 'Change name:';
  document.querySelector('.title').style.border = 'none';
  document.querySelector('.details').style.display = 'none';
  document.querySelector('.options').style.display = 'inline';
}

function toMenu() {
  document.querySelector('.play-game').style.display = 'none';
  document.querySelector('.details').style.display = 'inline';
}

function quit() {
  location.replace('index.html');
}
