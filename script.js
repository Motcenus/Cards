var container = document.getElementById('container')


var cards;

var title = "";
var text = "fgfgdfg";
var background = ["de.jpg","cat.jpg","mynph.jpg","witch.jpg","lovers.jpg","faries.jpg"];
var span;

for(let i=0;i<background.length;i++){
    var card = document.createElement('div');
    card.classList.add('card');
    
    card.style.background = `url(${background[i]})`

    var info = document.createElement('div');
    info.classList.add('info');

    info.innerHTML = `<h1>${title + String(i+1)}</h1> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nihil eum culpa incidunt praesentium! Aperiam possimus assumenda expedita sapiente repellat.</p>`

    card.appendChild(info);

    container.appendChild(card);
    
}