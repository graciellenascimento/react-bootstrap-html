import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Image
            src=
            "https://img.freepik.com/free-photo/hacker-man-laptop_144627-25488.jpg"
          />
        </Col>
        <Col className="colFormulario">
          <Form className="formulario">
          <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button className="botao" variant="primary" type="submit">
              Acessar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
