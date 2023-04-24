const fields = Array.from(document.querySelectorAll("input"));
const spanError = Array.from(document.querySelectorAll(".control span"));
const years = document.querySelector(".years .dash");
const months = document.querySelector(".months .dash");
const days = document.querySelector(".days .dash");
const btn = document.querySelector(".icon");


function test() {
  const birthYear = document.querySelector(".year-field").value;
  const birthMonth = document.querySelector(".month-field").value;
  const birthD = document.querySelector(".day-field").value;

  //
  const spanYear = document.querySelector(".years .dash");
  const spanMonth = document.querySelector(".months .dash");
  const spanDay = document.querySelector(".days .dash");

  let now = new Date();
  now = now.getTime();
  let birthDay = new Date(`${birthYear}-${birthMonth}-${birthD}`);

  if(birthDay instanceof Date) {
    birthDay = birthDay.getTime();
    let age = now - birthDay;
    let wholeyear = 365 * 24 * 60 * 60 * 1000;
    let ageInYear = Math.floor(age / wholeyear);

    let wholemonth = 30 * 24 * 60 * 60 * 1000;
    let ageInMonth = Math.floor((age % wholeyear) / wholemonth);

    let wholeday = 24 * 60 * 60 * 1000;
    let ageInDay = Math.floor(((age % wholeyear) % wholemonth) / wholeday);

    spanYear.textContent = ageInYear;
    spanMonth.textContent = ageInMonth;
    spanDay.textContent = ageInDay;

  }
}

// check empty
function checkEmpty(fields) {
  fields.forEach((field) => {
    if (field.value == "") {
      field.nextElementSibling.textContent = "This field is required";
      field.parentElement.classList.add("empty");
    } else if(isNaN(field.value)) {
      field.nextElementSibling.textContent = "A number is required";
      field.parentElement.classList.add("empty");
    } else {
      field.nextElementSibling.textContent = "";
      field.parentElement.classList.remove("empty");
    }
  });
}



//checkEmpty(fields);

btn.addEventListener("click", function () {
  checkEmpty(fields)
  test();
});
