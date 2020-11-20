 /* function myapp(){
     let a=parseInt(prompt());
     let b=parseInt(prompt());
     let c=parseInt(prompt());
     let d=parseInt(prompt());
     let e=parseInt(prompt());
     if(a>b && a>c && a>d && a>e){
         return a;
     }
     else if(b>a && b>c && b>d && b>e){
         return b;
     }
     else if(c>a && c>b && c>d && c>e){
         return c;
     }
     else if(d>a && d>b && d>c && d>e){
         return d;
     }
     else if(e>a && e>b && e>c && e>d){
         return e;
     }
     else{
         return false;
     }
 }
 document.write(myapp());
 
 function myapp(){
    let x;
    for(x=0; x<=20; x++){
        if(x===0){
           document.write(x + " is Even" +"<br/>")
        }
        else if(x%2===0){
           document.write(x +' is Even' + '<br/>');
        }
        else{
          document.write( x +' is Odd' + '<br/>');
        }

}
 }
myapp();

function myapp(){
    let students=[['azhar',50], ['islam',77],['dia', 88],['hello',98],['thomas', 68]];
    let avaerage=0;
    let i;
    for(i=0; i<students.length; i++){
       avaerage +=students[i][1];
       let avg=(avaerage/students.length);
       document.write((avaerage)/students.length);
    }
}
myapp();

function myapp(){
let i;
for(i=1; i<=100; i=i+1){
    if(i%3===0 && i%5===0){
        document.write(i+ 'FizzBuzz' +'<br/>');
    }
    else if(i%3===0){
        document.write(i+ 'Fizz' +'<br/>');
    }
    else if(i%5===0){
        document.write(i+ 'Buzz' + '<br/>');
    }
    else{
        document.write(i +'<br/>');
    }
}
}
    myapp();
   
   function myapp(){
       let factorialNum=parseInt (prompt());
       let i=0;
       let sum=0;
       while(i<=factorialNum){
           sum=sum*i;
         
       }
        document.write(sum);
      
        
       
   }
    myapp()  
     
    function myapp(x){
    if(x===0){
        return 1;
    }
    return x * myapp(x-1);
    }
    document.write(myapp(5));
  
function myapp(a,b){
 if(! b){
     return a;
 }
 return myapp(b, a%b)
}
document.write(myapp(2025,1025));
*/
function myapp(n){
    let n=parseInt(prompt());
    if(n===0){
        return 1;
    }
    else{
        let product=1;
        let i;
        for(i=1; i<=n; i++){
            product*=i;
        }
        return product;
    }  
    
}
document.write(myapp(5));