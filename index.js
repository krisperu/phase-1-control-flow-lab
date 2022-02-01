function scuberGreetingForFeet(number){
  // Write your code here!
  if (number <= 400) {
    return scuberGreetingForFeet = 'This one is on me!';
  } else if (number >= 2000 && number <=2500) {
    return scuberGreetingForFeet = 'I will gladly take your thirty bucks.';
  } else if (number > 2500) {
    return scuberGreetingForFeet = 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC'){
    return 'Ok, sounds good.';
  } else if ( city !== 'NYC') {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}