/* 
function upperCase(char){
    let str=char.split('');
    
    let i;
    for(i=0; i<str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substr(1); 
    }
    return str.join(" ");

}
document.write(upperCase('helllo mr how are you'));
 
function getNum(){
    let getnum=parseInt(prompt());
    let hours=Math.floor(getnum/60);
    let minutes=getnum%60;
    document.write( hours+ + ' ' + 'Hours' + ' '+ 'and' +' ' + minutes + ' '+ 'Minutes');
}
getNum()

function sortChar(Str){
    return Str.split('').sort().join('')
}
document.write(sortChar('azhar islam'));

function divNum(){
    let a=80;
    let b=6;
    let div=Math.round(a/b).toString();
    let restult=div.split('');
    if(div>=1000){

        for(let i=div.lenght-3; i>0;i-=3){
            restult.splice(i, 0, ",");
        }
    }
    document.write(restult);  
}
divNum()

function stringNum(getChar,getnum){
 
     
    if(getnum<0){
        return false;
    }
    else{
       return getChar.repeat(getNum);
    }
   reult
   
}
document.write(stringNum('abc',5));

function strinlength() {
    let inputValue =prompt();
    if (inputValue.length % 2 == 0) {
        let result = inputValue.slice(0, inputValue.length / 2);
        document.write(result);
    }
    else{
        document.write(inputValue);
    }
    
   
}
strinlength();

function sliceFirstLast(){
    let inputValue=prompt();
    let result=inputValue.slice(1,inputValue.length-1);
    document.write(result +"<br/>" );
     
}
sliceFirstLast();

function concat(){
    let inputValueOne=prompt();
    let inputValueTwo=prompt();
    let resultOne=inputValueOne.slice(1,inputValueOne.lenght);
    let resultTwo=inputValueTwo.slice(1,inputValueTwo.length);
    document.write(resultOne+' ' +resultTwo);
}
concat();
*/