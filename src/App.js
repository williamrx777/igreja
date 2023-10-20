import React, { useState, useEffect } from 'react';

function App() {
  const [cultos, setCultos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Faça a chamada à API para obter os cultos
    fetch('https://comunidade-rompendo-em-fe.onrender.com/igreja')
      .then((response) => response.json())
      .then((data) => {
        // Assumindo que a API retorna um array de objetos com os atributos id, culto e dataAtual
        setCultos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar os cultos da API:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (


    <div >

    <div className='container_header'>
    <img className="logo" src="https://scontent.fsdu22-1.fna.fbcdn.net/v/t39.30808-6/348425284_1391076438397536_1286792823399688757_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGac9vzx6C6kp2dTsmcQhX_ZhHOrzCxYnRmEc6vMLFidGYZ-fNGHXcBYo3aEqINVuHH2XPtfOOA5OiyVoZeYRaa&_nc_ohc=trAlwV36RagAX9cboOD&_nc_ht=scontent.fsdu22-1.fna&oh=00_AfCcPwoxY59kqEEJ3HLmc_COuJDsHmPsPau_JsWjb9Hz1A&oe=6537A690" />

    <p className="capitulo">Comunidade Cristã Rompendo Em Fé.</p>

    <nav class="items">
    <a href="#">Home</a>
    <a href="#">Testemunho</a>

    </nav>
    </div>

    <div class="container_main">

      <p class="programation">Cultos</p>
      <p class="programation"> Terça </p>
      <p class="horario">19:30h</p>
      <p class="programation">Sexta</p>
      <p class="horario">19:30h</p>
      <p class="programation"> Domingo </p>
      <p class="horario">18:00h</p>
    </div>

     <div className='container_aside'>
      <ul>
        {cultos.map((culto) => (
          <li key={culto.id}>
            <h2>{culto.id}</h2>
            {culto.culto && (
              <iframe
              title={`Culto ${culto.id}`}
              src={culto.culto}
              width="800"
              height="600"
              frameBorder="0"
              allowFullScreen
              ></iframe>
              )}
              <p className='dataAtual'>Data: {culto.dataAtual}</p>
          </li>
        ))}
      </ul>
     </div>

     <div className="container_footer">
      <p className="contato">E-mail: ccrfni.rompendoemfe@gmail.com</p>
      <p className='contato'>Endereço: Travessa Mineira, 21, Nova Iguaçu, RJ, Brazil</p>
      <a href="https://www.facebook.com/ccrfni.rompendoemfe">
        <img className="face" src="https://www.gov.br/mre/pt-br/delbrasupa/facebook-logo-blue-circle-large-transparent-png.png" />
      
      </a>
    </div>

    </div>
    
  );
}

export default App;
