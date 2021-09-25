document.addEventListener("DOMContentLoaded", function() {
 const rus = document.querySelector('.header__langLinkRu')
 const eng = document.querySelector('.header__langLinkEng')

 rus.addEventListener('click', translator(rusDict))
 eng.addEventListener('click', translator(engDict))

 translator(rusDict)

 function translator(dict) {

  return function () {
   Object.keys(dict).map(
    (element, index) => typeof Object.values(dict)[index] === 'string'
     ? document.querySelector(antiCamelCase(element)).textContent = dict[element]
     : typeof Object.values(dict)[index] !== 'string'
      ? Object.values(document.querySelectorAll(antiCamelCase(element)))
       .map((el, i) => el.textContent = dict[element][i]) : '')
  }
 }

})





