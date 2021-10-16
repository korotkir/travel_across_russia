document.addEventListener("DOMContentLoaded", function() {
 const rus = document.querySelector('.header__langLinkRu')
 const eng = document.querySelector('.header__langLinkEng')

 rus.addEventListener('click', translator(rusDict))
 eng.addEventListener('click', translator(engDict))

 translator(rusDict)()

 function translator(dict) {

  return function () {
   document.title = dict.documentTitle

   Object.keys(dict).map(
    (element, index) => typeof Object.values(dict)[index] === 'string' && index !== 0
     ? document.querySelector(antiCamelCase(element)).textContent = dict[element]
     : Array.isArray(Object.values(dict)[index])
      ? Object.values(document.querySelectorAll(antiCamelCase(element)))
       .map((el, i) => el.textContent = dict[element][i])
      : Object.values(document.querySelectorAll(antiCamelCase(element)))
       .map((el, i) => {objectArray('place__text', dict, el, element, i)} ))

   Object.values(document.querySelectorAll('.intro__fact'))
    .map((el, i) => el.insertAdjacentHTML('beforeend', `<span class="intro__number">${dict.introNumber[i]}</span>`))
  }
 }
})





