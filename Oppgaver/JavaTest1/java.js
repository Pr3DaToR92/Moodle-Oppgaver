function allowDrop(ev){
    ev.preventDefault();
}

function draTekst(ev){
    ev.dataTransfer.setData('text', ev.target.id);
}

function slippTekst(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}