/* ---------- CONFIG (edit nama, umur, pesan di sini) ---------- */
const DEFAULT={name:'Wilda',age:21,
  message:"So proud to know you and to be your friend. I hope you have a great year ahead, filled with love, laughter, and all the things that make you happy. You deserve it all! Keep shining bright and never forget how amazing you are. Wish you all the best. Happy birthday, Wilda!  ~r"};
const cfg=DEFAULT;
const ord=n=>{const m=n%100; if(m>=11&&m<=13) return n+'th'; return n+({1:'st',2:'nd',3:'rd'}[n%10]||'th')};

/* ---------- PIXEL SPRITES (gambar asli buatan sendiri) ---------- */
const SPR={
duck:{p:{y:'#ffd84a',Y:'#f0b92a',o:'#ff9a3c',k:'#3a2a1a',w:'#fff6d6'},g:[
"......yyyy......",
".....yyyyyy.....",
".....ykyyyy.....",
".....yyyyooo....",
".....yyyyyoo....",
"......yyyy......",
"...yy.yyyyyy....",
"..yyyyyyyyyyyy..",
".yyywyyyyyyyyyy.",
".yyyywyyyyyYYyy.",
".yyyyyyyyyyYYyy.",
"..yyyyyyyyyyyy..",
"...yyyyyyyyyy...",
".....oo..oo.....",
]},
ham:{p:{o:'#f2a65a',w:'#fff1dc',k:'#3a2417',p:'#f37f86',O:'#d9843d'},g:[
".oo........oo.",
"oOOo......oOOo",
"oooooooooooooo",
"oooooooooooooo",
"owwwwwwwwwwwwo",
"owkwwwwwwwwkwo",
"owwwwwppwwwwwo",
"owwpwwwwwwpwwo",
".owwwwwwwwwwo.",
"..oooooooooo..",
]},
gift:{p:{b:'#6f7fe8',B:'#4a58c4',r:'#ff4d5e',R:'#c9283a',s:'#ffffff'},g:[
".....rrr..rrr.....",
"....rRRrrrRRr.....",
".....rrrRRrrr.....",
"......rrrrrr......",
"bbbbbbbrrrrbbbbbbb",
"bsbbbbbrrrrbbbbbbB",
"bbbbbbbrrrrbbbbbbB",
"bBBBBBBrrrrBBBBBBB",
"bbbbbbbrrrrbbbbbbB",
"bbbbbbbrrrrbbbbbbB",
"BBBBBBBRRRRBBBBBBB",
]},
cake:{p:{r:'#ff4d5e',y:'#ffd23f',w:'#fff5f0',p:'#ff8fb1',b:'#c96f4a',B:'#a8553a'},g:[
"....r.....",
"....y.....",
".wwwwwwww.",
"wwpwwpwwpw",
"wppppppppw",
"wwwwwwwwww",
"bbbbbbbbbb",
"bBbBbBbBbB",
"bbbbbbbbbb",
"BBBBBBBBBB",
]},
heart:{p:{r:'#ff5a7a',h:'#ffc2d0'},g:[
".rr..rr.",
"rhrrrrrr",
"rrrrrrrr",
".rrrrrr.",
"..rrrr..",
"...rr...",
]},
bal1:{p:{r:'#ff7a1a',R:'#c9520a',w:'#ffe2b8',s:'#444'},g:[
"..rrrr..",
".rwrrrr.",
"rwrrrrrR",
"rwrrrrrR",
"rrrrrrrR",
".rrrrrR.",
"..RrrR..",
"....R...",
"....s...",
"...s....",
"....s...",
"...s....",
]},
bal2:{p:{r:'#3a62ff',R:'#1f2fa0',w:'#bcd0ff',s:'#444'},g:[
"..rrrr..",
".rwrrrr.",
"rwrrrrrR",
"rwrrrrrR",
"rrrrrrrR",
".rrrrrR.",
"..RrrR..",
"....R...",
"....s...",
"...s....",
"....s...",
"...s....",
]},
bal3:{p:{r:'#ff4d5e',R:'#b02033',w:'#ffc2c8',s:'#444'},g:[
"..rrrr..",
".rwrrrr.",
"rwrrrrrR",
"rwrrrrrR",
"rrrrrrrR",
".rrrrrR.",
"..RrrR..",
"....R...",
"....s...",
"...s....",
"....s...",
"...s....",
]},
bal4:{p:{r:'#ffd23f',R:'#c99a10',w:'#fff2b0',s:'#444'},g:[
"..rrrr..",
".rwrrrr.",
"rwrrrrrR",
"rwrrrrrR",
"rrrrrrrR",
".rrrrrR.",
"..RrrR..",
"....R...",
"....s...",
"...s....",
"....s...",
"...s....",
]},
sun:{p:{y:'#ffcc1f',Y:'#e69a0c',b:'#6b3f1e',g:'#3fa04a',G:'#2c7a37'},g:[
"..y.yYy.y..",
".yyyyyyyyy.",
"yyybbbbbyyy",
"Yybbbbbbbyy",
"yyybbbbbyyy",
".yyyyyyyyy.",
"..y.yyy.y..",
"....gG.....",
"..g.gG.g...",
"...ggGgg...",
"....gG.....",
"....gG.....",
]},
bird:{p:{b:'#59b8f0',B:'#2f86c4',w:'#e8f6ff',k:'#1b2a3a',o:'#ff9a3c'},g:[
"....bbbb....",
"...bbbbbb...",
"..bbbbbbbb..",
".bbkbbbbkbb.",
".bbbbooobbb.",
".bbbbbbbbbb.",
".bwwbbbbwwb.",
"..bwwwwwwb..",
"..BbbbbbbB..",
"...b....b...",
]},
cat:{p:{k:'#509ee7',K:'#2a87c5',w:'#292523',p:'#ff8fb1',r:'#ff4d5e'},g:[
"k..........k",
"kk........kk",
"kKkkkkkkkkKk",
"kkkkkkkkkkkk",
"kkkkkkkkkkkk",
"kkwwkkkkwwkk",
"kkwkkkkkkwkk",
"kkkkkprkkkkk",
".kkkkkkkkkk.",
"..kkkwwkkk..",
"..kwwwwwwk..",
".kkwwwwwwkk.",
".kk.kkkk.kk.",
]},
pop:{p:{o:'#ff9a3c',O:'#d9701a',r:'#ff4d5e',b:'#3a8eff',y:'#ffd23f',g:'#3fc46a'},g:[
"..r...y..b.",
".y..b...g..",
"...g...r...",
"oooo.......",
"oOoooo.....",
".oOoooo....",
"..oOooooo..",
"...oOoooooo",
"....OOooooo",
".....OOOOo.",
]},
frogA:{p:{g:'#50a2e6',G:'#496bc9',w:'#fff8ef',k:'#1c1c24',p:'#ff9aa8',o:'#ff9a3c',n:'#f6d9b8'},g:[
".gg........gg.",
"gGGg......gGGg",
"gGGgggggggggGg",
"gggggggggggggg",
"gggwwwwwwwwggg",
"ggwwwwwwwwwwgg",
"ggwkkwwwwkkwgg",
"gwpkkwwwwkkpwg",
"gwppwwooowppwg",
"ggwwwwwwwwwwgg",
".ggwwwwwwwwgg.",
"..gggggggggg..",
".gggGggggGggg.",
".gg.gggggg.gg.",
]},
bunB:{p:{g:'#ffa9c4',G:'#f0799f',w:'#fff8ef',k:'#1c1c24',p:'#ff7b9c',o:'#ffb43a'},g:[
"..gg......gg..",
".gGGg....gGGg.",
".gGGgggggGGGg.",
"gggggggggggggg",
"gggwwwwwwwwggg",
"ggwwwwwwwwwwgg",
"ggwkkwwwwkkwgg",
"gwpkkwwwwkkpwg",
"gwppwwooowppwg",
"ggwwwwwwwwwwgg",
".ggwwwwwwwwgg.",
"..gggggggggg..",
".gggGggggGggg.",
".gg.gggggg.gg.",
]},
cloud:{p:{w:'#fffaf0',s:'#e8dcc0'},g:[
"......wwww......",
"....wwwwwwww....",
"..wwwwwwwwwwww..",
".wwwwwwwwwwwwww.",
"wwwwwwwwwwwwwwws",
"ssssssssssssssss",
]},
cloudP:{p:{w:'#fde3df',s:'#e05a5a'},g:[
"......wwww......",
"....wwwwwwww....",
"..wwwwwwwwwwww..",
".wwwwwwwwwwwwww.",
"wwwwwwwwwwwwwwws",
"ssssssssssssssss",
]},
};
function sprite(name,scale=6,cls=''){
  const s=SPR[name], cols=Math.max(...s.g.map(r=>r.length)), rows=s.g.length;
  const c=document.createElement('canvas'); c.width=cols; c.height=rows; c.className=cls;
  c.style.width=cols*scale+'px'; c.setAttribute('aria-hidden','true');
  const x=c.getContext('2d');
  s.g.forEach((r,j)=>[...r].forEach((ch,i)=>{ if(s.p[ch]){x.fillStyle=s.p[ch]; x.fillRect(i,j,1,1)} }));
  return c;
}

/* ---------- WINDOW + SCENES ---------- */
const win=document.getElementById('win'), dock=document.getElementById('dock');
const music=document.getElementById('birthday-music');
let musicError='';
const ICON={
  back:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 8h2V6h2V4h2v2H6v1h8v2H6v1h2v2H6v-2H4V9H2z"/></svg>',
  min:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 10h12v3H2z"/></svg>',
  close:'<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2h3v2h2v2h2V4h2V2h3v3h-2v2h-2v2h2v2h2v3h-3v-2h-2v-2H7v2H5v2H2v-3h2v-2h2V7H4V5H2z"/></svg>'
};
let hist=[], cur=0, token=0;
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function typeTo(el,text,t,speed=42){
  el.textContent='';
  for(const ch of text){ if(t!==token) return false; el.textContent+=ch; await sleep(ch===' '?speed/2:speed) }
  return true;
}
function frame(i,{back=true}={}){
  win.className='win t'+i;
  win.innerHTML=`<div class="bar">
    <button class="chrome" id="bk" type="button" aria-label="Kembali" ${back?'':'hidden'}>${ICON.back}</button>
    <span class="sp"></span>
    <button class="chrome music" id="music" type="button" aria-label="Play birthday music" aria-pressed="false" title="Play birthday music">♪</button>
    <button class="chrome" id="mn" type="button" aria-label="Kecilkan">${ICON.min}</button>
    <button class="chrome" id="cl" type="button" aria-label="Tutup">${ICON.close}</button></div>
    <h1 class="title" id="ti"></h1><p class="sub" id="su"></p><div class="art" id="ar"></div>`;
  win.querySelector('#bk').onclick=()=>{ if(hist.length){ go(hist.pop(),false) } };
  win.querySelector('#music').onclick=toggleMusic;
  win.querySelector('#mn').onclick=()=>{ win.classList.add('min'); dock.hidden=false };
  win.querySelector('#cl').onclick=()=>{
    win.classList.remove('shake'); void win.offsetWidth; win.classList.add('shake');
    const su=win.querySelector('#su'); su.textContent='hey, the gift is not done yet!';
  };
  syncMusicButton();
  return {ti:win.querySelector('#ti'), su:win.querySelector('#su'), ar:win.querySelector('#ar')};
}
function syncMusicButton(){
  const button=win.querySelector('#music');
  if(!button) return;
  const playing=!music.paused;
  button.textContent=playing?'♫':'♪';
  button.setAttribute('aria-label',playing?'Pause birthday music':musicError?`Play birthday music. ${musicError}`:'Play birthday music');
  button.setAttribute('aria-pressed',String(playing));
  button.title=playing?'Pause birthday music':musicError||'Play birthday music';
}
async function playMusic(){
  try{
    await music.play();
  }catch(error){
    musicError=error.name==='NotAllowedError'
      ? 'Playback was blocked. Select to retry.'
      : 'Check that xxl.m4a is supported by your browser.';
    console.warn(`Birthday music could not start. ${musicError}`,error);
    syncMusicButton();
  }
}
function toggleMusic(){
  if(music.paused) void playMusic();
  else music.pause();
}
music.addEventListener('play',()=>{ musicError=''; syncMusicButton() });
music.addEventListener('pause',syncMusicButton);
function addBtn(label,fn,hidden=false){
  const b=document.createElement('button'); b.className='btn'; b.type='button'; b.textContent=label; b.hidden=hidden; b.onclick=fn;
  win.appendChild(b); return b;
}
document.getElementById('restore').onclick=()=>{ win.classList.remove('min'); dock.hidden=true };

const SCENES=[
 /* 0: intro */
 async t=>{
  const f=frame(0,{back:false});
  const c1=sprite('cloud',5,'cloud'); c1.style.cssText+='left:-10px;top:10px'; f.ar.appendChild(c1);
  const c2=sprite('cloud',7,'cloud'); c2.style.cssText+='right:-20px;bottom:0'; f.ar.appendChild(c2);
  const d=sprite('duck',8,'bob'); d.style.cssText+='position:relative;z-index:1'; f.ar.appendChild(d);
  await typeTo(f.ti,'HALOO WILDAAA... its little surprise for you',t);
  addBtn('start',async()=>{ await playMusic(); go(1) });
 },
 /* 1: gift */
 async t=>{
  const f=frame(1);
  const c1=sprite('cloudP',5,'cloud'); c1.style.cssText+='left:-14px;top:6px'; f.ar.appendChild(c1);
  const c2=sprite('cloudP',6,'cloud'); c2.style.cssText+='right:-18px;top:44px'; f.ar.appendChild(c2);
  const h=sprite('ham',8,'bob'); f.ar.appendChild(h);
  f.ti.textContent='You have a GIFT !';
  const open=addBtn('open gift ?',async()=>{
    open.hidden=true; f.su.textContent='opening gift...';
    f.ar.innerHTML=''; f.ar.appendChild(sprite('gift',9,'wobble'));
    await sleep(1400); if(t!==token) return;
    check.hidden=false;
  });
  const check=addBtn('check it out !',()=>go(2),true);
 },
 /* 2: birthday */
 async t=>{
  const f=frame(2);
  f.ar.style.alignItems='flex-end';
  const L=document.createElement('div'); L.style.cssText='display:flex;gap:2px;align-items:flex-end;position:absolute;left:0;bottom:0';
  L.append(sprite('bal1',5,'bob'),sprite('bal2',5,'bob'));
  const R=document.createElement('div'); R.style.cssText='display:flex;gap:2px;align-items:flex-end;position:absolute;right:0;bottom:0';
  R.append(sprite('bal3',5,'bob'),sprite('bal4',5,'bob'));
  const M=document.createElement('div'); M.style.cssText='display:flex;flex-direction:column;align-items:center;gap:6px;position:absolute;left:50%;bottom:0;transform:translateX(-50%)';
  M.append(sprite('heart',5,'wobble'),sprite('cake',7));
  f.ar.append(L,R,M);
  await typeTo(f.ti,`happy ${ord(cfg.age)} birthday, ${cfg.name.toLowerCase()} !`,t);
  addBtn('next...',()=>go(3));
 },
 /* 3: surprise again */
 async t=>{
  const f=frame(3);
  f.ar.append(sprite('sun',7,'bob'),sprite('bird',7,'bob'));
  await typeTo(f.ti,"huh? what's this looks ?",t);
  await sleep(1400); if(t!==token) return;
  f.ar.classList.add('fade');
  await typeTo(f.ti,'hmm... it seems like you have a',t); if(t!==token) return;
  await sleep(700); if(t!==token) return;
  f.ti.textContent='hmm... it seems like you have a gift again';
  addBtn('open gift ?',()=>go(4));
 },
 /* 4: second time */
 async t=>{
  const f=frame(4);
  const p1=sprite('pop',5); const p2=sprite('pop',5); p2.style.transform='scaleX(-1)';
  f.ar.style.alignItems='center';
  f.ar.append(p1,sprite('cat',8,'bob'),p2);
  await typeTo(f.ti,`For the second time, happy ${ord(cfg.age)} birthday, ${cfg.name.toLowerCase()} !`,t);
  addBtn('next...',()=>go(5));
 },
 /* 5: letter */
 async t=>{
  const f=frame(5);
  f.ti.style.cssText='display:none';
  const row=document.createElement('div'); row.className='row'; row.innerHTML='<span>From me...</span><span id="to"></span>';
  win.insertBefore(row,f.su);
  const art=f.ar; art.style.cssText+='justify-content:space-between;align-items:center';
  art.append(sprite('frogA',7,'bob'),sprite('bunB',7,'bob'));
  const m=document.createElement('p'); m.className='msg'; win.appendChild(m);
  await sleep(500); if(t!==token) return;
  await typeTo(row.querySelector('#to'),`...to you, ${cfg.name.toLowerCase()}`,t,50); if(t!==token) return;
  await typeTo(m,cfg.message,t,22);
 },
];
function go(i,push=true){
  if(push) hist.push(cur);
  cur=i; token++; const t=token; SCENES[i](t);
}

go(0,false);
void playMusic();
