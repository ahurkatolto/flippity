// ==UserScript==
// @name         flippity.js
// @namespace    flippity.js
// @iconURL      https://www.flippity.net/images/favicon-32.png
// @version      1.1
// @description  kekw
// @author       ahurkatolto / mark-sharp
// @match        *://*.flippity.net/sh.php*
// @grant        none
// ==/UserScript==
for(var i=0; i<data.length; i++) {
    document.getElementById('a'+i).value=data[i][2];
}
