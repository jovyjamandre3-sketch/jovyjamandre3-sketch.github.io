const toggle = document.getElementById('menu-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', ()=> links.classList.toggle('active'));

document.getElementById('year').textContent = new Date().getFullYear();

const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', ()=>{
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

document.getElementById('contact-form').addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  const body = Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${msg};
  window.location.href = mailto:jovyjamandre3@gmail.com?subject=Portfolio Message from ${name}&body=${body};
  document.getElementById('form-status').textContent = "Opening your email app...";
});
Compose
Write to Jamandre Aquino Jovy
