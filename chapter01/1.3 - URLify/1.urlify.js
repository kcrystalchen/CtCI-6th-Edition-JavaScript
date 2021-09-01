

function urlify(str, length){
    
    let strArr = str.trim().split('');
    let spaceCount = 0;

    for(let word of strArr){
        if(word === ' '){
            spaceCount+=1;
        }
    }

    let oldLength = strArr.length;
    let newLength = length + spaceCount * 2;

    console.log(oldLength);
    console.log(newLength);


    for(let a = length - 1; a >= 0; a--){
        console.log(newLength);
        if(strArr[a] === ' '){
         console.log(strArr[a], a);
         console.log(strArr[newLength], newLength);
         strArr[newLength - 1] = '0';
         strArr[newLength - 2] = '2';
         strArr[newLength - 3] = '%';
         newLength -=3;
     } else {
         strArr[newLength - 1] = strArr[a];
         newLength -=1;
         console.log(strArr[a], newLength)
         console.log(strArr[newLength])
     }
    }
 return strArr.join('');
    
}
console.log(urlify('Mr John Smith', 13), 'Mr%20John%20Smith');
console.log(urlify("Mr John Smith   ", 13));


function urlify2(str, length){

    let strArr = str.split('');
    let additional = 0;

    for(let char of strArr){
      if(char === ' '){
          additional+=1;
      }
    }

    let oldLength = length;
    let newLength = length + additional* 2;

    console.log(oldLength);
    console.log(newLength);

    for(let a = length - 1; a >= 0; a-=1){

        if(strArr[a] === ' '){
           strArr[newLength - 1] = '0';
           strArr[newLength - 2] = '2';
           strArr[newLength - 3] = '%';
           newLength-=3;
        } else {
            strArr[newLength - 1] = strArr[a];
            newLength-=1;
        }
    }
return strArr.join('');
}

console.log(urlify2('Mr John Smith', 13), 'Mr%20John%20Smith');



// function replaceUrlSpaces(str){
//     return str.replaceAll(' ', '%20');
// }
// console.log(replaceUrlSpaces("Sai Charan P"));


function replaceUrlSpaces1(str){
    let strArr = str.trim().split('');

    for(let index in strArr){
        if(strArr[index] === ' '){
            strArr[index] = '%20';
        }
    }
    return strArr.join('');
}
console.log(replaceUrlSpaces1("Sai Charan P"));
