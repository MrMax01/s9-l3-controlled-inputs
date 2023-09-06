import Card from "react-bootstrap/Card";

const SingleBook = (prop) => {
  //   console.log(prop);
  return (
    <Card>
      <Card.Img variant="top" src={prop.book.img} className=" w-100 object-fit-cover" />
      <Card.Body>
        <Card.Title>{prop.book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
