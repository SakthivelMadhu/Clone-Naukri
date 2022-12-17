function sendOTP(){
    const email = document.querySelector("#email");
    const otpverify = document.querySelector(".otpverify")[0];

    //create a SMTP creditenials 
    let otp_value = Math.floor(Math.random()*10000);
    let emailBody = `<h2> Your OTP is ${otp_value} </h2> `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sakthi130597@gmail.com",
        Password : "B42F5882FD336FE4FE800B9973F1E23AFC9A",
        From : email.value,
        To : "sakthi130597@gmail.com",
        Subject : "Login to veify using SMTP creditenails",
        Body : emailBody
    }).then(message => {
            if(message === "OK"){
                alert("OTP sent to your email  " + email.value);
                // otpverify.style.display = "block";
                const otp_inp = document.querySelector("#otp_inp");
                const otp_btn = document.querySelector("#otp_btn")
                otp_btn.addEventListener("click" , ()=>{
                    //checking wether sent email is valid
                    if(otp_inp.value == otp_value){
                        alert("email address verified");
                    }else{
                        alert("Invalid OTP");
                    }
                })
            }
        });

}


// sakthi13057 password 
//  B42F5882FD336FE4FE800B9973F1E23AFC9A 

// sasakthi130597 
// 14F9E22109A8BC20BCFD5CE37A8915383728 


