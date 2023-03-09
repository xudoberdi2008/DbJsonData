
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Myimg from './1.png'
import Myimg2 from './2.png'
import Myimg3 from './3.jpg'

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
      <div className="Mycontainer">
        <div className="container ">
          <div className="row">
            <div className="col">
              <h1 className="card-title Myh1 mt-1"><b>Fresh Healthy</b><br /> Delicious Foods</h1>
              <p>We Made Fresh and Healthy Foods...</p>
              <img style={{ width: '60%' }} src={Myimg2} alt="" />
            </div>
            <div className="col">
            <img style={{ width: '90%' }} src={Myimg3} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
