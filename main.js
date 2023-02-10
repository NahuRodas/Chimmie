import './style.css';

document.querySelector('#app').innerHTML = `
<div class="bg">
</div>
<button class='btn audio-btn-on' id='audio-btn-on'><i class='bx bxs-bell' ></i></button>
<button class='btn audio-btn-off' id='audio-btn-off'><i class='bx bxs-bell-off' ></i></button>
<audio id="audio" autoplay loop preload>
  <source src="./resources/bg-song.mp3" type="audio/mpeg">
</audio>

<button class='btn prev-btn' id='prev-btn'><i class='bx bxs-chevron-left-circle'></i></button>

<div class='book' id='book'>
    <div class="page" id='page-1'>
        <div class="front">
            <div class='front-content' id='front-1'>
                
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-1'>
            <div class="lore">
              <h1>Lore</h1>
              <p> Once upon a time in a desolate world, a demon king stood over everyone, dominating them with his powerful witchcraft.
               The great and terrifying king had a curious hobby, he liked to create powerful weapons both magical and biological. 
               One of his creations bordered on perfection: The CHIMERA, a being capable of absorb the power of other living
                beings and use it at her will. </p>
                <div class="lore-img-chimera">
                  <img src="https://www.collinsdictionary.com/images/thumb/chimera_507919912_250.jpg?version=4.0.298" alt="Chimera">
                </div>
                <p>This creature was used by the king to destroy and dominate his enemies. She obeyed without hesitation since she did not 
                know better. For her the king was everything and his word was the law, even if what she did were acts of pure evil it was impossible
                 for her to know, she could not distinguish between good and evil. </p>
            </div>
            </div>
        </div>
    </div>
    <div class="page" id='page-2'>
        <div class="front">
            <div class='front-content' id='front-2'>
                <p> One morning when the king was not looking, the chimera escaped from the castle and took a short walk through a nearby forest. 
                Suddenly she met a magic rat and with his powerful magic he gave voice to the chimera. The rat asked the chimera what was her name but she didn't had one,
                the king never gave her one, after hearing this the rat decided that her name would be Chimmie.</p>
                <p> What seemed to be a nice morning soon turned dark as the king, having sensed a powerful magic, found them. A magic 
                capable of altering reality, the demon king needed that magic. He soon ordered Chimmie to kill the rat and absorb its powers, 
                but she refused, now she had a voice wasn't afraid to let anyone hear her thoughts. Chimmie told the king how much she hated 
                doing what he asked, but the king did not like this and in some unknown language he casted a curse on Chimmie. Fortunately his rat
                 friend acted quickly and with his magic he teleported them both to a new realm, one of peace where they could both live their lives peacefully. </p>
                <div class="lore-img-chimmie">
                  <img src="https://raw.githubusercontent.com/NahuRodas/Chimmie/main/resources/chimmie-1.png" alt="Chimmie with rat">
                </div>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-2'>
                <h1>Design front</h1>
                <div>
                  <img src="https://via.placeholder.com/400x550?text=Coming+soon" alt="Placeholder">
                </div>
            </div>
        </div>
    </div>
    <div class="page" id='page-3'>
        <div class="front">
            <div class='front-content' id='front-3'>
                <h1>Design side</h1>
                <div>
                  <img src="https://via.placeholder.com/400x550?text=Coming+soon" alt="Placeholder">
                </div>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-3'>
              <h3><i class='bx bxl-twitch'></i>Twitch</h3>
              <div class="container-img twitch-img">
                <img src="https://via.placeholder.com/400x300?text=Coming+soon" alt="Placeholder">
              </div>
              <a href="https://www.twitch.tv/chimmiechan">Check it out</a>
              <div><i class='bx bxs-hand-down bx-rotate-180 pointer' style='color:#8a00a8'  ></i></div>
            </div>
        </div>
    </div>
    <div class="page" id='page-4'>
        <div class="front">
            <div class='front-content' id='front-4'>
              <div class="youtube">
                <h3><i class='bx bxl-youtube' undefined ></i>Youtube</h3>
                <div class="container-img youtube-img">
                  <img src="https://via.placeholder.com/200x100?text=Coming+soon" alt="Placeholder">
                </div>
                <p>Coming soon</p>
              </div>
              <div class="twitter">
                <h3><i class='bx bxl-twitter' ></i>Twitter</h3>
                <div class="container-img twitter-img">
                  <img src="https://via.placeholder.com/200x100?text=Coming+soon" alt="Placeholder">
                </div>
                <p>Coming soon</p>
              </div>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-4'>
                <h3>Subscribers/Members</h3>
                <div class="list">
                  <ul>
                  <li>Sir Shitalot</li>
                  <li>CallMeNahu</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="page" id='page-5'>
        <div class="front">
            <div class='front-content' id='front-5'>
                <h3>Subscribers/Members</h3>
                <div class="list">
                  <ul>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  <li>User</li>
                  
                </ul>
                </div>
            </div>
        </div>
        <div class="back">
            <div class='back-content' id='back-5'>
                
            </div>
        </div>
    </div>
</div>

<button class='btn next-btn' id='next-btn'><i class='bx bxs-chevron-right-circle'></i></button>

`;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const audioBtnOn = document.querySelector('.audio-btn-on');
const audiotBtnOff = document.querySelector('.audio-btn-off');
const book = document.querySelector('#book');
const audio = document.getElementById('audio');

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
  nextBtn.style.transform = 'translateX(320px)';
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

audioBtnOn.addEventListener('click', () => {
  audio.pause();
  audioBtnOn.style.display = "none";
  audiotBtnOff.style.display = "block";
});

audiotBtnOff.addEventListener('click', () => {
  audio.play();
  audioBtnOn.style.display = "block";
  audiotBtnOff.style.display = "none";
});