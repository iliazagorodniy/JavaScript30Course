// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filterInventorsBirthYear = (inventorsArr) => {
    let result = inventorsArr.filter((inventor) => {
        if (inventor.year > 1499 && inventor.year < 1600) {
            return inventor;
        }
    })
    return result;
}
// console.table(filterInventorsBirthYear(inventors));


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const getInventorsNames = (inventorsArr) => {
    let result = inventorsArr.map((inventor) => {
        return inventor.first + " " + inventor.last;
    })
    return result;
}
// console.table(getInventorsNames(inventors));


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortInventorsByBirthdate = (inventorsArr) => {
    let result = inventorsArr;
    result.sort((firstPers, secondPers) => {
        return firstPers.year - secondPers.year;
    })
    return result;
}
// console.table(sortInventorsByBirthdate(inventors));


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const getInventorsLifeLength = (inventorsArr) => {
    let result = inventorsArr.reduce((totalYears, inventor) => {
        return totalYears + (inventor.passed - inventor.year);
    }, 0)

    return result;
}
// console.log(getInventorsLifeLength(inventors));


// 5. Sort the inventors by years lived

const sortInventorsByYearsLived = (inventorsArr) => {
    let result = inventorsArr;
    result.sort((firstPers, secondPers) => {
        let firstPersAge = firstPers.passed - firstPers.year;
        let secondPersAge = secondPers.passed - secondPers.year;

        return secondPersAge - firstPersAge;
    })
    return result;
}
// console.table(sortInventorsByYearsLived(inventors));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const categories = document.querySelector(".mw-category");
// const anchors = categories.querySelectorAll('li');
//
// let boulevardsInParis = [];
// anchors.forEach((anchor) => {
//     boulevardsInParis.push(anchor.innerText);
// })
//
// let chosenBlvrds = boulevardsInParis.filter((item) => {
//     if (item.includes("de")) {
//         return item;
//     }
// })

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// 7. sort Exercise
// Sort the people alphabetically by last name

let newPeople = people.map((person) => person.split(", "))
// console.log(newPeople);
newPeople.map((person, index, arr) => {
    let stack = arr[index][0];
    arr[index][0] = arr[index][1];
    arr[index][1] = stack;
})
let peopleReversed = newPeople.map((item) => item.join(", "))
// console.table(peopleReversed.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
let result = data.reduce((uniqueObj, item) => {
    if (!uniqueObj[item]) {
        uniqueObj[item] = 0;
    }
    uniqueObj[item]++;
    return uniqueObj;
}, {})

console.table(result);