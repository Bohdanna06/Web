// функцію, вона приймає рядок як аргумент і повертає кількість голосних літер у рядку

function getVowelsNumber() {
    let str = document.getElementById("inputText").value.trim();
    
    if (typeof str !== 'string' || !str.trim()) {
        document.getElementById("result1").innerText = 'Type of data is incorrect! Enter a valid string!';
        return;
    }
    let vowelArray  = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0;
    let vowelsFound = [];
    let lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (vowelArray.includes(lowerCaseStr[i])) {
        vowelCount++;
        vowelsFound.push(lowerCaseStr[i]);
      }
    }
    document.getElementById("result1").innerText =`Number of vowels: ${vowelCount}, Vowels found: ${vowelsFound.join(', ')}`;
  
    // return vowelCount;
  }