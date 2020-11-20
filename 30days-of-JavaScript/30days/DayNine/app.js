 /*function myapp(){
     let input='Azhar Islam form Dhaka';
     return input.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, '').replace(/\s/g,'-');
 }
 document.write(myapp());
  
function myapp(){
    let inputValue='azhar islam';
    return inputValue.charAt(0).toUpperCase()+ inputValue.substr(1);
}
document.write(myapp());

function capString(){
    let name='this is first cap string';
    return name.replace(/\w\Sg,function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
document.write(capString())


 function myap(){
     let name='Azhar Islam';
     return name.replace(/([a-z]+)|([A-Z]+)/g, function(match,char){
         return char?match.toUpperCase():match.toLowerCase()
     });
 }
 document.write(myap());
 
function camelCase(char){
 let inpt=char.trim().split('@');

 return  typeof(inpt[0]);
}
document.write(camelCase(prompt()));

function myFunction() {
    var str = "1234567890@gmail.com";
    var patt1 = /[0-9]/i;
   if(str=str.match(patt1)){
   return true;
    }
    return false;
}
  document.write(myFunction());
 
function youApp(){
    let a='red, green,yellow,blue';
    if(a.match(/[0-9]/i)){
        return true;
    }
    else{
        return false;
    }
}
document.write(youApp());

function myapp(){
    let a='give100%';
    if(a.match(/\s/g)){
        return true;
    }
    return false;
}
document.write(myapp());
 */
 function camelize(str) {
    return str.replace(/\W+(.)/g, function(match, chr)
     {
          return chr.toUpperCase();
      });
  }

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
