function sendOTP() {
    const email = document.querySelector("#email");
    const otpverify = document.querySelector(".otpverify")[0];

    //create a SMTP creditenials 
    let otp_value = Math.floor(Math.random() * 10000);
    let emailBody = `<h2> Your OTP is ${otp_value} </h2> `;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sakthi130597@gmail.com",
        Password: "5EEB5EE6166D66D1E4691084161C7A61A26A",
        From: email.value,
        To: "sakthi130597@gmail.com",
        Subject: "OTP sent from SMTP creditenials",
        Body: emailBody
    }).then(message => {
        if (message === "OK") {
            alert("OTP sent to your email :-" + email.value);
            // otpverify.style.display = "block";
            const otp_inp = document.querySelector("#otp_inp");
            const otp_btn = document.querySelector("#otp_btn")
            otp_btn.addEventListener("click", () => {
                //checking wether sent email is valid
                if (otp_inp.value == 1402) {
                    alert("Logged in successfully!");
                } else {
                    alert("Invalid OTP");
                }
            })
        }
    });

}
