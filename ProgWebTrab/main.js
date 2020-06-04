$(function () {
  var gameplay = 1;
  var winner = "";
  var jogada = 0;
  var placar = [0, 0, 0];

  function equalpositions(a, b, c) {
    var positionA = $("#position" + a);
    var positionB = $("#position" + b);
    var positionC = $("#position" + c);
    var dataA = $("#position" + a).css("background-image");
    var dataB = $("#position" + b).css("background-image");
    var dataC = $("#position" + c).css("background-image");
    if (dataA == dataB && dataB == dataC && dataA != "none" && dataA != "") {
      if (dataA.indexOf("1.jpg") >= 0) winner = "1";
      else winner = "2";
      return true;
    } else {
      return false;
    }
  }

  function gameover() {
    if (
      equalpositions(0, 1, 2) ||
      equalpositions(3, 4, 5) ||
      equalpositions(6, 7, 8) ||
      equalpositions(0, 3, 6) ||
      equalpositions(1, 4, 7) ||
      equalpositions(2, 5, 8) ||
      equalpositions(0, 4, 8) ||
      equalpositions(2, 4, 6)
    ) {
      $("#winner").html("<h1>Player " + winner + " Wins! </h1>");
      //$(".position").off("click");
      placar[winner]++;
    } else {
      if (jogada == 9) {
        $("#winner").html("<h1> Draw :D </h1>");
        placar[0]++;
        
      }
    }
    $("#placar").html("Empate:"+ placar[0] +"<br> Player 1:"+placar[1]+"<br>Player 2:"+placar[2]);
  }

  $(".position").click(function () {
    var bg = $(this).css("background-image");
    if (bg == "none" || bg == "") {
      var image = "url(" + gameplay.toString() + ".jpg)";
      $(this).css("background", image);
      gameplay = gameplay == 1 ? 2 : 1;
      jogada = jogada + 1;
      gameover();
    }
  });

  $(".resetGame").click(function () {
    $(".position").on("click");

      var backg = $(this).css("background-image");
      if (backg == "none" || backg == "") {
        let img = "none";
        $(".position").css("background", img);
        gameplay = winner;
        winner = "";
        jogada = 0;
        
        
      }  
    
  });
  

});


