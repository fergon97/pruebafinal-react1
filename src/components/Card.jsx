import Card from "react-bootstrap/Card";

function Cards({ people }) {
  return (
    <>
      {people.map((p) => {
        return (
          <Card style={{ width: "18rem" }} key={p.id}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="tarjeta">
              <Card.Title className="titulo">{p.name}</Card.Title>
              <Card.Text className="item">Altura: </Card.Text>
              <p>{p.height}</p>
              <Card.Text className="item">Color de pelo: </Card.Text>
              <p>{p.hair_color}</p>
              <Card.Text className="item">Color de los ojos: </Card.Text>
              <p>{p.eye_color}</p>
              <Card.Text className="item">Nacimiento: </Card.Text>
              <p>{p.date_of_birth}</p>
              <Card.Text className="item">Muerte: </Card.Text>
              <p>{p.date_of_death}</p>
              <Card.Text className="item">Armas: </Card.Text>
              <p>{p.weapons}</p>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Cards;
