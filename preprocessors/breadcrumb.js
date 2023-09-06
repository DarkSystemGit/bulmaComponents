var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('breadcrumb')[0]

    obj.classes.forEach(className => {
        elm.className = `${elm.getAttribute("class")} ${className}`
    })
    Object.keys(obj.attributes).forEach(attr => {
        elm.setAttribute(attr, obj.attributes[attr])
    })
    var items = []
    obj.items.forEach(item=>{
        let elm = document.createElement('li')
        
        if(item.active){
            elm.className='is-active'
        }
        if(item.icon){
            var link=document.createElement('a')
            link.href = item.link
            let text = document.createElement('span')
            text.innerText = item.text
            link.appendChild(text)
            let iconContainer= document.createElement('span')
            iconContainer.className ="icon is-small"
            let icon = document.createElement('i')
            icon.className = item.icon
            iconContainer.appendChild(icon)
            link.appendChild(iconContainer)
            elm.appendChild(link)
        }
        if(item.link){
            var link=document.createElement('a')
            link.href = item.link
            link.innerText = item.text
            elm.appendChild(link)
        }
        items.push(elm)
    })
    var insertElm = document.getElementsByTagName('ul')[0]
    items.forEach(item=>{insertElm.appendChild(item)})
    return [document.getElementById('__main').innerHTML, obj]
}