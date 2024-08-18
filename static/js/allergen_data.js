const allergen_type = new URLSearchParams(window.location.search).get('allergen');

const get_contains_allergen = () => {
    let contains_section = document.getElementById('contains-section');
    let list = contains_section.querySelector('ul');

    let filtered_array = icecream.filter(i => {
        return i.contains.includes(allergen_type);
    });

    filtered_array.forEach( i => {
        let li = document.createElement('li');
        li.innerHTML = i.name;
        list.appendChild(li);
    });
}

const get_may_contain_allergen = () => {
    let may_contain_section = document.getElementById('may-contain-section');
    let list = may_contain_section.querySelector('ul');

    let filtered_array = icecream.filter(i => {
        return i.may_contain.includes(allergen_type);
    });

    filtered_array.forEach( i => {
        let li = document.createElement('li');
        li.innerHTML = i.name;
        list.appendChild(li);
    });
}

const get_does_not_contain_allergen = () => {
    let does_not_contain_section = document.getElementById('does-not-contain-section');
    let list = does_not_contain_section.querySelector('ul');

    let filtered_array = icecream.filter( i => {
        return !(i.contains.concat(i.may_contain).includes(allergen_type));
    });

    filtered_array.forEach(i => {
        let li = document.createElement('li');
        li.innerHTML = i.name;
        list.appendChild(li);
});
}

document.addEventListener('DOMContentLoaded', () => {
    let allergen_name_element = document.getElementById('allergen-name');
    allergen_name_element.innerHTML = allergen_type;

    get_contains_allergen();
    get_may_contain_allergen();
    get_does_not_contain_allergen();
});