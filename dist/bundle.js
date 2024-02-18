(()=>{"use strict";var t,e,n,i,r,o,a,s,l,d,h,m,c,u,f={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",i=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),i&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),i&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,i,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var d=0;d<t.length;d++){var h=[].concat(t[d]);i&&a[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),n&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=n):h[2]=n),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},738:t=>{t.exports=function(t){return t[1]}},740:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(738),r=n.n(i),o=n(705),a=n.n(o)()(r());a.push([t.id,'\nmain {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 10px;\n    color: rgb(219,138,138);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;\n}\n\n.game {\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    height: fit-content;\n}\n\n.header {\n    text-align: center;\n}\n\n.grid {\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    border: 10px solid;\n    border-radius: 6px;\n    /* background-color: peru; */\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n    width: fit-content;\n    border-bottom: 10px solid;\n    /* background-color: peru; */\n}\n\n.cell {\n    height: 100px;\n    width: 100px;\n    border-right: 10px solid;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #FBECF0;\n}\n\n.grid, .row, .cell {\n    border-color: rgb(244,194,194);\n}\n\n.row:last-child {\n    border: none;\n}\n\n.cell:last-child {\n    border: none;\n}\n\n@keyframes emergence {\n    from {\n        width: 0px;\n        height: 0px;\n        font-size: 0rem;\n    }\n\n    to {\n        height: 100px;\n        width: 100px;\n        font-size: 2rem;\n    }\n}\n\n.emergence {\n    animation-duration: 0.5s;\n    animation-name: emergence;\n}\n\n@keyframes slideDown {\n    from {\n        position: relative;\n        top: -40px;\n    }\n\n    to {\n        position: relative;\n        top: 0;\n    }\n}\n\n.slide-down {\n    animation-duration: 0.5s;\n    animation-name: slideDown;\n}\n\n@keyframes slideUp {\n    from {\n        position: relative;\n        bottom: -40px;\n    }\n\n    to {\n        position: relative;\n        bottom: 0;\n    }\n}\n\n.slide-up {\n    animation-duration: 0.5s;\n    animation-name: slideUp;\n}\n\n@keyframes slideLeft {\n    from {\n        position: relative;\n        right: -40px;\n    }\n\n    to {\n        position: relative;\n        right: 0;\n    }\n}\n\n.slide-left {\n    animation-duration: 0.5s;\n    animation-name: slideLeft;\n}\n\n@keyframes slideRight {\n    from {\n        position: relative;\n        left: -40px;\n    }\n\n    to {\n        position: relative;\n        left: 0;\n    }\n}\n\n.slide-right {\n    animation-duration: 0.5s;\n    animation-name: slideRight;\n}\n\n.square {\n    height: 100px;\n    width: 100px;\n    background-color: #E6A4B4;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 2rem;\n    border-radius: 6px;\n}\n\n[data-value="0"] {\n    background-color: #FBECF0;\n}\n\n[data-value="2"] {\n    background-color: #FFF8E3;\n}\n\n[data-value="4"] {\n    background-color: #F6D9D6;\n}\n\n[data-value="8"] {\n    background-color: #F9F3CC;\n}\n\n[data-value="16"] {\n    background-color: #D7E5CA;\n}\n\n[data-value="32"] {\n    background-color: #C3DDD7;\n}\n\n[data-value="64"] {\n    background-color: #EAF4FA; \n}\n\n[data-value="128"] {\n    background-color: #CEE3EF;\n}\n\n[data-value="256"] {\n    background-color: #F4C3D0;\n}\n\n[data-value="512"] {\n    background-color: #CBC6D9;\n}\n\n[data-value="1024"] {\n    background-color: #AAD7D9;\n}\n\n[data-value="2048"] {\n    background-color: #E0D7FF;\n}\n',""]);const s=a},379:t=>{var e=[];function n(t){for(var n=-1,i=0;i<e.length;i++)if(e[i].identifier===t){n=i;break}return n}function i(t,i){for(var o={},a=[],s=0;s<t.length;s++){var l=t[s],d=i.base?l[0]+i.base:l[0],h=o[d]||0,m="".concat(d," ").concat(h);o[d]=h+1;var c=n(m),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==c)e[c].references++,e[c].updater(u);else{var f=r(u,i);i.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=i(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var l=i(t,r),d=0;d<o.length;d++){var h=n(o[d]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var i=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},p={};function x(t){var e=p[t];if(void 0!==e)return e.exports;var n=p[t]={id:t,exports:{}};return f[t](n,n.exports,x),n.exports}x.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return x.d(e,{a:e}),e},x.d=(t,e)=>{for(var n in e)x.o(e,n)&&!x.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},x.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),x.nc=void 0,t=x(379),e=x.n(t),n=x(795),i=x.n(n),r=x(569),o=x.n(r),a=x(565),s=x.n(a),l=x(216),d=x.n(l),h=x(589),m=x.n(h),c=x(740),(u={}).styleTagTransform=m(),u.setAttributes=s(),u.insert=o().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),e()(c.Z,u),c.Z&&c.Z.locals&&c.Z.locals,console.log("start"),new class{constructor({model:t,view:e}){this.model=t,this.view=e,this.model.initializeMatrix(),this.view.reloadGrid(this.model.matrix),this.view.bindEmergenceAnimation(this.model.newCells),this.view.bindMoveLeft((()=>{this.model.moveLeft(),this.view.reloadGrid(this.model.matrix,1),this.view.bindEmergenceAnimation(this.model.newCells)})),this.view.bindMoveRight((()=>{this.model.moveRight(),this.view.reloadGrid(this.model.matrix,2),this.view.bindEmergenceAnimation(this.model.newCells)})),this.view.bindMoveUp((()=>{this.model.moveUp(),this.view.reloadGrid(this.model.matrix,3),this.view.bindEmergenceAnimation(this.model.newCells)})),this.view.bindMoveDown((()=>{this.model.moveDown(),this.view.reloadGrid(this.model.matrix,4),this.view.bindEmergenceAnimation(this.model.newCells)}))}}({model:new class{constructor({rows:t,columns:e}){this.rows=t,this.columns=e,this.zeroCells=[],this.matrixChanged=!0,this.newCells=[],this.matrix=new Array(t);for(let n=0;n<t;n++){this.matrix[n]=new Array(e);for(let t=0;t<e;t++)this.matrix[n][t]=0}}initializeMatrix(){let t,e;for(this.newCells=[],[t,e]=[Math.floor(Math.random()*this.rows),Math.floor(Math.random()*this.columns)],this.matrix[t][e]=2,this.newCells.push([t,e]);2===this.matrix[t][e];)[t,e]=[Math.floor(Math.random()*this.rows),Math.floor(Math.random()*this.columns)];this.matrix[t][e]=2,this.newCells.push([t,e]),this.matrixChanged=!0}fillRandomZeroCell(){if(this.matrixChanged&&this.zeroCells.length>0){const[e,n]=(t=this.zeroCells)[Math.floor(Math.random()*t.length)];this.matrix[e][n]=2,this.newCells=[[e,n]]}else this.newCells=[];var t}printMatrix(){for(let t=0;t<this.rows;t++)console.log(this.matrix[t]);console.log("\n")}moveLeft(){let t,e,n;this.zeroCells=[],this.matrixChanged=!1;for(let i=0;i<this.rows;i++){t=0,e=this.matrix[i][t],n=e;for(let r=1;r<this.columns;r++)0!==e?n<2*e&&(this.matrix[i][r]===e||0===this.matrix[i][r])?n+=this.matrix[i][r]:(this.matrix[i][t]!==n&&(this.matrixChanged=!0),this.matrix[i][t]=n,e=this.matrix[i][r],n=e,t++):(e=this.matrix[i][r],n=e);this.matrix[i][t]!==n&&(this.matrixChanged=!0),this.matrix[i][t]=n;for(let e=t+1;e<this.columns;e++)0!==this.matrix[i][e]&&(this.matrixChanged=!0),this.matrix[i][e]=0,this.zeroCells.push([i,e])}this.fillRandomZeroCell()}moveRight(){let t,e,n;this.zeroCells=[],this.matrixChanged=!1;for(let i=0;i<this.rows;i++){t=this.columns-1,e=this.matrix[i][t],n=e;for(let r=this.columns-2;r>=0;r--)0!==e?n<2*e&&(this.matrix[i][r]===e||0===this.matrix[i][r])?n+=this.matrix[i][r]:(this.matrix[i][t]!==n&&(this.matrixChanged=!0),this.matrix[i][t]=n,e=this.matrix[i][r],n=e,t--):(e=this.matrix[i][r],n=e);this.matrix[i][t]!==n&&(this.matrixChanged=!0),this.matrix[i][t]=n;for(let e=t-1;e>=0;e--)0!==this.matrix[i][e]&&(this.matrixChanged=!0),this.matrix[i][e]=0,this.zeroCells.push([i,e])}this.fillRandomZeroCell()}moveUp(){let t,e,n;this.zeroCells=[],this.matrixChanged=!1;for(let i=0;i<this.columns;i++){t=0,e=this.matrix[t][i],n=e;for(let r=1;r<this.rows;r++)0!==e?n<2*e&&(this.matrix[r][i]===e||0===this.matrix[r][i])?n+=this.matrix[r][i]:(this.matrix[t][i]!==n&&(this.matrixChanged=!0),this.matrix[t][i]=n,e=this.matrix[r][i],n=e,t++):(e=this.matrix[r][i],n=e);this.matrix[t][i]!==n&&(this.matrixChanged=!0),this.matrix[t][i]=n;for(let e=t+1;e<this.rows;e++)0!==this.matrix[e][i]&&(this.matrixChanged=!0),this.matrix[e][i]=0,this.zeroCells.push([e,i])}this.fillRandomZeroCell()}moveDown(){let t,e,n;this.zeroCells=[],this.matrixChanged=!1;for(let i=0;i<this.columns;i++){t=this.rows-1,e=this.matrix[t][i],n=e;for(let r=this.rows-2;r>=0;r--)0!==e?n<2*e&&(this.matrix[r][i]===e||0===this.matrix[r][i])?n+=this.matrix[r][i]:(this.matrix[t][i]!==n&&(this.matrixChanged=!0),this.matrix[t][i]=n,e=this.matrix[r][i],n=e,t--):(e=this.matrix[r][i],n=e);this.matrix[t][i]!==n&&(this.matrixChanged=!0),this.matrix[t][i]=n;for(let e=t-1;e>=0;e--)0!==this.matrix[e][i]&&(this.matrixChanged=!0),this.matrix[e][i]=0,this.zeroCells.push([e,i])}this.fillRandomZeroCell()}}({rows:4,columns:4}),view:new class{constructor({rows:t,columns:e}){let n,i,r;this.rows=t,this.columns=e,this.grid=document.querySelector(".grid"),this.matrix=new Array(t);for(let o=0;o<t;o++){n=document.createElement("div"),n.classList.add("grid__row","row"),this.grid.appendChild(n),this.matrix[o]=new Array(e);for(let t=0;t<e;t++)i=document.createElement("div"),i.classList.add("row__cell","cell"),n.appendChild(i),r=document.createElement("div"),r.classList.add("cell__square","square"),i.appendChild(r),r.innerHTML=0,r.dataset.value=0,r.addEventListener("animationend",(function(t){t.target.classList.remove("emergence","slide-left","slide-right","slide-up","slide-down")})),this.matrix[o][t]=r}}reloadGrid(t,e){let n,i;for(let r=0;r<this.rows;r++)for(let o=0;o<this.columns;o++){if(i=t[r][o],n=this.matrix[r][o],n.innerHTML=i||"",console.log(n.dataset.value,i),i&&n.dataset.value!=i)switch(e){case 1:n.classList.add("slide-left");break;case 2:n.classList.add("slide-right");break;case 3:n.classList.add("slide-up");case 4:n.classList.add("slide-down")}n.dataset.value=i}}bindMoveLeft(t){document.addEventListener("keydown",(function(e){"ArrowLeft"==e.code&&t()}))}bindMoveRight(t){document.addEventListener("keydown",(function(e){"ArrowRight"==e.code&&t()}))}bindMoveUp(t){document.addEventListener("keydown",(function(e){"ArrowUp"==e.code&&t()}))}bindMoveDown(t){document.addEventListener("keydown",(function(e){"ArrowDown"==e.code&&t()}))}bindEmergenceAnimation(t){t.forEach((([t,e])=>{this.matrix[t][e].classList.remove("slide-left","slide-right","slide-up","slide-down"),this.matrix[t][e].classList.add("emergence")}))}}({rows:4,columns:4})}),console.log("start2")})();