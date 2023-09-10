
var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('message-header')[0]
    if(obj.hasOwnProperty('delete')==true){
        var btn= document.createElement('button')
        btn.className='delete'
        btn.id=obj.delete
        btn.ariaLabel='delete'
        elm.appendChild(title)
    }

    return [document.getElementById('__main').innerHTML, obj]
}