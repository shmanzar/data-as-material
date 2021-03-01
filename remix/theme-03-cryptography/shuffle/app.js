onclick = function(){
    var tag_parent = document.getElementById("container");
    var deck = document.createDocumentFragment();
    while (tag_parent.children.length) {
        deck.appendChild(tag_parent.children[Math.floor(Math.random() * tag_parent.children.length)]);
    }
    tag_parent.appendChild(deck);
}