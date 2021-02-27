//Constants
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const resetBtn = document.getElementById('reset');
const input = document.getElementById('input');
const displayEl = document.getElementById('display');

//state
let total;
let inputInt;

//Event Listeners
addBtn.addEventListener('click', function(e){
    math(parseFloat(input.value));
});

subBtn.addEventListener('click', function(e){
    math(-parseFloat(input.value));
});

resetBtn.addEventListener('click', function(e){
    init();
});

//call init
init();

//-------------------------------------------------------- FUNCTIONS

//INITIALIZE
function init(){
    total = 0;
    inputInt = 0;
    input.value = '1';
    render();
}

//RENDER
function render(){

    displayEl.innerHTML = total;

    if(total >= 0){
        displayEl.style.color = 'black';
    }else{
        displayEl.style.color = 'red';
    }
}

function renderInputError(){
    displayEl.innerHTML = 'Input must be a number';

    setTimeout(function(){
        render();
    }, 1000);
}

//STATE FUNCTIONS

function math(inpt){
        if(Number.isNaN(inpt)){
        renderInputError();
    }else{
        total += inpt
        render();
    }
}

//-----------------------------------------------------------------
