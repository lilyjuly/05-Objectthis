// TODO: What is `this` referring to here?
console.log(this);

// TODO: What is `this` referring to here?
function helloThis() {
  console.log('Inside this function, this is ' + this);
}
helloThis();

// TODO: What is `this` referring to here? What will be logged in the console?
var child = {
  age: 10,
  name: "ma ma",
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};
this.child
this.child.ageTenYears

// TODO: What is `this` referring to here? What will be logged in the console?
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
    console.log(this.initialInvestment * 1.15);
    }
  }
};
investor.investment.investmentGrowth();

// TODO: Call the `helloThis` function and the object methods to check results in the console
var a = window.prompt("A  value");
var b = window.prompt("B value");
console.log(a+b);

var a = parseInt(window.prompt("Avalue"));
var b = parseInt(window.prompt("Bvalue"));
console.log(a-b);


alert("Where you go?")
var choose = function(){
  var question = prompt("Left or Right");
  if(question == "Left"){
    alert("You have choosen Left");
  }else if(question == Right){
    alert("You have choosen Right");
  }else("You don't have choosen?");
}
choose();

alert("Where you go?");
var chose = function(){
  var question = prompt("Left or Right");
  switch (question){
    case("You have chosen Right "):
    break;
  }switch (question){
    case("You have chosen Left"):
    break;
  }switch (question){
    case("You don't have chose"):
 }
}

var a = window.prompt("A value");
var b = window.prompt("B value");
console.log(a+b);

var a = parseInt(window.prompt("Avalue"));
var b = parseInt(window.prompt("Bvalue"));
console.log(a-b);

alert("Wherw you go");
var choose = function(){
  var question = prompt("Left or Right");
  if(question == "right"){
    alert("you have chosen right");
  }else if(question == "left"){
    alert("You have chosen left");
  }else("You don't chosen");
}
choose();