!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;var d,a=function(){t.disabled?(t.disabled=!1,e.disabled=!0):(t.disabled=!0,e.disabled=!1)};t.addEventListener("click",(function(){d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),a()})),e.addEventListener("click",(function(){clearInterval(d),a()}))}();
//# sourceMappingURL=01-color-switcher.f7f4ebdd.js.map