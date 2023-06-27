//1. Test converting a string to a datetime object with a specific format in JS
/*
In this test, the Test converting string to datetime object with specific format test case 
checks if the datetime object created by parsing the dateTimeStr string using the specified 
format matches the expected year, month, day, hour, minute, and second components.
*/

const moment = require('moment');

test('Test converting string to datetime object with specific format', () => {
  const dateTimeStr = '2023-06-27 12:00:00';
  const format = 'YYYY-MM-DD HH:mm:ss';
  const dateTimeObj = moment(dateTimeStr, format);
  
  expect(dateTimeObj.year()).toBe(2023);
  expect(dateTimeObj.month() + 1).toBe(6);
  expect(dateTimeObj.date()).toBe(27);
  expect(dateTimeObj.hour()).toBe(12);
  expect(dateTimeObj.minute()).toBe(0);
  expect(dateTimeObj.second()).toBe(0);
});


//2. Test converting a datetime object to a string with a specific format in JS
/*
In this test, the Test converting datetime object to string with specific format test case 
converts the dateTimeObj datetime object to a string using the specified format. 
The test then verifies that the resulting string matches the expected value '27/06/2023 12:00:00'.
*/

const moment = require('moment');

test('Test converting datetime object to string with specific format', () => {
  const dateTimeObj = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const format = 'DD/MM/YYYY HH:mm:ss';
  const dateTimeStr = dateTimeObj.format(format);
  
  expect(dateTimeStr).toBe('27/06/2023 12:00:00');
});


//3. Test converting a date to a datetime object in a javascript unit test
/*
In this test, the Test converting date to datetime object test case creates a JavaScript Date object 
representing June 27, 2023. It then converts the date to a datetime object using the moment library. 
The test verifies that the resulting datetime object has the expected year, month, day, hour, minute, 
and second components.
*/

const moment = require('moment');

test('Test converting date to datetime object', () => {
  const date = new Date(2023, 5, 27); // June 27, 2023
  const dateTimeObj = moment(date);
  
  expect(dateTimeObj.year()).toBe(2023);
  expect(dateTimeObj.month() + 1).toBe(6);
  expect(dateTimeObj.date()).toBe(27);
  expect(dateTimeObj.hour()).toBe(0);
  expect(dateTimeObj.minute()).toBe(0);
  expect(dateTimeObj.second()).toBe(0);
});


//4. Test converting a time to a datetime object.
/*
In this test, the Test converting time to datetime object test case takes a specific time value 
(12:30:45 in this example) and combines it with the current date to form a datetime string. 
The moment library is then used to parse the datetime string and create a datetime object. 
The test verifies that the resulting datetime object has the expected hour, minute, and second components.
*/

const moment = require('moment');

test('Test converting time to datetime object', () => {
  const time = '12:30:45'; // 12:30:45 PM
  const date = moment().format('YYYY-MM-DD'); // Get the current date
  const dateTimeStr = `${date} ${time}`;
  const dateTimeObj = moment(dateTimeStr, 'YYYY-MM-DD HH:mm:ss');
  
  expect(dateTimeObj.hour()).toBe(12);
  expect(dateTimeObj.minute()).toBe(30);
  expect(dateTimeObj.second()).toBe(45);
});

//5. Test for adding and subtracting days, hours, minutes and seconds to and from a datetime object
/*
In this test, we use Luxon's DateTime class to create an initial datetime object representing 
a specific date and time. We then perform various operations such as adding and subtracting 
days, hours, minutes, and seconds using the plus and minus methods provided by Luxon. 
After each operation, we assert that the resulting datetime object has the expected values for the respective units.
*/

const { DateTime } = require('luxon');

test('test adding and subtracting days, hours, minutes, and seconds to a datetime object', () => {
  // Set the initial datetime
  const initialDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 1, hour: 12, minute: 0, second: 0 });

  // Add 2 days
  const afterAddingDays = initialDatetime.plus({ days: 2 });
  expect(afterAddingDays.day).toBe(3); // Day should be 3

  // Subtract 1 day
  const afterSubtractingDays = initialDatetime.minus({ days: 1 });
  expect(afterSubtractingDays.day).toBe(31); // Day should be 31

  // Add 3 hours
  const afterAddingHours = initialDatetime.plus({ hours: 3 });
  expect(afterAddingHours.hour).toBe(15); // Hour should be 15

  // Subtract 2 hours
  const afterSubtractingHours = initialDatetime.minus({ hours: 2 });
  expect(afterSubtractingHours.hour).toBe(10); // Hour should be 10

  // Add 30 minutes
  const afterAddingMinutes = initialDatetime.plus({ minutes: 30 });
  expect(afterAddingMinutes.minute).toBe(30); // Minute should be 30

  // Subtract 15 minutes
  const afterSubtractingMinutes = initialDatetime.minus({ minutes: 15 });
  expect(afterSubtractingMinutes.minute).toBe(45); // Minute should be 45

  // Add 45 seconds
  const afterAddingSeconds = initialDatetime.plus({ seconds: 45 });
  expect(afterAddingSeconds.second).toBe(45); // Second should be 45

  // Subtract 20 seconds
  const afterSubtractingSeconds = initialDatetime.minus({ seconds: 20 });
  expect(afterSubtractingSeconds.second).toBe(40); // Second should be 40

  // You can add more test cases for different scenarios
});

//6. Verify the correct date and day are shown when adding or subtracting seconds, minutes and hours on boundary datetime
const { DateTime } = require('luxon');

test('test correct date and day when adding or subtracting seconds, minutes, and hours on boundary datetime', () => {
  // Set the initial datetime to a boundary date and time
  const initialDatetime = DateTime.fromObject({ year: 2023, month: 12, day: 31, hour: 23, minute: 59, second: 59 });

  // Add 1 second
  const afterAddingSeconds = initialDatetime.plus({ seconds: 1 });
  expect(afterAddingSeconds.day).toBe(1); // Day should be 1
  expect(afterAddingSeconds.month).toBe(1); // Month should be 1 (January)
  expect(afterAddingSeconds.year).toBe(2024); // Year should be 2024

  // Subtract 1 second
  const afterSubtractingSeconds = initialDatetime.minus({ seconds: 1 });
  expect(afterSubtractingSeconds.day).toBe(31); // Day should be 31
  expect(afterSubtractingSeconds.month).toBe(12); // Month should be 12 (December)
  expect(afterSubtractingSeconds.year).toBe(2023); // Year should be 2023

  // Add 1 minute
  const afterAddingMinutes = initialDatetime.plus({ minutes: 1 });
  expect(afterAddingMinutes.day).toBe(1); // Day should be 1
  expect(afterAddingMinutes.month).toBe(1); // Month should be 1 (January)
  expect(afterAddingMinutes.year).toBe(2024); // Year should be 2024

  // Subtract 1 minute
  const afterSubtractingMinutes = initialDatetime.minus({ minutes: 1 });
  expect(afterSubtractingMinutes.day).toBe(31); // Day should be 31
  expect(afterSubtractingMinutes.month).toBe(12); // Month should be 12 (December)
  expect(afterSubtractingMinutes.year).toBe(2023); // Year should be 2023

  // Add 1 hour
  const afterAddingHours = initialDatetime.plus({ hours: 1 });
  expect(afterAddingHours.day).toBe(1); // Day should be 1
  expect(afterAddingHours.month).toBe(1); // Month should be 1 (January)
  expect(afterAddingHours.year).toBe(2024); // Year should be 2024

  // Subtract 1 hour
  const afterSubtractingHours = initialDatetime.minus({ hours: 1 });
  expect(afterSubtractingHours.day).toBe(31); // Day should be 31
  expect(afterSubtractingHours.month).toBe(12); // Month should be 12 (December)
  expect(afterSubtractingHours.year).toBe(2023); // Year should be 2023

  // You can add more test cases for other boundary datetimes
});


//7. Test calculating the difference in days between two datetime objects.
/*
In this test, the Test calculating difference in days between two datetime objects test case 
creates two datetime objects representing June 27, 2023, and June 30, 2023. It then calculates 
the difference in days between the two datetime objects using the diff method from the moment library with the 'days' parameter.
 The test verifies that the calculated difference in days is equal to the expected value, which is 3 in this case.
 */

const moment = require('moment');

test('Test calculating difference in days between two datetime objects', () => {
  const dateTimeObj1 = moment('2023-06-27', 'YYYY-MM-DD');
  const dateTimeObj2 = moment('2023-06-30', 'YYYY-MM-DD');
  
  const diffInDays = dateTimeObj2.diff(dateTimeObj1, 'days');
  
  expect(diffInDays).toBe(3);
});

//8. Test calculating the difference in hours between two datetime objects.
/*
In this test, the Test calculating difference in hours between two datetime objects 
test case creates two datetime objects representing June 27, 2023, at 12:00:00 PM, 
and June 28, 2023, at 08:30:00 AM. It then calculates the difference in hours between 
the two datetime objects using the diff method from the moment library with the 'hours' parameter. 
The test verifies that the calculated difference in hours is equal to the expected value, which is 20.5 in this case.
*/
const moment = require('moment');

test('Test calculating difference in hours between two datetime objects', () => {
  const dateTimeObj1 = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj2 = moment('2023-06-28 08:30:00', 'YYYY-MM-DD HH:mm:ss');
  
  const diffInHours = dateTimeObj2.diff(dateTimeObj1, 'hours');
  
  expect(diffInHours).toBe(20.5);
});


//9. Test calculating the difference in minutes between two datetime objects.
/*
In this test, the Test calculating difference in minutes between two datetime objects 
test case creates two datetime objects representing June 27, 2023, at 12:00:00 PM and June 27, 2023, 
at 12:15:30 PM. It then calculates the difference in minutes between the two datetime objects using the 
diff method from the moment library with the 'minutes' parameter. The test verifies that the calculated 
difference in minutes is equal to the expected value, which is 15.5 in this case.
*/
const moment = require('moment');

test('Test calculating difference in minutes between two datetime objects', () => {
  const dateTimeObj1 = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj2 = moment('2023-06-27 12:15:30', 'YYYY-MM-DD HH:mm:ss');
  
  const diffInMinutes = dateTimeObj2.diff(dateTimeObj1, 'minutes');
  
  expect(diffInMinutes).toBe(15.5);
});


//10. Test calculating the difference in seconds between two datetime objects.
/*
In this test, the Test calculating difference in seconds between two datetime objects test case creates 
two datetime objects representing June 27, 2023, at 12:00:00 PM and June 27, 2023, at 12:00:10 PM. 
It then calculates the difference in seconds between the two datetime objects using the diff method from 
the moment library with the 'seconds' parameter. The test verifies that the calculated difference in seconds 
is equal to the expected value, which is 10 in this case.
*/

const moment = require('moment');

test('Test calculating difference in seconds between two datetime objects', () => {
  const dateTimeObj1 = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj2 = moment('2023-06-27 12:00:10', 'YYYY-MM-DD HH:mm:ss');
  
  const diffInSeconds = dateTimeObj2.diff(dateTimeObj1, 'seconds');
  
  expect(diffInSeconds).toBe(10);
});

//11. Test checking if a year is a leap year.
/*
In this updated version, the isLeapYear function returns true if the year is divisible by 4 and not divisible by 100, 
or if the year is divisible by 400. The test cases use the toBeTruthy and toBeFalsy matchers to make the assertions 
more concise and expressive.
*/

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

test('Test checking if a year is a leap year', () => {
  expect(isLeapYear(2000)).toBeTruthy();  // Divisible by 4, 100, and 400
  expect(isLeapYear(2020)).toBeTruthy();  // Divisible by 4 but not by 100
  expect(isLeapYear(1900)).toBeFalsy();   // Divisible by 4 and 100 but not by 400
  expect(isLeapYear(2021)).toBeFalsy();   // Not divisible by 4
});

//12. Test formatting a datetime object to a specific format in javascript
/*
In this test, the Test formatting a datetime object to a specific format 
test case creates a datetime object representing June 27, 2023, at 12:00:00 PM using the moment library. 
It then formats the datetime object to the desired format 'YYYY/MM/DD HH:mm:ss' using the format method. 
The test verifies that the resulting formatted datetime matches the expected value '2023/06/27 12:00:00'.
*/
const moment = require('moment');

test('Test formatting a datetime object to a specific format', () => {
  const dateTimeObj = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const formattedDateTime = dateTimeObj.format('YYYY/MM/DD HH:mm:ss');
  
  expect(formattedDateTime).toBe('2023/06/27 12:00:00');
});

//13. Test getting the day of the week from a datetime object. in javascript
/*
In this test, the Test getting the day of the week from a datetime object 
test case creates a datetime object representing June 27, 2023, using the moment library. 
It then retrieves the day of the week by formatting the datetime object with the format 'dddd', 
which represents the full weekday name. The test verifies that the resulting day of the week 
is equal to the expected value 'Tuesday'.
*/
const moment = require('moment');

test('Test getting the day of the week from a datetime object', () => {
  const dateTimeObj = moment('2023-06-27', 'YYYY-MM-DD');
  const dayOfWeek = dateTimeObj.format('dddd');
  
  expect(dayOfWeek).toBe('Tuesday');
});

//14. Test getting the month, year, hour, minute, second from a datetime object.
/*
In this test, the Test getting the month, year, hour, minute, and second 
from a datetime object test case creates a datetime object representing June 27, 2023, 
at 12:34:56 PM using the moment library. It then retrieves the month, year, hour, minute, 
and second from the datetime object by formatting it with the respective format codes. 
The test verifies that each value matches the expected value.
*/
const moment = require('moment');

test('Test getting the month, year, hour, minute, and second from a datetime object', () => {
  const dateTimeObj = moment('2023-06-27 12:34:56', 'YYYY-MM-DD HH:mm:ss');
  
  const month = dateTimeObj.format('MMMM'); // Full month name
  const year = dateTimeObj.format('YYYY');
  const hour = dateTimeObj.format('HH');
  const minute = dateTimeObj.format('mm');
  const second = dateTimeObj.format('ss');
  
  expect(month).toBe('June');
  expect(year).toBe('2023');
  expect(hour).toBe('12');
  expect(minute).toBe('34');
  expect(second).toBe('56');
});


//15. Test comparing two datetime objects for equality, inequality, greater than and less than in javascript
/*
In this test, the Test comparing datetime objects for equality, inequality, greater than, and less than 
test case creates three datetime objects representing different dates and times using the moment library. 
It then performs various comparisons between the datetime objects using the isSame, isAfter, and isBefore methods. 
The test verifies the expected results for equality, inequality, greater than, and less than comparisons.
*/

const moment = require('moment');

test('Test comparing datetime objects for equality, inequality, greater than, and less than', () => {
  const dateTimeObj1 = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj2 = moment('2023-06-27 15:30:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj3 = moment('2023-06-28 09:00:00', 'YYYY-MM-DD HH:mm:ss');
  
  // Equality
  expect(dateTimeObj1.isSame(dateTimeObj1)).toBe(true);
  
  // Inequality
  expect(dateTimeObj1.isSame(dateTimeObj2)).toBe(false);
  
  // Greater than
  expect(dateTimeObj2.isAfter(dateTimeObj1)).toBe(true);
  expect(dateTimeObj3.isAfter(dateTimeObj2)).toBe(true);
  
  // Less than
  expect(dateTimeObj1.isBefore(dateTimeObj2)).toBe(true);
  expect(dateTimeObj2.isBefore(dateTimeObj3)).toBe(true);
});


//16. Test handling timezone conversions correctly.
/*
In this test, the Test handling timezone conversions correctly test case creates 
a datetime object representing June 27, 2023, at 12:00:00 PM in the 'America/New_York' 
timezone using the moment-timezone library. It then performs the following steps:

Clones the datetime object and converts it to UTC using the utc method.
Clones the UTC datetime object and converts it to the 'Asia/Tokyo' timezone using the tz method.
Creates an expected datetime object representing June 28, 2023, at 01:00:00 AM in the 'Asia/Tokyo' timezone.
Compares the converted datetime object with the expected converted datetime object using the isSame method.
The test verifies that the converted datetime object matches the expected converted datetime object, 
ensuring that the timezone conversions are handled correctly.

Please note that the test assumes the availability of the moment-timezone library. 
Make sure to install it using a package manager like npm or yarn before running the test.
*/
const moment = require('moment-timezone');

test('Test handling timezone conversions correctly', () => {
  const dateTimeObj = moment.tz('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss', 'America/New_York');
  
  const utcDateTime = dateTimeObj.clone().utc();
  const convertedDateTime = utcDateTime.clone().tz('Asia/Tokyo');
  
  const expectedConvertedDateTime = moment.tz('2023-06-28 01:00:00', 'YYYY-MM-DD HH:mm:ss', 'Asia/Tokyo');
  
  expect(convertedDateTime.isSame(expectedConvertedDateTime)).toBe(true);
});

//17. Test parsing a datetime string with an invalid format.
/* 
In this test, the Test parsing a datetime string with an invalid format test case attempts to parse 
the invalidDateTimeStr with the specified format using the moment library. 
The test verifies that the parsed datetime object is invalid by checking the isValid method, 
which returns false if the parsing was unsuccessful.
*/
const moment = require('moment');

test('Test parsing a datetime string with an invalid format', () => {
  const invalidDateTimeStr = '2023-06-27 12:00:00';
  const format = 'YYYY/MM/DD HH:mm:ss';
  
  const parsedDateTime = moment(invalidDateTimeStr, format);
  
  expect(parsedDateTime.isValid()).toBe(false);
});

//18. Test handling invalid datetime values gracefully.
/*
In this test, the Test handling invalid datetime values gracefully test case attempts to parse the 
invalidDateTimeStr using the moment library. The test verifies the following:

The parsed datetime object is invalid by checking the isValid method.
Each component of the datetime object (year, month, date, hour, minute, second) returns NaN since the parsing was unsuccessful.
By checking the validity of the parsed datetime object and ensuring that the individual components are NaN, 
you can test whether your code handles invalid datetime values gracefully.
*/
const moment = require('moment');

test('Test handling invalid datetime values gracefully', () => {
  const invalidDateTimeStr = '2023-13-45 25:90:80';
  
  const parsedDateTime = moment(invalidDateTimeStr);
  
  expect(parsedDateTime.isValid()).toBe(false);
  expect(parsedDateTime.isValid()).toBe(false);
  expect(parsedDateTime.year()).toBeNaN();
  expect(parsedDateTime.month()).toBeNaN();
  expect(parsedDateTime.date()).toBeNaN();
  expect(parsedDateTime.hour()).toBeNaN();
  expect(parsedDateTime.minute()).toBeNaN();
  expect(parsedDateTime.second()).toBeNaN();
});

//19. Test extracting the day of the month, the year, the week number or the quarter from a datetime object.
/*
In this test, the Test extracting the day of the month, year, week number, and quarter 
from a datetime object test case creates a datetime object representing June 27, 2023, using the moment library. 
It then extracts the following information from the datetime object:

dayOfMonth: Retrieves the day of the month using the date method.
year: Retrieves the year using the year method.
weekNumber: Retrieves the week number using the week method.
quarter: Calculates the quarter by dividing the month index by 3 and rounding up using Math.ceil.
The test verifies that each extracted value matches the expected result.
*/

const moment = require('moment');

test('Test extracting the day of the month, year, week number, and quarter from a datetime object', () => {
  const dateTimeObj = moment('2023-06-27', 'YYYY-MM-DD');
  
  const dayOfMonth = dateTimeObj.date();
  const year = dateTimeObj.year();
  const weekNumber = dateTimeObj.week();
  const quarter = Math.ceil(dateTimeObj.month() / 3);
  
  expect(dayOfMonth).toBe(27);
  expect(year).toBe(2023);
  expect(weekNumber).toBe(26);
  expect(quarter).toBe(3);
});

//20. Test getting the maximum value for a datetime object.
/*
In this test, the Test getting the maximum value for a datetime object test case creates 
two datetime objects representing different dates and times using the moment library. 
It then uses the moment.max function to determine the maximum value among the two datetime objects. 
The test verifies that the maxDateTime object is the same as dateTimeObj2, 
indicating that it represents the maximum value.
*/

const moment = require('moment');

test('Test getting the maximum value for a datetime object', () => {
  const dateTimeObj1 = moment('2023-06-27 12:00:00', 'YYYY-MM-DD HH:mm:ss');
  const dateTimeObj2 = moment('2023-06-28 09:00:00', 'YYYY-MM-DD HH:mm:ss');
  
  const maxDateTime = moment.max(dateTimeObj1, dateTimeObj2);
  
  expect(maxDateTime.isSame(dateTimeObj2)).toBe(true);
});


//21. Test getting the start of the day from a datetime object.
/*
In this test, the Test getting the start of the day from a datetime object 
test case creates a datetime object representing June 27, 2023, at 12:34:56 PM 
using the moment library. It then uses the startOf method with the argument 'day' to get 
the start of the day from the datetime object. The test verifies that the startOfDay object 
is the same as the expected start of the day, which is June 27, 2023, at 00:00:00 AM.
*/

const moment = require('moment');

test('Test getting the start of the day from a datetime object', () => {
  const dateTimeObj = moment('2023-06-27 12:34:56', 'YYYY-MM-DD HH:mm:ss');
  
  const startOfDay = dateTimeObj.startOf('day');
  
  const expectedStartOfDay = moment('2023-06-27 00:00:00', 'YYYY-MM-DD HH:mm:ss');
  
  expect(startOfDay.isSame(expectedStartOfDay)).toBe(true);
});

//22. Test to get the start of the day in the different timezones. test every single timezone compared to UTC
/*
In this test, the Test getting the start of the day in different time zones compared to UTC test case
creates a UTC datetime object representing June 27, 2023, using moment.utc. 
It then iterates over all available time zones using moment.tz.names() and performs the following steps:

Creates a datetime object for the given date in the current time zone using moment.tz.
Uses the startOf('day') method to get the start of the day in the current time zone.
Compares the start of the day in the current time zone with the UTC datetime object to ensure they are the same.
By iterating over each time zone and comparing the start of the day in that time zone with UTC, you can test 
if the start of the day is correctly calculated across different time zones.
*/

const moment = require('moment-timezone');

test('Test getting the start of the day in different time zones compared to UTC', () => {
  const dateTimeObjUTC = moment.utc('2023-06-27');
  
  moment.tz.names().forEach(timezone => {
    const startOfDay = moment.tz('2023-06-27', timezone).startOf('day');
    
    expect(startOfDay.isSame(dateTimeObjUTC)).toBe(true);
  });
});

//23. Test getting the start of the day, the end of the day, the start of the month, 
//the end of the month, the start of the year and the end of the year from a datetime object
/*
We define six helper functions: getStartOfDay, getEndOfDay, getStartOfMonth, getEndOfMonth, getStartOfYear, and getEndOfYear. 
These functions take a DateTime object from Luxon and return the corresponding start/end of the day, month, or year.

The test case sets up a specific DateTime object representing June 27, 2023, at 10:30:00. We then calculate the expected 
start and end values for the day, month, and year based on that DateTime.

The test asserts that calling each of the helper functions with the DateTime object returns the expected start/end values
 for the corresponding unit (day, month, or year) using the toEqual matcher provided by Jest.
 */
const { DateTime } = require('luxon');

function getStartOfDay(datetime) {
  return datetime.startOf('day');
}

function getEndOfDay(datetime) {
  return datetime.endOf('day');
}

function getStartOfMonth(datetime) {
  return datetime.startOf('month');
}

function getEndOfMonth(datetime) {
  return datetime.endOf('month');
}

function getStartOfYear(datetime) {
  return datetime.startOf('year');
}

function getEndOfYear(datetime) {
  return datetime.endOf('year');
}

test('test datetime functions', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 27, hour: 10, minute: 30 });
  const expectedStartOfDay = datetime.startOf('day');
  const expectedEndOfDay = datetime.endOf('day');
  const expectedStartOfMonth = datetime.startOf('month');
  const expectedEndOfMonth = datetime.endOf('month');
  const expectedStartOfYear = datetime.startOf('year');
  const expectedEndOfYear = datetime.endOf('year');

  expect(getStartOfDay(datetime)).toEqual(expectedStartOfDay);
  expect(getEndOfDay(datetime)).toEqual(expectedEndOfDay);
  expect(getStartOfMonth(datetime)).toEqual(expectedStartOfMonth);
  expect(getEndOfMonth(datetime)).toEqual(expectedEndOfMonth);
  expect(getStartOfYear(datetime)).toEqual(expectedStartOfYear);
  expect(getEndOfYear(datetime)).toEqual(expectedEndOfYear);
});


//24. Test converting a datetime object to a different time zone in Javascript
/*
The convertToTimeZone function takes a DateTime object from Luxon and a target time zone as parameters. 
It uses the setZone method to convert the datetime to the specified time zone.

The test case sets up a specific DateTime object representing June 27, 2023, at 10:30:00. 
We define the target time zone as 'America/New_York'. Then, we calculate the expected datetime in the target 
time zone by using the setZone method on the original datetime.

The test asserts that calling the convertToTimeZone function with the datetime and the target 
time zone returns the expected datetime in the target time zone using the toEqual matcher provided by Jest.
*/
const { DateTime } = require('luxon');

function convertToTimeZone(datetime, timeZone) {
  return datetime.setZone(timeZone);
}

test('test converting datetime to different time zone', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 27, hour: 10, minute: 30 });
  const targetTimeZone = 'America/New_York';
  const expectedDateTimeInTargetTimeZone = datetime.setZone(targetTimeZone);

  expect(convertToTimeZone(datetime, targetTimeZone)).toEqual(expectedDateTimeInTargetTimeZone);
});

//25. Test converting a datetime object from a different time zone to the local time zone
/*
The convertToLocalTimeZone function takes a DateTime object from Luxon and converts it to the local 
time zone by using the setZone method with the argument 'local'.

The test case sets up a specific DateTime object representing June 27, 2023, at 10:30:00 
in the 'America/New_York' time zone. We calculate the expected datetime in the local time zone by 
first converting the datetime to the original time zone and then applying the setZone method with 
the argument 'local' to convert it to the local time zone.

The test asserts that calling the convertToLocalTimeZone function with the datetime converted 
to the original time zone returns the expected datetime in the local time zone using the toEqual matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function convertToLocalTimeZone(datetime) {
  return datetime.setZone('local');
}

test('test converting datetime from different time zone to local time zone', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 27, hour: 10, minute: 30 });
  const originalTimeZone = 'America/New_York';
  const expectedDateTimeInLocalTimeZone = datetime.setZone('local');

  expect(convertToLocalTimeZone(datetime.setZone(originalTimeZone))).toEqual(expectedDateTimeInLocalTimeZone);
});

//26. Test handling daylight saving time transitions correctly.
/*
In this test, we use the Luxon library to work with datetime objects. 
We set the original datetime to a specific date and time before the daylight saving time (DST) transition, 
and then set the target datetime to the same date and time after the DST transition.

We calculate the expected difference in hours between the original datetime and the target datetime. 
Since the DST transition typically involves a change of 1 hour, the expected difference in hours in this case should be 2.

The test asserts that the actual difference in hours between the target datetime and the original datetime 
is equal to the expected difference in hours, using the toEqual matcher provided by Jest.
*/

const { DateTime } = require('luxon');

test('test handling daylight saving time transitions', () => {
  // Set the original datetime before the DST transition
  const originalDateTime = DateTime.fromObject({ year: 2023, month: 10, day: 29, hour: 1, minute: 30 });
  
  // Set the target datetime after the DST transition
  const targetDateTime = DateTime.fromObject({ year: 2023, month: 10, day: 29, hour: 3, minute: 30 });
  
  // Calculate the expected difference in hours (should be 2)
  const expectedDifferenceInHours = 2;
  
  // Get the actual difference in hours
  const actualDifferenceInHours = targetDateTime.diff(originalDateTime, 'hours').hours;
  
  expect(actualDifferenceInHours).toEqual(expectedDifferenceInHours);
});

//27. Test getting the current UTC offset.
/*
The getCurrentUTCOffset function retrieves the current UTC offset by 
calling DateTime.local().offset, which returns the UTC offset of the current system time.

The test case compares the value returned by getCurrentUTCOffset with the expected UTC offset obtained from DateTime.local().offset.

The test asserts that the actual UTC offset obtained from the getCurrentUTCOffset function is equal 
to the expected UTC offset, using the toEqual matcher provided by Jest.
*/
const { DateTime } = require('luxon');

function getCurrentUTCOffset() {
  return DateTime.local().offset;
}

test('test getting the current UTC offset', () => {
  const expectedUTCOffset = DateTime.local().offset;

  expect(getCurrentUTCOffset()).toEqual(expectedUTCOffset);
});

//28. Test converting a datetime object to a timestamp.
/*
The convertToTimestamp function takes a DateTime object from Luxon and converts 
it to a timestamp using the toMillis method, which returns the number of milliseconds since the Unix epoch (January 1, 1970).

The test case sets up a specific DateTime object representing June 27, 2023, at 10:30:00. 
We calculate the expected timestamp by calling the toMillis method on the original datetime.

The test asserts that calling the convertToTimestamp function with the datetime returns the expected 
timestamp using the toEqual matcher provided by Jest.
*/
const { DateTime } = require('luxon');

function convertToTimestamp(datetime) {
  return datetime.toMillis();
}

test('test converting datetime to timestamp', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 27, hour: 10, minute: 30 });
  const expectedTimestamp = datetime.toMillis();

  expect(convertToTimestamp(datetime)).toEqual(expectedTimestamp);
});

//29. Test converting a timestamp to a datetime object.
/*
The convertToDatetime function takes a timestamp as input and uses the 
fromMillis method of Luxon's DateTime class to create a DateTime object representing the corresponding date and time.

The test case sets up an example timestamp representing June 27, 2021, 00:00:00 UTC. 
We calculate the expected datetime by using Luxon's fromObject method and providing the year, month, day, hour, minute, 
and specifying the timezone as 'utc'.

The test asserts that calling the convertToDatetime function with the timestamp returns 
the expected datetime object using the toEqual matcher provided by Jest.
*/
const { DateTime } = require('luxon');

function convertToDatetime(timestamp) {
  return DateTime.fromMillis(timestamp);
}

test('test converting timestamp to datetime', () => {
  const timestamp = 1624800000000; // Example timestamp representing June 27, 2021, 00:00:00 UTC
  const expectedDatetime = DateTime.fromObject({ year: 2021, month: 6, day: 27, hour: 0, minute: 0, zone: 'utc' });

  expect(convertToDatetime(timestamp)).toEqual(expectedDatetime);
});

//30. Test checking if a datetime object falls within a specific range.
/*
The isDatetimeInRange function takes a DateTime object as well as start and end range DateTime objects. 
It checks if the given datetime falls within the specified range by performing a comparison using 
the greater than or equal to (>=) and less than or equal to (<=) operators.

The test case sets up a specific DateTime object representing June 27, 2023, at 10:30:00. 
Additionally, we define the start and end range using DateTime.fromObject to specify the desired range.

The test asserts that calling the isDatetimeInRange function with the datetime and the 
start and end range returns true, indicating that the datetime falls within the specified range, 
using the toBe matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function isDatetimeInRange(datetime, startRange, endRange) {
  return datetime >= startRange && datetime <= endRange;
}

test('test checking if datetime falls within a range', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 27, hour: 10, minute: 30 });
  const startRange = DateTime.fromObject({ year: 2023, month: 6, day: 1 });
  const endRange = DateTime.fromObject({ year: 2023, month: 6, day: 30 });

  expect(isDatetimeInRange(datetime, startRange, endRange)).toBe(true);
});


//31. Test checking if a datetime object is in the future, in the pas, a business day, a weekend or a holiday in Bulgaria
/*
We define several helper functions to check different scenarios for a datetime object in Bulgaria.

isFutureDatetime checks if the given datetime is in the future by comparing it to the current datetime obtained through DateTime.local().
isPastDatetime checks if the given datetime is in the past by comparing it to the current datetime obtained through DateTime.local().
isBusinessDayInBulgaria checks if the given datetime represents a business day in Bulgaria. In this example, 
Monday to Friday (weekday 1 to 5) are considered business days.
isWeekend checks if the given datetime falls on a weekend.
*/
const { DateTime } = require('luxon');

function isFutureDatetime(datetime) {
  return datetime > DateTime.local();
}

function isPastDatetime(datetime) {
  return datetime < DateTime.local();
}

function isBusinessDayInBulgaria(datetime) {
  const weekday = datetime.weekday;
  return weekday >= 1 && weekday <= 5; // Monday to Friday are considered business days
}

function isWeekend(datetime) {
  const weekday = datetime.weekday;
  return weekday === 6 || weekday === 7; // Saturday or Sunday are considered weekends
}

function isHolidayInBulgaria(datetime) {
  // Assume a predefined list of holidays in Bulgaria (just an example)
  const holidays = [
    DateTime.fromObject({ year: 2023, month: 1, day: 1 }), // New Year's Day
    DateTime.fromObject({ year: 2023, month: 3, day: 3 }), // Liberation Day
    DateTime.fromObject({ year: 2023, month: 5, day: 1 }), // Labor Day
    DateTime.fromObject({ year: 2023, month: 5, day: 6 }), // St. George's Day
    // Add more holidays as needed
  ];

  return holidays.some(holiday => holiday.hasSame(datetime, 'day'));
}

test('test checking different scenarios for a datetime in Bulgaria', () => {
  const futureDatetime = DateTime.local().plus({ days: 1 });
  const pastDatetime = DateTime.local().minus({ days: 1 });
  const businessDay = DateTime.fromObject({ year: 2023, month: 6, day: 28 }); // Assuming June 28, 2023, is a business day in Bulgaria
  const weekend = DateTime.fromObject({ year: 2023, month: 6, day: 24 }); // Assuming June 24, 2023, is a weekend
  const holiday = DateTime.fromObject({ year: 2023, month: 3, day: 3 }); // Assuming March 3, 2023, is a holiday in Bulgaria

  expect(isFutureDatetime(futureDatetime)).toBe(true);
  expect(isFutureDatetime(pastDatetime)).toBe(false);

  expect(isPastDatetime(futureDatetime)).toBe(false);
  expect(isPastDatetime(pastDatetime)).toBe(true);

  expect(isBusinessDayInBulgaria(businessDay)).toBe(true);
  expect(isBusinessDayInBulgaria(weekend)).toBe(false);

  expect(isWeekend(weekend)).toBe(true);
  expect(isWeekend(businessDay)).toBe(false);

  expect(isHolidayInBulgaria(holiday)).toBe(true);
  expect(isHolidayInBulgaria(businessDay)).toBe(false);
});
 

//32. Test getting the number of days in a specific month.
/*
In this test, we define the getDaysInMonth function that takes a year and month as inputs. 
It creates a Luxon DateTime object representing the first day of the specified month and year. 
We then use the daysInMonth property to retrieve the number of days in that month.

The test case sets up different scenarios by calling the getDaysInMonth function with different 
year and month values. We use the toBe matcher provided by Jest to assert that the actual number of days returned 
by the function matches the expected values.
*/

const { DateTime } = require('luxon');

function getDaysInMonth(year, month) {
  const datetime = DateTime.fromObject({ year, month, day: 1 });
  return datetime.daysInMonth;
}

test('test getting the number of days in a specific month', () => {
  expect(getDaysInMonth(2023, 2)).toBe(28); // February 2023 has 28 days
  expect(getDaysInMonth(2023, 4)).toBe(30); // April 2023 has 30 days
  expect(getDaysInMonth(2023, 12)).toBe(31); // December 2023 has 31 days
  // Add more test cases as needed
});


//33. Test rounding a datetime object to a specific resolution (e.g., nearest minute).
/*In this test, we define the roundDatetime function that takes a datetime object and a resolution as inputs. 
The function uses Luxon's startOf method to round the datetime to the specified resolution. 
We switch on the resolution value and apply the appropriate rounding operation.

The test case sets up a datetime object representing a specific date and time. 
We then call the roundDatetime function with different resolutions ('minute', 'hour', 'day') 
and assert that the rounded datetime matches the expected values using the toBe matcher provided by Jest.
*/
const { DateTime } = require('luxon');

function roundDatetime(datetime, resolution) {
  switch (resolution) {
    case 'minute':
      return datetime.startOf('minute');
    case 'hour':
      return datetime.startOf('hour');
    case 'day':
      return datetime.startOf('day');
    // Add more cases for other resolutions as needed
    default:
      throw new Error('Invalid resolution');
  }
}

test('test rounding a datetime object to a specific resolution', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 30, hour: 15, minute: 35, second: 42 });

  // Round to nearest minute
  expect(roundDatetime(datetime, 'minute').toISO()).toBe('2023-06-30T15:35:00.000');
  
  // Round to nearest hour
  expect(roundDatetime(datetime, 'hour').toISO()).toBe('2023-06-30T15:00:00.000');
  
  // Round to nearest day
  expect(roundDatetime(datetime, 'day').toISO()).toBe('2023-06-30T00:00:00.000');
  
  // Add more test cases for other resolutions
});


//34. Test truncating a datetime object to a specific resolution (e.g., removing seconds).
/*
In this test, we define the truncateDatetime function that takes a datetime object and a resolution as inputs. 
The function uses Luxon's set method to modify the components of the datetime object based on the specified resolution. 
We switch on the resolution value and set the appropriate components to zero to truncate them.

The test case sets up a datetime object representing a specific date and time with seconds and milliseconds. W
e then call the truncateDatetime function with different resolutions ('minute', 'hour', 'day') 
and assert that the truncated datetime matches the expected values using the toBe matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function truncateDatetime(datetime, resolution) {
  switch (resolution) {
    case 'minute':
      return datetime.set({ second: 0, millisecond: 0 });
    case 'hour':
      return datetime.set({ minute: 0, second: 0, millisecond: 0 });
    case 'day':
      return datetime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
    // Add more cases for other resolutions as needed
    default:
      throw new Error('Invalid resolution');
  }
}

test('test truncating a datetime object to a specific resolution', () => {
  const datetime = DateTime.fromObject({ year: 2023, month: 6, day: 30, hour: 15, minute: 35, second: 42, millisecond: 123 });

  // Truncate to remove seconds and milliseconds
  expect(truncateDatetime(datetime, 'minute').toISO()).toBe('2023-06-30T15:35:00.000');
  
  // Truncate to remove minutes, seconds, and milliseconds
  expect(truncateDatetime(datetime, 'hour').toISO()).toBe('2023-06-30T15:00:00.000');
  
  // Truncate to remove hours, minutes, seconds, and milliseconds
  expect(truncateDatetime(datetime, 'day').toISO()).toBe('2023-06-30T00:00:00.000');
  
  // Add more test cases for other resolutions
});


//35. Test getting the number of weekdays between two datetime objects.
/*
In this test, we define the getWeekdayCount function that takes two datetime objects, 
startDatetime and endDatetime, as inputs. The function initializes a weekdayCount variable 
to keep track of the number of weekdays. It iterates through each day between the start and end datetimes, 
incrementing the weekdayCount if the current day is a weekday (Monday to Friday). 
The iteration is performed by incrementing the current datetime by one day using Luxon's plus method.

The test case sets up two datetime objects representing a specific date range. 
We then call the getWeekdayCount function with these datetimes and assert that 
the returned weekday count matches the expected value using the toBe matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function getWeekdayCount(startDatetime, endDatetime) {
  let weekdayCount = 0;
  let currentDatetime = startDatetime;
  
  while (currentDatetime <= endDatetime) {
    if (currentDatetime.weekday >= 1 && currentDatetime.weekday <= 5) {
      weekdayCount++;
    }
    currentDatetime = currentDatetime.plus({ days: 1 });
  }
  
  return weekdayCount;
}

test('test getting the number of weekdays between two datetime objects', () => {
  const startDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 1 }); // June 1, 2023 (Thursday)
  const endDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 30 }); // June 30, 2023 (Friday)

  // Calculate the number of weekdays between the two datetimes
  expect(getWeekdayCount(startDatetime, endDatetime)).toBe(22); // June 2023 has 22 weekdays
  
  // Add more test cases for different date ranges
});


//36. Test getting the number of weekends between two datetime objects
/*
In this test, we define the getWeekendCount function that takes two datetime objects, 
startDatetime and endDatetime, as inputs. The function initializes a weekendCount variable to keep track 
of the number of weekends. It iterates through each day between the start and end datetimes, 
incrementing the weekendCount if the current day is a Saturday (6) or Sunday (7). 
The iteration is performed by incrementing the current datetime by one day using Luxon's plus method.

The test case sets up two datetime objects representing a specific date range. 
We then call the getWeekendCount function with these datetimes and assert that the returned 
weekend count matches the expected value using the toBe matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function getWeekendCount(startDatetime, endDatetime) {
  let weekendCount = 0;
  let currentDatetime = startDatetime;
  
  while (currentDatetime <= endDatetime) {
    if (currentDatetime.weekday === 6 || currentDatetime.weekday === 7) {
      weekendCount++;
    }
    currentDatetime = currentDatetime.plus({ days: 1 });
  }
  
  return weekendCount;
}

test('test getting the number of weekends between two datetime objects', () => {
  const startDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 1 }); // June 1, 2023 (Thursday)
  const endDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 30 }); // June 30, 2023 (Friday)

  // Calculate the number of weekends between the two datetimes
  expect(getWeekendCount(startDatetime, endDatetime)).toBe(9); // June 2023 has 9 weekends
  
  // Add more test cases for different date ranges
});

//37. Test calculating the number of days until a future event based on the current date.
/*
In this test, we define the getDaysUntilEvent function that takes an event datetime object as input. 
The function calculates the number of days until the event based on the current date. 
It uses Luxon's now method to get the current datetime, sets the time to the start of the day using startOf('day'), 
and then calculates the difference in days between the current date and the event date. 
The difference is converted to an object using Luxon's toObject method, and the number of days is extracted and 
rounded down using Math.floor.

The test case sets up a current datetime object representing a specific date for testing purposes. 
We then define the event datetime object representing the future event date. We call the getDaysUntilEvent function 
with the event datetime and assert that the returned number of days until the event matches the expected value 
using the toBe matcher provided by Jest.
*/

const { DateTime } = require('luxon');

function getDaysUntilEvent(eventDate) {
  const currentDate = DateTime.now().startOf('day');
  const diff = eventDate.diff(currentDate, 'days').toObject();
  const daysUntilEvent = Math.floor(diff.days);
  
  return daysUntilEvent;
}

test('test calculating the number of days until a future event', () => {
  // Set the current date for testing purposes
  const currentDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 1 }); // June 1, 2023

  // Define the future event date
  const eventDatetime = DateTime.fromObject({ year: 2023, month: 6, day: 15 }); // June 15, 2023

  // Calculate the number of days until the event
  const daysUntilEvent = getDaysUntilEvent(eventDatetime);

  // Assert that the calculated number of days is correct
  expect(daysUntilEvent).toBe(14); // There are 14 days until June 15, 2023
  
  // Add more test cases for different future event dates
});