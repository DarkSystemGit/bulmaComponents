var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('card-dropdown')[0]
    if (obj.hasOwnProperty('active') == true) {

        elm.className = elm.className + ' is-active'

    }
    if (obj.hoverable == true) {

        elm.className = elm.className + ' is-hoverable'


    }
    if (obj.hasOwnProperty('right-aligned') == true) {
        elm.className = elm.className + ' is-right'
    }
    if (obj.dropup == true) {
        elm.className = elm.className + ' is-up'
    }
    return [document.getElementById('__main').innerHTML, obj]
}