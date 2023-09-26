import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import home from "~/styles/home.css"
import Form from 'react-bootstrap/Form';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: home },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Home"
});

export default function Index() {
  return (

    <body className="backgroundTelaLoginCad">

      <h1>Futura tela de Login?</h1>
      <p>Usando Modal?</p>
      <div className="modal show" style={{ display: "block", position: "initial" }}>
        <Modal.Dialog size="lg">
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="nome@exemplo.com" autoFocus />
              </Form.Group>
              <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Voltar</Button>
            <Button variant="primary">Entrar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>

    </body>

  );
}
