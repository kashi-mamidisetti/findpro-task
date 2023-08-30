import React from "react";
import { Link } from "react-router-dom";

let data = [
  {
    id: 1,
    name: "The Great Adventure",
    author: "John Smith",
    pages: 320,
    price: 25.99,
    description: "A thrilling journey through uncharted lands.",
    publish_year: 2020,
    image: "./images/book1.jpg",
  },
  {
    id: 2,
    name: "Mystery at Midnight",
    author: "Jane Doe",
    pages: 240,
    price: 19.99,
    description: "A gripping mystery that unfolds under the moonlight.",
    publish_year: 2018,
    image: "./images/book2.jpg",
  },
  {
    id: 3,
    name: "Fantasy Realms",
    author: "Robert Johnson",
    pages: 400,
    price: 29.99,
    description: "Immerse yourself in a world of magic and wonder.",
    publish_year: 2022,
    image: "./images/book3.jpg",
  },
  {
    id: 4,
    name: "Science Unleashed",
    author: "Emily White",
    pages: 280,
    price: 22.5,
    description: "Discover the marvels of modern science.",
    publish_year: 2019,
    image: "book4.jpg",
  },
  {
    id: 5,
    name: "Love in Paris",
    author: "Michael Brown",
    pages: 180,
    price: 15.99,
    description: "A romantic tale set against the backdrop of Paris.",
    publish_year: 2017,
    image: "book5.jpg",
  },
  {
    id: 6,
    name: "Historical Echoes",
    author: "Sarah Green",
    pages: 350,
    price: 27.75,
    description: "Journey through the annals of history.",
    publish_year: 2021,
    image: "book6.jpg",
  },
  {
    id: 7,
    name: "Thrills and Chills",
    author: "David Black",
    pages: 290,
    price: 24.0,
    description: "Prepare for a rollercoaster of emotions.",
    publish_year: 2023,
    image: "book7.jpg",
  },
  {
    id: 8,
    name: "Cooking Adventures",
    author: "Amy Miller",
    pages: 210,
    price: 18.5,
    description: "Embark on a culinary journey like no other.",
    publish_year: 2020,
    image: "book8.jpg",
  },
  {
    id: 9,
    name: "Mindfulness Matters",
    author: "Thomas Lee",
    pages: 150,
    price: 12.99,
    description: "Find peace and serenity through mindfulness.",
    publish_year: 2016,
    image: "book9.jpg",
  },
  {
    id: 10,
    name: "Space Odyssey",
    author: "Karen Johnson",
    pages: 430,
    price: 31.25,
    description: "Embark on a journey through the cosmos.",
    publish_year: 2022,
    image: "book10.jpg",
  },
];

const AllBookPageContainer = () => {
  const [books, setBooks] = React.useState(data);
  const [book, setBook] = React.useState({
    name: "",
    author: "",
    pages: null,
    price: null,
    description: "",
    publish_year: null,
    image: "",
  });
  const [isAdd, setIsAdd] = React.useState(false);

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setBooks((preBooks) => [...preBooks, { ...book, id: preBooks.length + 1 }]);
    setIsAdd(false);
    setBook({
      name: "",
      author: "",
      pages: 0,
      price: 0,
      description: "",
      publish_year: 0,
      image: "",
    });
  };

  return (
    <div>
      <h1>All Books</h1>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddBook"
        data-bs-whatever="@AddBook"
      >
        Add Book
      </button>
      <div
        class="modal fade"
        id="AddBook"
        tabindex="-1"
        aria-labelledby="AddBook"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4>Add Book</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    {Object.entries(book).map(([name, value], i) => {
                      return (
                        <div className="mb-3" key={i}>
                          <input
                            type={typeof value === "string" ? "text" : "number"}
                            className="form-control"
                            id={name}
                            name={name}
                            value={book[name]}
                            placeholder={`Please Enter ${name}`}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                      );
                    })}
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Price</th>
            <th>Description</th>
            <th>Publish year</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.pages}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.publish_year}</td>
                <td>{item.image}</td>
                <td>
                  <Link to={`/book/${item.id}`} state={item}>
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookPageContainer;
