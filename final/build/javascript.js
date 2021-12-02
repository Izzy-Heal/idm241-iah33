 
    function divdown() {
        var x = document.getElementById("txtbx"); 
        console.log("works")
        if (x.className === "init") {
          x.className = "slide-out-bottom";
        }
        else if ( x.className === "slide-out-bottom") {
          x.className = 'slide-up';
        }
        else if ( x.className === "slide-up") {
            x.className = 'slide-out-bottom';
          }
        var y = document.getElementById("image");
        if(y.className === "start"){
            y.className = "color";
        }
        }
      
      function stopAllAudio() {
        sound.pause();
        sound.currentTime = 0;
      }
      const sound = document.getElementById('sound');
      const modal = document.getElementById('modal');
      const closeModal = document.getElementById('modal_button');
      
      function modalopen(){
      stopAllAudio();
      sound.play();
      modal.hidden = !modal.hidden;
      }

      closeModal.addEventListener('click', function() {
        modal.hidden = !modal.hidden;
        stopAllAudio();
      });