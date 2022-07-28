// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("1/1/99");
$("#1a").text(gradDate.format("MMM Do, YYYY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var thatDay = moment("1/1/2022", "MM-DD-YY");
var dayWeek = thatDay.format("[It will be a] dddd");
$("#2a").text(dayWeek);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().format("DDD");
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format("HH:mm:SS");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876);
$("#6a").text(unixFormat.format("MMM Do, YYYY"));