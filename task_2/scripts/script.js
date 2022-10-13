const cards_container = document.querySelector('.cards_container');


const render = (json_data) => {
    cards_container.innerText = '';
    const cards = json_data.map(({first_name, avatar}) => { //обращаюсь к элементам ч/з деструкторизацию
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        const PhotoElem = document.createElement('img');

        nameElem.innerText = first_name;
        PhotoElem.src = avatar; 
        PhotoElem.alt = 'avatar';

        card.classList.add('card');
        card.append(nameElem, PhotoElem);

        return card
    })
    cards_container.append(...cards); //SPREAD оператор

   
} 
const request = (num) => {
    fetch(`https://reqres.in/api/users?page=${num}`)
    .then(resp => resp.json())
    .then(json => render(json.data))
};;

request(2);

const [ first_btn, second_btn] = document.querySelectorAll('.triggers button');

first_btn.addEventListener('click', () => request(1));
second_btn.addEventListener('click',() => request(2));


// const triggers = document.querySelectorAll('.triggers button');
// triggers.forEach(e, i) => e.addEventListener('click', () => request(i + 1))



//SPREAD оператор:

const array = [1, true, 'hello', 56];

console.log(array); // выведет в консоль массив, те: [1, true, 'hello', 56];
console.log(...array); // выведет в консол элементы из массива, те: 1, true, 'hello', 56
