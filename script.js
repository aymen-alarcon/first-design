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