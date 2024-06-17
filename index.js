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
    let number_of_chars = parseInt(number.textContent);
    statuss.innerHTML = "";
    barone.style.backgroundColor = "";
    bartwo.style.backgroundColor = "";
    barthree.style.backgroundColor = "";
    barfour.style.backgroundColor = "";

    if (number_of_chars === 0 || (!includeupper && !includelower && !includenumbers && !includesymbols)) {
        return; // Exit function if no checkboxes are checked or number is 0
    }

    // Determine strength based on criteria
    if (number_of_chars <= 10 && includeupper) {
        barone.style.backgroundColor = "red";
        statuss.innerHTML = "WEAK";
    }

    if (number_of_chars > 10 && includeupper) {
        barone.style.backgroundColor = "yellow";
        bartwo.style.backgroundColor = "yellow";
        statuss.innerHTML = "MEDIUM";
    }

    if (number_of_chars >= 8 && (includeupper || includesymbols) && (includelower || includenumbers)) {
        barone.style.backgroundColor = "yellow";
        bartwo.style.backgroundColor = "yellow";
        statuss.innerHTML = "MEDIUM";
        barthree.style.backgroundColor = "yellow";
    }

    if (number_of_chars > 10 && includelower) {
        barone.style.backgroundColor = "yellow";
        bartwo.style.backgroundColor = "yellow";
        statuss.innerHTML = "MEDIUM";
    }

    if (number_of_chars > 6 && includeupper && includesymbols && includelower && includenumbers) {
        barone.style.backgroundColor = "green";
        bartwo.style.backgroundColor = "green";
        statuss.innerHTML = "STRONG";
        barthree.style.backgroundColor = "green";
        barfour.style.backgroundColor = "green";
    }
            let result="";
            let characrets="";
            if (includeupper) {
                characrets += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                }
                
                if (includelower) {
                    characrets += 'abcdefghijklmnopqrstuvwxyz';
            }
          
            if (includenumbers) {
            characrets += '0123456789';
            }
            
            if (includenumbers) {
                characrets += '!@#$%^&*()_+-=[]{}|;:,.<>?';
                }
                for (let i = 0; i < number_of_chars; i++) {
                    const randomIndex = Math.floor(Math.random() * characrets.length);
                    result += characrets[randomIndex];
                }
output.innerHTML=result;
output.style.color="white";
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
validate.addEventListener("click", function() {
    number.textContent = range.value;
    main();
});