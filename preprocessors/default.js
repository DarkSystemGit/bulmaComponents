var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj,name,type) => {
    document.getElementById('__main').innerHTML = comp
    if(!(type=='tag')){
        var elm = document.getElementsByClassName(name)[0]
    }else{
        var elm = document.getElementsByTagName(name)[0]
    }
    

    obj.classes.forEach(className => {
        elm.className = `${elm.getAttribute("class")} ${className}`
    })
    Object.keys(obj.attributes).forEach(attr => {
        elm.setAttribute(attr, obj.attributes[attr])
    })


    return [document.getElementById('__main').innerHTML, obj]
}