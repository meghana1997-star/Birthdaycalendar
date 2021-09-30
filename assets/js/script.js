// Importing Elements,JSON and Functions
import { displayHeading, input, submitBtn, textarea, peopleBlock, peopleBlockList, birthdayCount, dayArr, randomColorArr, birthdayList, nameList } from './variables.js';
import { peopleList } from './jsonData.js';
import { clearList, addClass, heading, storeRandomColor, listBgColor, IterateBirthList } from './function.js';

//Adding JSON Data to Textarea
textarea.value = JSON.stringify(peopleList, undefined, 4); //(JSON. stringify(obj, replacer, space))

// Adding Event Listener to Submit Button
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value == "") {
        alert("year cannot be empty")
    }
    else if (input.value.length > 4 || input.value.length < 4) {
        alert("please enter valid one")
    }
    else if (input.value.length === 4) {
        clearList();
        IterateBirthList();
        addClass();
        storeRandomColor();
        listBgColor();
        heading();
        input.value = "";
    }
});