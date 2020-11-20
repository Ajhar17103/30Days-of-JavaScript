/* function Strings(){
    let char='hello w3school';
    let chars='by resourse';
    let add=char.substring(6,14);
    let adds=chars.slice(3,11);
    document.write(add+' '+ adds);
    

}
Strings();
 
function charString(){
   let char='swift';
   if(char.length<=1){
       return char;
   }
   midChar=char.substring(1,char.length-1);
   document.write((char.charAt(char.lenght-1))+midChar+char.charAt(0));
}
charString();

function multiApp(){

   let inputValue=parseInt(prompt());
   if(inputValue %3==0 || inputValue%7==0){
       document.write(true);
   
   }
   else{
       document.write(false);
   }
}
multiApp();

function javaScript(){
   let inputChar=prompt();
   if(inputChar<4){
       document.write(false);
   }
   let front=inputChar.substring(0,4)
   if(front=='java'){
       document.write(true);
   }
   else{
       document.write(false);
   }
}
javaScript();

function integerValue(x,y,z){
let maxValue=0;
if(x>y){
   maxValue=x;
}
else{
   maxValue=y;
}
if(maxValue<z){
  maxValue=z;
}
return maxValue;
}
let threeIntegerValue=integerValue(10,20,30);
document.write(threeIntegerValue);

function integerNum(x,y){
if((x>=50 && x<=99 )|| (y>=50 && y<=99)){
   return true;
}
else{
   return false;
}
}
let inputNum=integerNum(50,10);
document.write(inputNum);
 
function diffInteger(x,y){
   if(x!=y){
       let x1=Math.abs(x-100);
       let y1=Math.abs(y-100);
       if(x1<y1){
           return x

       }
       if(y1<x1){
           return y;
       }
       return 0;
   }
   else{
       return false;
   }
}
document.write(diffInteger(90,89));

function integerNum(x, y) {
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) {
        return true
    }
    else {
        return false;
    }
}
document.write(integerNum(55, 71));

function findChar(x){
    if(x.length<3){
        return x.toUpperCase();
    }
    let frontEnd= (x.substring(0,3)).toLowerCase();
    let backEnd= x.substring(3, x.length);
    return frontEnd +  backEnd;
     
}
document.write(findChar('javascript'));
document.write('<br/>');
document.write(findChar('ja'));

function findInteger(...firstNum) {
   
    if (firstNum == 8 || firstNum == 8) {
        document.write(true);
    }
    if (firstNum + firstNum == 8 || Math.abs(firstNum - firstNum)) {
        document.write(true);
    }
    else{
        document.writr(false);
    } 
}
let findNum=findInteger(10,8);
document.write(findNum);
 
function checkNum(){
let fNum=parseInt(prompt());
let sNum=parseInt(prompt());
let tNum=parseInt(prompt());
let finalNum;
if( (fNum==sNum && tNum==sNum)){
     finalNum=30;
}
if(fNum==sNum || sNum==tNum || tNum==fNum){
     finalNum=20;
}
else{
    finalNum=10
}
document.write(finalNum);
}
checkNum();

function strictSoft(x,y,z){
    if(x<y && z>y){
        return 'Stict Mode';
    }
    else if(x>y){
        return 'Soft Mode';
    }
    else{
        return 'Not any Mode';
    }
}
document.write(strictSoft(10,0,31));

function checkInt(){
    let fNum=parseInt(prompt());
    let sNum=parseInt(prompt());
    let tNum=parseInt(prompt());
    document.write(fNum%10== sNum%10 || fNum%10==tNum%10 || tNum%10==fNum%10);
}
checkInt();

function sumNum(){
    let fNum=parseInt(prompt());
    let sNum=parseInt(prompt());
    let finnalNum;
    if(fNum==15 || sNum==15 || (fNum+sNum)==15|| Math.abs(fNum-sNum)==15 ){
        finalNum=true;
    }
    else{
        finalNum=false;
    }
    document.write(finalNum);
}
sumNum();

function givenInt(){
    let a=parseInt(prompt());
    let b=parseInt(prompt());  
    if(a%7==0 || a%11==0 && b%7==0 || b%11==0 ){
        let finalValue=true
    }  
    else{
        finalValue=false;
    }
    document.write(finalValue);
}
givenInt();

function checkNum(x,y,n){
     
    if (n < 40 || n > 10000)
    return false;
  else
    if (n >= x && n <= y)
      return true;
    else
      return false;
}
document.write(checkNum(40,400,45))

function reverse(strings){
  let add= strings.split('').reverse().join('').toUpperCase();
  return add;
}
document.write(reverse('wellcome'));
let a='hello';
let ad= a.split('')
document.write(ad);
*/
function upperCase(char){
    let str=char.split('');
    
    let i;
    for(i=0; i<str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1); 
    }
    return str.join(" ");

}
document.write(upperCase('helllo mr how are you'));