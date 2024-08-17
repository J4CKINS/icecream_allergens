document.addEventListener('DOMContentLoaded', () => {
    let select = document.getElementById('allergen');

    Object.values(allergen).forEach( i => {
        select.appendChild(new Option(i, i));
    });

    let options = select.querySelectorAll('option');
    let instances = M.FormSelect.init(select, options)
});