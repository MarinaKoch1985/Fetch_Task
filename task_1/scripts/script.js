const cards_container = document.querySelector('.container');

fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(json => render(json.data))

const render = (data_arrey) => { // (data_arrey) в эту  придуманную переменную передаются данные (json.data)
    data_arrey.forEach(elem => { // можно к елементам обратиться ч/з деструкторизацию, тогда вместо elem- тогда в скобках мы запишим:({first_name,email, avatar}) и ниже будем обращаться напрямую к едементам(без elem.)
        const card = document.createElement('div');
        const avatarElem = document.createElement('img');
        const nameElem = document.createElement('p');
        const emailElem = document.createElement('a');

        nameElem.innerText = elem.first_name;
        emailElem.innerText = elem.email;
        emailElem.href = `mailto: ${elem.email}`
        avatarElem.src = elem.avatar;
        avatarElem.alt = 'avatar';


        card.classList.add('card')

        card.append(avatarElem, nameElem, emailElem);
        cards_container.append(card);
    });
}