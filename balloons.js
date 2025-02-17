document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    autohide: true,
    format: 'MM-dd'
  });

  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

  const attentionSeekers = [
    'animate__bounce', 'animate__flash', 'animate__pulse', 'animate__rubberBand'
  ];

  function getRandomAnimation() {
    return attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)];
  }

  const randomAnimation = getRandomAnimation();
  const attentionSeekerElement = document.getElementById('attention-seeker');
  attentionSeekerElement.classList.add('animate__animated', randomAnimation);

  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  function showToast(message) {
    const toastContainer = document.getElementById('liveToast');
    const toastBody = document.getElementById('code');
    toastBody.innerText = message;
    const toast = new bootstrap.Toast(toastContainer);
    toast.show();
  }

  document.getElementById('submit').addEventListener('click', function() {
    const selectedBalloons = document.querySelectorAll('.form-check-input:checked');
    if (selectedBalloons.length === 0) {
      showToast('Please select at least one balloon.');
    }
  });

  var toastEL = document.getElementById('liveToast');
  var toast = new bootstrap.Toast(toastEL, {
    autohide: false
  });
  toast.hide();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      toast.hide();
    }
  });

  document.getElementById('select-all').addEventListener('change', function(e) {
    const checkboxes = document.querySelectorAll('.form-check-input:not(#select-all)');
    checkboxes.forEach(checkbox => checkbox.checked = e.target.checked);
  });

  const colorMap = {
    red: 'red',
    green: 'green',
    blue: 'blue'
  };

  const labels = document.querySelectorAll('.form-check-label');
  labels.forEach(label => {
    label.addEventListener('mouseover', function() {
      const color = colorMap[label.htmlFor];
      const h1Element = document.getElementById('attention-seeker');
      h1Element.style.color = color;
    });
    label.addEventListener('mouseout', function() {
      const h1Element = document.getElementById('attention-seeker');
      h1Element.style.color = '';
    });
  });
});