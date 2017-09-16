 
       
        window.sr = ScrollReveal();
        sr.reveal('.grid-item', {
          reset: true,
          duration: 600,
          distance: '150px',
          origin: 'bottom',
          rotate: { x: 0, y: 0, z: 0 },
          scale: 0.95,
          mobile: true,
          viewFactor: 0.2,
          viewOffset: { top: 30, right: 0, bottom: 30, left: 0 },

        });
        sr.reveal('#JQSecuence', { 
          reset: true,
          afterReveal  : function (domEl) {
            $('#JQSecuence .grid-itemL').each(function(i) {
              var num = (i % 4) + 1;
              var neely = 700 * parseInt(i);
              $(this).delay(neely).queue(function () {
                $(this).addClass('slide-in-elliptic-left-fwd');
              });
            });

            $('#JQSecuence .grid-itemR').each(function(i) {
              var num = (i % 4) + 1;
              var neely = 700 * parseInt(i)+350;
              $(this).delay(neely).queue(function () {
                $(this).addClass('slide-in-elliptic-right-fwd');
              });
            });
          }
        }); 
       





// ------------------------------------------Navigation on Head--------------------------------------------------
        var $nav = $('.greedy-nav');
        var $btn = $('.greedy-nav button');
        var $vlinks = $('.greedy-nav .visible-links');
        var $hlinks = $('.greedy-nav .hidden-links');

        var breaks = [];

        function updateNav() {
          
          var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

          // The visible list is overflowing the nav
          if($vlinks.width() > availableSpace) {

            // Record the width of the list
            breaks.push($vlinks.width());

            // Move item to the hidden list
            $vlinks.children().last().prependTo($hlinks);

            // Show the dropdown btn
            if($btn.hasClass('hidden')) {
              $btn.removeClass('hidden');
            }

          // The visible list is not overflowing
          } else {

            // There is space for another item in the nav
            if(availableSpace > breaks[breaks.length-1]) {

              // Move the item to the visible list
              $hlinks.children().first().appendTo($vlinks);
              breaks.pop();
            }

            // Hide the dropdown btn if hidden list is empty
            if(breaks.length < 1) {
              $btn.addClass('hidden');
              $hlinks.addClass('hidden');
            }
          }

          // Keep counter updated
          $btn.attr("count", breaks.length);

          // Recur if the visible list is still overflowing the nav
          if($vlinks.width() > availableSpace) {
            updateNav();
          }

        }

        // Window listeners

        $(window).resize(function() {
            updateNav();
        });

        $btn.on('click', function() {
          $hlinks.toggleClass('hidden');
        });

        updateNav(); 

 


// ------------------------------------Animations Timeoutes-------------------------- 
setTimeout(function(){
      $('.tel').css('visibility', 'visible').addClass('slideUpReturn');
    }, 1300);
     //setTimeout(function(){
    //   $('.mail').css('visibility', 'visible').addClass('slideUpReturn');
    // }, 400);
    //  setTimeout(function(){
    //   $('.adress').css('visibility', 'visible').addClass('slideUpReturn');
    // }, 400);
       