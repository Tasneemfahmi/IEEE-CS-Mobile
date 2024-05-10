document.addEventListener("DOMContentLoaded", function () {
  var dayInput = document.getElementsByTagName("input")[0];
  var monthInput = document.getElementsByTagName("input")[1];
  var yearInput = document.getElementsByTagName("input")[2];
  var yearsNum = document.getElementById("yearsNum");
  var monthsNum = document.getElementById("monthsNum");
  var daysNum = document.getElementById("daysNum");

  yearsNum.innerHTML = "--";
  monthsNum.innerHTML = "--";
  daysNum.innerHTML = "--";

  function calculateAge() {
    var day = parseInt(dayInput.value);
    var month = parseInt(monthInput.value);
    var year = parseInt(yearInput.value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      yearsNum.innerHTML = "--";
      monthsNum.innerHTML = "--";
      daysNum.innerHTML = "--";
      return;
    }

    var today = new Date();
    var birthday = new Date(year, month, day);

    var ageYears = today.getFullYear() - birthday.getFullYear();

    var ageMonths = today.getMonth() - birthday.getMonth();
    if (
      ageMonths < 0 ||
      (ageMonths === 0 && today.getDate() < birthday.getDate())
    ) {
      ageMonths += 12;
    }

    var ageDays = today.getDate() - birthday.getDate();
    if (ageDays < 0) {
      var lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      ageDays = lastDayOfMonth - birthday.getDate() + today.getDate();
    }

    yearsNum.innerHTML = ageYears;
    monthsNum.innerHTML = ageMonths;
    daysNum.innerHTML = ageDays;
  }

  dayInput.addEventListener("input", calculateAge);
  monthInput.addEventListener("input", calculateAge);
  yearInput.addEventListener("input", calculateAge);
});
