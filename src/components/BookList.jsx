import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import books from "../data/fantasy.json";

class BookList extends Component {
  render() {
    console.log("dai su");
    return (
      <Container>
        <Row sm={2} md={3} lg={4}>
          {books.map((book) => (
            <div className="col mb-3" key={book.asin}>
              <SingleBook book={book} />
            </div>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
