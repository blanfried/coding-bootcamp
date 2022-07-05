
    document.getElementById("button2").addEventListener("click", function(){

        document.getElementById("picture").style.height = "250px";
        document.getElementById("picture").style.width = "250px"

    });

    document.getElementById("button1").addEventListener("click", function(){

        document.getElementById("picture").style.border = "25px solid";
        document.getElementById("picture").style.borderColor = "red";

    });

    document.getElementById("button3").addEventListener("click", function(){

        document.getElementById("picture").style.opacity = "0.2";
      
    });

    document.getElementById("button4").addEventListener("click", function(){

        document.getElementById("picture").style.border = "0px";
        document.getElementById("picture").style.height = "500px";
        document.getElementById("picture").style.width = "500px";
        document.getElementById("picture").style.opacity = "1";

    });