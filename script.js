const firstWord = [ 'The', 'A']
const subject = ['cat', 'dog', 'mouse']
const adj = ['big', 'small', 'yellow']
const action = ['ran', 'jump', 'flew']


function randomSent(newFirstWord, newAdj, newSubject, newAction) {
    let phrase = `${newFirstWord} ${newAdj} ${newSubject} ${newAction}.`;
    return phrase;
}
    console.log(randomSent(firstWord[Math.floor(Math.random() * firstWord.length)], 
                     adj[Math.floor(Math.random() * adj.length)],
                     subject[Math.floor(Math.random() * subject.length)],
                     action[Math.floor(Math.random() * action.length)]));    
    





