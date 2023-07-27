function saveToLocalStorage(event) 
{
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        amount,
        description,
        category
    };
    const obj_stringify = JSON.stringify(obj)
    console.log(obj.stringify);
    localStorage.setItem(obj.description, obj_stringify);


showUserOnScreen(obj);
}

function showUserOnScreen(obj){
    const parentEle = document.getElementById('listofitems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.amount + '-' + obj.description + '-' + obj.category;

    const deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.value = "Delete Expense";
    deleteButton.onclick = () => {
       localStorage.removeItem(obj.description);
       parentEle.removeChild(childEle);
    }
    const editButton = document.createElement('input')
    editButton.type = "button";
    editButton.value = "Edit Expense";
    editButton.onclick = () => {
        document.getElementById('amount').value = obj.amount;
        document.getElementById('description').value = obj.description;
        document.getElementById('category').value = obj.category;
        console.log(localStorage.removeItem(obj.description));
        parentEle.removeChild(childEle);
    }
    childEle.appendChild(editButton);
    childEle.appendChild(deleteButton);
    parentEle.appendChild(childEle);

    
}


