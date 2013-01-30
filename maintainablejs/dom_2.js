// DocumentFragment append
var div = document.getElementsByTagName("div");
var fragment = document.createDocumentFragment();
for ( var e = 0; e < elems.length; e++ ) {
  fragment.appendChild( elems[e] );
}

for ( var i = 0; i < div.length; i++ ) {
  div[i].appendChild( fragment.cloneNode(true) );
}
