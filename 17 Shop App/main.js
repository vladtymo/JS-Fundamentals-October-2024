const api = "https://dummyjson.com/products";
const cardsList = document.querySelector(".cards");
const loadBtn = document.getElementById('loadBtn');

const pagination = {
    limit: 10,
    skip: 0,
    total: null,
    next() {
        this.skip += this.limit
    }
}

function loadProducts() {
    fetch(api + `?skip=${pagination.skip}&limit=${pagination.limit}`).then(res => res.json()).then(data => {

        pagination.next();

        console.log(data);

        const products = data.products;

        const source = document.getElementById('cardTemplate').innerHTML;
        const template = Handlebars.compile(source);

        for (const i of products) {

            const html = template(i);
            cardsList.innerHTML += html;
        }
    });
}
loadProducts();

loadBtn.onclick = () => {
    loadProducts();
}