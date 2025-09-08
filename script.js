const display = document.getElementById("display");

function AppendToDisplay(input){
  display.value += input;
}

function ClearDisplay(){
  display.value = "";
}

function Calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    dusplay.value = "Error";
  }
}

function Backspace(){
  display.value -= input;
}