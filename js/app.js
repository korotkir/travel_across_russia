const eng = document.querySelector('.header__langLinkEng')
eng.addEventListener('click', englishLang)

console.log('worked')
location.href = window.location.pathname + '#ru'

function englishLang() {
 location.href = window.location.pathname + '#eng'

 console.log(typeof en.leadCaption)

 Object.keys(en).map(
  (el, i, array) => typeof en[el] === 'string'
       ? document.querySelector(antiCamelCase(el)).textContent = en[el] : ''
 )
 // const leadTitle = document.querySelector('.lead__title')
 // leadTitle.textContent = en.leadTitle
}

