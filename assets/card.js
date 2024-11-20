userName.addEventListener("input", handleİnputName);
userNumber.addEventListener("input", handleİnputNumber);
dateMonth.addEventListener("input", handleİnputMonth);
dateYear.addEventListener("input", handleİnputYear);
inputCvc.addEventListener("input", handleİnputCvc);
confirmBtn.addEventListener("click", confirmClick);
const userInfo = document.querySelector(".user-infos-container");
function handleİnputName() {
  cardName.innerText = userName.value.substring(0, 30).toLocaleUpperCase("TR");
  cardName.innerText = userName.value;
}
function handleİnputNumber() {
  userNumber.value = userNumber.value.substring(0, 16);
  cardNumber.value = userNumber.value;
}
function handleİnputMonth() {
  dateMonth.value = dateMonth.value.substring(0, 2);
  mm.innerText = dateMonth.value;
}
function handleİnputYear() {
  dateYear.value = dateYear.value.substring(0, 2);
  yy.innerText = dateYear.value;
}
function handleİnputCvc() {
  inputCvc.value = inputCvc.value.substring(0, 3);
  cvc.value = inputCvc.value;
}
function confirmClick() {
  if (userName.value === "") {
    userName.style.border = "1px solid #FF5050";
  }
  if (userNumber.value === "" || userNumber.value.length != 16) {
    userNumber.style.border = "1px solid #FF5050";
  }
  if (dateMonth.value === "" || dateMonth.value.length != 2) {
    dateMonth.style.border = "1px solid #FF5050";
  }
  if (dateYear.value === "" || dateYear.value.length != 2) {
    dateYear.style.border = "1px solid #FF5050";
  }
  if (inputCvc.value === "" || inputCvc.value.length != 3) {
    inputCvc.style.border = "1px solid #FF5050";
  }
  if (userName.value !== "") {
    if (userNumber.value !== "" || userNumber.value.length === 16) {
      if (dateMonth.value !== "" || dateMonth.value.length === 2) {
        if (dateYear.value !== "" || dateYear.value.length === 2) {
          if (inputCvc.value !== "" || inputCvc.value.length === 3) {
            userInfo.innerHTML = `<div class="thanks-container">
        <img src="assets/images/checked.svg" alt="">
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button class="confirm">Confirm</button>
    </div>`;
          }
        }
      }
    }
  }
}
