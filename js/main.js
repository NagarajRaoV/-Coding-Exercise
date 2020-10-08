loadNumberBoxes = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    generateNumberBoxes(numbers);
    document.getElementById("shuffle-btn").onclick = () => shuffle(numbers);
    document.getElementById("sort-btn").onclick = () => sort(numbers);
}

generateNumberBoxes = (numbers) => {
    let numbersCard = document.getElementById("numbers-card");
    numbersCard.innerHTML = "";
    for (let number of numbers) {
        let div = document.createElement("DIV");
        div.className = `number-${number}`;
        div.innerText = number;
        numbersCard.appendChild(div);
    }
}

sort = (numbers) => {
    numbers.sort((a, b) => a - b);
    generateNumberBoxes(numbers);
}

shuffle = (numbers) => {
    numbers.sort(() => Math.random() - 0.5);
    generateNumberBoxes(numbers);
}