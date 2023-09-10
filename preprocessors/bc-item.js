var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByTagName('li')[0]
    if(obj.active==true){
        elm.className='is-active'
    }
    
    return [document.getElementById('__main').innerHTML, obj]
}