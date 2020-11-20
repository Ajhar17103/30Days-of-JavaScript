/*let today= new Date();
 let day=today.getDay();
let hours=today.getHours();
let minutes=today.getMinutes();
let seconds=today.getSeconds();
let dayList=['Sunday','Monday','Thuesday','Wednesday','thusday','friday','Saturday'];
document.querySelector('#demo').innerHTML="Today is: " +  dayList[day];
document.querySelector('#demo1').innerHTML=hours + ':' + minutes +': ' + ':' + seconds;
if(hours>=13 ){
    document.write(hours-12);
}
else{
    document.write(hours);
}

let dd=today.getDay();
let month=today.getMonth();
let year=today.getFullYear();
if(dd<10){
    dd='0'+dd;
}
 
if(month<10){
    month='0'+ month;
}

document.write('Today is:' + dd +':'+ month+ ':' + year);
document.write('<br/>'+ 'Today is:' + dd +'/'+ month+ '/' + year);
document.write('<br/>');

let years=2020;
if(years%4===0){
    document.write('year is leepYear');
}
else{
    document.write('year is not leepYear');
}
document.write('<br/>');
document.write('<br/>');

/*let num = Math.ceil(Math.random()*10);
document.write(num);
let gnum=prompt('Guess the number between 1 and 10 inclusive');
if(gnum==num){
    document.write('Matched');
}else{
    document.write('Not Matched' + gnum);
} 

/* Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
document.write('-----------------------'+'<br/>');
 for(var year=2014; year<=2050;year++){
    var d=new Date(year,0,1);
    if(d.getDay()==0){
        document.write('1st january is:' + year +'<br/>');
    }
}
document.write('-----------------------'+'<br/>');
 

function multi(){
    let firstInput=document.getElementById('firstInput').value;
    let secondInput=document.getElementById('secondInput').value;
    let multi=firstInput*secondInput;
    document.querySelector('#result').innerText=multi;

}

function div(){
    let firstInput=document.getElementById('firstInput').value;
    let secondInput=document.getElementById('secondInput').value;
    let multi=firstInput/secondInput;
    document.querySelector('#result').innerText=multi;

}
document.write(document.URL);

filename='system.php';
document.write(filename.split('.').pop());
document.write('<br/>')
filename='abc.js';
document.write(filename.split('.').pop());

function givenFact(){
    let givenNumber=prompt();
    if(givenNumber<=13){
    document.write(13-givenNumber);
        
    } 
    else{
    document.write((givenNumber-13)*2);
    }
}

givenFact();

function sumTriple(){
    let firstSum=parseInt(prompt());
    let secondSum=parseInt(prompt());
    if(firstSum==secondSum){
        document.write(3*(firstSum+secondSum));
    }
    else{
        document.write(firstSum+secondSum);
    }
}
sumTriple();


function sum(a,b){
    if(a==50 || b==50 || (a+b ==50)){
        return true;
    }
    else{
        return false;
    }
}
document.write(sum(10,20));
*/