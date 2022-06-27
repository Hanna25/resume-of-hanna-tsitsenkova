let data;

let leftSliderBtn = document.querySelector('.slider-left-button');
let rightSliderBtn = document.querySelector('.slider-right-button');
let mobileLeftSliderBtn = document.querySelector('.mobile-slider-left-btn');
let mobileRightSliderBtn = document.querySelector('.mobile-slider-right-btn');
let itemsSlider = document.querySelectorAll('.item');
let sliderItemWrap = document.querySelector('.slider-item-wrap');



const getJSONData = async () => {
  const response = await fetch("./pets.json");
  data = await response.json(); 
}
getJSONData();

let card =  (img, name) => 
            `<img src="${img}">
              <p>${name}</p>
              <button class="item__button">Learn more</button>`

let modalWindow = ( name, img, breed, description, age, inoculations, diseases, parasites) => `
                          <div class="item-popup__close-button">
                              <button class="close-button">×</button>
                            </div>
                            <div class="item-popup__content">
                              <div class="item-popup__img-pet">
                                <img src="${img}" alt class="img-pet">
                              </div>        
                              <div class="item-popup__text">
                                <h3>${name}</h3>
                                <h4>${breed}</h4>
                                <p>${description}</p>
                                <ul>
                                  <li><p><b>Age: </b>${age}</p></li>
                                  <li><p><b>Inoculations:</b>${inoculations}</p></li>
                                  <li><p><b>Diseases: </b>${diseases}</p></li>
                                  <li><p><b>Parasites: </b>${parasites}</p></li>
                                </ul>
                              </div>
                            </div>`
                          
            


leftSliderBtn.addEventListener('click', function(){
  addCardSlider();

});
rightSliderBtn.addEventListener('click', function(){
  addCardSlider();  
});
mobileLeftSliderBtn.addEventListener('click', function(){
  addCardSlider();
});
mobileRightSliderBtn.addEventListener('click', function(){
  addCardSlider();
});


for (let i = 0; i < itemsSlider.length; i++) {
  itemsSlider[i].addEventListener('click', function(event){
    generateModalWindowSlider(event.currentTarget.querySelector('p').innerText)    
  })
}

let getRandNum = function(quantity, range) {
  let arrRandNumbers = [];
  let randNum;
  for (let i = 0; i < quantity; i++) {    
    randNum = Math.floor(Math.random() * range);
    while (arrRandNumbers.includes(randNum)) {
      randNum = Math.floor(Math.random() * range);
    }
    arrRandNumbers.push(randNum)
  }
  return arrRandNumbers;
}

let addCardSlider = function() {
  const numSliderCards = 3;
  let items = document.querySelector(".slider-item-wrap").children;
  let arrRandNumbers = getRandNum(numSliderCards, data.length);
  for (i = 0; i < numSliderCards; i++) {
    items[i].innerHTML = card(data[arrRandNumbers[i]].img, data[arrRandNumbers[i]].name)      
  }  
  sliderItemWrap.classList.add("hide-in-left");
}

let generateModalWindowSlider = function(el) {
  let popupWrap = document.querySelector('.item-popup-wrap');
  popupWrap.removeAttribute('id');
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === el) {
      popupWrap.innerHTML = modalWindow(data[i].name, data[i].img, data[i].breed, data[i].description, 
                                                              data[i].age, data[i].inoculations, data[i].diseases, 
                                                              data[i].parasites)
    }
  }
  closeModalWindow(popupWrap);
  addHoverCloseBnt();
  removeHoverCloseBnt();
}

let closeModalWindow = function(el) {
  el.addEventListener('click', function(event) {
   if (event.target.className === "item-popup-wrap" || event.target.className === "close-button") {
    clearModalWin();
   }    
  }); 
}

let clearModalWin = function() {
  let popupWrap = document.querySelector('.item-popup-wrap');
  popupWrap.id = "popup-hidden";
  popupWrap.innerHTML = "";
}

let addHoverCloseBnt = function() {
  let modalWinContent = document.querySelector('.item-popup__content');
  modalWinContent.addEventListener('mouseleave', function(event) {      
    let closeModalWinBtn = document.querySelector(".close-button");
      if (event) {        
        closeModalWinBtn.id = 'active-close-btn';
      }      
  });
}

let removeHoverCloseBnt = function() {
  let modalWinContent = document.querySelector('.item-popup__content');
  modalWinContent.addEventListener('mouseenter', function(event) {      
    let closeModalWinBtn = document.querySelector(".close-button");
      if (event) {        
        closeModalWinBtn.removeAttribute('id');
      } 
  });
}

const burger = document.querySelector(".burger-menu__burger-line") 
burger.addEventListener('click', function(){
  addBurgerMenu()
})
let addBurgerMenu = function() {
  if (document.querySelector('.header__burger-menu').classList.contains('burger-active')) {
    document.querySelector('.header__burger-menu').classList.remove('burger-active');
    document.querySelector('.header__burger-menu').classList.add('burger-hidden');
    document.querySelector('.burger-menu__burger-line').classList.add('burger-menu-rotate');
    document.querySelector('.navigation-bar').classList.toggle('hide');
  } else {
    document.querySelector('.header__burger-menu').classList.add('burger-active');
    document.querySelector('.header__burger-menu').classList.toggle('burger-hidden');
    document.querySelector('.burger-menu__burger-line').classList.remove('burger-menu-rotate');
    document.querySelector('.burger-menu__burger-line').classList.add('burger-menu-transform');
    document.querySelector('.navigation-bar').classList.toggle('hide');
  }
}

