(function(){
  var cfg = window.GVG_CONFIG || {};
  var phone = String(cfg.PHONE || '').trim();

  // Show the call button only when a real number has been set in site-config.js
  document.querySelectorAll('[data-call-btn]').forEach(function(el){
    if(!phone){ el.hidden = true; el.removeAttribute('href'); return; }
    el.hidden = false;
    el.href = 'tel:' + phone.replace(/[^\d+]/g, '');
    var label = el.querySelector('[data-call-label]');
    if(label) label.textContent = phone;
  });

  // Quiz: collect answers, then send people to the estimate form.
  // We do not invent a personalized dollar range. The only sourced figure
  // shown is the $13,000–$16,000 local dealer average.
  var step=1, total=5, answers={};
  var steps=document.querySelectorAll('.q-step');
  if(steps.length){
    var bar=document.getElementById('qBar');
    var back=document.getElementById('qBack'), next=document.getElementById('qNext');
    var book=document.getElementById('qBook'), restart=document.getElementById('qRestart');
    function show(){
      steps.forEach(function(s){ s.classList.toggle('on', +s.dataset.step===step); });
      if(bar) bar.style.width=(step/total*100)+'%';
      if(back) back.style.visibility = step>1 ? 'visible':'hidden';
      var isResult = step===total;
      if(next) next.style.display = isResult ? 'none':'';
      if(book) book.style.display = isResult ? '' : 'none';
      if(restart) restart.style.display = isResult ? '' : 'none';
      if(next){
        var group = currentGroup();
        next.disabled = !isResult && group && !answers[group];
        next.textContent = step===total-1 ? 'See next step' : 'Next';
      }
      if(isResult) renderResult();
    }
    function currentGroup(){
      var s=document.querySelector('.q-step[data-step="'+step+'"] .opts');
      return s ? s.dataset.group : null;
    }
    document.querySelectorAll('.opts').forEach(function(group){
      group.addEventListener('click', function(e){
        var btn=e.target.closest('.opt'); if(!btn) return;
        group.querySelectorAll('.opt').forEach(function(o){o.classList.remove('sel')});
        btn.classList.add('sel');
        var labelNode = btn.childNodes[0];
        answers[group.dataset.group]={
          label: (labelNode && labelNode.textContent ? labelNode.textContent : btn.textContent).trim()
        };
        if(next) next.disabled=false;
      });
    });
    function answerLine(){
      var parts=[];
      if(answers.town) parts.push(answers.town.label);
      if(answers.size) parts.push(answers.size.label + ' home');
      if(answers.cover) parts.push(answers.cover.label);
      if(answers.fuel) parts.push(answers.fuel.label);
      return parts.join(' · ');
    }
    function renderResult(){
      var sum=document.getElementById('qSummary');
      if(sum){
        var line=answerLine();
        sum.textContent = line
          ? ('Your answers: ' + line + '. The published local average is $13,000 to $16,000 installed. A licensed installer confirms the real number at a free in-home estimate.')
          : 'The published local average is $13,000 to $16,000 installed. Request a free estimate so a licensed installer can follow up.';
      }
    }
    if(next) next.addEventListener('click', function(){ if(step<total){ step++; show(); }});
    if(back) back.addEventListener('click', function(){ if(step>1){ step--; show(); }});
    if(restart) restart.addEventListener('click', function(){
      step=1; answers={};
      document.querySelectorAll('.opt.sel').forEach(function(o){o.classList.remove('sel')});
      show();
      var q=document.getElementById('quiz');
      if(q) q.scrollIntoView({behavior:'smooth'});
    });
    if(book) book.addEventListener('click', function(){
      var town=document.getElementById('fTown');
      if(town && answers.town){
        var opts=[].slice.call(town.options);
        var hit=opts.filter(function(o){ return o.value===answers.town.label || o.text===answers.town.label; })[0];
        if(hit) town.value=hit.value;
      }
      var notes=document.getElementById('fNotes');
      if(notes && answerLine()){
        var prefix='Quiz answers: '+answerLine()+'.';
        if(notes.value.indexOf('Quiz answers:')===-1){
          notes.value = notes.value ? (prefix+' '+notes.value) : prefix;
        }
      }
    });
    show();
  }

  // Town tabs (homepage)
  var tabs=document.querySelectorAll('.town-tabs button');
  var panels=document.querySelectorAll('.town-panel');
  tabs.forEach(function(t){
    t.addEventListener('click', function(){
      tabs.forEach(function(x){x.classList.remove('sel'); x.setAttribute('aria-selected','false')});
      t.classList.add('sel'); t.setAttribute('aria-selected','true');
      panels.forEach(function(p){ p.classList.toggle('on', p.dataset.panel===t.dataset.town); });
    });
  });

  // Lead form via free Web3Forms
  var form=document.getElementById('leadForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name=(document.getElementById('fName')||{}).value; name=name?name.trim():'';
      var phoneVal=(document.getElementById('fPhone')||{}).value; phoneVal=phoneVal?phoneVal.trim():'';
      var ok=document.getElementById('formOk');
      if(!name || !phoneVal){
        if(ok){ ok.classList.add('show'); ok.innerHTML='<strong>Two things missing.</strong> Add your name and a phone number so the estimate request is usable, then submit again.'; }
        return;
      }
      var key=String(cfg.WEB3FORMS_ACCESS_KEY||'').trim();
      if(!key){
        if(ok){ ok.classList.add('show'); ok.innerHTML='<strong>The form is not connected to an inbox yet.</strong> The site owner needs to add a free Web3Forms key in js/site-config.js.'; }
        return;
      }
      var townEl=document.getElementById('fTown');
      var town=townEl?townEl.value:'';
      var emailEl=document.getElementById('fEmail');
      var email=emailEl&&emailEl.value?emailEl.value.trim():'';
      var notesEl=document.getElementById('fNotes');
      var notes=notesEl&&notesEl.value?notesEl.value.trim():'';
      var btn=form.querySelector('button[type="submit"]');
      var btnText=btn?btn.textContent:'';
      if(btn){ btn.disabled=true; btn.textContent='Sending...'; }
      if(ok){ ok.classList.add('show'); ok.innerHTML='<strong>Sending your request...</strong>'; }
      fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({
          access_key:key,
          subject:'New estimate request from grassvalleygenerators.com',
          from_name:'Grass Valley Generators website',
          name:name,
          phone:phoneVal,
          email:email,
          town:town,
          notes:notes,
          botcheck:''
        })
      }).then(function(r){return r.json();}).then(function(res){
        if(btn){ btn.disabled=false; btn.textContent=btnText; }
        if(res && res.success){
          if(ok) ok.innerHTML='<strong>Got it, '+name.split(' ')[0]+'.</strong> Your '+town+' estimate request was sent to a licensed installer, who will follow up to set up a free in-home estimate.';
          form.reset();
        } else if(ok){
          ok.innerHTML='<strong>Something went wrong sending that.</strong> Please try again in a moment.';
        }
      }).catch(function(){
        if(btn){ btn.disabled=false; btn.textContent=btnText; }
        if(ok) ok.innerHTML='<strong>Something went wrong sending that.</strong> Please try again in a moment.';
      });
    });
  }
})();
