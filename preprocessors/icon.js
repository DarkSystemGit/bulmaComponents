var JSDOM=require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports=(comp,obj)=>{
    document.getElementById('__main').innerHTML = comp
    
    if(obj.text){
        if(!obj.flex){
            var elm=document.getElementsByClassName('icon')[0]
        }else{
            var elm = document.createElement('div')
        }
        obj.classes.forEach(className=>{
            elm.className = `${elm.getAttribute("class")} ${className}`
        })
        Object.keys(obj.attributes).forEach(attr=>{
            elm.setAttribute(attr,obj.attributes[attr])
        })
        elm.innerHTML='<span class="icon"><i class="${icon}"></i></span><span>${text}</span>'
        elm.className='icon-text'
        if(obj.flex){
            document.getElementById('__main').innerHTML = ""
            document.getElementById('__main').appendChild(elm)
        }
    }
    return [document.getElementById('__main').innerHTML,obj]
}