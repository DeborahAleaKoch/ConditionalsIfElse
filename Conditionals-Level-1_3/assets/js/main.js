function adult() {
  const inputAge = document.querySelector("#age").valueAsNumber;

  const output = document.querySelector(".output-age");

  console.log(inputAge);

  if (inputAge < 18) {
    output.innerHTML = `<p>Nein, du darfst keine Shisha rauchen!!</p>`;
    console.log("Nein, du darfst keine Shisha rauchen!");
  } else {
    output.innerHTML = `<p>Ja, du darfst Shisha rauchen.</p>`;
    console.log("Ja, du darfst Shisha rauchen.");
  }
}
