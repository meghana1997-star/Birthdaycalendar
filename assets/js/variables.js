
import { peopleList } from './jsonData.js';

// Grabbing Elements
const displayHeading = document.getElementsByClassName("display__days__heading"),
    input = document.getElementsByClassName("input__year")[0],
    submitBtn = document.getElementsByClassName("submit__btn")[0],
    textarea = document.getElementsByClassName("form__data")[0],
    peopleBlock = document.getElementsByClassName("display__peoples"),
    peopleBlockList = document.getElementsByClassName("display__peoples__list"),
    birthdayCount = document.getElementsByClassName("display__days__count"),
    // Days Array
    dayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    // Color Array
    colorArr = ["#555D7B", "#9FD402", "#C97D99", "#79CAE5", "#E84929", "#3456CF", "#F531AA", "#52CCFE", "#F59B00", "#E64A33"],
    // Random Color Array
    randomColorArr = [];
// creating a new array of name and birthdays
const birthdayList = peopleList.map(people => people.birthday),
    nameList = peopleList.map(people => people.name);


export { displayHeading, input, submitBtn, textarea, peopleBlock, peopleBlockList, birthdayCount, dayArr, randomColorArr, birthdayList, nameList, colorArr };