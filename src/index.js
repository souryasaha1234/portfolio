'use strict';

// Page loading
window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');

  // Simulate a delay to demonstrate the loading effect
  setTimeout(function () {
    topFunction();
    document.body.style.overflow = 'visible'; // scroll visible after loading
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    content.style.opacity = 1;
    canvas.style.opacity = 1;
    typeWriter1();
    typeWriter2();
    typeWriter();
  }, 3000);
  document.body.style.overflow = 'hidden'; // scroll locked during loading
});

//Sticky navigation
const navigation = document.querySelector('.navigation');

const headerEl = document.querySelector('.headerEl');
const navHeight = navigation.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navigation.classList.add('sticky');
  else navigation.classList.remove('sticky');
};

//Intersection observer
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(headerEl);

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

var i = 0;
var txt1 = 'Hello, My name is';
var txt2 = 'Sourya Saha';
var txt = 'Please Scroll down.. ⬇';
var speed = 50;

function typeWriter1() {
  document.getElementById('name_demo1').innerHTML += txt1;
}
function typeWriter2() {
  document.getElementById('name_demo2').innerHTML += txt2;
}
function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//navigation button mobile
let AboutBtnMob = document.getElementById('AboutBtnMob');
let skillsBtnMob = document.getElementById('skillsBtnMob');
let projectsBtnMob = document.getElementById('projectsBtnMob');
let educationBtnMob = document.getElementById('educationBtnMob');
let experiencesBtnMob = document.getElementById('experiencesBtnMob');
let contactsBtnMob = document.getElementById('contactsBtnMob');

AboutBtnMob.addEventListener('click', function () {
  document.getElementById('About').scrollIntoView();
});
skillsBtnMob.addEventListener('click', function () {
  document.getElementById('skills').scrollIntoView();
});
projectsBtnMob.addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView();
});
educationBtnMob.addEventListener('click', function () {
  document.getElementById('education').scrollIntoView();
});
experiencesBtnMob.addEventListener('click', function () {
  document.getElementById('experiences').scrollIntoView();
});
contactsBtnMob.addEventListener('click', function () {
  document.getElementById('contacts').scrollIntoView();
});

//navigation button
let AboutBtn = document.getElementById('AboutBtn');
let skillsBtn = document.getElementById('skillsBtn');
let projectsBtn = document.getElementById('projectsBtn');
let educationBtn = document.getElementById('educationBtn');
let experiencesBtn = document.getElementById('experiencesBtn');
let contactsBtn = document.getElementById('contactsBtn');

AboutBtn.addEventListener('click', function () {
  document.getElementById('About').scrollIntoView();
});
skillsBtn.addEventListener('click', function () {
  document.getElementById('skills').scrollIntoView();
});
projectsBtn.addEventListener('click', function () {
  document.getElementById('projects').scrollIntoView();
});
educationBtn.addEventListener('click', function () {
  document.getElementById('education').scrollIntoView();
});
experiencesBtn.addEventListener('click', function () {
  document.getElementById('experiences').scrollIntoView();
});
contactsBtn.addEventListener('click', function () {
  document.getElementById('contacts').scrollIntoView();
});
