 
    function spin() {
      var x = document.getElementById("button"); 
      if (x.className === "set") {
        x.className = "rotate-scale-up";
      }
      else if ( x.className === "rotate-scale-up") {
        x.className = 'set';
      }
      else if ( x.className === "init") {
        x.className = "rotate-scale-up";
        x.idName = 'none';
      }
      }
