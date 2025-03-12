// функцію, яка приймає рядок і повертає копію цього рядка, але
//кожне слово починається з великої літери

function getCapitalizeString() {
    let str = document.getElementById("inputText").value.trim();
    
    if (typeof str !== 'string' || !str) {
        document.getElementById("result1").innerText = 'Type of data is incorrect! Enter a valid string!';
        return;
    }
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    // return words.join(' ');
    document.getElementById("result1").innerText = `Words begin whith a capital letter : ${words.join(' ')}`;
}