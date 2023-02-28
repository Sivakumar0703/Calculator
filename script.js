
// start ******************************************************************

// DOM part


var heading = document.createElement('h1'); // heading
heading.setAttribute('id', 'title');
heading.innerText = 'CALCULATOR';
var heading_parent = document.querySelector('body');
heading_parent.insertAdjacentElement('afterbegin', heading);

var description = document.createElement('p'); // description
description.setAttribute('id', 'description');
description.innerText = 'Building a basic calculator using DOM';
var description_parent = document.querySelector('#title');
description_parent.insertAdjacentElement('afterend', description);

var container = document.createElement('div'); // main container
container.setAttribute('id', 'container');
var container_parent = document.querySelector('#description');
container_parent.insertAdjacentElement('afterend', container);


var input = document.createElement('input'); // input
input.setAttribute('id', 'result');
input.setAttribute('type', 'text');
var input_parent = document.querySelector('#container');
input_parent.append(input);

var brk = document.createElement('br');
var brk_parent = document.querySelector('#container');
brk_parent.append(brk);

var clear = document.createElement('button'); // clear screen
clear.setAttribute('id', 'clear');
clear.classList.add('button');
clear.setAttribute('onclick', 'clicked(this)');
clear.innerText = 'C';
var clear_parent = document.querySelector('#container');
clear_parent.append(clear);

var del = document.createElement('button'); // backspace
del.setAttribute('id', 'delete');
del.classList.add('button');
del.innerText = 'DELETE';
var del_parent = document.querySelector('#container');
del_parent.append(del);


var button7 = document.createElement('button'); // 7
button7.setAttribute('id', '7');
button7.classList.add('button');
button7.setAttribute('onclick', 'clicked(this)');
button7.innerText = '7';
var button7_parent = document.querySelector('#container');
button7_parent.append(button7);

var button8 = document.createElement('button'); // 8
button8.setAttribute('id', '8');
button8.classList.add('button');
button8.setAttribute('onclick', 'clicked(this)');
button8.innerText = '8';
var button8_parent = document.querySelector('#container');
button8_parent.append(button8);

var button9 = document.createElement('button'); // 9
button9.setAttribute('id', '9');
button9.classList.add('button');
button9.setAttribute('onclick', 'clicked(this)');
button9.innerText = '9';
var button9_parent = document.querySelector('#container');
button9_parent.append(button9);

var add = document.createElement('button'); // add
add.setAttribute('id', 'add');
add.classList.add('button');
add.setAttribute('onclick', 'clicked(this)');
add.innerText = '+';
var add_parent = document.querySelector('#container');
add_parent.append(add);

var button4 = document.createElement('button'); // 4
button4.setAttribute('id', '4');
button4.classList.add('button');
button4.setAttribute('onclick', 'clicked(this)');
button4.innerText = '4';
var button4_parent = document.querySelector('#container');
button4_parent.append(button4);

var button5 = document.createElement('button'); // 5
button5.setAttribute('id', '5');
button5.classList.add('button');
button5.setAttribute('onclick', 'clicked(this)');
button5.innerText = '5';
var button5_parent = document.querySelector('#container');
button5_parent.append(button5);

var button6 = document.createElement('button'); // 6
button6.setAttribute('id', '6');
button6.classList.add('button');
button6.setAttribute('onclick', 'clicked(this)');
button6.innerText = '6';
var button6_parent = document.querySelector('#container');
button6_parent.append(button6);

var subtract = document.createElement('button'); // subtract
subtract.setAttribute('id', 'subtract');
subtract.classList.add('button');
subtract.setAttribute('onclick', 'clicked(this)');
subtract.innerText = '-';
var subtract_parent = document.querySelector('#container');
subtract_parent.append(subtract);

var button1 = document.createElement('button'); // 1
button1.setAttribute('id', '1');
button1.classList.add('button');
button1.setAttribute('onclick', 'clicked(this)');
button1.innerText = '1';
var button1_parent = document.querySelector('#container');
button1_parent.append(button1);

var button2 = document.createElement('button'); // 2
button2.setAttribute('id', '2');
button2.classList.add('button');
button2.setAttribute('onclick', 'clicked(this)');
button2.innerText = '2';
var button2_parent = document.querySelector('#container');
button2_parent.append(button2);

var button3 = document.createElement('button'); // 3
button3.setAttribute('id', '3');
button3.classList.add('button');
button3.setAttribute('onclick', 'clicked(this)');
button3.innerText = '3';
var button3_parent = document.querySelector('#container');
button3_parent.append(button3);

var multiplication = document.createElement('button'); // multiply
multiplication.setAttribute('id', 'multiplication');
multiplication.classList.add('button');
multiplication.setAttribute('onclick', 'clicked(this)');
multiplication.innerText = '*';
var multiplication_parent = document.querySelector('#container');
multiplication_parent.append(multiplication);

var button = document.createElement('button'); // 0
button.setAttribute('id', '0');
button.setAttribute('onclick', 'clicked(this)');
button.classList.add('button');
button.innerText = '0';
var button_parent = document.querySelector('#container');
button_parent.append(button);

var division = document.createElement('button'); // division
division.setAttribute('id', 'division');
division.classList.add('button');
division.setAttribute('onclick', 'clicked(this)');
division.innerText = '/';
var division_parent = document.querySelector('#container');
division_parent.append(division);

var modulus = document.createElement('button'); // modulus
modulus.setAttribute('id', 'modulus');
modulus.classList.add('button');
modulus.setAttribute('onclick', 'clicked(this)');
modulus.innerText = '%';
var modulus_parent = document.querySelector('#container');
modulus_parent.append(modulus);

// other buttons

var equal = document.createElement('button'); // equal
equal.setAttribute('id', 'equal');
equal.classList.add('button');
equal.setAttribute('onclick', 'equall(this)');
equal.innerText = '=';
var equal_parent = document.querySelector('#container');
equal_parent.append(equal);


function clicked(any) { // click function
  console.log(any.innerText);
  let screen = document.querySelector('#result');
  var arith = ['+', '-', '*', '/', '%', '.'];
  if (!(arith.includes(screen.value.slice(-1)) && arith.includes(any.innerText))) { // avoiding immediate operator entry
    screen.value = screen.value + any.innerText;

  }
}


window.addEventListener('keypress', (e) => { // keyboard numbers
  var key = e.key;
  if (key != "Enter") {
    var operator = ['+', '-', '*', '/', '%'];
    var code = e.code;

    screen = document.querySelector('#result');
    if (!(operator.includes(screen.value.slice(-1)) /*last value*/ && operator.includes(e.key)/*check last value is an operator or not*/ )) {  // controling the repeating operator

      if (code.includes('Digit') || code.includes('Numpad') || operator.includes(key)) {
        screen.value = screen.value + e.key; // 2

      } else {
        alert('Please enter numbers only');
      }
    }
  }

})


const equall = () => { // evaluation process
  screen = document.querySelector('#result');
  var final = screen.value;
  var fresult = eval(final);
  screen.value = fresult;
}

window.addEventListener('keypress', (e) => {  // numpad enter
  var ent = e.code;
  console.log('e.code :',ent);
  if (ent === "NumpadEnter") {
    equall()
  }
}) 

let bs = document.querySelector('#clear'); // clear all
bs.addEventListener('click', () => {
  screen = document.querySelector('#result');
  screen.value = 0;
  console.log('clear all');

})

let del1 = document.querySelector('#delete');  //backspace
del1.addEventListener('click', deletef)

function deletef() {
  screen = document.querySelector('#result');
  console.log(screen.value);
  if (screen.value.length > 0) {
    last = screen.value.slice(0, -1);
    screen.value = last;
  }
}
