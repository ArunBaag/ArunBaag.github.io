(function(){
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open'); btn.setAttribute('aria-expanded', String(open));
  });
  var filters = document.querySelectorAll('.filters button');
  filters.forEach(function(b){
    b.addEventListener('click', function(){
      var f = b.getAttribute('data-f');
      filters.forEach(function(x){ x.setAttribute('aria-pressed', String(x === b)); });
      document.querySelectorAll('#webgrid .web').forEach(function(c){ c.hidden = !(f === 'all' || c.getAttribute('data-cat') === f); });
    });
  });
  document.querySelectorAll('[data-copy]').forEach(function(b){
    b.addEventListener('click', function(){
      var t = b.getAttribute('data-copy');
      var done = function(){ var o = b.textContent; b.textContent = 'Copied'; setTimeout(function(){ b.textContent = o; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(t).then(done, function(){});
    });
  });
})();
