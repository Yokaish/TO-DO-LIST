import { excluirItem } from './excluir.js';
import { returnTime } from './returnTime.js';

let allItems = [];

let toDoItems = [];

let doneItems = [];

const item = document.getElementById('input-item');
const errorMessage = document.getElementById('error');

const toDoList = document.getElementById('to-do-list');

const doneList = document.getElementById('done-list');
const toDoInitialMsg = document.getElementById('initial-to-do-msg');
const doneInitialMsg = document.getElementById('initial-done-msg');

let contador = 0;

export function addItem(event) {
    event.preventDefault();

    // Verifica se o valor do input já está no array
    if (allItems.includes(item.value)) {
        errorMessage.innerText = 'This task already exists.';
    } else {
        // Adiciona o item ao array se não existir
        allItems.push(item.value);
        toDoItems.push(item.value);
        errorMessage.innerText = ''; // Limpa a mensagem de erro
        toDoInitialMsg.innerText = '';
        
    const listItem = document.createElement('li');
    const containerListItem = document.createElement('div');
    containerListItem.classList.add('item-list-container');

    const containerItemName = document.createElement('div');

    const containerCheckbox = document.createElement('div');
    containerCheckbox.classList.add('checkbox-container');

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input');
    checkboxInput.id = 'checkbox-' + contador++;
    
    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', checkboxInput.id);

    checkboxLabel.addEventListener('click', function(event) {
        const checkboxInput = event.currentTarget.querySelector('.checkbox-input');
        const checkboxCustom = event.currentTarget.querySelector('.checkbox-custom');
        const itemTitle = event.currentTarget.closest('li').querySelector('#item-title');

        if (checkboxInput.checked) {
            checkboxCustom.classList.add('checked');
            doneList.appendChild(listItem);
            doneInitialMsg.style.display = 'none';
            toDoItems.pop(item.value);
            doneItems.push(item.value);
            itemData.innerText = returnTime('Checked');
            if (toDoItems == '') {
                toDoInitialMsg.innerText = '-----------------';
            }

        } else {
            checkboxCustom.classList.remove('checked');
            itemTitle.style.textDecoration = 'none';
            toDoList.appendChild(listItem);
            doneInitialMsg.style.display = 'block';
            toDoInitialMsg.innerText = '';
            itemData.innerText = returnTime('Unchecked');
            if (doneItems == '') {
                doneInitialMsg.innerText = '-----------------';
            }
        }
    })

    const checkboxCustom = document.createElement('div');
    checkboxCustom.classList.add('checkbox-custom');

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustom);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemName.appendChild(containerCheckbox);

    const itemName = document.createElement('p');
    itemName.id = 'item-title';
    itemName.innerText = item.value;
    containerItemName.appendChild(itemName);

    const containerButtons = document.createElement('div');
    containerButtons.classList.add('button-container');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('edit-del-btn');
    const removeImg = document.createElement('img');
    removeImg.src = 'img/delete.svg';
    removeImg.alt = 'remover';
    removeBtn.appendChild(removeImg);
    containerButtons.appendChild(removeBtn);

    removeBtn.addEventListener('click',  function() {
        excluirItem(listItem);
        allItems.pop(listItem);
        if (doneItems == '') {
            doneInitialMsg.innerText = '-----------------';
        } else if (toDoItems == '') {
            toDoInitialMsg.innerText = '-----------------';
        }
    })

    containerListItem.appendChild(containerItemName);
    containerListItem.appendChild(containerButtons);
    containerItemName.classList.add('container-to-do-name');

    const itemData = document.createElement("p");
    itemData.innerText = returnTime('');
    itemData.classList.add("item-data");

    
    listItem.appendChild(containerListItem);
    toDoList.appendChild(listItem);
    listItem.appendChild(itemData);
}     

}