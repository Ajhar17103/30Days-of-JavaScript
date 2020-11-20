 /*function CheckInput(){
     let inputValue=prompt();
     let checkString= new RegExp("^([a-z0-9]{5,})$");
     if(checkString.test(inputValue)){
         document.querySelector('#demo').innerHTML='valid String';
    }
    else{
        document.querySelector('#demo').innerHTML='Invalid String';
    }
 }
 function checkString(){
     let inputString=prompt();
     if(inputString.length===0){
         return true;
     }
     else{
         return false;
     }
    }
    document.write(checkString());
  

    function splitString(){
        let a="Azhar Islam";
        return a.trim().split(" ");
    }
    document.write(splitString());
     
     function findStrin(){
         let name='Azhar Islam';
        let length=5;
        if((name.constructor===String) && length>0){
            return name.substr(-5,length);
        }
        else{
            return  a;
        }
     }
     document.write(findStrin())
      
     function myapp(){
         let inputValue=prompt();
        let strim=inputValue.trim().split(' ');
        if(strim.length>1){
            return strim[0]+' ' + strim[1].charAt(0)+ '.';
        }
        return false;

     }
document.write(myapp());

function y(){
    let input=prompt();
    let splited=input.split('@');
    let partOne=splited[0];
    let average=partOne.length/2;
    partOne=partOne.substring(0,(partOne.length-average));
    let partTwo=splited[1];
    return partOne + '...@' + partTwo;
}
      document.write(y());
      
     function peraString(){
         let input='Azhar Islam From Dhaka';
         let splited=input.trim().split(' ');
           
          
             return splited[0]+'-'+splited[1]+'-'+splited[2]+'-'+splited[3];         
     }
     document.write(peraString());
 */