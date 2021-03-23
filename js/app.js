/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// getting the number of sections
const sections = document.querySelectorAll('section'); // sections to added
let list = document.getElementById('navbar__list');   // the Ul list
let sectionNo = 0; // number of sections to be added dinamicaly to the page.
for(let section of sections){
  sectionNo++;
}

// setting active class for the sections and the links on scrolling .
document.addEventListener('scroll', function(event1) {

  for(let section of sections){
    let dim = section.getBoundingClientRect();
    let classes = section.classList;
    let navData = section.dataset.nav;
    let activeLink = list.querySelector(`[data-nav= '${navData.toLowerCase()}']`);
    if(dim.top >= -210 && dim.top <= 420){
      if(classes.contains('your-active-class')){

      }else{
        classes.add('your-active-class');
        activeLink.classList.add('active');
      }
    }else{
      if(classes.contains('your-active-class')){
        classes.remove('your-active-class');
        activeLink.classList.remove('active');
      }
    }
  }
});
// this is the code for constructing the list and adding list items.

for(let i = 0 ; i < sectionNo ; i++){
  let li = document.createElement('li');
  list.appendChild(li);
}

// adding links to linkitems , adding scroll on click event to the links
let items = list.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  let a = document.createElement('a');
  a.classList.add('menu__link');
  a.setAttribute('data-nav' , `section${i+1}` );
  a.textContent = `section${i+1}`;
  a.addEventListener('click',function(){
    let currSection = document.getElementById(`${this.dataset.nav}`);
    currSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  })
  items[i].appendChild(a);
}
