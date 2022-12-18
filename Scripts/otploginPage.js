function sendOTP(){
    const email = document.querySelector("#email");
    const otpverify = document.querySelector(".otpverify")[0];

    //create a SMTP creditenials 
    let otp_value = Math.floor(Math.random()*10000);
    let emailBody = `<h2> Your OTP is ${otp_value} </h2> `;

    Email.send({


        Host : "smtp.elasticemail.com",
        Username : "sakthi13057@gmail.com",
        Password : "7BDBB13401525C56FDFEDC5E6C4E29580681",
        To : 'naukri@website.com',
        From : "sakthi13057@gmail.com",
        Subject : "Login to veify using SMTP creditenails",
        Body : emailBody

        // SecureToken : "8f577700-d01f-4584-8a96-62ff256999cb",
        // From : email.value,
        // To : "sakthi13057@gmail.com",
        // Subject : "Login to veify using SMTP creditenails",
        // Body : emailBody
    }).then(message => {
            if(message === "OK"){
                alert("OTP sent to your email  " + email.value);
                // otpverify.style.display = "block";
                const otp_inp = document.querySelector("#otp_inp");
                const otp_btn = document.querySelector("#otp_btn")
                otp_btn.addEventListener("click" , ()=>{
                    //checking wether sent email is valid
                    if(otp_inp.value == otp_value){
                        alert("Successfully loged in");
                    }else{
                        alert("Invalid OTP");
                    }
                })
            }
        });

}


// sakthi13057 password 
// 7BDBB13401525C56FDFEDC5E6C4E29580681
// 8f577700-d01f-4584-8a96-62ff256999cb

// sasakthi130597 
// 14F9E22109A8BC20BCFD5CE37A8915383728 


// sadi1402sa1403
// 2F5ADD784C29D4CBE23DAA016D56346E371C
