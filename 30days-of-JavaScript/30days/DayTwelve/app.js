 /*function myapp(){
     let num=[1,8,9,6,3,9,9,3,7,8]
    let x;
    let out=[]
    let obj={};
    for(x=0; x<num.length; x++){
        obj[num[x]]=0;
    }
    for(x in obj){
        out.push(x);
    }
    return out;
 }
document.write(myapp());

function myapp(){
    let h=['hi', 'bye','hi','hello'];
    let b=['bye','hi', 'dhaka','cumilla']
    /*let newarry=[].concat(h,b); */
    /*let newarry=[...h,...b] 
    let newarry= new Set([...h,...b]);
    document.write(newarry)

}
myapp();

 function myapp(){
     let  first= prompt( );
     let second=prompt( );
     if(first>second){
         document.write('large Number: ' + first + + "this first Number");
     }
     else(first<second){
        document.write('large Number: ' + second + "this Second Number");
     }

 }
 myapp();
 
function myapp(){
let first=prompt()
let second=prompt();
if(parseInt(first)>parseInt(second)){
    return first;
}
else{
    return second
}
}
document.write(myapp())


function myapp(){
    let firstNum=prompt(parseInt());
    let secondNum=prompt(parseInt());
    let thirdNum=prompt(parseInt());
    if(firstNum<0 && secondNum<0 && thirdNum<0){
        return('nagetive');
    }
    else{
        return ('postive');
    }
}
document.write(myapp());

function myapp(){
    let x=parseInt(prompt());
    let y=parseInt(prompt());
    let z=parseInt(prompt());
    document.write(x+y+z + "<br/>");

 if(x>y && x>z){
        if(y>z){
            return(x +','+y+','+z);
        }
        else{
            return(x + ',' + z + ',' + y);
        }
    }
    else if(y>x && y>z){
        if(x>z){
            return(y + ',' + x + ',' + z)
        }
        else{
            return(y + ',' + z + ',' + x);
        }
    }
    else if(z>x && z>y){
        if(x>y){
            return (z + ',' + x + ','+ y);
        }
        else{
            return (z + ',' + y + ','+ x)
        }
    } 
}

document.write(myapp());
*/