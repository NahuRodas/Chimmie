import './style.css';

document.querySelector('#app').innerHTML = `
<div class="bg">
</div>

<button class='btn prev-btn' id='prev-btn'><i class='bx bxs-chevron-left-circle'></i></button>

<div class='book' id='book'>
    <div class="page" id='page-1'>
        <div class="front">
            <div class='front-content' id='front-1'>
                <h1>FRONT</h1>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-1'>
                <h1>1</h1>
            </div>
        </div>
    </div>
    <div class="page" id='page-2'>
        <div class="front">
            <div class='front-content' id='front-2'>
                <h1>2</h1>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-2'>
                <h1>3</h1>
            </div>
        </div>
    </div>
    <div class="page" id='page-3'>
        <div class="front">
            <div class='front-content' id='front-3'>
                <h1>4</h1>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-3'>
                <h1>5</h1>
            </div>
        </div>
    </div>
    <div class="page" id='page-4'>
        <div class="front">
            <div class='front-content' id='front-4'>
                <h1>6</h1>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-4'>
                <h1>7</h1>
            </div>
        </div>
    </div>
    <div class="page" id='page-5'>
        <div class="front">
            <div class='front-content' id='front-5'>
                <h1>8</h1>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-5'>
                <h1>BACK</h1>
            </div>
        </div>
    </div>
</div>

<button class='btn next-btn' id='next-btn'><i class='bx bxs-chevron-right-circle'></i></button>
`;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const book = document.querySelector('#book');

const page1 = document.querySelector('#page-1');
const page2 = document.querySelector('#page-2');
const page3 = document.querySelector('#page-3');
const page4 = document.querySelector('#page-4');
const page5 = document.querySelector('#page-5');

prevBtn.addEventListener('click', () => {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        page1.classList.remove('flipped');
        page1.style.zIndex = 6;
        break;
      case 3:
        page2.classList.remove('flipped');
        page2.style.zIndex = 5;
        break;
      case 4:
        page3.classList.remove('flipped');
        page3.style.zIndex = 4;
        break;
      case 5:
        page4.classList.remove('flipped');
        page4.style.zIndex = 3;
        break;
      case 6:
        openBook();
        page5.classList.remove('flipped');
        page5.style.zIndex = 2;
        break;
      default:
        throw new Error('Unknow state');
    }
    currentLocation--;
  }
});

nextBtn.addEventListener('click', () => {
  console.log('next');
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        page1.classList.add('flipped');
        page1.style.zIndex = 1;
        break;
      case 2:
        page2.classList.add('flipped');
        page2.style.zIndex = 2;
        break;
      case 3:
        page3.classList.add('flipped');
        page3.style.zIndex = 3;
        break;
      case 4:
        page4.classList.add('flipped');
        page4.style.zIndex = 4;
        break;
      case 5:
        page5.classList.add('flipped');
        page5.style.zIndex = 5;
        closeBook(false);
        break;
      default:
        throw new Error('Unknow state');
    }
    currentLocation++;
  }
});

let currentLocation = 1;
let numberOfPages = 5;
let maxLocation = numberOfPages + 1;

function openBook() {
  book.style.transform = 'translateX(50%)';
  prevBtn.style.transform = 'translateX(-320px)';
  nextBtn.style.transform = 'translateX(220px)';
}

function closeBook(isAtBegining) {
  if (isAtBegining) {
    book.style.transform = 'translateX(0%)';
  } else {
    book.style.transform = 'translateX(100%)';
  }
  prevBtn.style.transform = 'translateX(0px)';
  nextBtn.style.transform = 'translateX(0px)';
}