let flavour = new URLSearchParams(window.location.search).get('flavour');
let flavour_object = undefined;

icecream.forEach(i => {
    if (i.name === flavour) { flavour_object = i; }
});

// TODO: add error for when a flavour cannot be found

const populate_suitable_for_section = f => {
    let vegetarian_element = document.getElementById('vegetarian');
    let vegan_element = document.getElementById('vegan');
    let suitable = '<span class="green-text">YES</span>';
    let not_suitable = '<span class="red-text">NO</span>';


    if (f.vegetarian) {
        vegetarian_element.innerHTML += suitable;
    } else {
        vegetarian_element.innerHTML += not_suitable
    }

    if (f.vegan) {
        vegan_element.innerHTML += suitable;
    } else {
        vegan_element.innerHTML += not_suitable;
    }
}

const populate_contains_section = f => {
    let contains_section = document.getElementById('contains-section');
    let list = contains_section.querySelector('ul');

    f.contains.forEach(i => {
        let li = document.createElement('li');
        li.innerHTML = i;
        list.appendChild(li);
    })
}

const populate_may_contain_section = f => {
    let may_contain_section = document.getElementById('may-contain-section');
    let list = may_contain_section.querySelector('ul');

    f.may_contain.forEach(i => {
        let li = document.createElement('li');
        li.innerHTML = i;
        list.appendChild(li);
    })
}

const populate_does_not_contain_section = f => {
    let does_not_contain_section = document.getElementById('does-not-contain-section');
    let list = does_not_contain_section.querySelector('ul');

    let allergen_list = Object.values(allergen);
    let flavour_allergens = f.contains.concat(f.may_contain);

    let non_allergens = allergen_list.filter(i => {
        return !(flavour_allergens.includes(i));
    });

    non_allergens.forEach( i => {
        let li = document.createElement('li');
        li.innerHTML = i;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let flavour_name_element = document.getElementById('flavour-name');
    let kcal_count_element = document.getElementById('kcal-count');

    flavour_name_element.innerHTML = flavour_object.name;
    kcal_count_element.innerHTML = flavour_object.kcal + ' kcal/100ml';

    populate_suitable_for_section(flavour_object);
    populate_contains_section(flavour_object);
    populate_may_contain_section(flavour_object);
    populate_does_not_contain_section(flavour_object);
});

