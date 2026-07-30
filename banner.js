(function () {
"use strict";

const STORAGE_KEY = "aquapeeling_banner_hidden_until";

const hiddenUntil = localStorage.getItem(STORAGE_KEY);

if (hiddenUntil && Date.now() < Number(hiddenUntil)) {
    return;
}

const image =
"https://aleks5661661-web.github.io/Aquapeeling/Gemini_Generated_Image_ioc7z0ioc7z0ioc7.jpg";

const url =
"https://aleks5661661-web.github.io/Aquapeeling/";

const css = `
#aqp-banner{
position:fixed;
right:20px;
bottom:20px;
width:340px;
max-width:calc(100vw - 20px);
background:#d8c8f0;
border-radius:18px;
overflow:hidden;
box-shadow:0 15px 40px rgba(0,0,0,.3);
font-family:Arial,sans-serif;
z-index:2147483647;
opacity:0;
transform:translateY(30px);
transition:.5s;
}

#aqp-banner.show{
opacity:1;
transform:translateY(0);
}

#aqp-banner img{
width:100%;
display:block;
}

#aqp-content{
padding:18px;
text-align:center;
color:#333;
}

#aqp-content h3{
margin:0 0 10px;
font-size:24px;
}

#aqp-content p{
margin:0;
line-height:1.5;
font-size:15px;
}

#aqp-btn{
display:inline-block;
margin-top:18px;
padding:12px 24px;
background:#7d5bd8;
color:white;
text-decoration:none;
border-radius:30px;
font-weight:bold;
}

#aqp-close{
position:absolute;
top:8px;
right:10px;
font-size:24px;
cursor:pointer;
color:white;
font-weight:bold;
}

#aqp-mini{
display:none;
padding:14px;
background:#7d5bd8;
color:white;
text-align:center;
cursor:pointer;
font-weight:bold;
}

@media(max-width:600px){
#aqp-banner{
left:10px;
right:10px;
bottom:10px;
width:auto;
}
}
`;

const style=document.createElement("style");
style.textContent=css;
document.head.appendChild(style);

const banner=document.createElement("div");
banner.id="aqp-banner";

banner.innerHTML=`
<div id="aqp-close">&times;</div>

<img src="${image}" alt="Aquapeeling">

<div id="aqp-content">

<h3>✨ Aquapeeling</h3>

<p>
Moderne Hautpflege für ein frisches Hautbild.
</p>

<a id="aqp-btn"
href="${url}"
target="_blank"
rel="noopener">
Registrieren
</a>

</div>

<div id="aqp-mini">
💜 Aquapeeling
</div>
`;

document.body.appendChild(banner);

const close=document.getElementById("aqp-close");
const mini=document.getElementById("aqp-mini");
const content=document.getElementById("aqp-content");

function hide24h(){
localStorage.setItem(
STORAGE_KEY,
Date.now()+24*60*60*1000
);
}

setTimeout(()=>{
banner.classList.add("show");
},2000);

setTimeout(()=>{
content.style.display="none";
mini.style.display="block";
banner.style.width="180px";
},17000);

mini.onclick=function(){
mini.style.display="none";
content.style.display="block";
banner.style.width="340px";
};

close.onclick=function(){
banner.remove();
hide24h();
};

})();