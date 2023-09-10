
var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('message')[0]
    if(obj.hasOwnProperty('color')){
        elm.className =elm.className+" is-"+obj.color
    }
    if(obj.hasOwnProperty('size')){
        elm.className =elm.className+" is-"+obj.size
    }
    return [document.getElementById('__main').innerHTML, obj]
}