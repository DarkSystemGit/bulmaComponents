var JSDOM = require('jsdom')
var document = new JSDOM('<!DOCTYPE html><html><head id="head"></head><body id="__main"></body></html>').window.document
module.exports = (comp, obj) => {
    document.getElementById('__main').innerHTML = comp
    var elm = document.getElementsByClassName('image')[0]
    elm.className=`is-${obj.ratio.replace(':','by')}`
    return [document.getElementById('__main').innerHTML, obj]
}