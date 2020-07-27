import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://mail.google.com/mail/u/0?ui=2&ik=48288536da&attid=0.3&permmsgid=msg-f:1670329259887635013&th=172e339cb18b2a45&view=att&disp=safe&realattid=f_kbsgxhaq4" alt="logoviajespaisas" />
        <h1> Información de los integrantes </h1>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Correo electrónico</th>
              <th scope="col">Número de celular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Juan David</td>
              <td>Velásquez Toro</td>
              <td>juandavidvelasqueztoro@gmail.com</td>
              <td>305 7784648</td>
            </tr>
            <tr>
              <td scope="row">Jacobo</td>
              <td>Uribe Domínguez</td>
              <td>jacouribe2003@gmail.com</td>
              <td>305 4332172</td>
            </tr>
            <tr>
              <td scope="row">Luis Alejandro</td>
              <td>Calvo Álvarez</td>
              <td>offztinger@gmail.com</td>
              <td>314 5198712</td>
            </tr>
            <tr>
              <td scope="row">Samuel</td>
              <td>García Correa</td>
              <td>samuelgarcia2206@gmail.com</td>
              <td>313 6066855</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
