const reviewsInStorage = localStorage.getItem("reviews");

const selectedBookId = JSON.parse(localStorage.getItem("selectedBook")).id;

const reviews = reviewsInStorage ? JSON.parse(reviewsInStorage) : addDefaultReviews();
const reviewsForBook = reviews.find((review) => review.bookId === selectedBookId);

function addDefaultReviews() {
  const defaultReviews = [
    {
      bookId: 0,
      reviews: [
        {
          username: "Anja",
          comment: "Knjiga je odlična!",
        },
        {
          username: "Mihaela",
          comment: "Knjiga je super!",
        },
      ],
    },
    {
      bookId: 1,
      reviews: [
        {
          username: "Anja",
          comment: "Knjiga je oke...",
        },
        {
          username: "Mihaela",
          comment: "Knjiga je loša!",
        },
      ],
    },
    {
      bookId: 2,
      reviews: [
        {
          username: "knjige123",
          comment: "Ovo je knjiga koja vas neće ostaviti ravnodušnima. Njena relevantnost je i danas nevjerojatna, pogotovo u kontekstu rasprava o privatnosti, nadzoru i slobodi govora. Ako još niste, definitivno je vrijeme da je pročitate. Pripremite se za intenzivno iskustvo koje će vas potaknuti na preispitivanje mnogih aspekata modernog društva.",
        },
        {
          username: "kamilica1",
          comment: "Jedno od boljih štiva...",
        },
      ],
    },
    {
      bookId: 3,
      reviews: [
        {
          username: "bookworm_a",
          comment: "Ova knjiga ne samo da oduševljava svojim bogatstvom svijeta i dubokim porukama, već nas i podsjeća na važnost hrabrosti i odlučnosti u suočavanju s izazovima života.",
        },
        {
          username: "user123",
          comment: "zbog ove knjige sam zavolio fantaziju!",
        },
      ],
    },
    {
      bookId: 4,
      reviews: [
        {
          username: "knjige123",
          comment: "Kroz Holdena, Salinger majstorski istražuje teme tuge, identiteta i potrage za smislom, ostavljajući čitatelja duboko pogođenog i introspektivnog. Ova knjiga nije samo portret jednog mladića, već i snažan podsjetnik na nesigurnosti i traume koje može nositi adolescencija, čineći je neizbrisivom i relevantnom za svaku generaciju.",
        },
        {
          username: "user123",
          comment: "nisam preoduševljen, ali se brzo čita",
        },
        {
          username: "komarac3",
          comment: "Jesam li ja jedina osoba koja ne razumije zašto se ova knjiga smatra klasikom, meni je bila dosadna i zamorna, a radnja me nije zaokupila kao mnoge druge knjige?",
        },
      ],
    },
  ];

  localStorage.setItem("reviews", JSON.stringify(defaultReviews));

  return defaultReviews;
}

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
if (loggedInUser) {
  const addReviewDiv = document.getElementById("add-review");
  
  addReviewDiv.innerHTML = `
    <form onSubmit=addReview(event)>
      <textarea id="review" placeholder="Reci nam i ti mišljenje o ovoj knjizi..." required></textarea>
      <button>Dodaj komentar</button>
    </form>
  `;

  function addReview(e) {
    e.preventDefault();
    const comment = document.getElementById("review").value;

    reviewsForBook.reviews.push({ username: loggedInUser.username, comment });
    localStorage.setItem("reviews", JSON.stringify(reviews));
    location.reload();
  }
}

const selectedBook = JSON.parse(localStorage.getItem("selectedBook"));
if (selectedBook) {
  displayBook(selectedBook);
}

function displayBook(book) {
  const bookDetailsDiv = document.getElementById("book-details");
  const { title, author, description, image } = book;
  bookDetailsDiv.innerHTML = `
    <div class="book-image">
      <img src="${image}" alt="Naslov knjige" />
    </div>
    <div class="book-info">
      <h2>${title}</h2>
      <h3>${author}</h3>
      <p>${description}</p>
    </div>
  `;
}

console.log(reviewsForBook.reviews)

reviewsForBook.reviews.forEach((review) => {
  const reviewsDiv = document.getElementById("reviews-container");
  const { username, comment } = review;
  reviewsDiv.innerHTML += `
    <div class="review">
      <h3 class="username">${username}</h3>
      <p class="comment">${comment}</p>
    </div>
  `;
});