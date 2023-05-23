export function hoverChangeTraining(nameCard, description, curse, school, date) {
    
    const varDescription = document.querySelector(".description");
    const varCurse = document.querySelector(".curse");
    const varSchool = document.querySelector(".school");
    const varDate = document.querySelector(".date");

    document.querySelector(nameCard).addEventListener("click", () =>{
        varDescription.innerHTML = description;
        varCurse.innerHTML = curse;
        varSchool.innerHTML = school;
        varDate.innerHTML = date;
    });

    const header = document.getElementById("training-institution");
    const btns = header.getElementsByClassName("institution");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("activeTraining");
            current[0].className = current[0].className.replace(" activeTraining", "");
            this.className += " activeTraining";
        })
    }
}