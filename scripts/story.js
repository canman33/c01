var firstName = prompt('What is your first name?');
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow <= 12) {
  greeting = 'Good Morning!';
}else if (hourNow <= 19) {
  greeting = 'Good... late Afternoon!';
}else if (hourNow >= 19) {
  greeting = 'Ahhh, after 7pm I see, Time to Relax!';
}else {
  greeting = 'Welcome ' + firstName;
}

if (firstName === 'Branden@1') {
  alert('Lick My fucken balls you WANKER wesley!');
} else {
  alert('well, You\'re not my wife but, I\'ll allow you in anyways, cause i like you ' + firstName + '.');
}
document.write("<p style='font-size: 2.5em'>" + greeting + "</p>");


var isChrisADouche = prompt('before we start the mad lib, answer a quick question. Is this guy a douche, or what! (yes|no)');
if (isChrisADouche === 'Yes' || 'yes') {
  alert('slow your roll, D***!');
} else {
  alert('you\'re too kind.');
}


var verb = prompt('Let\'s write a mad lib, shall we? Enter a verb, (ends in "ing").');
var noun = prompt('Great, now enter a noun.');
var adjective = prompt('enter an adjective.');
var adjective2 = prompt('one more adjective, Thanks');
alert('We\'ve made the story\! Now, Here it is.');
alert('But, before i forget..., have a great day! ');
alert('if you\'d like to learn programming, click on the treehouse link');

var message = ' One day, I was ' + verb + ' in the woods ';
message +=  ' when I came upon a(n) ' + noun + '.';
message += ' Frightened, I turned and ran straight into a(n) ' + adjective + ' ' + noun + '.';
message += ' the smell of ' + adjective2 + ' was in the air';


document.write("<p style='font-size:2.5em'>" + message + "</p>");
document.write("<p style='font-size: 2.5em'>Thanks for visiting .... " + firstName + ". " + " Don't forget to check out treehouse before you go. </p>");
console.log(isChrisADouche);
console.log(firstName);
