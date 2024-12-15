function Titulo() {
  const mundo = "Zamasu";
  if (mundo) {
    return <h1>Hola {mundo}, eres bienvenido</h1>;
  }
  return <h1>Hola, eres bienvenido</h1>;
}

export default Titulo;
