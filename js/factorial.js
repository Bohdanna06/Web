const evenNumber = function (number){
    if(isNaN(number)){
        return null;
    }
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}
const calculateFactorial =  function(number){
    if(isNaN(number)|| number <0){
        return null;
    }
    let res = 1;
    for(let i = 2; i<=number;i++){
        res *=i;
    }
    return res;

};

const doubleFactorial = function(number){
    if(isNaN(number) || number <0){
        return null;
    }
    if(number <=1)
        return 1;
    let res = 1;
    for(let i=number; i>0;i-=2){
        res*=i;
    }
    return res;
}
function calculate(){
    let num = +document.getElementById("num").value;
    if (isNaN(num) || num < 0) {
        document.getElementById("result").textContent = "Введіть невід'ємне число!";
        return;
    }
    let fact = calculateFactorial(num);
    let isEven = evenNumber(num)? "even": "odd";
    let doubleFact = doubleFactorial(num);
    document.getElementById("result").textContent = 
        `Число: ${num} --> ${isEven} || Факторіал: ${fact} || Подвійний факторіал: ${doubleFact}`;

}

