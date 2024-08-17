document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('flavour');

    sorted_flavours = icecream.sort( (a,b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });

    sorted_flavours.forEach(flavour => {
        select.appendChild(new Option(flavour.name, flavour.name))
    });

    let options = select.querySelectorAll('option')
    let instances = M.FormSelect.init(select, options);
})