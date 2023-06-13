let userInput = prompt("Введіть елементи масиву через кому:");
let arr = userInput.split(",");
arr.sort(function (a, b) {
    return a - b;
});
arr.splice(1, 3);
document.write("Масив: " + arr);
