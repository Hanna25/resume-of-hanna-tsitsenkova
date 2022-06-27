let data;

let mobileRightSliderBtn = document.querySelector('.mobile-slider-right-btn');
let itemsSlider = document.querySelectorAll('.item');
let btnPagFirstPg = document.querySelector('#first-page');
let btnPagPrevPg = document.querySelector('#previous-page');
let btnPagNextPg = document.querySelector('#next-page');
let btnPagLastPg = document.querySelector('#last-page');
let page = document.querySelector('.active-page');
let activeBtn = document.querySelector('.active-pagination-btn');
let itemWrap = document.querySelector('.items-wrap');
let numPage = 1;


const getJSONData = async () => {
  const response = await fetch("/hanna25-JS2020Q3/shelter/pages/main/pets.json");
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
                


for (let i = 0; i < itemsSlider.length; i++) {
  itemsSlider[i].addEventListener('click', function(event){
    generateModalWindowSlider(event.currentTarget.querySelector('p').innerText)    
  });
};

btnPagFirstPg.addEventListener('click', function(){
  goToFirstPage();
  // generateFirstCardsPages();
});

btnPagPrevPg.addEventListener('click', function(){
  goToPrevPage();
  generatePreviousCardsPages();
});

btnPagNextPg.addEventListener('click',  function(){
  goToNextPage();
  generateNextCardsPages();
});

btnPagLastPg.addEventListener('click', function(){
  goToLastPage();
  generateLastCardsPages();
})


let goToNextPage = function () {  
  let num = +page.innerText;
  let maxNumPage = 7;
  if (num + numPage === maxNumPage) {
    btnPagLastPg.classList.remove("active-pagination-btn");
    btnPagNextPg.classList.remove("active-pagination-btn");
    btnPagFirstPg.classList.add("active-pagination-btn");
    btnPagPrevPg.classList.add("active-pagination-btn");
  } else {
    page.innerText = num + numPage;  
    btnPagPrevPg.classList.add("active-pagination-btn");
    btnPagFirstPg.classList.add("active-pagination-btn");
  }   
};
let goToLastPage = function() {
  let maxNumPage = '6';
  page.innerText = maxNumPage;
  btnPagLastPg.classList.remove("active-pagination-btn");
  btnPagNextPg.classList.remove("active-pagination-btn");
  btnPagFirstPg.classList.add("active-pagination-btn");
  btnPagPrevPg.classList.add("active-pagination-btn");
}

let goToFirstPage = function() {
  if (page.innerText > 1) {
    page.innerText = numPage;
    btnPagFirstPg.classList.remove("active-pagination-btn");
    btnPagPrevPg.classList.remove("active-pagination-btn");
    btnPagLastPg.classList.add("active-pagination-btn");
    btnPagNextPg.classList.add("active-pagination-btn");
  } 
};

let goToPrevPage = function() {
  let num = +page.innerText;
  let minNumPages = 1;
  if (page.innerText > "1") {
    page.innerText = num - numPage;  
    btnPagLastPg.classList.add("active-pagination-btn");
    btnPagNextPg.classList.add("active-pagination-btn");
    if (num - minNumPages === minNumPages) {
      btnPagLastPg.classList.add("active-pagination-btn");
      btnPagNextPg.classList.add("active-pagination-btn");
      btnPagFirstPg.classList.remove("active-pagination-btn");
      btnPagPrevPg.classList.remove("active-pagination-btn");
    } else {
      page.innerText = num - numPage;  
    }
  }
}


let arrCards = [];


let generateRandCardsArr = function() { 
  arrCards = [];
  let sumCardsOnContent = 8;
  let sumPagesContent = 6;
  let randNum;
  for (let i = 0; i < sumPagesContent; i++) {
    let arr = [];
    for (let j = 0; j < sumCardsOnContent; j++) {
      randNum = Math.floor(Math.random() * sumCardsOnContent);
      while (arr.includes(randNum)) {          
        randNum = Math.floor(Math.random() * sumCardsOnContent);
      }
      arr.push(randNum);
    }
    arrCards.push(arr);        
  }  
}
generateRandCardsArr();


let generateNextCardsPages = function() {  
 let numPage = +page.innerText;
 let items = document.querySelector(".items-wrap").children;
 let cards = arrCards[numPage - 1];
  for (i = 0; i < cards.length; i++) {
    items[i].innerHTML = card(data[cards[i]].img, data[cards[i]].name)
  } 
};
let generatePreviousCardsPages = function() {  
  let numPage = +page.innerText - 1;
  let items = document.querySelector(".items-wrap").children;
  let cards = arrCards[numPage];
   for (i = 0; i < cards.length; i++) {
     items[i].innerHTML = card(data[cards[i]].img, data[cards[i]].name)
   } 
 };
 let generateLastCardsPages = function() {  
  let numPage = 5;
  let items = document.querySelector(".items-wrap").children;
  let cards = arrCards[numPage];
   for (i = 0; i < cards.length; i++) {
     items[i].innerHTML = card(data[cards[i]].img, data[cards[i]].name)
   } 
 };
//  let generateFirstCardsPages = function () {
//   let numPage = +page.innerText;
//   let cards = arrCards[numPage - 1];
//   for (i = 0; i < arrCards.length; i++) {
//     items[i].innerHTML = card(data[cards[i]].img, data[cards[i]].name)
//   } 
//  };

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


let getRandNum = function(quantity, range) {
  let arrRandNumbers = [];
  for (let i=0; i < quantity; i++) {    
    randNum = Math.floor(Math.random() * range);
    while (arrRandNumbers.includes(randNum)) {
      randNum = Math.floor(Math.random() * range);
    }
    arrRandNumbers.push(randNum)
  }
  return arrRandNumbers;
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
