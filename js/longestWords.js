function findLongestWord() {
    let sentence = document.getElementById("inputText").value.trim();

    // Перевірка на тип даних
    if (typeof sentence !== "string" || !sentence) {
        document.getElementById("result1").innerText = "Будь ласка, введіть текст!";
        return;
    }

    let words = sentence.split(/\s+/);
    let longestWord = "";

    words.forEach (function(word){
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    document.getElementById("result1").innerText = `Найдовше слово: "${longestWord}", довжина: ${longestWord.length}`;
}
