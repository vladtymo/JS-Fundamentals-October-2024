//const createBtn = document.querySelector('#createBtn');
const clearBtn = document.querySelector('#clearBtn');

const tBody = document.querySelector('#productTable tbody');
const form = document.forms.creationForm;

const nameIn = form.elements.name;
const priceIn = form.elements.price;
const statusCb = form.elements.status;

class Product {
    static count = 100;

    constructor(name, price, status) {
        this.id = Product.count++;

        this.name = name;
        this.price = price;
        this.status = status;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

// onsubmit - спрацює при нажатті на кнопку submit на формі
form.onsubmit = (e) => {
    e.preventDefault();

    // const item = {
    //     id: 1,
    //     name: nameIn.value,
    //     price: priceIn.value,
    //     status: statusCb.checked
    // };
    const item = new Product(nameIn.value, priceIn.value, statusCb.checked);

    // TODO: add validation

    // add new element to table
    addItemToTable(item);
}
clearBtn.onclick = () => {
    tBody.innerHTML = "";
}

function addItemToTable(item) {
    tBody.innerHTML += `<tr>
                            <td>${item.id}</td>
                            <td>${item.name}</td>
                            <td>${item.price}$</td>
                            <td>${item.statusName}</td>
                        </tr>`;
}