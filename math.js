function plus(){
   let first = document.querySelector('.first').value;
   let second = document.querySelector('.second').value;

    first = +first;
    second = +second;

    let natija = first + second;

   let result = document.querySelector('.third').value = natija;

    
    console.log(result);
}

function minus(){
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
 
     first = +first;
     second = +second;
 
     let natija = first - second;
 
    let result = document.querySelector('.third').value = natija;
}

function bolish(){
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
 
     first = +first;
     second = +second;
 
     let natija = first / second;
 
    let result = document.querySelector('.third').value = natija;
}

function kopaytirish(){
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
 
     first = +first;
     second = +second;
 
     let natija = first * second;
 
    let result = document.querySelector('.third').value = natija;
}