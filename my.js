// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// simple smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  });
});

// contact form handler (mock)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const data = new FormData(form);
  const payload = {name: data.get('name'), message: data.get('message')};
  // mock send
  msg.textContent = 'Sending...';
  setTimeout(()=>{
    msg.textContent = `Thanks, ${payload.name || 'there'} — message received.`;
    form.reset();
  }, 700);
});


