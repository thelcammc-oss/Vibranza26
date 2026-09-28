const GOOGLE_FORM_URLS={red:"https://forms.gle/wdndaLipoSDdkkjR9",
    yellow:"https://forms.gle/wdndaLipoSDdkkjR9",
    green:"https://forms.gle/wdndaLipoSDdkkjR9",
    blue:"https://forms.gle/wdndaLipoSDdkkjR9"};

const houses={
red:{name:"RED HOUSE",color:"#d9343b",motto:"Courage Creates Change",departments:["B.COM GEN","BCA","PHY","PSY","MATHS","Social Work","AI","CS","M.Sc Maths"],animators:["Mr.M.Ramachandrapandiyan","Ms.R.Sagunthala Devi","Ms. Asiya Parveen"]},
yellow:{name:"YELLOW HOUSE",color:"#c88700",motto:"Brighter Together",departments:["BBA","MIC","B.Sc IT","M.Com COMPUTER","ECO","DSA","DFS","M.Sc Computer"],animators:["Dr.A.Shajitha","Ms.Niranjana C Mohan","Mr.N.Karthikeyan"]},
green:{name:"GREEN HOUSE",color:"#2f6b2a",motto:"Grow • Learn • Lead",departments:["FSC","BIO","CHE","B.A. ENGLISH","B.COM PA","PGDSI","M.Sc. FS","M.A. ENGLISH"],animators:["Mrs.J.Augostriena","Ms.Kaviya","Mr.B.Kannan"]},
blue:{name:"BLUE HOUSE",color:"#2463a5",motto:"Dream • Create • Inspire",departments:["B.Com CA A","B.Com CA B","HMCS"],animators:["Dr.J.Malar Vizhi","Ms.Sujitha. P","Mr.M.Vijay"]}
};

let currentHouse=null;

function formUrl(){
 if(!currentHouse)return"#";
 const url=GOOGLE_FORM_URLS[currentHouse];
 if(!url||url.includes("PASTE_")||url.includes("_HERE"))return"#";
 return url;
}

const events=[
["Solo Dance","Cultural","AWAKEN","A solo stage performance where dancers express the journey of life through movement."],
["Solo Song","Cultural","AWAKEN","An individual singing competition celebrating emotions, relationships and life experiences."],
["Mr. / Ms. Vibranza","Cultural","AWAKEN","A multi-round personality contest to find the face of VIBRANZA '26."],
["Elocution: The Orator's Forum","Literary","AWAKEN","A public speaking event on technology and humanity, in Tamil, English or Malayalam."],
["Turn the Coat","Literary","AWAKEN","A spontaneous speaking challenge where the speaker argues both sides of one topic."],
["Group Dance (Western & Classical)","Cultural","EXPRESS","A team dance travelling through five decades of music and youth culture."],
["Meet the Beat (Fusion Dance)","Cultural","EXPRESS","An on-the-spot dance where teams react to music that mixes several genres."],
["Group Song","Cultural","EXPRESS","A live team singing performance judged on harmony and synchronization."],
["Music Rap (Online)","Cultural","EXPRESS","An original rap performance recorded and submitted online."],
["Mime","Cultural","EXPRESS","A silent team act that tells a story through body language and expression."],
["Doodle Art","Literary","CREATE","An individual drawing event where ideas are turned into creative doodles."],
["Mehendi Art","Literary","CREATE","A live henna design contest with an artist and a model."],
["Face Painting","Literary","CREATE","A live art event where the face becomes the canvas."],
["Vegetable Carving","Literary","CREATE","Fresh vegetables are carved into artistic designs."],
["Rangoli (Group)","Literary","CREATE","A team floor-art contest using colours and patterns on a given topic."],
["Social Walk","Cultural","CONNECT","A themed team ramp walk carrying a social message through costume, music and presence."],
["Flameless Cooking","Literary","CONNECT","A team cooking contest where dishes are made without fire or heat."],
["Mannequin Challenge (Online)","Literary","CONNECT","A video of a team frozen in a creative scene capturing a favourite college memory."],
["Reel Competition (Online)","Literary","CONNECT","A short creative reel showing pride in the college."],
["Ad Zap (Online)","Literary","CONNECT","A video advertisement created by students for a real or imaginary product or service."],
["Photography","Literary","INSPIRE","An on-the-spot photography contest testing how well participants capture a theme."],
["Short Film (Online)","Literary","INSPIRE","A short original film built around a story theme."],
["Essay Writing: Ink and Insight","Literary","INSPIRE","A timed essay on reading and social change, in Tamil, English or Malayalam."],
["Verse Writing: Verse of Vision","Literary","INSPIRE","A timed poetry event on nature, in Tamil, English or Malayalam."]
].map((x,i)=>({id:i+1,name:x[0],cat:x[1],beat:x[2],desc:x[3]}));

const rules=[
"Participants must read and understand the general and event-specific rules before registering.",
"Participants must bring all necessary equipment, instruments, costumes, props, materials and tools required for their events unless specifically mentioned.",
"Animators are responsible for registration details, punctuality and discipline of their participants.",
"Participants arriving more than 15 minutes after the scheduled reporting time will be disqualified.",
"No substitution of participants is permitted after final registration is confirmed.",
"A student may participate in a maximum of 5 events: 3 Literary + 2 Cultural, OR 2 Literary + 3 Cultural.",
"In individual events, a maximum of 5 participants from each House may participate.",
"In group events, a maximum of 3 teams from each House may participate.",
"Unless otherwise specifically mentioned, group events have a minimum of 5 and maximum of 10 participants.",
"All participants must report to the respective venue at the prescribed reporting time.",
"Vulgar, obscene, offensive, discriminatory, defamatory or inappropriate content, costumes, lyrics, gestures or performances are prohibited.",
"Dangerous stunts, fire, explosives, hazardous chemicals, sharp dangerous objects and unsafe materials are prohibited unless specifically permitted.",
"Participants must clean their respective work/performance areas after completing their event.",
"Plagiarism, copying, pre-prepared work or unauthorised use of another person's work will result in disqualification wherever applicable.",
"Participants must strictly follow the prescribed time limit. Exceeding it may result in deduction of marks.",
"Late submission of required audio/video entries will not be accepted.",
"Only the respective Animators are authorised to approach the Event In-charge for queries or clarifications.",
"Participants must not directly approach or argue with judges regarding marks, decisions or evaluation.",
"The decision of the Judges and Organising Committee shall be final and binding.",
"The Organising Committee reserves the right to disqualify participants/teams who violate the rules.",
"The Organising Committee reserves the right to modify the venue, schedule or arrangements when necessary."
];

const eventRules={
"Group Dance (Western & Classical)":["Theme: Dance Through the Decades – 70s → 80s → 90s → 2000s → Modern Era 2K26","5–10 participants","Maximum 5 minutes","Maximum 4 songs","Audio must be submitted in MP3 by 30.09.2026."],
"Solo Dance":["Theme: Seasons of Life","Individual event","Maximum 4 minutes","Caution bell at 3:45."],
"Meet the Beat (Fusion Dance)":["Theme: On-the-Spot Musical Fusion","4–8 participants","Maximum 3 minutes","Music is played on the spot."],
"Solo Song":["Theme: Colours of Life","Individual event","Maximum 5 minutes","Tamil / English / Malayalam."],
"Group Song":["Theme: Voices in Harmony","5–10 participants","Maximum 3 minutes","No karaoke; only one song."],
"Music Rap (Online)":["Theme: Our Voice, Our Vibe","1–5 participants","3–5 minutes","Original lyrics."],
"Mr. / Ms. Vibranza":["Theme: Beyond the Crown","4 rounds: Introduction, Talent, Walk and Q&A."],
"Mime":["Theme: The Invisible Weight","5–10 participants","Maximum 5 minutes","Only music; no spoken dialogue."],
"Elocution: The Orator's Forum":["Theme: Humanity in the Tech World","Individual","Maximum 3 minutes","English / Tamil / Malayalam."],
"Turn the Coat":["Theme: The Other Side of the Argument","Individual","2 minutes total","1 minute FOR and 1 minute AGAINST."],
"Social Walk":["Theme: Walk the Change – The World We Want Tomorrow","5–10 participants","Maximum 5 minutes","Music is compulsory."],
"Doodle Art":["Theme: A Sustainable Tomorrow","Individual","45 minutes."],
"Mehendi Art":["Theme: Nature in Patterns","Artist + Model","1 hour 15 minutes."],
"Face Painting":["Theme: Faces of Nature","Artist + Model","1 hour."],
"Vegetable Carving":["Theme: Nature Takes Shape","Individual","60 minutes."],
"Rangoli (Group)":["Theme: Colours of Unity","5–10 participants","45 minutes."],
"Flameless Cooking":["Theme: A World on a Plate","2 participants","60 minutes.","No fire or heat."],
"Mannequin Challenge (Online)":["Theme: Freeze Your Favourite College Moment","5–15 participants","2–3 minutes."],
"Reel Competition (Online)":["Theme: My College, My Pride","1–5 participants","Maximum 60 seconds."],
"Ad Zap (Online)":["Theme: If I Were an Entrepreneur","2–5 participants","2–3 minutes."],
"Photography":["Theme: A Moment Worth Remembering","On-the-spot topic","No editing."],
"Short Film (Online)":["Theme: The Unexpected Stranger","3–8 participants","Maximum 7 minutes."],
"Essay Writing: Ink and Insight":["Theme: Beyond the Pages…","English / Tamil / Malayalam","45 minutes","Maximum 6 A4 pages."],
"Verse Writing: Verse of Vision":["Theme: Language of Nature","English / Tamil / Malayalam","45 minutes","Maximum 3 A4 pages."]
};

const beats=[
["AWAKEN","Solo Dance, Solo Song, Mr. / Ms. Vibranza, Elocution, Turn the Coat"],
["EXPRESS","Group Dance, Meet the Beat, Group Song, Music Rap, Mime"],
["CREATE","Doodle Art, Mehendi Art, Face Painting, Vegetable Carving, Rangoli"],
["CONNECT","Social Walk, Flameless Cooking, Mannequin Challenge, Reel Competition, Ad Zap"],
["INSPIRE","Photography, Short Film, Essay Writing, Verse Writing"]
];

const houseGrid=document.getElementById("houseGrid");
const housePanel=document.getElementById("housePanel");
const houseHeader=document.getElementById("houseHeader");
const houseContent=document.getElementById("houseContent");

function openHouse(key){
 currentHouse=key;
 const h=houses[key];
 housePanel.classList.remove("hidden");
 houseHeader.innerHTML=`<div class="head-row"><div><span class="kicker" style="color:${h.color}">YOUR HOUSE</span><h2 style="color:${h.color}">${h.name}</h2><p>${h.motto}</p></div><span class="house-badge">${h.departments.length} Departments</span></div>`;
 renderTab("events");
 housePanel.scrollIntoView({behavior:"smooth",block:"start"});
}

function renderHouses(){
 const icons={red:"♛",yellow:"✦",green:"✿",blue:"➤"};
 houseGrid.innerHTML=Object.entries(houses).map(([k,h])=>`<article class="house-card ${k}" data-house="${k}"><div class="house-icon">${icons[k]}</div><h3>${h.name}</h3><p>${h.motto}</p><button class="house-arrow" type="button">→</button></article>`).join("");
 document.querySelectorAll(".house-card").forEach(c=>c.onclick=()=>openHouse(c.dataset.house));
}

function renderEvents(filter=""){
 const list=events.filter(e=>(e.name+" "+e.beat+" "+e.cat).toLowerCase().includes(filter.toLowerCase()));
 return `<div class="events-top"><h3>Events <span style="color:#8a7e96">(${list.length}/24)</span></h3><input class="search" id="eventSearch" placeholder="Search event..." value="${filter}"></div><div class="event-list">${list.map(e=>`<div class="event-row"><div class="event-no">${e.id}</div><div><h4>${e.name}<span class="tag ${e.cat.toLowerCase()}">${e.cat}</span></h4><p>${e.desc}</p></div><div class="event-actions"><button class="details-btn" type="button" data-details="${e.id}">Details</button><a class="register-btn" href="${formUrl()}" target="_blank" rel="noopener noreferrer" data-event="${e.name}">Register ↗</a></div></div>`).join("")}</div>`;
}

function renderTab(tab){
 document.querySelectorAll(".side-btn").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
 const h=houses[currentHouse];

 if(tab==="events"){
  houseContent.innerHTML=renderEvents();
  bindEvents();
 }

 if(tab==="departments"){
  houseContent.innerHTML=`<h3 class="subheading">Departments in ${h.name}</h3><div class="dept-grid">${h.departments.map(d=>`<div class="dept-chip">${d}</div>`).join("")}</div>`;
 }

 if(tab==="animators"){
  houseContent.innerHTML=`<h3 class="subheading">House Animators</h3><div class="animator-grid">${h.animators.map((a,i)=>`<div class="animator"><strong>${a}</strong><span>Animator ${i+1}</span></div>`).join("")}</div>`;
 }

 if(tab==="rules"){
  houseContent.innerHTML=`<h3 class="subheading">General Rules & Regulations</h3><div class="rule-list">${rules.map((r,i)=>`<div class="rule-item"><b>${i+1}.</b> ${r}</div>`).join("")}</div>`;
 }

 if(tab==="beats"){
  houseContent.innerHTML=`<div class="events-top"><div><h3>The Five Beats</h3><p style="color:#756d84;margin:6px 0 0">Choose a beat to see its events and register directly.</p></div></div><div class="beat-list">${beats.map(b=>{const beatEvents=events.filter(e=>e.beat===b[0]);return `<div class="beat"><h4>${b[0]} <small>• ${beatEvents.length} events</small></h4><p>${b[1]}</p><div class="event-list" style="margin-top:14px">${beatEvents.map(e=>`<div class="event-row"><div class="event-no">${e.id}</div><div><h4>${e.name}<span class="tag ${e.cat.toLowerCase()}">${e.cat}</span></h4><p>${e.desc}</p></div><div class="event-actions"><button class="details-btn" type="button" data-details="${e.id}">Rules</button><a class="register-btn" href="${formUrl()}" target="_blank" rel="noopener noreferrer" data-event="${e.name}">Register ↗</a></div></div>`).join("")}</div></div>`}).join("")}</div>`;
  bindEvents();
 }
}

function bindEvents(){
 const s=document.getElementById("eventSearch");
 if(s)s.oninput=()=>{houseContent.innerHTML=renderEvents(s.value);bindEvents();};

 document.querySelectorAll("[data-details]").forEach(b=>b.onclick=()=>showEvent(Number(b.dataset.details)));

 document.querySelectorAll("[data-event]").forEach(a=>a.onclick=e=>{
  if(formUrl()==="#"){
   e.preventDefault();
   alert("Google Form link is not connected yet.\n\nPlease add the Google Form URL for "+houses[currentHouse].name+" at the top of app.js.");
  }
 });
}

function showEvent(id){
 const e=events.find(x=>x.id===id);
 if(!e)return;

 const h=houses[currentHouse];
 const modal=document.getElementById("eventModal");
 const body=document.getElementById("modalBody");
 const detailRules=eventRules[e.name]||[];

 body.innerHTML=`<span class="kicker">${e.beat} • ${e.cat}</span><h2>${e.name}</h2><div class="meta">${h.name} registration</div><p>${e.desc}</p><h3 style="font:700 22px Playfair Display,serif;margin:22px 0 10px">Event Rules</h3><div class="rule-list">${detailRules.length?detailRules.map((r,i)=>`<div class="rule-item"><b>${i+1}.</b> ${r}</div>`).join(""):`<div class="rule-item">Please follow the General Rules & Regulations for this event.</div>`}</div><div class="rule-list" style="margin-top:12px"><div class="rule-item"><b>House:</b> ${h.name}</div><div class="rule-item"><b>Registration:</b> Complete the Google Form using the button below.</div></div><a class="modal-register" href="${formUrl()}" target="_blank" rel="noopener noreferrer">Register for ${e.name} ↗</a>`;

 modal.classList.remove("hidden");
 modal.setAttribute("aria-hidden","false");
}

document.querySelectorAll("[data-close]").forEach(x=>x.onclick=()=>{
 const modal=document.getElementById("eventModal");
 modal.classList.add("hidden");
 modal.setAttribute("aria-hidden","true");
});

document.querySelectorAll(".nav-link").forEach(b=>b.onclick=()=>{
 const target=document.getElementById(b.dataset.action);
 if(target)target.scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".side-btn").forEach(b=>b.onclick=()=>renderTab(b.dataset.tab));

const backHouse=document.getElementById("backHouse");
if(backHouse)backHouse.onclick=()=>{
 housePanel.classList.add("hidden");
 document.getElementById("houses").scrollIntoView({behavior:"smooth"});
};

renderHouses();

const rulesGrid=document.getElementById("rulesGrid");
if(rulesGrid)rulesGrid.innerHTML=rules.map((r,i)=>`<div class="rule-card"><b>${i+1}.</b> ${r}</div>`).join("");

const beatsGrid=document.getElementById("beatsGrid");
if(beatsGrid)beatsGrid.innerHTML=beats.map(b=>`<div class="beat-card"><span>${b[0]}</span><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join("");
