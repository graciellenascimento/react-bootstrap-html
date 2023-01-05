import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="imagem">
        <img src="https://img.freepik.com/free-photo/hacker-man-laptop_144627-25488.jpg" />
      </div>
      <div className="formulario">
        <h1>Login</h1>
        <form>
          <label for="email">E-mail:</label>
          <input id="email" type="text" name="email" />
          <label for="senha">Senha:</label>
          <input id="senha" type="text" name="senha" />
          <input className="botao" type="submit" value="Acessar" />
        </form>
      </div>
    </div>
  );
}

export default App;
