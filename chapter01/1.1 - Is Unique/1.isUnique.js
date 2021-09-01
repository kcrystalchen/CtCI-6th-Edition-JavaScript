
function everyCharUnique(str){
    let map = {};
    str.split('').forEach((ele, index) => {

        if(map[ele] === undefined){
            map[ele] = 0;
            // console.log(map);
        } else {
            map[ele]+=1;
        }
    });

    // console.log(map);
    for(let key in map){
        // console.log(key)
        // console.log(map[key]);
        if(map[key] !== 0){
            return false;
        }
    }
    return true;
}


/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');




function everyCharUnique1(str){

   for(let a = 0; a < str.length; a+=1){
       for(let b = a+1; b < str.length; b+=1){
           if(str[a] === str[b]){
               return false;
           }
       }
   }
   return true;
}


/* TESTS */
console.log(everyCharUnique1('abcd'), 'true');
console.log(everyCharUnique1('abccd'), 'false');
console.log(everyCharUnique1('bhjjb'), 'false');
console.log(everyCharUnique1('mdjq'), 'true');


function everyCharUnique2(str){
 
    let obj = {};

    for(let a = 0; a < str.length; a+=1){

        if(obj[str[a]] && obj[str[a]] === 1){
            return false;
        } else {
            obj[str[a]] = 1;
        }
    }

    console.log(obj);
  return true;
}
 
 
 /* TESTS */
 console.log(everyCharUnique2('abcd'), 'true');
 console.log(everyCharUnique2('abccd'), 'false');
 console.log(everyCharUnique2('bhjjb'), 'false');
 console.log(everyCharUnique2('mdjq'), 'true');
 