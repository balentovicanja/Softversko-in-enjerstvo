document.getElementById("submit").addEventListener("click", function() {
    // Otvori novu stranicu kada se gumb pritisne
    window.location.href = 'successful_login.html';
});

document.getElementById("search").addEventListener("click", function() {
    // Otvori novu stranicu kada se gumb pritisne
    window.location.href = 'logged_users.html';
});


const books = [
    {
        title: 'Knjiga 1',
        author: 'Autor 1',
        description: 'Ovo je kratak opis knjige 1.',
        image: 'slika_knjige1.jpg',
        reviews: [
            {
                username: 'korisnik1',
                comment: 'Odlična knjiga, preporučam!'
            },
            {
                username: 'korisnik2',
                comment: 'Vrlo zanimljiva priča.'
            }
        ]
    },
    {
        title: 'Knjiga 2',
        author: 'Autor 2',
        description: 'Ovo je kratak opis knjige 2.',
        image: 'slika_knjige2.jpg',
        reviews: [
            {
                username: 'korisnik3',
                comment: 'Nije loša, ali očekivao sam više.'
            }
        ]
    }
];

// Function to search for a book
function searchBook(title, author) {
    return books.find(book => book.title === title && book.author === author);
}

// Function to display book details and reviews
function displayBook(book) {
    const bookImage = document.querySelector('.book-image img');
    const bookInfo = document.querySelector('.book-info');
    const reviewsContainer = document.getElementById('reviews-container');
    
    bookImage.src = book.image;
    bookImage.alt = book.title;
    
    bookInfo.innerHTML = `
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <p>${book.description}</p>
    `;
    
    reviewsContainer.innerHTML = '';
    book.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        
        const usernameElement = document.createElement('p');
        usernameElement.className = 'username';
        usernameElement.textContent = review.username;
        
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<p>${review.comment}</p>`;
        
        reviewElement.appendChild(usernameElement);
        reviewElement.appendChild(commentElement);
        reviewsContainer.appendChild(reviewElement);
    });
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', function() {
    const title = document.getElementById('search-bar').value;
    const author = prompt("Unesite ime autora:");

    const book = searchBook(title, author);
    if (book) {
        displayBook(book);
    } else {
        alert('Knjiga nije pronađena.');
    }
});

// Event listener for adding a new review
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const comment = document.getElementById('comment').value;
    const currentBookTitle = document.querySelector('.book-info h2').textContent;
    const currentBookAuthor = document.querySelector('.book-info h3').textContent;
    const currentBook = searchBook(currentBookTitle, currentBookAuthor);
    
    if (comment && loggedInUser) {
        currentBook.reviews.push({
            username: loggedInUser,
            comment: comment
        });
        displayBook(currentBook);
        document.getElementById('review-form').reset();
    } else {
        alert('Morate biti prijavljeni kako biste dodali recenziju.');
    }
});

// Initial render of reviews if a book is already selected (for demo purposes)
if (books.length > 0) {
    displayBook(books[0]);
}
