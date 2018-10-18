var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase


function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
<<<<<<< HEAD
  console.log(`${string.toUpperCase()}`)
}

function logWhisper(string){
  console.log(`${string.toLowerCase()}`)
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return `I can't hear you!`
  }
  else if (string === string.toUpperCase()) {
    return `YES INDEED!`
  }
  else if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
=======
  console.log(`${string}.toUpperCase()`)
}

function logWhisper(string){
  console.log(`${string}.toLowerCase()`)
}

function sayHiToGrandma (string){
  if (string === lowercase)
    return "I can't hear you!"
  else if (string === uppercase)
    return "YES INDEED!"
  else if (string === "I love you, Grandma")
  return "I love you, too."
  
}
>>>>>>> 32c7faccba0c9f028852126419cb6a2acd0776f6
