 /* function mystring(){
     let newString='we are doing some excrcises';
     let b=prompt();
    return ans=newString.slice(0,18) +  b + newString.slice(17);
 }

 document.write(mystring());

function humanize(){
    let inputValue=prompt();
     
}
  
function myapp(){
    let input=(1,20,80);
    if(toString.call(input)=='[object Array]'){
        return true;

    }
    return false;
}
document.write(myapp());

function myapp(){
    let num=[10,20,[ 80,70] ];
    return num.slice(0);
}
document.write(myapp());

 
function myapp(){
    let num=[10,20,80,90];
    let nums;
    if(num== null){
        return num[0];
    }
    if(nums==null){
        return num[0]
    } 
   return num.slice(0,3);

}
document.write(myapp());
*/
function myapp(ary,n){
    if(ary==nul){
        return ary;

    }
    if(n==null){
        return ary[ary.length-1]
    }
    else{
        return ary.slice(0,ary.length-n);
    }
  
}

document.write([],3 +"<br/>");
document.write([1,20,8,20,20,50] +"<br/>");
document.write([1,20,8,20,20,50],6);