//jshint esversion:6

module.exports = { fulldate, getWeekday };

function fulldate() {
  let dateOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let date = new Date();
  let fulldate = date.toLocaleDateString("eng-us", dateOptions);

  return fulldate;
}

// module.exports.getWeekday = getWeekday;
// below code is only demo
function getWeekday() {
  let dateOptions = {
    weekday: "long",
  };
  let date = new Date();
  let fulldate = date.toLocaleDateString("eng-us", dateOptions);

  return fulldate;
}
