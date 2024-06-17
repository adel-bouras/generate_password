let range=document.getElementById("range");
let number=document.getElementById("number");
let output=document.getElementById("outputtxt");
let checkUpper=document.getElementById("checkone");
let checkLower=document.getElementById("checktwo");
let checkNumbers=document.getElementById("checkthree");
let checkSymboles=document.getElementById("checkfour");
let statuss=document.getElementById("status");
let barone=  document.getElementById('one');
let bartwo=document.getElementById('two');
let barthree=document.getElementById('three');
let barfour=document.getElementById('four');
let validate=document.getElementById('validate');
function main(){
    let includeupper=checkUpper.checked;
    let includelower=checkLower.checked;
    let includenumbers=checkNumbers.checked;
    let includesymbols=checkSymboles.checked;
    let number_of_chars=eval(number.textContent);
    if(!includeupper&&!includelower&&!includenumbers&&!includesymbols){
        barone.style.backgroundColor="";
        bartwo.style.backgroundColor="";
        barthree.style.backgroundColor="";
        barfour.style.backgroundColor="";
        }
        if((number_of_chars<=10&&number_of_chars!=0)&&(includeupper)){barone.style.backgroundColor="red";
            statuss.innerHTML="WEAK";
            bartwo.style.backgroundColor="";
            barthree.style.backgroundColor="";
            barfour.style.backgroundColor="";
            }
    if((number_of_chars>10&&number_of_chars!=0)&&(includeupper)){barone.style.backgroundColor="yellow";
    bartwo.style.backgroundColor="yellow";
    statuss.innerHTML="MEDIUM";
    barthree.style.backgroundColor="";
    barfour.style.backgroundColor="";
    }
    if((number_of_chars>=8&&number_of_chars!=0)&&(includeupper||includesymbols)&&(includelower||includenumbers)){barone.style.backgroundColor="yellow";
    bartwo.style.backgroundColor="yellow";
    statuss.innerHTML="MEDIUM";
    barthree.style.backgroundColor="yellow";
    barfour.style.backgroundColor="";
    }
    if((number_of_chars>6&&number_of_chars!=0)&&(includeupper&&includesymbols)&&(includelower&&includenumbers)){
        barone.style.backgroundColor="green";
        bartwo.style.backgroundColor="green";
        statuss.innerHTML="STRONG";
        barthree.style.backgroundColor="green";
        barfour.style.backgroundColor="green";
        }
        if((number_of_chars>10&&number_of_chars!=0)&&includelower){
            barone.style.backgroundColor="yellow";
        bartwo.style.backgroundColor="yellow";
        statuss.innerHTML="MEDIUM";
        barthree.style.backgroundColor="";
        barfour.style.backgroundColor="";
        }else {
            barone.style.backgroundColor="red";
            bartwo.style.backgroundColor="";
            statuss.innerHTML="WEAK";
            barthree.style.backgroundColor="";
            barfour.style.backgroundColor="";
            }
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[{]};:\'",<.>/?`~';
            let max=0;
            let min=0;
            let result = '';
            if(includelower){}
            if(includeupper){}
            if(includenumbers){}
            if(includesymbols){}
            
                        
}
            function listenupper(){
                checkUpper.checked;
                main();
}
function listenlower(){
checkLower.checked;    
main();
}
function listennubers(){
checkNumbers.checked;    
main();
}
function listensymbols(){
checkSymboles.checked;    
main();
}   
function chars() {
number.textContent =range.value;
main();
}
range.addEventListener("input",chars);
checkSymboles.addEventListener('input',listensymbols);
checkNumbers.addEventListener('input',listennubers);
checkLower.addEventListener('input',listenlower);
checkUpper.addEventListener('input',listenupper);