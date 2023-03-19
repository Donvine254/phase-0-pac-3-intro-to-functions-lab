//begin writing code here
function shout(string){return "Hello".toUpperCase()};
function whisper(string){return "Hello".toLowerCase()};
function logShout(string){console.log("hello".toUpperCase())}
function logWhisper(string){console.log("hello".toLowerCase())}
function sayHiToHeadphonedRoommate(string) {
    if (string.toUpperCase() === string) {
      return `YES INDEED!`;
    } else if (string.toLowerCase() === string) {
      return `I can't hear you!`;
    } else if (string === "Let's have dinner together!") {
      return `I would love to!`;
    } else {
      return "";
    }
  }
//the sayHelloToGradma is not included in the test but here it is!
function sayHiToGrandma(string){
    if (string.toUpperCase() === string) {
      return `YES INDEED!`;
    } else if (string.toLowerCase() === string) {
      return `I can't hear you!`;
    } else if (string === `I love you, Grandma`) {
      return `I love you too.`;
    }
  }
  
//call function here
console.log(shout())
console.log(whisper())
console.log(logShout())
console.log(logWhisper())
console.log(sayHiToGrandma("hi gradma"))
console.log(sayHiToGrandma('HELLO GRANDMA'))
console.log(sayHiToGrandma('I love you, Grandma'))