var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('table')[0]

    obj.classes.forEach(className => {
        elm.className = `${elm.getAttribute("class")} ${className}`
    })
    Object.keys(obj.attributes).forEach(attr => {
        elm.setAttribute(attr, obj.attributes[attr])
    })
    if(obj.scrollable){
        var container = document.createElement('div')
        container.className ='table-container'
        container.appendChild(elm)
        document.getElementById('__main').innerHTML=""
        document.getElementById('__main').appendChild =container
    }

    return [document.getElementById('__main').innerHTML, obj]
}