function Slider(slider) {
  //  to check if the parameter is an element or not
  if(!(slider instanceof Element)) {
    throw new Error("No slider found!");
  }
  let prev;
  let current;
  let next;

  // select the elements needed for the slider
  const slides = slider.querySelector('.slides');
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  function startSlider() {
    current = slider.querySelector('.current') || slides.firstElementChild; 
    prev = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
    console.log(current,prev, next);
}

function applyClasses() {
  prev.classList.add('prev');
  current.classList.add('current');
  next.classList.add('next');
  
}

function move(direction) {
  // first remove all the classes already applied
  // create an array of classes to remove as we need to check for all three classes on each element
  const classesToRemove = ['prev', 'current', 'next'];
  prev.classList.remove(...classesToRemove);
  current.classList.remove(...classesToRemove);
  next.classList.remove(...classesToRemove);
  console.log("Enter is pressed move function");
//   if(direction ==='back') {
//     [prev, current, next].forEach( element => element = element.previousElementSibling || slides.lastElementChild)
//   }
//  else {
//     [prev, current, next].forEach( element => element = element.nextElementSibling || slides.firstElementChild)
//   }
// using array destructuring
if(direction === 'back') {
  [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
}
else {
  [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
}

applyClasses();
}

function handleEnter(event) {
  debugger;
  if(event.key === 'Enter' && event.target.classList.contains('goToPrev')){
    move('back');
  }
  else if(event.key === 'Enter' && event.target.classList.contains('goToNext')) {
    move();
  }
}


startSlider(); 
applyClasses();


  // Event listeners
  prevButton.addEventListener('click', () => move('back') );
  nextButton.addEventListener('click', move);


}


const mySlider = Slider(document.querySelector('.slider'));
const dogSlider = Slider(document.querySelector('.dog-slider'));