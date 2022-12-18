
let url = "https://63996a8929930e2bb3d223f1.mockapi.io/jobs"

async function FetchTodoData(url) {
      try {
            let fetch_todo_request = await fetch(
                  `${url}`,
                  {
                        method: "GET",
                        headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${sessionStorage.getItem(
                                    "access_token"
                              )}`,
                        },
                  }
            );

            if (fetch_todo_request.ok) {

                  let real_data = await fetch_todo_request.json();

                  // console.log(real_data);
                  // console.log(total_page_show);
                  RenderData(real_data);

            } else {
                  alert(
                        "Bad request! Maybe you are missing your access token."
                  );
            }
      } catch (error) {
            alert("Something went wrong!! Please try again later.");
      }
}

FetchTodoData(url);


//    let container = document.getElementById("Job_section_All_Jobs")
function RenderData(real_data) {
      let container = document.getElementById("Job_section_All_Jobs");

      console.log(real_data)

      real_data.map(function (elem) {
            var innerdiv = document.createElement("div");
            innerdiv.setAttribute("class", "innerdiv")
            var title = document.createElement("h3");
            title.innerText = elem.jobProfilename;
            title.setAttribute("class", "title")

            var companyName = document.createElement("p");
            companyName.innerText = elem.Companyname;
            var x = document.createElement("A");
            const t = document.createTextNode("Apply");
            x.setAttribute("href", "/company pages/wipro.html");
            //console.log(c);
            var experience = document.createElement("p");
            experience.innerText = elem.experenceInYear;
            var salary = document.createElement("p");
            salary.innerText = elem.salary;
            var address = document.createElement("p");
            address.innerText = elem.address;
            var description = document.createElement("p");
            description.innerText = elem.JobDescription;
            var btn = document.createElement("button");
            btn.setAttribute("class", "saveButton");
            btn.innerText = "1 Day ago";
            btn.addEventListener("click", function () {
                  saveJob(elem);
            })
            innerdiv.append(title, companyName, experience, salary, address, description, btn);

            container.append(innerdiv);

      })

}


document.querySelector('#job').addEventListener('mouseover', () => {
      document.querySelector('.hover1').style.display = 'grid';
})
document.querySelector('#job').addEventListener('mouseleave', () => {
      document.querySelector('.hover1').style.display = 'none';
})

document.querySelector('#recruit').addEventListener('mouseover', () => {
      document.querySelector('.hover2').style.display = 'grid';
})
document.querySelector('#recruit').addEventListener('mouseleave', () => {
      document.querySelector('.hover2').style.display = 'none';
})




// search
let bag = []
fetch(url).then((res) => res.json())
      .then((data) => {
            bag = [...data]
      })
      .catch((err) => console.log(err));
function search() {
      let x = document.querySelector("#input1").value;
      let newData = bag.filter((element) => {
            return element.jobProfilename.toLowerCase().includes(x.toLowerCase());
      });
      RenderData(newData)
}