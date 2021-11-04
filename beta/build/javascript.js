 
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
        function divdown2() {
            var x = document.getElementById("txtbx2"); 
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
            var y = document.getElementById("image2");
            if(y.className === "start"){
                y.className = "color";
            }
            }