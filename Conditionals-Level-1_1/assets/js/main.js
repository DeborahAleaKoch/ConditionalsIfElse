function adult() {
  const inputAge = document.querySelector("#age").valueAsNumber;

  const output = document.querySelector(".output-age");

  console.log(inputAge);

  if (inputAge < 18) {
    output.innerHTML += `<p>${inputAge}, also nicht Volljährig!</p>`;
    console.log("die zahl ist kleiner 18.");
  } else {
    output.innerHTML += `<p>${inputAge} volljährig!</p>`;
    console.log("die zahl ist größer 18.");
  }
}
