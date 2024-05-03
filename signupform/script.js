console.log("Hello.");

//Styling the input buttons (and lables)
const firstInput = document.querySelector(".inputboxjava1");
const secondInput = document.querySelector(".inputboxjava2");

const passwordLabel = document.querySelector(".inputlabeljava1");
const passwordMustMatchLabel2 = document.querySelector(".inputlabeljava2");

const buttonPara = document.querySelector(".buttonpara");
const form = document.querySelector("#finalform");




firstInput.style.width = "99%";
firstInput.style.height = "100%";
firstInput.style.border = "1px solid RGB(255,204,149,0.6)";
firstInput.style.outline = "4px solid RGB(160,128,95,1)";
firstInput.style.fontFamily = "standard, sans-serif";
firstInput.style.fontSize = "0.8rem";
firstInput.style.paddingLeft = "0.4rem";
firstInput.style.paddingTop = "0.4rem";
firstInput.style.paddingBottom = "0.5rem";
firstInput.style.borderRadius = "2px";

secondInput.style.width = "99%";
secondInput.style.height = "100%";
secondInput.style.border = "1px solid RGB(255,204,149,0.6)";
secondInput.style.outline = "4px solid RGB(160,128,95,1)";
secondInput.style.fontFamily = "standard, sans-serif";
secondInput.style.fontSize = "0.8rem";
secondInput.style.paddingLeft = "0.4rem";
secondInput.style.paddingTop = "0.4rem";
secondInput.style.paddingBottom = "0.5rem";
secondInput.style.borderRadius = "2px";

passwordLabel.style.fontFamily = "standard, sans serif";
passwordLabel.style.fontSize = "0.8rem";
passwordLabel.style.padding = "1px 3px";
passwordLabel.style.margin = "0px 1px";
passwordLabel.style.textAlign = "center";
passwordLabel.style.borderRadius = "0px 0px 4px 4px";
passwordLabel.style.color = "transparent";
passwordLabel.style.backgroundColor = "transparent";
passwordLabel.style.border = "none";

passwordMustMatchLabel2.style.fontFamily = "standard, sans serif";
passwordMustMatchLabel2.style.fontSize = "0.8rem";
passwordMustMatchLabel2.style.padding = "1px 3px";
passwordMustMatchLabel2.style.margin = "0px 1px";
passwordMustMatchLabel2.style.textAlign = "center";
passwordMustMatchLabel2.style.borderRadius = "0px 0px 4px 4px";
passwordMustMatchLabel2.style.color = "transparent";
passwordMustMatchLabel2.style.backgroundColor = "transparent";
passwordMustMatchLabel2.style.border = "none";

/*
    NEXT: Make the inputlabel visible on click
    margin: 0px 1px;
    padding: 1px 3px;
    border-radius: 0px 0px 4px 4px;
    text-align: center;
*/


//Functions to change the colour of the inputs and show or hide labels

function showPasswordLabel(){
    passwordLabel.style.color = "RGB(255,0,0,1)";
    passwordLabel.style.backgroundColor = "RGB(255,0,0,0.4)";
    passwordLabel.style.borderBottom = "1px solid RGB(255,0,0,0.3)";
    passwordLabel.style.borderLeft = "1px solid RGB(255,0,0,0.3)";
    passwordLabel.style.borderRight = "1px solid RGB(255,0,0,0.3)";
}

function hidePasswordLabel(){
    passwordLabel.style.color = "transparent";
    passwordLabel.style.backgroundColor = "transparent";
    passwordLabel.style.border = "none";
}

function showPasswordMustMatchLabel2(){
    passwordMustMatchLabel2.style.color = "RGB(255,0,0,1)";
    passwordMustMatchLabel2.style.backgroundColor = "RGB(255,0,0,0.4)";
    passwordMustMatchLabel2.style.borderBottom = "1px solid RGB(255,0,0,0.3)";
    passwordMustMatchLabel2.style.borderLeft = "1px solid RGB(255,0,0,0.3)";
    passwordMustMatchLabel2.style.borderRight = "1px solid RGB(255,0,0,0.3)";
}

function hidePasswordMustMatchLabel2(){
    passwordMustMatchLabel2.style.color = "transparent";
    passwordMustMatchLabel2.style.backgroundColor = "transparent";
    passwordMustMatchLabel2.style.border = "none";
}


function changeFirstInputRed(){
    firstInput.style.outline = "3px solid RGB(255,0,0,1)";
    firstInput.style.boxShadow = "0px 0px 7px 6px RGB(255,0,0,0.5)";
}

function changeFirstInputGold(){
    firstInput.style.boxShadow = "none";
    firstInput.style.outline = "4px solid RGB(160,128,95,1)";
}

function changeSecondInputRed(){
    secondInput.style.outline = "3px solid RGB(255,0,0,1)";
    secondInput.style.boxShadow = "0px 0px 7px 6px RGB(255,0,0,0.5)";
}

function changeSecondInputGold(){
    secondInput.style.boxShadow = "none";
    secondInput.style.outline = "4px solid RGB(160,128,95,1)";
}


function changeBothInputGreen(){
    firstInput.style.boxShadow = "0px 0px 7px 6px RGB(0,255,0,0.5)";
        firstInput.style.outline = "3px solid RGB(0,255,0,1)";
        secondInput.style.boxShadow = "0px 0px 7px 6px RGB(0,255,0,0.5)";
        secondInput.style.outline = "3px solid RGB(0,255,0,1)";
}


function changeBothInputRed(){
    firstInput.style.boxShadow = "0px 0px 7px 6px RGB(255,0,0,0.5)";
        firstInput.style.outline = "3px solid RGB(255,0,0,1)";
        secondInput.style.boxShadow = "0px 0px 7px 6px RGB(255,0,0,0.5)";
        secondInput.style.outline = "3px solid RGB(255,0,0,1)";
}

function changeBothLabelsGreen(){
    passwordLabel.style.color = "RGB(0,255,0,1)";
    passwordLabel.style.backgroundColor = "RGB(0,255,0,0.4)";
    passwordLabel.style.borderBottom = "1px solid RGB(0,255,0,0.3)";
    passwordLabel.style.borderLeft = "1px solid RGB(0,255,0,0.3)";
    passwordLabel.style.borderRight = "1px solid RGB(0,255,0,0.3)";
    passwordLabel.textContent = "Password Confirmed";

    passwordMustMatchLabel2.style.color = "RGB(0,255,0,1)";
    passwordMustMatchLabel2.style.backgroundColor = "RGB(0,255,0,0.4)";
    passwordMustMatchLabel2.style.borderBottom = "1px solid RGB(0,255,0,0.3)";
    passwordMustMatchLabel2.style.borderLeft = "1px solid RGB(0,255,0,0.3)";
    passwordMustMatchLabel2.style.borderRight = "1px solid RGB(0,255,0,0.3)";
    passwordMustMatchLabel2.textContent = "Password Confirmed";
    
}

/*
    color: RGB(0,255,0,1);
    background-color: RGB(0,255,0,0.4);
    border-bottom: 1px solid RGB(0,255,0,0.3);
    border-left:1px solid RGB(0,255,0,0.3);
    border-right: 1px solid RGB(0,255,0,0.3);
*/

//Event listeners




firstInput.addEventListener("focus",function(){
        changeFirstInputRed();
        showPasswordLabel();


        if(firstInput.value == secondInput.value && firstInput.value != ""){
            changeBothInputGreen();
            changeBothLabelsGreen();
        }

        if(secondInput.value != "" && !(firstInput.value == secondInput.value)){
        passwordLabel.textContent = "Passwords Must Match";
         }

})
firstInput.addEventListener("focusout",function(){
    if(firstInput.value == ""){
        changeFirstInputGold();
        hidePasswordLabel();
        passwordLabel.textContent = "Password";
    }
})

secondInput.addEventListener("focus",function(){
    changeSecondInputRed();
    showPasswordMustMatchLabel2();

    if(firstInput.value == secondInput.value && firstInput.value != ""){
        changeBothInputGreen();
        changeBothLabelsGreen();
    }

})

secondInput.addEventListener("focusout",function(){
if(secondInput.value == ""){
    changeSecondInputGold();
    hidePasswordMustMatchLabel2();
}
})



firstInput.addEventListener("input", function(){
    if(firstInput.value == secondInput.value && firstInput.value != ""){
        changeBothInputGreen();
        changeBothLabelsGreen();
    } else if(firstInput.value != secondInput.value && secondInput.value != ""){
        showPasswordMustMatchLabel2();
        showPasswordLabel();
        changeBothInputRed();
        passwordLabel.textContent = "Passwords Must Match";
        passwordMustMatchLabel2.textContent = "Passwords Must Match";
    } 
    firstInput.setCustomValidity("");

})

secondInput.addEventListener("input", function(){
    if(firstInput.value == secondInput.value && firstInput.value != ""){
        changeBothInputGreen();
        changeBothLabelsGreen();
    } else if(firstInput.value != secondInput.value && firstInput.value != ""){
        passwordMustMatchLabel2.textContent = "Passwords Must Match";
        passwordLabel.textContent = "Passwords Must Match";
        showPasswordMustMatchLabel2();
        showPasswordLabel();
        changeBothInputRed();
        
    }
})


buttonPara.addEventListener("click", function(){
    console.log(firstInput.value + " " + secondInput.value)
    if(firstInput.value != secondInput.value){
        console.log("triggered");
        firstInput.setCustomValidity("Passwords must match.");

    } else {
        firstInput.setCustomValidity("");
        form.onsubmit="";
    }

})




/*
width: 100%; 
    font-family: standard, sans-serif;
    font-weight: 500;
    border: 0.01rem solid RGB(255,255,255,1); 
    border: 1px solid RGB(255,204,149,0.6); 
    border-radius: 2px;
    height: 100%;
    outline: 4px solid RGB(160,128,95,1);
    transition: box-shadow 0.1s ease-in-out, outline 0.1s ease-in-out;
    flex-shrink: 0;



*/