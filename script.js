
function updateTextInputRate(val) {
    document.getElementById('rateLable').innerText = val + "%"; 
    return true;
}
     

/*
A = Total Accrued Amount (principal + interest)
P = Principal Amount
I = Interest Amount
r = Rate of Interest per year in decimal; r = R/100
R = Rate of Interest per year as a percent; R = r * 100
t = Time Period involved in months or years
A = P(1 + rt) 
*/
function compute()
{
    var p = document.getElementById("principal").value;
    var R = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var result = document.getElementById("answer");
    var A = p*(1+ R*t/100);
    var I = A - p;
    const d = new Date();
    var yearOfpayment = parseInt(t) + d.getFullYear();

    if (checkValidity()) {
        var strResult = "if you deposit " + '<span style = "background-color : yellow">' + p + '</span>' + ',<br>' +
        "at an interest rate of " + '<span style = "background-color : yellow">' + R + "%"+ '</span>' + ',<br>' + 
        "You will recieve an amount of " + '<span style = "background-color : yellow">' + I + '</span>' + ',<br>' + 
        "in the year " + '<span style = "background-color : yellow">' + yearOfpayment + '</span>';

        result.innerHTML = strResult;
    }
    return true;
}

function checkValidity(){

    var t = document.getElementById("years").value;
    var p = document.getElementById("principal").value;
    var valid = true;
    if (p<=0 || p == "") {
        alert("the amount must be positive number")
        valid = false;
        document.getElementById("principal").focus();   
    }
    else {
        if (t < 0 || t == "") {
            alert("please enter valid number of years")
            document.getElementById("years").focus();
            valid = false;
            
        }
    }



    

 
    return valid;

}