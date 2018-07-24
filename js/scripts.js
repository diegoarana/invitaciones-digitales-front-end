// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  $('#clock').countdown('2018/09/28', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<span class="wraper-clock"><div class="value">%D</div><div class="value-label">Días</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%H</div><div class="value-label">Horas</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%M</div><div class="value-label">Minutos</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%S</div><div class="value-label">Segundos</div></span>'));
  });


$(document).ready(function(){

    $('.animated-element-1').css('opacity', '0');
    $('.animated-element-2').css('opacity', '0');

    $('.animated-element-1').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeInUp');},{offset:'90%'});})
    $('.animated-element-2').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeIn');},{offset:'60%'});})

});
