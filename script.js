// basic email validation + redirect to explore.html (simulate account entry)
function handleGetStarted(e){
  e.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();
  if(!validateEmail(email)){
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }
  // simple redirect to explore page, pass email (demo)
  window.location.href = 'explore.html?email=' + encodeURIComponent(email);
}

function validateEmail(email){
  // simple regex for demonstration (not perfect)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Optional: read query param and display (you may expand later)
(function setLangFromParam(){
  // placeholder for language persistence if needed
})();

// Optional: add click on poster to open placeholder info
document.addEventListener('click',(ev)=>{
  if(ev.target && ev.target.tagName === 'IMG' && ev.target.closest('.row')){
    // simple placeholder action
    // In real app you'd open a modal; here we just console log
    console.log('Clicked poster', ev.target.src);
  }
});