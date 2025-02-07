document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
      if (e.target.classList.contains('discount')) {
        e.preventDefault();
        document.getElementById('product').innerHTML = e.target.dataset['product'];
        document.getElementById('code').innerHTML = e.target.dataset['code'];
        document.getElementById('title').innerHTML = e.target.dataset['title'];
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
      }
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    var toastEL = document.getElementById('liveToast');
    var toast = new bootstrap.Toast(toastEL, {
        autohide: false
    });
    toast.hide();

    document.addEventListener('keydown', function(e) {
        if (event.key === 'Escape') {
            toast.hide();
        }
    });
});
  