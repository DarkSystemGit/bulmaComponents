var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('card-header')[0]
    if(obj.hasOwnProperty('title')==true){
        var title= document.createElement('p')
        title.className='card-header-title'
        title.innerText = obj.title
        elm.appendChild(title)
    }

    return [document.getElementById('__main').innerHTML, obj]
}