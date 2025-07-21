const enterText = document.querySelector('.enter-text');
const codeBox = document.getElementById('codeBox');
const codeInput = document.getElementById('codeInput');
const errorMsg = document.getElementById('errorMsg');
const introScreen = document.querySelector('.intro-screen');
const mainContent = document.getElementById('main-content');
const correctCode = "D15FRUT4R"; 

function showCodeInput() {
  document.getElementById('enterWrapper').style.display = 'none';
  codeBox.classList.remove('hidden');
  codeInput.focus();
}

function checkCode() {
  if (codeInput.value === correctCode) {
    introScreen.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    errorMsg.textContent = 'Código incorrecto';
  }
}

// Al hacer click en ENTER
enterText.addEventListener('click', showCodeInput);

// Al presionar Enter 
document.addEventListener('keydown', (e) => {
  if (codeBox.classList.contains('hidden')) {
    if (e.key === 'Enter') {
      showCodeInput();
    }
  } else {
    if (e.key === 'Enter') {
      checkCode();
    }
  }
});

const cursorDot = document.getElementById('cursor-dot');

document.addEventListener('mousemove', (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});