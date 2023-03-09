
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Myimg from './1.png'
import Myimg2 from './2.png'
import Myimg3 from './3.jpg'
import Myimg4 from './4.png'

function App() {

  // console.log();

  return (

    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-2 mt-5">
          <div className="col-6 mt-5">
            <div className="card Mycard mt-5">
              <div className="card-body mt-5">
                <h1 className="card-title Myh1 mt-1"><b>Eat Healthy And</b><br />  Natural Food</h1>
                <p className='mt-1'>It is a long established fact that a reader will be distracted by the<br /> readable content of a page when looking at its layout the<br />  generated Lorem Ipsum is therefore always free from repetition.</p>
                <button type="button" class="btn btn-success mt-1">Discover Food</button>
              </div>
            </div>
          </div>
          <div className="col mt-5">
            <div className="card Mycard mt-5">
              <div className="card-body mt-5">
                <img style={{ width: '90%' }} src={Myimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Mycontainer"><br />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="card-title Myh1 mt-1"><b>Fresh Healthy</b><br /> Delicious Foods</h1>
              <p>We Made Fresh and Healthy Foods...</p>
              <img style={{ width: '80%' }} src={Myimg2}/>
            </div>
            <div className="col">
            <img style={{ width: '90%' }} src={Myimg3}/>
            </div>
          </div>
        </div>
      </div><br />
      <div className=""><br />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-2 ">
            <div className="col">
              <h1 className="card-title Myh1 mt-1"><b>Type of Ingridiants in </b><br />Nutrition Diet</h1>
              <p><b>Good food ends with good talk...</b></p>
              <p className='text-secondary'>It is a long established fact that a reader will be distracted by the <br /> readable content of a page when looking at its layout the <br /> generated Lorem Ipsum is therefore always free from repetition.</p>
              <p className='text-secondary'>It was popularised in the 1960s with the release of Letraset sheets <br /> containing Lorem Ipsum passages...</p>

            </div>
            <div className="col">
            <img style={{ width: '100%' }} src={Myimg4}/>
            </div>
          </div>
        </div>
      </div>
      <div className="Mycontainer"><br />
        <div className="container">
          
        </div>
      </div><br />

    </div>
  );
}

export default App;
