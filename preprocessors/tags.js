var JSDOM=require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports=(comp,obj)=>{
    document.getElementById('__main').innerHTML = comp
    obj.classes.forEach(className=>{
        document.getElementsByClassName('tags')[0].className = `${elm.getAttribute("class")} ${className}`
    })
    Object.keys(obj.attributes).forEach(attr=>{
        document.getElementsByClassName('tags')[0].setAttribute(attr,obj.attributes[attr])
    })
    return [document.getElementById('__main').innerHTML,obj]
}