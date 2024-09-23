const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


const livres = books.map(book => `${book.title}`);
console.log("Liste des nlivres :", livres);


const allRented = books.every(book => book.rented > 0);
console.log("Tous les livres ont été empruntés au moins une fois ?", allRented ? "Oui" : "Non");


const mostRentedBook = books.reduce((prev, current) => (current.rented > prev.rented) ? current : prev);
console.log("Le livre le plus emprunté est :", mostRentedBook.title, " avec", mostRentedBook.rented, "emprunts.");


const leastRentedBook = books.reduce((prev, current) => (current.rented < prev.rented) ? current : prev);
console.log("Le livre le moins emprunté est :", leastRentedBook.title, " avec", leastRentedBook.rented, "emprunts.");


const updatedBooks = books.filter(book => book.id !== 133712);
console.log(`Liste des livres après suppression de '${books.find(book => book.id === 133712).title}' :`, updatedBooks);