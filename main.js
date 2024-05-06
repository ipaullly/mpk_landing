const myButton = document.querySelector(".my-button");
const yellowLed = document.querySelector(".led-yellow");

function onFooClick() {
  if (myButton.innerText == 'ON') {
    myButton.innerText = "OFF"; 
    yellowLed.classList.add("led-yellow-blink");
  } else {
    myButton.innerText = "ON";
    yellowLed.classList.remove("led-yellow-blink");
  }
}
myButton.onclick = onFooClick;