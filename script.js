// Sample data.
const products = [
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },// Add more products as needed
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
    { name: 'Smartphone', price: 499.99, image: 'smartphone.jpg' },
    { name: 'Laptop', price: 899.99, image: 'laptop.jpg' },
];

// Display products on the page
const productsContainer = document.getElementById('products');

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <a href="#" class="button">Add to Cart</a>
    `;

    productsContainer.appendChild(productElement);
});