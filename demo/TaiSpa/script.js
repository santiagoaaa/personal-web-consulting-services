document.getElementById('year').textContent=new Date().getFullYear();
const services=document.querySelectorAll('.service-list details');
services.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)services.forEach(other=>{if(other!==item)other.open=false})}));
