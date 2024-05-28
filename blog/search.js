const books = [
  {
    title: "Slika Doriana Graya",
    author: "Oscar Wilde",
    description: "Intelektualno nadmoćan, provokativan, samodopadan, ekstravagantan, bez moralnih i umjetničkih predrasuda, Wilde je djelom i ponašanjem rušio zastarjele kanone i konvencije svoga »predmedijskog« doba trasirajući teren za medijske istupe spomenutih i brojnih drugih pop idola današnjice. Kao deklarirani hedonist i estet, opsesivno opsjednut ljepotom i mladošću, Wilde dolazi na sebi svojstvenu zamisao: ostati vječno mlad, a sav teret vremena prebaciti na svoj uramljeni portret!",
    image: "assets/dorian_gray.jpg",
    id: 0,
  },
  {
    title: "Preobrazba",
    author: "Franz Kafka",
    description: "Gregor Samsa, marljivi, ali pasivni, trgovački putnik se nakon nemirne noći budi u svojoj malenoj sobi i spoznaje kako je postao kukac. Iako se pretvorio u životinju, Samsa nije isprva previše zabrinut te biva okupiran činjenicom da je prespavao budilicu te da je time zakasnio na prvi vlak. Odluči otići sljedećim prvim vlakom, no ubrzo ustanovi kako ustajanje nije baš toliko lagano kao što je i zamislio.",
    image: "assets/preobrazba.jpg",
    id: 1,
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "1984 je distopijski roman koji opisuje totalitarno društvo u kojem su građani pod stalnim nadzorom Velikog Brata. Glavni lik, Winston Smith, radi za Ministarstvo istine gdje mijenja povijesne zapise kako bi odgovarali propagandi stranke. Kroz radnju knjige, Winston se počinje pobuniti protiv sustava, ali se suočava s teškim posljedicama.",
    image: "assets/orwell.jpg",
    id: 2,
  },
  {
    title: "Hobit",
    author: "J.R.R. Tolkien",
    description: "Roman koji prati avanture Bilba Bagginsa, mirnog hobita iz Shirea. Bilbov spokojan život se mijenja kada ga čarobnjak Gandalf i grupa patuljaka regrutiraju za opasno putovanje. Cilj njihove misije je povratiti izgubljeno kraljevstvo patuljaka i njihovo blago koje čuva zmaj Smaug. Tokom puta, Bilbo se suočava s raznim opasnostima i otkriva hrabrost i domišljatost koje nije znao da posjeduje.",
    image: "assets/hobit.jpg",
    id: 3,
  },
  {
    title: "Lovac u žitu",
    author: "J.D. Salinger",
    description: "Roman prati nekoliko dana u životu Holdena Caulfielda, tinejdžera iz New Yorka koji se osjeća otuđeno i izgubljeno. Nakon što biva izbačen iz prestižne škole, Holden luta gradom, susrećući se s raznim ljudima i suočavajući se s vlastitim osjećajem nesigurnosti i usamljenosti. Njegove misli i reakcije otkrivaju duboku tugu i zbunjenost zbog svijeta odraslih, koji smatra licemjernim i lažnim.",
    image: "assets/lovac.jpg",
    id: 4,
  }
];

const searchButton = document.getElementById("search-button");
if (searchButton) {
  searchButton.addEventListener("click", function () {
    findBook();
  });
}

function findBook() {
  const bookName = document.getElementById("search-bar").value;
  if (!bookName) {
    alert("Unesite ime knjige.");
    return;
  }
  const book = books.find((book) => book.title.toLowerCase() === bookName.toLowerCase());

  if (book) {
    localStorage.setItem("selectedBook", JSON.stringify(book));
    window.location.href = "book.html";
  } else {
    alert("Knjiga nije pronađena.");
  }
}
