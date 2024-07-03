var randomQuotes = ['We cannot solve problems with the kind of thinking we employed when we came up with them', 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too', 'Learn as if you will live forever, live like you will die tomorrow', 'When you change your thoughts, remember to also change your world', 'It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function quotesRandomized() {
    // call on a radom interger
    // returns a string of random interger from array
    return randomQuotes[getRandomInt(randomQuotes.length)]
}

console.log(quotesRandomized())