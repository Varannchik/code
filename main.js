
// function my_fun(){
//     return 'hello';
    
// }
// console.log(my_fun());
// my_fun();

// let a=5;
// let b=6;
// function mult(){
//     return a*b;       
// }
//  console.log(mult()/a);

// let input1=document.querySelector('.inp1');
// let input2=document.querySelector('.inp2');
// let btn=document.querySelector('.btn');
// function multiplication(a,b){
//     return a/b;
// }
// btn.addEventListener('click',function(){   
//     console.log(multiplication(input1.value,input2.value));
//     console.log(multiplication(input2.value,input1.value));
// });

let input1=document.querySelector('.inp1');
let arg=[];
let plus=document.querySelector('.btn1');
let clr=document.querySelector('.btn3');
let rez=document.querySelector('.btn2');
let array=document.querySelector('.btn4');
let a=1;
let c=0;
plus.addEventListener('click', function(){   
    arg.push(input1.value);        
});
clr.addEventListener('click', function(){
    input1.value='';
   
});

function Mult(){              
    for (let i = 0; i<arg.length; i++){          
        a=a*arg[i];
    } 
    return a;    
} 
function Div(){
    c=a/arg.length;
    return c; }   

rez.addEventListener('click', function(){
    console.log(Mult(a));
    console.log(Div(c));
});
array.addEventListener('click', function(){
    for (let i = 0; i<arg.length; i++){          
       console.log(arg[i]);
    } 
});





// let a=0;
// function Name(){        
//     if(arguments.length>0){        
//         for (let i = 0; i<arguments.length; i++){            
//             if(typeof arguments[i]==='number'){
//                 a+=arguments[i];
//             }
//         }
//     }else{
//         a='none arguments';
//     }
//     return a;
// };
// console.log(Name(1,2,3));



