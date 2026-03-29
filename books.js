function renderBooks(filter){
    const booksWrapper = document.querySelector('.books');

    const books = getBooks();

    if(filter === 'LOW_TO_HIGH'){
        books.sort((a, b) => a.salePrice - b.salePrice)
    } else if(filter === 'HIGH_TO_LOW'){
        books.sort((a, b) => b.salePrice - a.salePrice)
    } else if(filter === 'RATING'){
        books.sort((a, b) => b.rating - a.rating)
    }

    const booksHtml = books.map((book) => {
    return `<div class="book">
        <figure>
            <img class="book__image" src="${book.url}" alt="${book.title}">
        </figure>
        <div class="book__title">
            ${book.title}
        </div>
        <div class="book__ratings">
            ${ratingsHTML(book.rating)}
        </div>
        </div>
        <div class="book__price">
            <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span>$${book.salePrice.toFixed(2)}
        </div>
    </div>`
    }).join('')
    booksWrapper.innerHTML =  booksHtml
}

function filterBooks(event){
    renderBooks(event.target.value)
}

function ratingsHTML (rating){
    let ratingHtml = '';
    for (let i = 0; i < Math.floor(rating); ++i){
        ratingHtml += '<i class="fas fa-star"></i>'
    }
    if (!Number.isInteger(rating)){
        ratingHtml += '<i class="fas fa-star-half-alt"></i>'
    }
    return ratingHtml;
}

setTimeout(() => {
    renderBooks();
})

function getBooks(){
    return [
        {
            id: 1,
            title: 'Theo of Golden: A Novel',
            url: './assets/Theo-of-Golden.jpeg',
            originalPrice: 20.00,
            salePrice: 14.99,
            rating: 4.5
        },
        {
            id: 2,
            title: 'The Vanishing Cherry Blossom Bookshop',
            url: './assets/The-Vanishing-Cherry-Blossom-Bookshop.jpeg',
            originalPrice: 12.99,
            salePrice: 9.99,
            rating: 4
        },
        {
            id: 3,
            title: 'Project Hail Mary: A Novel',
            url: './assets/Project-Hail-Mary.jpeg',
            originalPrice: 22.00,
            salePrice: 18.99,
            rating: 4.5
        },
        {
            id: 4,
            title: 'Heated Rivalry',
            url: './assets/Heated-Rivalry.jpeg',
            originalPrice: 18.99,
            salePrice: 16.99,
            rating: 4.5
        },
        {
            id: 5,
            title: 'The Correspondent: A Novel',
            url: './assets/The-Correspondent.jpeg',
            originalPrice: 28.00,
            salePrice: 25.00,
            rating: 4.5
        },
        {
            id: 6,
            title: 'Wuthering Heights',
            url: './assets/Wuthering-Heights.jpeg',
            originalPrice: 9.00,
            salePrice: 6.99,
            rating: 4
        },
        {
            id: 7,
            title: 'The Let Them Theory',
            url: './assets/The-Let-Them-Theory.jfif',
            originalPrice: 29.99,
            salePrice: 24.99,
            rating: 3
        },
        {
            id: 8,
            title: 'The Golden Boy',
            url: './assets/The-Golden-Boy.jpeg',
            originalPrice: 29.00,
            salePrice: 16.00,
            rating: 4.5
        },
        {
            id: 9,
            title: 'Vigil: A Novel',
            url: './assets/vigil.jpeg',
            originalPrice: 28.00,
            salePrice: 25.00,
            rating: 4
        },
        {
            id: 10,
            title: 'The Unlikely Tale of Chase & Finnegan',
            url: './assets/The-Unlikely-Tale-of-Chase&Finnegan.jpeg',
            originalPrice: 18.99,
            salePrice: 15.99,
            rating: 4.5
        },
        {
            id: 11,
            title: 'The Best Dog in the World',
            url: './assets/The-Best-Dog-in-the-World.jpeg',
            originalPrice: 22.00,
            salePrice: 18.00,
            rating: 5
        },
        {
            id: 12,
            title: 'Once and Again: A Novel',
            url: './assets/Once-and-Again.jpeg',
            originalPrice: 27.00,
            salePrice: 24.00,
            rating: 3.5
        },
        {
            id: 13,
            title: 'My Husband’s Wife: A Novel',
            url: './assets/My-Husband\'s-Wife.jpeg',
            originalPrice: 28.99,
            salePrice: 25.99,
            rating: 4
        },
        {
            id: 14,
            title: 'Operation Bounce House',
            url: './assets/Operation-Bounce-House.jpeg',
            originalPrice: 32.00,
            salePrice: 29.00,
            rating: 4.5
        },
        {
            id: 15,
            title: 'The Crossroads',
            url: './assets/The-Crossroads.jpeg',
            originalPrice: 32.00,
            salePrice: 22.40,
            rating: 5
        },
    ]
}