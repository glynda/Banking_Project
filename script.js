const paragh = document.createElement("p");
const onFirstName = (fname) => {
  return fname;
};
paragh.textContent = `Hello, ${onFirstName("Glynda")} I created Element p using JavaScript.`;
paragh.setAttribute("id", "elFname");
paragh.style.color = "blue";
const inputAge = document.querySelector("#inputAge");
const btnAge = document.querySelector("#btnAge");
const message = document.querySelector("#message");

const verifyAge = () => {
  if (!inputAge.value) {
    message.textContent = "Please enter age";
  } else {
    const userAge = +inputAge.value;
    console.log(typeof userAge);
    message.textContent = `Age: ${userAge}`;
  }

  document.body.appendChild(paragh);
};
const newBtn = document.createElement("button");
newBtn.textContent = "Click me!";
newBtn.type = "button";

newBtn.classList.add("btnSubmit");
const onRegister = () => {
  // const myPopWin = window.open("https://google.com", "width=400,height=300");
  let newWindow = window.open(
    "register.html",
    "registerWindow", //must have window name
    "width=400,height=300,left=50,top=50",
  );
  if (newWindow) {
    newWindow.focus(); // Bring the new window to the front
  }
  // const newWindow = window.open("register.html", "width=400,height=300");
  if (newWindow) window.focus();
};
const onTesting = () => {
  const myAlert = alert("hello world");
  if (myAlert) myAlert.focus();
};
newBtn.addEventListener("click", onRegister);

const newEl = document.querySelector("#newModule");
newEl.appendChild(newBtn);
const testh2 = document.querySelector("#testh2");
testh2.textContent = "This is editng style fontSize text";
testh2.style.fontSize = "32px";

btnAge.addEventListener("click", verifyAge);

let isDisplay = false;

const newInput = () => {
  isDisplay = true;
};

newInput();

const lname = document.querySelector("#lname");
if (lname.textContent === "Sur") console.log("last name match");
else console.log("Data does not match");
