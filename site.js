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
(function(){
  var f=document.getElementById('cf'); if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var v=function(id){return (document.getElementById(id).value||'').trim();};
    var subj='Website enquiry: '+v('cf-topic')+(v('cf-co')?' ('+v('cf-co')+')':'');
    var body='Name: '+v('cf-name')+'\nCompany: '+v('cf-co')+'\nEmail: '+v('cf-email')+'\nPhone: '+v('cf-phone')+'\nTopic: '+v('cf-topic')+'\n\n'+v('cf-msg');
    location.href='mailto:'+f.getAttribute('data-email')+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
  });
})();
