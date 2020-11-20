 /*
 function slicChar(){
     let inputChar=prompt();
     
         let result=inputChar.slice(3);
         document.write(result);
     
 }
 slicChar(); 
 
function myapp(){
    let inputValue=prompt();
   
    document.write(inputValue.length+1);
}
myapp();
 
 function findCity(str){
     if(str.length>=3 &&((str.substring(0,3)=='los')||(str.substring(0,3)=='new'))){
         return str;
     }
     return 'blank';
 }
 document.write(findCity('ne'));

function sliceApp(str){
    let a=str.slice(1,str.length)+str.slice(0,str.length-1);;
   
    return a;
    
}
document.write(sliceApp('ajharIslam'));

function arraySum(nums){
    let end=nums.length-1
    let start=nums[0];
    if(nums.length<=1){
        return start==nums[end];
    }
    else{
        return 0;
    }
   
}
document.write(  arraySum([10,10,10]));

function allMax(nums){
    let maxValue=nums[0]>nums[2] ? nums[0] : nums[2];
    nums[0]=maxValue;
    nums[1]=maxValue;
    nums[2]=maxValue
    return nums
}
document.write(allMax([10,20,40]));
 
function newArray( ){
    let a=[10,20,30,40];
    let newArray=[a[0],a[a.length-1]];
    return newArray;
}
document.write(newArray());

function containsArray(){
    let array=[1,60,80,3]
    if(array.indexOf(1)!=0 || array.indexOf(3)!=0){
        return true;
    }
    else{
        return false;
    }
}
document.write(containsArray());

function swap(){
    let a=[10,40,30,80];
    [a[0],a[a.length-1]]=[a[a.length-1],a[0]];
    return a;

}
document.write(swap() + '<br/>');
function a(){
    let c=[20,30,70,90];
    [c[0],c[c.length-1]]=[c[c.length-1],c[0]]
    return c;
}
document.write(a());

function twoDigit(){
    let inputValue=prompt();
    return inputValue%10+Math.floor(inputValue/10);
}
document.write(twoDigit());



 function longString(){
     let maxString=str[0].length;
     str.map(v=>maxString=Math.maxString(max,v.length));
     result =str.filter(v=> v.length==max);
     return result;

 }
 document.write(longString([ 'aaa','bbbbbb']));


function alternate_Sums(arr) {
    var result = [0, 0];
    for(var i = 0; i < arr.length; i++) 
    {
      if(i % 2) result[1] += arr[i];
      else
        result[0] += arr[i];
    }
    return result
  }
  
  document.write(alternate_Sums([1, 3, 6, 2, 5, 10]));

 function findAngle(){
    let inputValue=parseInt(prompt());
    if(inputValue<90){
        return 'Accute Angle';
    }
    else if(inputValue===90){
        return 'Rigth Angle';
    }
    else if(inputValue<180){
        return 'Obtuse Angle';
    }
    return 'Not perfert Angle';
 }
 document.write(findAngle());
 
  function divisor(x,y,d){
     if(x%d===0 && y%d===0 || x%d!==0 && y%d!==0){
         return true;
     }
     else{
         return false;
     }
  }
  document.write(divisor(30,60,7));
 
function integerValue(x,y,z){
return x+y==z;
}
document.write(integerValue(10,30,40));
*/