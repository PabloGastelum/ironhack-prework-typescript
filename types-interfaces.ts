type Person = {
  name: string;
  age: number;
  email: string;
};

interface Book {
  title: string;
  author: string;
  pages: number;
}

const person: Person = {
  age: 25,
  email: "jose.gastelum@digitalfemsa.com",
  name: "José Pablo Gastelum Muñoz",
};

const books: Book[] = [
  {
    author: "José Ortiz",
    pages: 10,
    title: "Aventuras de José Ortiz",
  },
  {
    author: "José Montaño",
    pages: 13,
    title: "Aventuras de José Montaño",
  },
  {
    author: "José Gastelum",
    pages: 10,
    title: "Aventuras de José Gastelum",
  },
];

function displayBookInfo(book: Book) {
  const { author, pages, title } = book;
  console.log(`Title: ${title}, Author ${author}, pages: ${pages} `);
}

books.forEach(displayBookInfo);
