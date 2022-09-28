/*
Create a function that takes two dates and returns the number of days between the first and second date.

Examples


getDays(

  new Date("June 14, 2019"),

  new Date("June 20, 2019")

) ➞ 6

getDays(

  new Date("December 29, 2018"),

  new Date("January 1, 2019")

) ➞ 3

// Dates may not all be in the same month/year.

getDays(

  new Date("July 20, 2019"),

  new Date("July 30, 2019")

) ➞ 10
*/

function DaysBetweenDates(){
    let date1 = new Date(document.getElementById("date1").value);
    let date2 = new Date(document.getElementById("date2").value);
    let dayDifference = 0;

    if(date1 < date2){

        dayDifference = (date2.getTime() - date1.getTime())/(1000 * 60 * 60 * 24);
        console.log("Result: " + dayDifference);
    }
    if(date1 > date2){

        dayDifference = (date1.getTime() - date2.getTime())/(1000 * 60 * 60 * 24);
        console.log("Result: " + dayDifference);
    }
}