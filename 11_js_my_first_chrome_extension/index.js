
let myLeads = ["https://www.linkedin.com/in/jayasurya-charugundla/", "https://www.smec.ac.in/Beteportal"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    console.log("Button Clicked from addEventListner");
    myLeads.push(inputEl.value); 
    inputEl.value = ""; 
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    renderLeads();
})


function renderLeads() {
    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target="_blank" href=${myLeads[i]}>
                    ${myLeads[i]}
                </a>
            </li>`;
    }
    ulEl.innerHTML = listItems;
}















// ******* My Notes *******

// ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
     // alternative way of doing above line....
    // steps involved: 
        // create element
        // set text content
        // append to ul element
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);