function beshyKoh() {
    var inputText = document.getElementById("beshy_inputTxt").value;
    var beshyTxt = inputText.split(" ");
    var beshy_output = "";
    
    for (var i = 0; i < beshyTxt.length; i++) {
      beshy_output += beshyTxt[i] + " 🤸🏼‍♂️ ";
    }
    
    document.getElementById("beshy_outputTxt").innerText = beshy_output;
  }