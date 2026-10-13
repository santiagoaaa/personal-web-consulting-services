const menuButton=document.querySelector('.menu-toggle');
const navigation=document.querySelector('#navigation');
function closeMenu(){if(menuButton.getAttribute('aria-expanded')!=='true')return;window.saTransition(()=>{navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='Menú';},[navigation]);}
menuButton.addEventListener('click',()=>window.saTransition(()=>{const open=menuButton.getAttribute('aria-expanded')==='true';navigation.classList.toggle('is-open',!open);menuButton.setAttribute('aria-expanded',String(!open));menuButton.textContent=open?'Menú':'Cerrar';},[navigation]));
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menuButton.getAttribute('aria-expanded')==='true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',event=>{if(!navigation.contains(event.target)&&!menuButton.contains(event.target))closeMenu();});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
