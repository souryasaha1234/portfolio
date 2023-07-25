'use strict';

// Page loading
window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loading-screen');
  var content = document.getElementById('content');

  // Simulate a delay to demonstrate the loading effect
  setTimeout(function () {
    loadingScreen.style.display = 'none';
    content.style.display = 'block';
    content.style.opacity = 1;
  }, 3000); // Replace this with the actual loading of your background image
});

//Sticky navigation
const navigation = document.querySelector('.navigation');

const headerEl = document.querySelector('.headerEl');
const navHeight = navigation.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

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
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Reveling Sections
const allSection = document.querySelectorAll('.body-elements');

const revealsection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.2,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

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
  threshold: 0.3,
  rootMargin: '-200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

document.querySelector('body').addEventListener('load', function () {});

var i = 0;
var txt = 'Welcome to my portfolio website. Please Scroll down to explore it... ⬇';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('demo').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', function () {
  this.setTimeout(function () {
    typeWriter();
  }, 2500);
});s
