let emailInput = document.getElementById("email");
let btnClicked = document.querySelector(".footer-btn");
btnClicked.addEventListener("click", function () {
  let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  if (regex.test(emailInput.value) === true) {
    document.querySelector(".lbltxt").style.visibility = "hidden";
  } else {
    document.querySelector(".lbltxt").style.visibility = "visible";
  }
});
