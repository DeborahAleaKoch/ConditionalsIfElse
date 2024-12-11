function weather() {
  const input = document.querySelector("#number").valueAsNumber;

  //   console.log(input);
  const weatherOutput = document.querySelector(".weather-score");

  if (input >= 8) {
    console.log(input, "wetter ist super");
    weatherOutput.innerHTML = `<p>Das Wetter ist Super!!</p>`;
  } else if (input >= 6 && input <= 7) {
    console.log(input, "wetter ist gut");
    weatherOutput.innerHTML = `<p>Das Wetter ist gut!!</p>`;
  } else if (input >= 3 && input <= 5) {
    console.log(input, "wetter ist okay");
    weatherOutput.innerHTML = `<p>Das Wetter ist okay!!</p>`;
  } else if (input <= 2 && input >= 0) {
    console.log(input, "wetter ist schlecht!");
    weatherOutput.innerHTML = `<p>Das Wetter ist schlecht!!</p>`;
  }
}
