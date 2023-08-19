let inputName = document.getElementById("name");

let button = document.getElementById("btn");

let paragraph = document.getElementById("str");

button.addEventListener("click", function () {
  let name = inputName.value;

  name = name
    .split("")
    .map((s) => {
      if (s === "<" || s === ">" || s === "/") {
        return "'";
      }
      return s;
    })
    .join("");

  paragraph.innerHTML = name;
  console.log(inputName.value);
});
