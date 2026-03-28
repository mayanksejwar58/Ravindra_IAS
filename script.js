/* ── QUIZ DATA ── */
const quizData = [
  {q:"Which Article of the Indian Constitution provides for the Right to Constitutional Remedies?",opts:["Article 30","Article 32","Article 35","Article 226"],ans:1,exp:"Article 32 grants citizens the right to move the Supreme Court for enforcement of Fundamental Rights. Dr. B.R. Ambedkar called it the 'heart and soul of the Constitution'."},
  {q:"The term 'Gig Economy' refers to:",opts:["An economy dominated by music industry","A labour market with short-term contracts or freelance work","An economy with high government expenditure","A market characterised by gig-based loans"],ans:1,exp:"Gig Economy refers to a free market system where temporary, flexible jobs are common and organizations contract with independent workers for short-term engagements. Examples include Uber, Zomato delivery workers, etc."},
  {q:"Which of the following is NOT a GS Paper in UPSC CSE Mains?",opts:["Indian Heritage and Culture","Governance, Constitution, Polity","Technology, Economic Development","Science and Mathematics"],ans:3,exp:"UPSC CSE Mains has 4 GS Papers: GS I (Heritage, Society), GS II (Governance, Polity, IR), GS III (Economy, Environment, Security), GS IV (Ethics). There is no separate 'Science and Mathematics' paper."},
  {q:"The Preamble of the Indian Constitution was amended by which Constitutional Amendment?",opts:["24th Amendment Act, 1971","42nd Amendment Act, 1976","44th Amendment Act, 1978","52nd Amendment Act, 1985"],ans:1,exp:"The 42nd Constitutional Amendment Act of 1976 amended the Preamble to include the words 'Socialist', 'Secular' and changed 'Unity of the Nation' to 'Unity and Integrity of the Nation'."},
  {q:"Which river is known as the 'Sorrow of Bihar'?",opts:["Ganga","Son","Kosi","Gandak"],ans:2,exp:"The Kosi river is known as the 'Sorrow of Bihar' due to its tendency to change course and cause devastating floods. It has shifted approximately 120 km westward over the past 250 years."},
  {q:"The Pradhan Mantri Jan Dhan Yojana (PMJDY) is primarily aimed at:",opts:["Providing housing to urban poor","Financial inclusion of weaker sections","Agricultural credit to farmers","Skill development for youth"],ans:1,exp:"PMJDY is a financial inclusion programme aimed at ensuring access to financial services — savings accounts, remittances, credit, insurance and pension — to the underserved sections of society."},
  {q:"Which Fundamental Duty is enshrined in Article 51A(g) of the Indian Constitution?",opts:["To abide by the Constitution","To protect and improve the natural environment","To develop scientific temper","To uphold and protect sovereignty of India"],ans:1,exp:"Article 51A(g) mandates every citizen to protect and improve the natural environment including forests, lakes, rivers and wildlife, and to have compassion for living creatures."},
  {q:"The 'Blue Economy' concept is most closely associated with:",opts:["Deep sea mining only","Sustainable use of ocean resources for economic growth","Blue-chip stock market investments","Water conservation in agriculture"],ans:1,exp:"Blue Economy refers to the sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems. It encompasses fisheries, shipping, tourism, renewable energy, etc."},
  {q:"Which of the following is the correct full form of MGNREGS?",opts:["Mahatma Gandhi National Rural Employment Guarantee Scheme","Mahatma Gandhi National Revenue Employment Guarantee Scheme","Ministry of Government National Rural Employment Grant Scheme","Mahatma Gandhi National Rural Education Guarantee Scheme"],ans:0,exp:"MGNREGS stands for Mahatma Gandhi National Rural Employment Guarantee Scheme. It guarantees 100 days of wage employment per year to adult members of rural households willing to do unskilled manual work."},
  {q:"In the context of India's foreign policy, what does the term 'Neighbourhood First Policy' primarily emphasize?",opts:["Military superiority over neighbours","Prioritizing relations and connectivity with SAARC and immediate neighbours","Attracting foreign investment from neighbouring countries","Building defence alliances with neighbouring nations"],ans:1,exp:"India's Neighbourhood First Policy prioritizes deepening relations and enhancing connectivity with its immediate neighbours in South Asia. It emphasizes cooperation in trade, development, infrastructure, and people-to-people ties to build a stable and prosperous region."}
];

/* ── PDF DATA ── */
const pdfCategories = {
  all: {title:"📥 Free Downloads — All Resources", pdfs:[
    {id:'ca',name:"March 2026 Current Affairs Magazine",cat:"Current Affairs",size:"4.2 MB",pages:84,icon:"📰"},
    {id:'pyq',name:"UPSC PYQ Papers 2015–2024 (GS I–IV)",cat:"Previous Year Papers",size:"18.5 MB",pages:320,icon:"📋"},
    {id:'notes',name:"GS Notes Library — All Papers (2026 Edition)",cat:"Study Notes",size:"12.1 MB",pages:450,icon:"📝"},
    {id:'mindmaps',name:"GS Mind Maps Collection (Papers I–IV)",cat:"Mind Maps",size:"6.8 MB",pages:200,icon:"🗺️"},
    {id:'ncert',name:"NCERT Essentials for UPSC (Class 6–12)",cat:"NCERT",size:"22.3 MB",pages:580,icon:"📚"},
    {id:'ethics',name:"Ethics Case Studies & Model Answers",cat:"GS Paper IV",size:"3.4 MB",pages:96,icon:"⚖️"},
    {id:'yojana',name:"Yojana & Kurukshetra Annual Archive 2025",cat:"Government Magazines",size:"8.7 MB",pages:240,icon:"🏛️"},
    {id:'prs',name:"PRS Legislative Research Capsule 2025",cat:"Bills & Acts",size:"2.1 MB",pages:64,icon:"📜"},
  ]},
  ca:{title:"📰 Current Affairs — March 2026",pdfs:[
    {id:'ca',name:"March 2026 Full CA Magazine",cat:"Current Affairs",size:"4.2 MB",pages:84,icon:"📰"},
    {id:'ca_feb',name:"February 2026 CA Magazine",cat:"Current Affairs",size:"3.9 MB",pages:78,icon:"📰"},
    {id:'ca_jan',name:"January 2026 CA Magazine",cat:"Current Affairs",size:"4.0 MB",pages:80,icon:"📰"},
    {id:'ca_q4',name:"Q4 2025 CA Quarterly Review",cat:"Current Affairs",size:"5.5 MB",pages:112,icon:"📰"},
  ]},
  pyq:{title:"📋 Previous Year Question Papers",pdfs:[
    {id:'pyq',name:"UPSC CSE 2024 — All GS Papers + Mains",cat:"PYQ",size:"5.2 MB",pages:88,icon:"📋"},
    {id:'pyq23',name:"UPSC CSE 2023 — GS Papers with Answers",cat:"PYQ",size:"4.8 MB",pages:80,icon:"📋"},
    {id:'pyq22',name:"UPSC CSE 2022 — Complete Paper Set",cat:"PYQ",size:"4.5 MB",pages:76,icon:"📋"},
    {id:'pyq_10yr',name:"10-Year PYQ Compilation 2015–2024",cat:"PYQ",size:"18.5 MB",pages:320,icon:"📋"},
  ]},
  mindmaps:{title:"🗺️ GS Mind Maps Library",pdfs:[
    {id:'mm1',name:"GS Paper I — History, Geography, Society",cat:"Mind Maps",size:"2.1 MB",pages:50,icon:"🗺️"},
    {id:'mm2',name:"GS Paper II — Polity, Governance, IR",cat:"Mind Maps",size:"2.3 MB",pages:55,icon:"🗺️"},
    {id:'mm3',name:"GS Paper III — Economy, Environment, Science",cat:"Mind Maps",size:"2.5 MB",pages:60,icon:"🗺️"},
    {id:'mm4',name:"GS Paper IV — Ethics, Integrity, Aptitude",cat:"Mind Maps",size:"1.9 MB",pages:45,icon:"🗺️"},
  ]},
  ncert:{title:"📚 NCERT Books for UPSC",pdfs:[
    {id:'ncert6',name:"NCERT Complete Set — Class 6 (All Subjects)",cat:"NCERT",size:"8.2 MB",pages:180,icon:"📚"},
    {id:'ncert9',name:"NCERT Complete Set — Class 9 (All Subjects)",cat:"NCERT",size:"10.1 MB",pages:220,icon:"📚"},
    {id:'ncert10',name:"NCERT Complete Set — Class 10 (All Subjects)",cat:"NCERT",size:"11.4 MB",pages:240,icon:"📚"},
    {id:'ncert12',name:"NCERT Complete Set — Class 12 (All Subjects)",cat:"NCERT",size:"12.3 MB",pages:260,icon:"📚"},
  ]},
  notes:{title:"📝 GS Notes Library",pdfs:[
    {id:'notes1',name:"GS Paper I Notes — History & Culture",cat:"Study Notes",size:"3.2 MB",pages:110,icon:"📝"},
    {id:'notes2',name:"GS Paper II Notes — Polity & Governance",cat:"Study Notes",size:"3.8 MB",pages:130,icon:"📝"},
    {id:'notes3',name:"GS Paper III Notes — Economy & Environment",cat:"Study Notes",size:"3.5 MB",pages:120,icon:"📝"},
    {id:'notes4',name:"GS Paper IV Notes — Ethics & Case Studies",cat:"Study Notes",size:"2.8 MB",pages:96,icon:"📝"},
  ]},
  ethics:{title:"⚖️ Ethics & GS Paper IV Resources",pdfs:[
    {id:'ethics',name:"Ethics Case Studies — 100 Solved Examples",cat:"GS Paper IV",size:"3.4 MB",pages:96,icon:"⚖️"},
    {id:'ethics2',name:"Ethics Thinkers & Philosophical Concepts",cat:"GS Paper IV",size:"2.1 MB",pages:65,icon:"⚖️"},
    {id:'ethics3',name:"Previous Year Ethics Questions 2013–2024",cat:"GS Paper IV",size:"1.8 MB",pages:55,icon:"⚖️"},
  ]},
  yojana:{title:"🏛️ Government Magazines Archive",pdfs:[
    {id:'yojana',name:"Yojana Annual Archive 2025",cat:"Government Magazine",size:"8.7 MB",pages:240,icon:"🏛️"},
    {id:'kurukshetra',name:"Kurukshetra Annual Archive 2025",cat:"Government Magazine",size:"6.2 MB",pages:180,icon:"🏛️"},
    {id:'ep',name:"Economic Survey 2024-25 Summary",cat:"Economic Survey",size:"4.5 MB",pages:120,icon:"📊"},
  ]},
  prs:{title:"📜 Bills, Acts & Legislative Research",pdfs:[
    {id:'prs',name:"PRS Legislative Research Capsule 2025",cat:"Bills & Acts",size:"2.1 MB",pages:64,icon:"📜"},
    {id:'prs2',name:"Key Constitutional Amendments Summary",cat:"Polity",size:"1.5 MB",pages:44,icon:"📜"},
    {id:'prs3',name:"Important Committees & Their Reports",cat:"Polity",size:"1.8 MB",pages:52,icon:"📜"},
  ]},
  infographics:{title:"📊 GS Infographics Library",pdfs:[
    {id:'ig1',name:"Economy Infographics — Budget, GDP, Trade",cat:"Infographics",size:"3.5 MB",pages:40,icon:"📊"},
    {id:'ig2',name:"Geography Infographics — Maps & Diagrams",cat:"Infographics",size:"4.1 MB",pages:50,icon:"📊"},
    {id:'ig3',name:"Polity Infographics — Constitutional Framework",cat:"Infographics",size:"2.8 MB",pages:35,icon:"📊"},
  ]},
};

/* ── PDF CONTENT SAMPLES ── */
const pdfContents = {
  ca:`<h2>📰 Current Affairs — March 2026</h2>
<h3>Economy & Finance</h3>
<p><strong>IMF Projects India's GDP Growth at 6.8% for FY2026-27</strong></p>
<p>The International Monetary Fund's latest World Economic Outlook (WEO) has projected India's GDP growth at 6.8% for FY2026-27, retaining its position as the fastest-growing major economy globally for the third consecutive year. The report attributes this to strong domestic consumption, capital formation, and robust services sector performance.</p>
<div class="highlight">📌 UPSC Relevance: GS Paper III — Indian Economy, GS Paper II — International Institutions. Key concepts: GDP, IMF, WEO, Purchasing Power Parity.</div>
<h3>Polity & Governance</h3>
<p><strong>Supreme Court on Electoral Bond Transparency</strong></p>
<p>The Constitution Bench of the Supreme Court delivered a unanimous verdict expanding disclosure requirements for political party funding, building on its landmark 2024 judgment. The court held that voters have a constitutional right to know the source of political funding under Article 19(1)(a).</p>
<div class="highlight">📌 UPSC Relevance: GS Paper II — Polity, Governance. Key concepts: Electoral Bonds, Article 19, RTI, Political funding transparency.</div>
<h3>International Relations</h3>
<p><strong>India-US 2+2 Ministerial Dialogue</strong></p>
<p>The fourth India-US 2+2 Ministerial Dialogue yielded significant outcomes including agreements on defence technology transfer under INDUS X, semiconductor manufacturing collaboration, and a joint deep space exploration framework under ARTEMIS.</p>
<div class="highlight">📌 UPSC Relevance: GS Paper II — International Relations. Key concepts: 2+2 Dialogue, INDUS X, ARTEMIS, Bilateral Defence Agreements.</div>
<h3>Science & Technology</h3>
<p><strong>ISRO RLV-LEX 03 Success</strong></p>
<p>ISRO successfully tested its Reusable Launch Vehicle technology demonstrator (RLV-LEX 03), completing an autonomous runway landing experiment. This marks India as one of only three nations with demonstrated RLV technology, alongside the US and China.</p>
<div class="highlight">📌 UPSC Relevance: GS Paper III — Science & Technology. Key concepts: RLV, ISRO, Reusable rockets, Space policy.</div>`,
  pyq:`<h2>📋 UPSC CSE 2024 — GS Paper I</h2>
<h3>Section A: Indian Heritage and Culture</h3>
<p><strong>Q1.</strong> Discuss the contribution of Gupta period to Indian art and architecture. How did it influence subsequent artistic traditions in South and Southeast Asia? (250 words)</p>
<p><strong>Q2.</strong> The Bhakti movement democratized access to spirituality in medieval India. Critically examine. (150 words)</p>
<p><strong>Q3.</strong> With reference to the Indus Valley Civilization, analyze the evidence for trade networks and their significance for understanding ancient Indian economy. (250 words)</p>
<h3>Section B: Modern Indian History</h3>
<p><strong>Q4.</strong> How did the role of the press evolve in shaping Indian nationalist consciousness during 1880–1920? Discuss with examples. (250 words)</p>
<p><strong>Q5.</strong> Assess the social reform movements of the 19th century in India and their lasting impact on Indian society. (250 words)</p>
<div class="highlight">📌 Study Tip: Answers for 250-word questions should have: Introduction (2-3 lines) → Body (6-7 para) → Conclusion (2 lines). Use facts, examples, quotes.</div>
<h3>Section C: Geography</h3>
<p><strong>Q6.</strong> Explain the formation of tropical cyclones and their impact on the Indian subcontinent. How has climate change altered their frequency and intensity? (250 words)</p>
<p><strong>Q7.</strong> What is the significance of the Western Ghats as a biodiversity hotspot? Discuss the threats it faces and the measures taken for its conservation. (250 words)</p>`,
  notes:`<h2>📝 GS Paper II — Indian Polity Key Notes</h2>
<h3>Fundamental Rights (Articles 12–35)</h3>
<p>The Fundamental Rights are guaranteed under Part III of the Constitution and are enforceable by courts. They represent the essence of democracy and individual liberty.</p>
<ul>
<li><strong>Article 14:</strong> Right to Equality — Equality before law and equal protection of law</li>
<li><strong>Article 19:</strong> Six Freedoms — Speech, Assembly, Association, Movement, Residence, Profession</li>
<li><strong>Article 21:</strong> Right to Life and Personal Liberty — Expanded by judiciary to include right to livelihood, health, education</li>
<li><strong>Article 32:</strong> Right to Constitutional Remedies — 'Heart and Soul' of the Constitution (Dr. Ambedkar)</li>
</ul>
<div class="highlight">📌 Key Point: Fundamental Rights are NOT absolute — they can be restricted by the State on grounds specified in the Constitution (public order, morality, security, etc.)</div>
<h3>Directive Principles of State Policy (Articles 36–51)</h3>
<p>DPSPs are non-justiciable guidelines in Part IV directing the State to establish a welfare state. They are drawn from Irish Constitution.</p>
<ul>
<li><strong>Socialistic Principles:</strong> Articles 38, 39, 41, 42, 43, 43A, 47</li>
<li><strong>Gandhian Principles:</strong> Articles 40, 43, 43B, 46, 47, 48</li>
<li><strong>Liberal-Intellectual Principles:</strong> Articles 44, 45, 48A, 49, 50, 51</li>
</ul>
<h3>Parliament of India</h3>
<p>India has a bicameral legislature consisting of Lok Sabha (House of the People) and Rajya Sabha (Council of States) along with the President.</p>
<ul><li><strong>Lok Sabha:</strong> Maximum 550 elected + 2 nominated (Anglo-Indian) members; 5-year term</li>
<li><strong>Rajya Sabha:</strong> Maximum 250 members (238 elected + 12 nominated); Permanent House, not subject to dissolution</li></ul>`,
  mindmaps:`<h2>🗺️ GS Paper II — Polity Mind Map</h2>
<h3>The Constitution at a Glance</h3>
<ul>
<li>📅 <strong>Adopted:</strong> 26 November 1949 | <strong>Enforced:</strong> 26 January 1950</li>
<li>📖 <strong>Articles:</strong> 395 originally → 448+ now (after amendments)</li>
<li>📋 <strong>Schedules:</strong> 8 originally → 12 now</li>
<li>📜 <strong>Parts:</strong> 22 Parts covering all constitutional provisions</li>
</ul>
<div class="highlight">🔑 Key Sources: British Constitution (Parliamentary system, Rule of Law), US (FR, Judicial Review, Federal structure), Ireland (DPSP), Canada (Federal with strong centre), Australia (Concurrent list)</div>
<h3>Emergency Provisions — Quick Revision</h3>
<ul>
<li>⚡ <strong>Art. 352 — National Emergency:</strong> External aggression or armed rebellion → Proclaimed by President on PM & Cabinet advice</li>
<li>⚡ <strong>Art. 356 — State Emergency (President's Rule):</strong> Constitutional failure in state → Parliament approval needed</li>
<li>⚡ <strong>Art. 360 — Financial Emergency:</strong> Financial stability/credit threatened → Never declared so far</li>
</ul>
<h3>Fundamental Rights — Writs</h3>
<ul>
<li>🔵 <strong>Habeas Corpus:</strong> "Have the body" — Challenge illegal detention</li>
<li>🔵 <strong>Mandamus:</strong> "We command" — Direct public authority to perform duty</li>
<li>🔵 <strong>Prohibition:</strong> Issued by superior court to inferior court to stop overstepping jurisdiction</li>
<li>🔵 <strong>Certiorari:</strong> Quash orders of lower courts/tribunals</li>
<li>🔵 <strong>Quo Warranto:</strong> "By what authority" — Challenge appointment to public office</li>
</ul>`,
  ethics:`<h2>⚖️ Ethics Case Studies — GS Paper IV</h2>
<h3>Case Study 1: The Dilemma of an IAS Officer</h3>
<p>Shyam Lal, an IAS officer posted as District Collector, discovers that a major irrigation project in his district is being executed using substandard materials. The contractor has close political connections. Several officials have already raised concerns and were transferred. The project, if completed as is, may cause structural failure affecting thousands of farmers.</p>
<p><strong>Questions:</strong></p>
<ul><li>(a) Identify the ethical issues in this case. (100 words)</li>
<li>(b) What should Shyam Lal do? Discuss the options available with their merits and demerits. (150 words)</li>
<li>(c) If Shyam Lal proceeds with whistleblowing, what support mechanisms exist for him? (100 words)</li></ul>
<div class="highlight">📌 Key Concepts: Integrity, Courage of conviction, Conflict of interest, Whistleblower Protection Act 2014, Probity in public life</div>
<h3>Case Study 2: Data Privacy vs Public Interest</h3>
<p>As a senior officer in a health ministry, you gain access to data showing a pharmaceutical company's drug has serious undisclosed side effects. Releasing it publicly would save lives but would also breach confidentiality agreements and cause significant financial damage to the company, which employs 50,000 people.</p>
<div class="highlight">📌 Key Concepts: Utilitarian ethics, Deontological ethics, Right to information, Corporate accountability, Whistleblowing</div>`,
};
// Fill missing content with generic
function getPdfContent(id){return pdfContents[id]||pdfContents['notes'];}

/* ── QUIZ STATE ── */
let qIdx=0,selected=null,score=0,wrong=0,skipped=0,locked=false;

function openQuizModal(){
  qIdx=0;score=0;wrong=0;skipped=0;locked=false;selected=null;
  renderQuiz();
  openModal('quizModal');
}

function renderQuiz(){
  const c=document.getElementById('quizContainer');
  if(qIdx>=quizData.length){
    const pct=Math.round((score/quizData.length)*100);
    c.innerHTML=`<div class="quiz-score">
      <div class="score-big">${pct}%</div>
      <p>You scored <strong>${score} out of ${quizData.length}</strong> questions correctly</p>
      <div class="quiz-score-grid">
        <div class="sc-cell"><div class="sc-n sc-correct">${score}</div><div class="sc-l">Correct ✓</div></div>
        <div class="sc-cell"><div class="sc-n sc-wrong">${wrong}</div><div class="sc-l">Wrong ✗</div></div>
        <div class="sc-cell"><div class="sc-n sc-skipped">${skipped}</div><div class="sc-l">Skipped →</div></div>
      </div>
      <p>${pct>=80?'🏆 Excellent! You are well-prepared for UPSC!':pct>=60?'👍 Good performance! Keep practising daily.':pct>=40?'📚 Fair attempt. Review current affairs daily.':'💪 Keep going! Consistency is key for UPSC.'}</p>
      <button class="q-btn q-btn-next" style="width:100%;justify-content:center;" onclick="openQuizModal()">🔄 Retake Quiz</button>
    </div>`;
    return;
  }
  const q=quizData[qIdx];
  const prog=Math.round((qIdx/quizData.length)*100);
  locked=false;selected=null;
  c.innerHTML=`
    <div class="quiz-progress"><div class="quiz-progress-bar" style="width:${prog}%"></div></div>
    <div class="quiz-meta"><span class="qnum">Question ${qIdx+1} of ${quizData.length}</span><span>Score: ${score} | Wrong: ${wrong}</span></div>
    <div class="quiz-q-text">${q.q}</div>
    <div class="quiz-opts">
      ${q.opts.map((o,i)=>`<div class="quiz-opt" id="opt${i}" onclick="selectOpt(${i})"><span class="opt-letter">${'ABCD'[i]}</span>${o}</div>`).join('')}
    </div>
    <div class="quiz-explanation" id="qExp"><strong>💡 Explanation:</strong> ${q.exp}</div>
    <div class="quiz-actions">
      <button class="q-btn q-btn-skip" onclick="skipQ()">Skip →</button>
      <button class="q-btn q-btn-next" id="nextBtn" onclick="nextQ()" disabled>Next Question →</button>
    </div>`;
}

function selectOpt(i){
  if(locked)return;
  locked=true;selected=i;
  const q=quizData[qIdx];
  document.querySelectorAll('.quiz-opt').forEach((el,idx)=>{
    el.classList.add('locked');
    if(idx===q.ans) el.classList.add('correct');
    else if(idx===i&&i!==q.ans) el.classList.add('wrong');
  });
  if(i===q.ans)score++;else wrong++;
  document.getElementById('qExp').classList.add('show');
  document.getElementById('nextBtn').disabled=false;
}
function nextQ(){qIdx++;renderQuiz();}
function skipQ(){skipped++;qIdx++;renderQuiz();}

/* ── PDF MODAL ── */
function openPdfModal(cat){
  const data=pdfCategories[cat]||pdfCategories.all;
  document.getElementById('pdfModalTitle').textContent=data.title;
  const list=document.getElementById('pdfList');
  list.innerHTML=data.pdfs.map(p=>`
    <div class="pdf-item" onclick="viewPdf('${p.id}','${p.name}')">
      <div class="pdf-icon">${p.icon}</div>
      <div class="pdf-info">
        <div class="pdf-name">${p.name}</div>
        <div class="pdf-meta">${p.cat} &nbsp;·&nbsp; ${p.pages} pages</div>
      </div>
      <span class="pdf-size">${p.size}</span>
      <button class="pdf-dl-btn" onclick="event.stopPropagation();dlPdf('${p.name}')">📥 Get</button>
    </div>`).join('');
  showPdfList();
  openModal('pdfModal');
}

function viewPdf(id,name){
  document.getElementById('pdfViewerTitle').textContent=name;
  document.getElementById('pdfViewerContent').innerHTML=getPdfContent(id);
  document.getElementById('pdfListView').style.display='none';
  document.getElementById('pdfViewer').classList.add('show');
}
function showPdfList(){
  document.getElementById('pdfListView').style.display='block';
  document.getElementById('pdfViewer').classList.remove('show');
}
function dlPdf(name){toast('📥',`Downloading: ${name.substring(0,35)}...`);}

/* ── MODAL HELPERS ── */
function openModal(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow='';}
function closeOnBg(e,id){if(e.target.id===id)closeModal(id);}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){['quizModal','pdfModal'].forEach(closeModal);document.body.style.overflow='';}});

/* ── THEME TOGGLE ── */
function toggleTheme(){
  const html=document.documentElement;
  const isDark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',isDark?'light':'dark');
  document.getElementById('themeBtn').textContent=isDark?'🌙':'☀️';
  const mbt=document.getElementById('mobThemeBtn');
  if(mbt)mbt.textContent=isDark?'Switch to Dark':'Switch to Light';
  localStorage.setItem('rivas-theme',isDark?'light':'dark');
  toast(isDark?'☀️':'🌙',`Switched to ${isDark?'Light':'Dark'} Mode`);
}
(function(){
  const saved=localStorage.getItem('rivas-theme');
  if(saved==='dark'){document.documentElement.setAttribute('data-theme','dark');document.getElementById('themeBtn').textContent='☀️';}
})();

/* ── TYPING ── */
const words=["IAS","IPS","IFS","Civil Services","UPSC Rank 1"];
let wi=0,ci=0,deleting=false;
function typeLoop(){
  const w=words[wi];
  document.getElementById('typeEl').textContent=w.slice(0,ci);
  if(!deleting){ci++;if(ci>w.length){deleting=true;setTimeout(typeLoop,2000);return;}}
  else{ci--;if(ci<0){deleting=false;wi=(wi+1)%words.length;ci=0;setTimeout(typeLoop,400);return;}}
  setTimeout(typeLoop,deleting?55:120);
}
setTimeout(typeLoop,600);

/* ── COUNTDOWN ── */
const target=new Date().getTime()+(17*864e5)+(8*36e5);
setInterval(()=>{
  const d=target-Date.now();if(d<0)return;
  const pad=n=>String(n).padStart(2,'0');
  document.getElementById('cd-d').textContent=pad(Math.floor(d/864e5));
  document.getElementById('cd-h').textContent=pad(Math.floor((d%864e5)/36e5));
  document.getElementById('cd-m').textContent=pad(Math.floor((d%36e5)/6e4));
  document.getElementById('cd-s').textContent=pad(Math.floor((d%6e4)/1e3));
},1000);

/* ── SCROLL PROGRESS + SCROLL TO TOP ── */
const stBtn=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{
  const t=document.documentElement.scrollTop,h=document.documentElement.scrollHeight-innerHeight;
  document.getElementById('sp').style.width=`${(t/h)*100}%`;
  stBtn.classList.toggle('show',t>400);
},{ passive:true });

/* ── MOBILE MENU ── */
function toggleMob(){document.getElementById('hamBtn').classList.toggle('open');document.getElementById('mobDrawer').classList.toggle('open');document.getElementById('mobOverlay').classList.toggle('show');document.body.style.overflow=document.getElementById('mobDrawer').classList.contains('open')?'hidden':'';}
function closeMob(){document.getElementById('hamBtn').classList.remove('open');document.getElementById('mobDrawer').classList.remove('open');document.getElementById('mobOverlay').classList.remove('show');document.body.style.overflow='';}

/* ── COURSE TAB FILTER ── */
function filterTab(cat,el){document.querySelectorAll('.ctab').forEach(t=>t.classList.remove('active'));el.classList.add('active');document.querySelectorAll('.course-card').forEach(c=>{c.style.display=(cat==='all'||c.dataset.cat===cat)?'flex':'none';});}

/* ── TOPPERS SLIDER ── */
let slCur=0;
const tTrack=document.getElementById('tTrack');
const tCards=tTrack.querySelectorAll('.topper-card');
function visCount(){return window.innerWidth<=700?1:window.innerWidth<=900?2:4;}
function maxSlide(){return Math.max(0,tCards.length-visCount());}
function slideTo(dir){slCur=Math.max(0,Math.min(slCur+dir,maxSlide()));const gap=20,w=tCards[0].offsetWidth+gap;tTrack.style.transform=`translateX(-${slCur*w}px)`;buildDots();}
function buildDots(){const el=document.getElementById('slDots');el.innerHTML='';for(let i=0;i<=maxSlide();i++){const d=document.createElement('div');d.className='sl-dot'+(i===slCur?' active':'');d.onclick=()=>{slCur=i;slideTo(0);};el.appendChild(d);}}
buildDots();
window.addEventListener('resize',()=>{slCur=Math.min(slCur,maxSlide());slideTo(0);});
let touchX=0;
tTrack.addEventListener('touchstart',e=>{touchX=e.touches[0].clientX;},{passive:true});
tTrack.addEventListener('touchend',e=>{const dx=touchX-e.changedTouches[0].clientX;if(Math.abs(dx)>40)slideTo(dx>0?1:-1);});

/* ── COUNTER ANIMATION ── */
function countUp(el){const target=+el.dataset.count;let c=0;const step=Math.max(1,Math.ceil(target/60));const iv=setInterval(()=>{c=Math.min(c+step,target);el.textContent=c;if(c>=target)clearInterval(iv);},20);}

/* ── INTERSECTION OBSERVER ── */
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');if(e.target.dataset.count)countUp(e.target);observer.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.fi,[data-count]').forEach(el=>observer.observe(el));

/* ── FAQ TOGGLE ── */
function toggleFaq(el){const item=el.parentElement,ans=item.querySelector('.faq-a');const wasOpen=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(f=>{f.classList.remove('open');f.querySelector('.faq-a').style.maxHeight=null;});if(!wasOpen){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px';}}

/* ── FAQ SEARCH ── */
document.getElementById('faqSearch').addEventListener('input',function(){const q=this.value.toLowerCase().trim();const items=document.querySelectorAll('#faqList .faq-item');let count=0;items.forEach(i=>{const show=i.querySelector('.faq-q').textContent.toLowerCase().includes(q);i.style.display=show?'block':'none';if(!show){i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;}if(show)count++;});document.getElementById('faqNoResult').style.display=count===0?'block':'none';});

/* ── ADD FAQ ── */
document.getElementById('addFaqBtn').addEventListener('click',()=>{const qv=document.getElementById('newQ').value.trim(),av=document.getElementById('newA').value.trim();if(!qv||!av){toast('⚠️','Please enter both a question and answer!');return;}const item=document.createElement('div');item.className='faq-item fi vis';item.style.borderColor='var(--gold)';item.innerHTML=`<div class="faq-q" onclick="toggleFaq(this)">${qv} <span class="faq-ico">+</span></div><div class="faq-a"><p>${av}</p></div>`;document.getElementById('faqList').prepend(item);document.getElementById('newQ').value='';document.getElementById('newA').value='';toast('✅','FAQ added successfully!');setTimeout(()=>{item.style.borderColor='';},2000);});

/* ── CONTACT FORM ── */
function handleForm(e){e.preventDefault();const btn=document.getElementById('subBtn');btn.innerHTML='<span>Processing...</span>';btn.style.opacity='.7';setTimeout(()=>{btn.innerHTML='Submitted ✓';btn.style.background='#16A34A';btn.style.opacity='1';document.getElementById('sucBar').style.display='block';document.getElementById('enrollForm').reset();toast('✅',"We'll contact you within 24 hours!");setTimeout(()=>{btn.innerHTML='Submit & Request Demo →';btn.style.background='';document.getElementById('sucBar').style.display='none';},4000);},1800);}

/* ── TOAST ── */
let toastTimer;
function toast(icon,msg){document.getElementById('toastIco').textContent=icon;document.getElementById('toastTxt').textContent=msg;const el=document.getElementById('toastEl');el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3200);}