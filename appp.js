function todo(){
    var inp = document.getElementById('inp')
    var list = document.createElement('li')
    var listText = document.createTextNode(inp)
    var ul = document.getElementById('ul-list')
    list.appendChild(listText)
    ul.appendChild(list)
    inp.value = ''
}