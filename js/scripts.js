// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {

      // start preloader
      $(".cover").fadeOut(2000);
      // div2image
      html2canvas($("#div2pdf")[0]).then(canvas =>{
        var a = document.createElement('a');
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas.toDataURL("image/jpg");
        a.className='linkToDownload'
        var divBase64= document.getElementById("base64");
        divBase64.insertAdjacentHTML( 'afterbegin', a );
        $("#div2pdf").fadeOut(1);
      });

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === true) {
                
              // catch input values
              var name = $("#inputName").val();
              var email = $("#inputEmail").val();
              var message = $("#inputMessage").val();
              var confirmButton = $("#confirm");
              confirmButton.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
              $.ajax({
                  url: "www.venite.ga/confirmar/",
                  type: "POST",
                  data: {
                    inputName: name,
                    inputEmail: email,
                    inputMessage: message
                  },
                  cache: false,
                  success: function(resp, xhr, status) {
                    // Success message
                    $("#divConfirmForm").html("<div class='col-md-12 animated-element-2' style='text-align:center;'><span class='fa-stack fa-4x animated-element-1'><i class='fa fa-circle fa-stack-2x text-primary'></i><i class='fa fa-check fa-stack-1x fa-inverse'></i></span></div><div class='col-md-12 alert alert-success' style='text-align:  center;'> <p>Confirmación enviada correctament.</p> </div>")
                  },
                  error: function(xhr, status, error) {
                    // Fail message
                    $("#divConfirmForm").html("<div class='col-md-12 alert alert-danger animated-element-2' style='text-align:center;'> <p> Hubo un error en el servidor.</p><p> Intente de nuevo más tarde.</p> </div>")
                  
                  },
                  complete: function(xhr, status) {
                    setTimeout(function() {
                      confirmButton.prop("disabled", false); // Re-enable submit button when AJAX call is complete
                    }, 1000);
                  }
                });

          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();


  // COUNTDOWN CONFIG
  $('#clock').countdown('2018/09/28', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<span class="wraper-clock"><div class="value">%D</div><div class="value-label">Días</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%H</div><div class="value-label">Horas</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%M</div><div class="value-label">Minutos</div></span><span class="sep">:</span>'
        + '<span class="wraper-clock"><div class="value">%S</div><div class="value-label">Segundos</div></span>'));
  });

  window.addeventasync = function(){
    // ADDEVENT CONFIG
    addeventatc.settings({
      appleical  : {show:false, text:"Apple Calendar"},
      license : "replace-with-your-licensekey",
      css : false
  });
};

// ANIMATION CONFIG
$(document).ready(function(){

  $('.animated-element-1').css('opacity', '0');
  $('.animated-element-2').css('opacity', '0');

  $('.animated-element-1').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeInUp');},{offset:'90%'});})
  $('.animated-element-2').each(function(){$(this).waypoint(function(){$(this.element).addClass('animated fadeIn');},{offset:'60%'});})

  // changes dinamically size of images
  function updateCarouselSizes(){
    $(".carousel").each(function(){ 
      if($(this).find('.item,.carousel-item').length) {
        // We've found one or more item within the Carousel...
        $(this).carousel(); // Initialise the carousel (include options as appropriate)
        // Now we iterate through each item within the carousel...
        var maxheight= $('.item,.carousel-item').first().outerHeight()
        $(this).find('.item,.carousel-item').each(function(k,v){ 
          if($(this).outerHeight()<maxheight) {
            // This item is the tallest we've found so far, so store the result...
            maxheight=$(this).outerHeight();
          }
        });
        // Finally we set the carousel's min-height to the value we've found to be the tallest...
        $(".carousel-inner").css("height",maxheight+"px");
      }
    });
  }

  updateCarouselSizes();

  $( window ).resize(function() {
    updateCarouselSizes();
  });

  
  $('#downloadInvitation').click(function(){
    var a = document.createElement('a');
    a.href = $("#base64")[0].innerHTML;
    a.download = 'invitacion.jpg';
    a.click();
  });


});
