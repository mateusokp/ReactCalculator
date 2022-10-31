function updateInventory(arr1, arr2) {
    for (let item of arr2){
        for (let item1 of arr1){
            var found = false;
            if (item[1] === item1[1]){
                item1[0] = item1[0] + item[0];
                found = true
            }
        }
        if (found === false){
            arr1.push(item)
        }
    }
    arr1.sort((a, b) => a[1].localeCompare(b[1]))
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);