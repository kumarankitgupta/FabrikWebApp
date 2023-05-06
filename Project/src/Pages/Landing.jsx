import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import Navbar from './Navbar';
import LoadingCube from './LoadingCube';
import axios from 'axios';
import './land.css'
function Landing() {
  const [arr, setArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://13.232.17.133:3001/getdata')
      .then(response => {
        setArr(response.data);
      });
  }, []);

  const filteredArr = arr.filter(val =>
    val.Model_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className='container' style={{ marginTop: '80px' }}>
        <div className='row justify-content-center mb-4'>
          <div className='col-md-6'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search by model name'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <div className='input-group-append'>
                <button className='btn btn-primary' type='button'>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='row center parent-element flex-left'>
          {filteredArr.length === 0 ? (
            <LoadingCube />
          ) : (
            filteredArr.map((val, index) => (
              <Cards
                key={index}
                img={val.ThumbNail_Name}
                model_name={val.Model_name}
                creator_name={val.Creator_Name}
                date={val.dateCreated}
                id={val._id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Landing;
