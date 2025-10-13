function filter(){
    const filter = document.getElementById("filter").value.toLowerCase;

    const list = document.getElementById('list');
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < list.length; i++) {
        const item = items[i];
        const itemName = item.textContent.toLowerCase();
        if (itemName.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
