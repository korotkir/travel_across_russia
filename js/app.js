const eng = document.querySelector('.header__langLinkEng')
eng.addEventListener('click', englishLang)

console.log('worked')
location.href = window.location.pathname + '#ru'

function englishLang() {
 location.href = window.location.pathname + '#eng'

 Object.keys(en).map(
  (el, i, array) => typeof en[el] === 'string'
       ? document.querySelector(antiCamelCase(el)).textContent = en[el]
       : Object.values(document.querySelectorAll(antiCamelCase(el)))
            .map((el, i) => el.textContent = en['placeTitle'][i])

 )

 console.log(en['placeTitle'])

}

