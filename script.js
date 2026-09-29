const items=Array.from(document.querySelectorAll('[data-index]'),el=>[el.querySelector('img').getAttribute('src'),el.querySelector('img').alt,el.dataset.title]);
if(document.querySelector('#viewer')){
const viewer=document.querySelector('#viewer');let current=0,lastFocus;
function render(){const [file,alt,title]=items[current];document.querySelector('#full-photo').src=file;document.querySelector('#full-photo').alt=alt;document.querySelector('#photo-title').textContent=title;document.querySelector('#photo-count').textContent=`${String(current+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;}
function move(step){current=(current+step+items.length)%items.length;render()}
document.querySelectorAll('[data-index]').forEach(el=>el.addEventListener('click',()=>{current=Number(el.dataset.index);lastFocus=el;render();viewer.showModal();document.body.style.overflow='hidden';document.querySelector('#close').focus()}));
document.querySelector('#close').addEventListener('click',()=>viewer.close());document.querySelector('#prev').addEventListener('click',()=>move(-1));document.querySelector('#next').addEventListener('click',()=>move(1));viewer.addEventListener('close',()=>{document.body.style.overflow='';lastFocus?.focus()});viewer.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1)}if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}});}
document.querySelector('#year').textContent=new Date().getFullYear();
