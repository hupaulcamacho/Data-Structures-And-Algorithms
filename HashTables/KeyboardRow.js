// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

const findWords = function(words) {
    let row1 = new Set('qwertyuiop');
    let row2 = new Set('asdfghjkl');
    let row3 = new Set('zxcvbnm');

    let result = []

    const isSubset = function(sub, sup) {
        if(sub.size > sup.size) {
            return false
        } else {
            for(let char of sub) {
                if(!sup.has(char)) { return false }
            }
            return true
        }
    }

    for (let i = 0; i < words.length; i++) {
        let word = new Set(words[i].toLowerCase())
        if (isSubset(word, row1)) {
            result.push(words[i])
        }
        if (isSubset(word, row2)) {
            result.push(words[i])
        }
        if (isSubset(word, row3)) {
            result.push(words[i])
        }
    }
    // console.log(result)
    return result
};

findWords(["Hello", "Alaska", "Dad", "Peace"])