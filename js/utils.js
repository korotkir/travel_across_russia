let antiCamelCase = (el) => {
 return '.' + el.replace(el[el.search(/\w[A-Z]/g)], el[el.search(/\w[A-Z]/g)] + '__').toLowerCase()
}

let objectArray = (nestedClass, dict, elChild, elParent, i) => {
 elChild.textContent = ''
 elChild.insertAdjacentHTML('afterbegin', `
            <p class="${nestedClass}">${dict[elParent][i][0]}</p>
            <p class="${nestedClass}">${dict[elParent][i][1] || ''}</p>
            `)
}
