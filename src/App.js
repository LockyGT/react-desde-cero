import React from 'react';
import Curso from './Curso';
import "./styles/styles.scss"

const App = () => (
  <>
  <div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://cdn.pixabay.com/photo/2019/10/05/09/57/landscape-4527526_960_720.jpg" alt="banner"/>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Información</p>
        <p> Hola Mundo</p>
        <a href="https://ed.team" className="button">Abrir</a>
      </div>
    </div>
  </div>
</div>

  <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
  </div>
  
  </>

  
)

export default App;

// Reglas JXS
// 1.- Toda etiqueta debe cerrarse 
// 2.- Los componentes deben devolver un solo elemento padre
// 3.- Apoyarse de los Fragment Cuando necesito debolver 2 elementos
// 4.- Fragment => <> hijos </>
// 5.- img siempre se cierra
// 6.- Class => className
// 7.- for => htmlFor
