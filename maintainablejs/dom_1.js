// Normal append
var div = document.getElementsByTagName("div");
for ( var i = 0; i < div.length; i++ ) {
  for ( var e = 0; e < elems.length; e++ ) {
    div[i].appendChild( elems[e].cloneNode(true) );
  }
}
