

function checkPermute(str1, str2){
   
    if(str1.length !== str2.length) return false;

    let comparisonA = 0;

    str1 = str1.split('').sort((a, b) => {

        if(a < b){
            comparisonA = -1;
        } else {
            comparisonA = 1;
        }
        return comparisonA;
    })

    // console.log(str1)
    str2 = str2.split('').sort((a, b) =>  a.localeCompare(b));
    // console.log(str2);


    let a = 0; 
    let b = 0;
    
    while(a < str1.length && b < str2.length){
        if(str1[a] === str2[b]){
            a+=1;
            b+=1;
        } else {
          return false;
        }
    }
return true;
}

// Tests
console.log(checkPermute('aba', 'aab'), true);
console.log(checkPermute('aba', 'bab'), false);
console.log(checkPermute('aba', 'aaba'), false);
console.log(checkPermute('aba', 'aa'), false);


function checkPermute1(str1, str2){
   let newMap = {};

   if(str1.length < str2.length){
        let temp = str1;
        str1 = str2;
        str2 = temp;
   }


   for(let a = 0; a < str1.length; a+=1){
       if(!newMap[str1[a]]){
           newMap[str1[a]] = 1;
       } else{
           newMap[str1[a]] +=1;
       }
   }

   console.log(newMap);

   for(let b = 0; b < str2.length; b+=1){
       if(newMap[str2[b]]){
          newMap[str2[b]] -=1; 
       }
   }

   for(let key in newMap){
       if(newMap[key] > 0){
           return false;
       }
   }
   return true;
}

// Tests
console.log(checkPermute1('aba', 'aab'), true);
console.log(checkPermute1('aba', 'bab'), false);
console.log(checkPermute1('aba', 'aaba'), false);
console.log(checkPermute1('aba', 'aa'), false);


function checkPermute2(str1, str2){
   if(str1.length !== str2.length) return false;
   return str1.split('').sort().join('') === str2.split('').sort().join('');
}
 
 // Tests
 console.log(checkPermute2('aba', 'aab'), true);
 console.log(checkPermute2('aba', 'bab'), false);
 console.log(checkPermute2('aba', 'aaba'), false);
 console.log(checkPermute2('aba', 'aa'), false);


 function checkPermute3(str1, str2){
    if(str1.length !== str2.length) return false;
    return String(str1).split('').sort().join('') === String(str2).split('').sort().join('');
 }
  
  // Tests
  console.log(checkPermute3(123, 321), true);

 