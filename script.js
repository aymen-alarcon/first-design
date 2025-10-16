function filter() {
    let filter = document.getElementById("filter").value.toLowerCase();
    let list = document.querySelectorAll(".card");

    for (let i = 0; i < list.length; i++) {
        let card = list[i];
        let item = card.querySelector(".game").textContent.toLowerCase();

        if (item.includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none"; 
        }
    }
}

function showmodal() {
    let modal = document.getElementById("modal");
    let form = document.getElementById("form");
    form.style.backgroundColor = "#0A0E27";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.padding = "2rem";
}
function hidemodal() {
    let modal = document.getElementById("modal");

    modal.style.display = "none"
}