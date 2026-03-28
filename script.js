const words = ["IAS","IPS","IFS","Civil Services","UPSC Rank 1"];
let wi=0,ci=0,deleting=false;
function typeLoop(){
  const w=words[wi];
  document.getElementById('typeEl').textContent=w.slice(0,ci);
  if(!deleting){
    ci++;
    if(ci>w.length){deleting=true;setTimeout(typeLoop,2000);return;}
  } else {
    ci--;
    if(ci<0){deleting=false;wi=(wi+1)%words.length;ci=0;setTimeout(typeLoop,400);return;}
  }
  setTimeout(typeLoop,deleting?55:120);
}
setTimeout(typeLoop,600);

/* ── Countdown Timer ── */
const target = new Date().getTime() + (17*864e5)+(8*36e5);
setInterval(()=>{
  const d = target - Date.now();
  if(d<0) return;
  const pad = n => String(n).padStart(2,'0');
  document.getElementById('cd-d').textContent = pad(Math.floor(d/864e5));
  document.getElementById('cd-h').textContent = pad(Math.floor((d%864e5)/36e5));
  document.getElementById('cd-m').textContent = pad(Math.floor((d%36e5)/6e4));
  document.getElementById('cd-s').textContent = pad(Math.floor((d%6e4)/1e3));
},1000);

/* ── Scroll Progress ── */
window.addEventListener('scroll',()=>{
  const t=document.documentElement.scrollTop,h=document.documentElement.scrollHeight-innerHeight;
  document.getElementById('sp').style.width=`${(t/h)*100}%`;
});

/* ── Mobile Menu ── */
function toggleMob(){
  document.getElementById('hamBtn').classList.toggle('open');
  document.getElementById('mobDrawer').classList.toggle('open');
  document.getElementById('mobOverlay').classList.toggle('show');
  document.body.style.overflow = document.getElementById('mobDrawer').classList.contains('open')?'hidden':'';
}
function closeMob(){
  document.getElementById('hamBtn').classList.remove('open');
  document.getElementById('mobDrawer').classList.remove('open');
  document.getElementById('mobOverlay').classList.remove('show');
  document.body.style.overflow='';
}

/* ── Course Tab Filter ── */
function filterTab(cat,el){
  document.querySelectorAll('.ctab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.course-card').forEach(c=>{
    const show = cat==='all' || c.dataset.cat===cat;
    c.style.display = show?'flex':'none';
  });
}

/* ── Toppers Slider ── */
let slCur=0;
const tTrack = document.getElementById('tTrack');
const tCards = tTrack.querySelectorAll('.topper-card');
function visCount(){return window.innerWidth<=700?1:window.innerWidth<=900?2:4;}
function maxSlide(){return Math.max(0,tCards.length-visCount());}
function slideTo(dir){
  slCur = Math.max(0,Math.min(slCur+dir,maxSlide()));
  const gap=20, w=tCards[0].offsetWidth+gap;
  tTrack.style.transform=`translateX(-${slCur*w}px)`;
  buildDots();
}
function buildDots(){
  const el=document.getElementById('slDots'); el.innerHTML='';
  for(let i=0;i<=maxSlide();i++){
    const d=document.createElement('div');
    d.className='sl-dot'+(i===slCur?' active':'');
    d.onclick=()=>{slCur=i;slideTo(0);};
    el.appendChild(d);
  }
}
buildDots();
window.addEventListener('resize',()=>{slCur=Math.min(slCur,maxSlide());slideTo(0);});
let touchX=0;
tTrack.addEventListener('touchstart',e=>{touchX=e.touches[0].clientX;},{passive:true});
tTrack.addEventListener('touchend',e=>{const dx=touchX-e.changedTouches[0].clientX;if(Math.abs(dx)>40)slideTo(dx>0?1:-1);});

/* ── Counter Animation ── */
function countUp(el){
  const target=+el.dataset.count;let c=0;
  const step=Math.max(1,Math.ceil(target/60));
  const iv=setInterval(()=>{c=Math.min(c+step,target);el.textContent=c+(el.dataset.suffix||'');if(c>=target)clearInterval(iv);},20);
}

/* ── Intersection Observer ── */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('vis');
      if(e.target.dataset.count) countUp(e.target);
      observer.unobserve(e.target);
    }
  });
},{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fi,[data-count]').forEach(el=>observer.observe(el));

/* ── FAQ Toggle ── */
function toggleFaq(el){
  const item=el.parentElement, ans=item.querySelector('.faq-a');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f=>{
    f.classList.remove('open');
    f.querySelector('.faq-a').style.maxHeight=null;
  });
  if(!wasOpen){
    item.classList.add('open');
    ans.style.maxHeight=ans.scrollHeight+'px';
  }
}

/* ── FAQ Search ── */
document.getElementById('faqSearch').addEventListener('input',function(){
  const q=this.value.toLowerCase().trim();
  const items=document.querySelectorAll('#faqList .faq-item');
  let count=0;
  items.forEach(i=>{
    const txt=i.querySelector('.faq-q').textContent.toLowerCase();
    const show=txt.includes(q);
    i.style.display=show?'block':'none';
    if(!show){i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;}
    if(show)count++;
  });
  document.getElementById('faqNoResult').style.display=count===0?'block':'none';
});

/* ── Add FAQ ── */
document.getElementById('addFaqBtn').addEventListener('click',()=>{
  const qv=document.getElementById('newQ').value.trim();
  const av=document.getElementById('newA').value.trim();
  if(!qv||!av){toast('⚠️','Please enter both a question and answer!');return;}
  const item=document.createElement('div');
  item.className='faq-item fi vis';
  item.style.borderColor='var(--gold)';
  item.innerHTML=`<div class="faq-q" onclick="toggleFaq(this)">${qv} <span class="faq-ico">+</span></div><div class="faq-a"><p>${av}</p></div>`;
  document.getElementById('faqList').prepend(item);
  document.getElementById('newQ').value='';
  document.getElementById('newA').value='';
  toast('✅','FAQ added successfully!');
  setTimeout(()=>{item.style.borderColor='';},2000);
});

/* ── Contact Form ── */
function handleForm(e){
  e.preventDefault();
  const btn=document.getElementById('subBtn');
  btn.innerHTML='<span>Processing...</span>';btn.style.opacity='.7';
  setTimeout(()=>{
    btn.innerHTML='Submitted ✓';btn.style.background='#16A34A';btn.style.opacity='1';
    document.getElementById('sucBar').style.display='block';
    document.getElementById('enrollForm').reset();
    toast('✅','We\'ll contact you within 24 hours!');
    setTimeout(()=>{
      btn.innerHTML='Submit & Request Demo →';
      btn.style.background='';
      document.getElementById('sucBar').style.display='none';
    },4000);
  },1800);
}

/* ── Toast ── */
let toastTimer;
function toast(icon,msg){
  document.getElementById('toastIco').textContent=icon;
  document.getElementById('toastTxt').textContent=msg;
  const el=document.getElementById('toastEl');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),3200);
}