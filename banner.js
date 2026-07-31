(function () {
"use strict";

if (document.getElementById("aqp-banner")) return;

const image =
"https://aleks5661661-web.github.io/Aquapeeling/Gemini_Generated_Image_ioc7z0ioc7z0ioc7.jpg";

const link =
"https://aleks5661661-web.github.io/Aquapeeling/";

const style = document.createElement("style");
style.textContent = `
#aqp-banner{
position:fixed;
right:20px;
bottom:20px;
width:340px;
max-width:calc(100vw - 20px);
background:rgba(216,200,240,.7);
backdrop-filter:blur(10px);
-webkit-backdrop-filter:blur(10px);
border-radius:18px;
overflow:hidden;
box-shadow:0 15px 35px rgba(0,0,0,.25);
font-family:Arial,sans-serif;
z-index:2147483647;
opacity:0;
transform:translateY(30px) scale(.95);
transition:opacity .5s,transform .5s,width .3s;
user-select:none;
cursor:default;
}

#aqp-banner.show{
opacity:1;
transform:translateY(0) scale(1);
}

#aqp-header{
position:absolute;
top:8px;
right:8px;
display:flex;
gap:6px;
z-index:5;
}

#aqp-close,
#aqp-min{
width:28px;
height:28px;
border-radius:50%;
background:rgba(0,0,0,.35);
color:white;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
font-size:18px;
font-weight:bold;
}

#aqp-close:hover,
#aqp-min:hover{
background:rgba(0,0,0,.55);
}

#aqp-banner img{
display:block;
width:100%;
pointer-events:none;
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
font-size:15px;
line-height:1.5;
}

#aqp-btn{
display:inline-block;
margin-top:18px;
padding:12px 26px;
background:#7b5fd8;
color:#fff;
text-decoration:none;
border-radius:30px;
font-weight:bold;
transition:.3s;
}

#aqp-btn:hover{
transform:scale(1.05);
}

#aqp-mini{
display:none;
padding:15px;
text-align:center;
background:#7b5fd8;
color:white;
font-weight:bold;
cursor:pointer;
}

@media(max-width:768px){

#aqp-banner{
left:10px;
right:10px;
bottom:10px;
width:auto;
max-width:none;
}

}
`;

document.head.appendChild(style);

const banner=document.createElement("div");
banner.id="aqp-banner";

banner.innerHTML=`
<div id="aqp-header">
<div id="aqp-min">−</div>
<div id="aqp-close">×</div>
</div>

<img src="${image}" alt="Aquapeeling">

<div id="aqp-content">

<h3>✨ Aquapeeling</h3>

<p>
Moderne Hautpflege für ein frisches und strahlendes Hautbild.
</p>

<a id="aqp-btn"
href="${link}"
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

requestAnimationFrame(()=>{
banner.classList.add("show");
});

const close=document.getElementById("aqp-close");
const min=document.getElementById("aqp-min");
const mini=document.getElementById("aqp-mini");
const content=document.getElementById("aqp-content");

close.onclick=()=>{
banner.remove();
};

min.onclick=()=>{
content.style.display="none";
mini.style.display="block";
banner.style.width="180px";
};

mini.onclick=()=>{
mini.style.display="none";
content.style.display="block";
banner.style.width="340px";
};

let drag=false;
let shiftX=0;
let shiftY=0;

function start(x,y){

drag=true;

const rect=banner.getBoundingClientRect();

banner.style.left=rect.left+"px";
banner.style.top=rect.top+"px";
banner.style.right="auto";
banner.style.bottom="auto";

shiftX=x-rect.left;
shiftY=y-rect.top;

}

function move(x,y){

if(!drag)return;

banner.style.left=(x-shiftX)+"px";
banner.style.top=(y-shiftY)+"px";

}

function end(){

drag=false;

}

banner.addEventListener("mousedown",e=>{

if(e.target.id==="aqp-btn") return;

start(e.clientX,e.clientY);

});

document.addEventListener("mousemove",e=>{

move(e.clientX,e.clientY);

});

document.addEventListener("mouseup",end);

banner.addEventListener("touchstart",e=>{

if(e.target.id==="aqp-btn") return;

const t=e.touches[0];

start(t.clientX,t.clientY);

},{passive:true});

document.addEventListener("touchmove",e=>{

const t=e.touches[0];

move(t.clientX,t.clientY);

},{passive:true});

document.addEventListener("touchend",end);

window.addEventListener("resize",()=>{

if(window.innerWidth<768){

banner.style.left="10px";
banner.style.right="10px";
banner.style.top="";
banner.style.bottom="10px";
banner.style.width="auto";

}

});

})();