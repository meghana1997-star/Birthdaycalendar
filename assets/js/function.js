import { displayHeading, input, submitBtn, textarea, peopleBlock, peopleBlockList, birthdayCount, dayArr, randomColorArr, birthdayList, nameList, colorArr } from './variables.js';


// Function to Clear Display People.
const clearList = () => {
    for (let i = 0; i < peopleBlock.length; i++) peopleBlock[i].innerHTML = "";
};

// Function for Adding Class Display People List.
const addClass = () => {
    for (let i = 0; i < peopleBlock.length; i++) {
        if (peopleBlock[i].children.length == 0) {
            peopleBlock[i].classList = "display__peoples day-empty";
            peopleBlock[i].innerHTML = `<li class="display__peoples__list"></li>`;
        }
        else if (peopleBlock[i].children.length == 1) peopleBlock[i].classList = "display__peoples width1";

        if (peopleBlock[i].children.length > 1 && peopleBlock[i].children.length <= 4) peopleBlock[i].classList = "display__peoples width2";
        else if (peopleBlock[i].children.length > 4 && peopleBlock[i].children.length <= 9) peopleBlock[i].classList = "display__peoples width3";
        else if (peopleBlock[i].children.length > 1 && peopleBlock[i].children.length <= 16) peopleBlock[i].classList = "display__peoples width4";
        else if (peopleBlock[i].children.length > 1 && peopleBlock[i].children.length <= 25) peopleBlock[i].classList = "display__peoples width5";
    }
};

// Function  for adding birthday heading
const heading = () => {
    for (let i = 0; i < peopleBlock.length; i++) {
        let listLength = peopleBlock[i].childElementCount;

        if (listLength == 0 || peopleBlock[i].classList.contains("day-empty")) birthdayCount[i].innerHTML = `No Birthdays`;
        else if (listLength == 1) birthdayCount[i].innerHTML = `${listLength} Birthday`;
        else birthdayCount[i].innerHTML = `${listLength} Birthdays`;
    }
};

// Function for Storing Random Color in Array (SToring Random Color in Arry According to available  List of Birthday)
const storeRandomColor = () => {
    for (let i = 0; i < peopleBlockList.length; i++) {
        randomColorArr.push(randomColorGenerator());
    }
};

// Function  for adding Background Color in List
const listBgColor = () => {
    for (let i = 0; i < peopleBlock.length; i++) {
        let peopleList = peopleBlock[i].children;
        for (let j = 0; j < peopleList.length; j++) {
            if (peopleList.length == 0 || peopleBlock[i].classList.contains("day-empty")) peopleList[j].style.backgroundColor = "#DEE4E6";
            else if (peopleList.length == 1) birthdayCount[i].innerHTML = peopleList[j].style.backgroundColor = colorArr[j];
            else peopleList[j].style.backgroundColor = colorArr[j];
        }
    }
    randomColorArr.length = 0;
};

// Functions for creating Random background Color
const randomColorGenerator = () => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
};

// Function for Iterating PeopleList according to birthday
const IterateBirthList = () => {
    // Iterating birthday List 
    birthdayList.forEach((birthday, index) => {
        // Iterating Date, Month and Year from Json Files
        let date = birthday.slice(3, 5),
            month = birthday.slice(0, 2) - 1,
            // Adding values in date Object
            currentDate = new Date(input.value, month, date),
            currentDay = dayArr[currentDate.getDay()]; //Getting Day According to Inputed Value from User

        for (let i = 0; i < displayHeading.length; i++) {
            let name = nameList[index],
                values = name.split(" "),
                f_name = values[0].slice(0, 1),
                l_name = values[1].slice(0, 1);

            if (displayHeading[i].textContent == currentDay) {
                let currentUl = displayHeading[i].nextElementSibling.firstElementChild,
                    li = document.createElement("li");

                li.setAttribute("class", "display__peoples__list");
                li.innerHTML = `<h3 class="display__peoples__heading"><a href="#FIXME" class="people--link" title="AS">${f_name}${l_name}</a></h3>`;
                currentUl.appendChild(li);
            }
        }
    });
};

export { clearList, addClass, heading, storeRandomColor, listBgColor, IterateBirthList };
