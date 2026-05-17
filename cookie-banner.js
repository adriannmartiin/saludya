(function(){
  if(localStorage.getItem('cookies-ok')) return;
  var b=document.createElement('div'); b.id='cookie-banner';
  b.innerHTML='<p>Usamos cookies propias y de terceros (Google Analytics y AdSense) para analizar el tráfico y mostrar publicidad. <a href="/cookies.html">Más info</a></p><button id="cookie-accept" onclick="this.parentNode.style.display=\'none\';localStorage.setItem(\'cookies-ok\',1)">Aceptar</button>';
  document.body.appendChild(b);
})();