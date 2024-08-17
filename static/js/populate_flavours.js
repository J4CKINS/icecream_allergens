document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('flavour');

    icecream.forEach(flavour => {
        select.appendChild(new Option(flavour.name, flavour.name))
    });

    let options = select.querySelectorAll('option')
    let instances = M.FormSelect.init(select, options);
})