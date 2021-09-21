let antiCamelCase = (el) => {
 return '.' + el.replace(el[el.search(/\w[A-Z]/g)], el[el.search(/\w[A-Z]/g)] + '__').toLowerCase()
}

console.log(antiCamelCase('leadTitle'))
