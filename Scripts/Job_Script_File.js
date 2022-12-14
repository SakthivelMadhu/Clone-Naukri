let dataArray = [
    {
     "jobProfilename": "International Accountability Strategist",
     "Companyname": "Hand - Gleichner",
     "experenceInYear": 9,
     "address": "address 1",
     "JobDescription": "Chief",
     "salary": "30000",
     "id": "1"
    },
    {
     "jobProfilename": "National Configuration Liaison",
     "Companyname": "Sauer LLC",
     "experenceInYear": 13,
     "address": "address 2",
     "JobDescription": "Customer",
     "salary": "30000",
     "id": "2"
    },
    {
     "jobProfilename": "Lead Division Liaison",
     "Companyname": "Hoppe LLC",
     "experenceInYear": 1,
     "address": "address 3",
     "JobDescription": "Investor",
     "salary": "10000",
     "id": "3"
    },
    {
     "jobProfilename": "Legacy Implementation Administrator",
     "Companyname": "Lakin LLC",
     "experenceInYear": 45,
     "address": "address 4",
     "JobDescription": "Customer",
     "salary": "40000",
     "id": "4"
    },
    {
     "jobProfilename": "Product Configuration Producer",
     "Companyname": "Ruecker, Kshlerin and Lind",
     "experenceInYear": 57,
     "address": "address 5",
     "JobDescription": "Forward",
     "salary": "30000",
     "id": "5"
    },
    {
     "jobProfilename": "Forward Mobility Facilitator",
     "Companyname": "Tremblay - Fadel",
     "experenceInYear": 83,
     "address": "address 6",
     "JobDescription": "Principal",
     "salary": "20000",
     "id": "6"
    },
    {
     "jobProfilename": "Senior Security Liaison",
     "Companyname": "Hane - Moen",
     "experenceInYear": 100,
     "address": "address 7",
     "JobDescription": "Legacy",
     "salary": "20000",
     "id": "7"
    },
    {
     "jobProfilename": "Corporate Implementation Executive",
     "Companyname": "Nitzsche LLC",
     "experenceInYear": 95,
     "address": "address 8",
     "JobDescription": "Legacy",
     "salary": "30000",
     "id": "8"
    },
    {
     "jobProfilename": "Chief Usability Supervisor",
     "Companyname": "Swift, Conn and Ledner",
     "experenceInYear": 3,
     "address": "address 9",
     "JobDescription": "Internal",
     "salary": "50000",
     "id": "9"
    },
    {
     "jobProfilename": "International Solutions Consultant",
     "Companyname": "Bergstrom Inc",
     "experenceInYear": 91,
     "address": "address 10",
     "JobDescription": "Central",
     "salary": "20000",
     "id": "10"
    }
   ]

   let container = document.getElementById("Job_section_All_Jobs")
   dataArray.map(function (elem){
    var innerdiv= document.createElement("div");
    innerdiv.setAttribute("class","innerdiv")
    var title=document.createElement("h3");
    title.innerText=elem.jobProfilename;
    title.setAttribute("class","title")
  
    var companyName= document.createElement("p");
    companyName.innerText=elem.Companyname;
    //console.log(c);
    var experience= document.createElement("p");
    experience.innerText=elem.experenceInYear;
    var salary= document.createElement("p");
    salary.innerText=elem.salary;
    var address= document.createElement("p");
    address.innerText=elem.address;
    var description= document.createElement("p");
    description.innerText=elem.JobDescription;
    var btn=document.createElement("button");
    btn.setAttribute("class","saveButton");
    btn.innerText="1 Day ago";
    btn.addEventListener("click",function(){
      saveJob(elem);
    })
    innerdiv.append(title,companyName,experience,salary,address,description,btn);
   
    container.append(innerdiv);

  })


