'use strict';

// Page loading
window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');

  // Simulate a delay to demonstrate the loading effect
  setTimeout(function () {
    topFunction();
    document.body.style.overflow = 'visible'; // scroll visible after loading
    let vid = document.getElementById('myVideo');
    vid.load(); // forced the background video to load om window load
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    content.style.opacity = 1;
    canvas.style.opacity = 1;
  }, 3000);
  document.body.style.overflow = 'hidden'; // scroll locked during loading
});

// Get the button
let mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);
}

//Lazy loding
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '0px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// nav auto collapse
let navtoggler = document.querySelector('.navbar-toggler');
let navAutoClose = function () {
  if (window.innerWidth >= 320 && window.innerWidth <= 1024) {
    navtoggler.click();
  }
};

//navigation button
let homeBtn = document.getElementById('homeBtn');
let AboutBtn = document.getElementById('AboutBtn');
let skillsBtn = document.getElementById('skillsBtn');
let projectsBtn = document.getElementById('projectsBtn');
let educationBtn = document.getElementById('educationBtn');
let experiencesBtn = document.getElementById('experiencesBtn');
let contactsBtn = document.getElementById('contactsBtn');

homeBtn.addEventListener('click', function () {
  topFunction();
  navAutoClose();
});
AboutBtn.addEventListener('click', function () {
  document.getElementById('About').scrollIntoView();
  navAutoClose();
});
skillsBtn.addEventListener('click', function () {
  document.getElementById('skills').scrollIntoView();
  navAutoClose();
});
projectsBtn.addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView();
  navAutoClose();
});
educationBtn.addEventListener('click', function () {
  document.getElementById('education').scrollIntoView();
  navAutoClose();
});
experiencesBtn.addEventListener('click', function () {
  document.getElementById('experiences').scrollIntoView();
  navAutoClose();
});
contactsBtn.addEventListener('click', function () {
  document.getElementById('contacts').scrollIntoView();
  navAutoClose();
});

//form submit
function messageMeSubmit() {
  var myform = document.getElementById('messageForm');
  var data = new FormData(myform);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/mgejqzog');
  showSuccess();
  xhr.send(data);

  document.getElementById('myFrm-name').value = '';
  document.getElementById('myFrm-email-id').value = '';
  document.getElementById('myFrm-message').value = '';
  // PREVENT HTML FORM SUBMIT
  return false;
}

var typing = new Typed('.text', {
  strings: [
    '',
    'Full stack Developer',
    'Java Developer',
    'Web Developer',
    'Designer',
    'Programmer',
    'Competitive Coder',
    'Learner',
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});

const successBtnElement = document.querySelector(
  '.js_success-animation-trigger'
);

const pendingClassName = 'loading-btn--pending';
const successClassName = 'loading-btn--success';

const stateDuration = 1500;

let showSuccess = function () {
  const elem = successBtnElement;
  elem.classList.add(pendingClassName);

  window.setTimeout(() => {
    elem.classList.remove(pendingClassName);
    elem.classList.add(successClassName);

    window.setTimeout(
      () => elem.classList.remove(successClassName),
      stateDuration
    );
  }, stateDuration);
};
