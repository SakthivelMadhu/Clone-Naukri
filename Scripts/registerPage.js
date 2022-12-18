// document.querySelector("#form").addEventListener("submit", creatAcc);
// var registerArr = JSON.parse(sessionStorage.getItem("registedUser")) || []
// function creatAcc(event){
//     event.preventDefault();
//     var infoObj = {
//         sName : document.querySelector("#name").value,
//         sEmail : document.querySelector("#email").value,
//         sPass : document.querySelector("#pass").value,
//         sMobile : document.querySelector("#phone").value

//     };
//     registerArr.push(infoObj);
//     sessionStorage.setItem("registedUser", JSON.stringify(registerArr));
//     alert("Registerd Successfully. Please Login! ")
//     window.location.href = "loginPage.html";
// }

document.querySelector("#form").addEventListener("submit", RegisterFunction);
var registerArr = JSON.parse(sessionStorage.getItem("registedUser")) || []
async function RegisterFunction(event) {
  try {
    event.preventDefault();
    var infoObj = {
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      pass: document.querySelector("#pass").value,
      phone: document.querySelector("#phone").value,
      access : "active"
    };
    registerArr.push(infoObj);
    sessionStorage.setItem("registedUser", JSON.stringify(registerArr));

    // let all_input_tags = document.querySelectorAll("#form input");
    // let userObj = {};
    // // console.log(all_input_tags)
    // for (let i = 0; i < all_input_tags.length - 1; i++) {
    //   userObj[all_input_tags[i].id] = all_input_tags[i].value;
    // }
    // console.log(userObj)


    let register_request = await fetch("http://localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(infoObj),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (register_request.ok) {
      alert("Hurry, User has been created.  Please login!");
      window.location.href = "loginPage.html";
    } else {
      alert("Bad request has been made.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}