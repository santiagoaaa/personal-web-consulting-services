const filterButtons=[...document.querySelectorAll('[data-filter]')];
const services=[...document.querySelectorAll('[data-category]')];
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 filterButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 services.forEach(service=>service.hidden=button.dataset.filter!=='all'&&service.dataset.category!==button.dataset.filter);
 document.getElementById('filter-status').textContent=`${services.filter(service=>!service.hidden).length} servicios disponibles en esta categoría.`;
}));
const cities={'Celaya':'GUANAJUATO, MÉXICO','Salamanca':'GUANAJUATO, MÉXICO','Santiago de Querétaro':'QUERÉTARO, MÉXICO','San Juan del Río':'QUERÉTARO, MÉXICO','Morelia':'MICHOACÁN, MÉXICO'};
document.querySelectorAll('[data-city]').forEach(button=>button.addEventListener('click',()=>{
 const city=button.dataset.city;
 document.querySelectorAll('[data-city]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 const title=document.getElementById('city-title');title.replaceChildren(document.createTextNode(city));const arrow=document.createElement('span');arrow.textContent='↗';title.append(arrow);
 document.getElementById('city-state').textContent=cities[city];
 document.getElementById('location-name').textContent=`Sucursal ${city}`;
 document.getElementById('location-address').textContent=city==='Celaya'?'Agustín Arroyo Chagoyan 504, Local 4. Col. Alameda, C. P. 38050. Celaya, Gto.':`Escríbenos por Facebook para consultar la dirección de la sucursal en ${city}.`;
 document.getElementById('maps-link').hidden=city!=='Celaya';
}));
document.getElementById('year').textContent=new Date().getFullYear();
