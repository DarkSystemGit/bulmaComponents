var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('modal')[0]
    if (obj.hasOwnProperty('active') == true) {
        elm.className = elm.className + ' is-active'
    }
    return [document.getElementById('__main').innerHTML, obj]
}