var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('progress')[0]
    if(obj.percent){
        elm.innerText=obj.percent
        elm.value=obj.percent.replaceAll('%','')
    }
    obj.classes.forEach(className => {
        elm.className = `${elm.getAttribute("class")} ${className}`
    })
    Object.keys(obj.attributes).forEach(attr => {
        elm.setAttribute(attr, obj.attributes[attr])
    })


    return [document.getElementById('__main').innerHTML, obj]
}