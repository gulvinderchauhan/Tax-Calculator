const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const grossIncome = document.getElementById("gross").value;
// const extraIncome=document.getElementById("extraIncome").value;
// const deductedamount=document.getElementById("deduction").value;
// const categoryAge=document.getElementById("ageCategory").value;

// console.log(grossIncome);

function verify(){
    if((Number(document.getElementById("gross").value)==(document.getElementById("gross").value))){
        document.getElementById("xyz").style.display='none';
    }
}

function verify2(){
    if((Number(document.getElementById("extraIncome").value))==(document.getElementById("extraIncome").value)){
        document.getElementById("xyz2").style.display='none';
    }
}

function verify3(){
    if((Number(document.getElementById("deduction").value)==(document.getElementById("deduction").value))){
        document.getElementById("xyz3").style.display='none';
    }
}

function taxcalculator(){
    const grossIncome = document.getElementById("gross").value;
    const extraIncome=document.getElementById("extraIncome").value;
    const deductedamount=document.getElementById("deduction").value;
    const categoryAge=document.getElementById("ageCategory").value;
    // console.log(categoryAge);
    // console.log(grossIncome);
    // console.log(extraIncome);
    // console.log(categoryAge);
    // console.log(deductedamount);
    const money=Number(grossIncome)+Number(extraIncome)-Number(deductedamount);
    // console.log(money);

    var tax;
    if(money<=800000){
        document.getElementById("taxcalculated").innerHTML=String(money);
        
    }
    else{
        if(categoryAge==='1'){
            tax=(3*(money-8)/10);

        }
        else if(categoryAge==='2'){
            tax=(4*(money-8)/10);
        }
        else if(categoryAge==='3'){
            tax=(1*(money-8)/10);
        }
        else{
            tax='Select Age Category';
        }

        const overAllIncome=money-tax;
        document.getElementById("taxcalculated").innerHTML=String(overAllIncome);
        document.getElementById("myForm").reset();

        
    }
}
