function getAgeAge() {
    const ageColumn = document.getElementsByClassName("ageField")
    let totalAge = 0;
    for (let index = 0; index < ageColumn.length; index++) {
        totalAge = totalAge + parseInt(ageColumn.item(index).innerHTML);
    }
    return `The average age of the people in the table is: \n${totalAge / ageColumn.length}`;
}

function getNumberOfMarriedPeople() {
    const marriageColumn = document.getElementsByClassName("marriageField");
    let numberOfMarried = 0;
    for (let index = 0; index < marriageColumn.length; index++) {
        if (marriageColumn[index].innerHTML === "Yes") {
            numberOfMarried++;
        }
    }
    return `The table has ${numberOfMarried} married people.`;
}

function showAlert(idElement, func) {
    alert(func)
}