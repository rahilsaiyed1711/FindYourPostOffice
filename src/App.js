import React, { useState } from 'react';
import './App.css';
import ResultTable from './components/ResultTable';

const App = () => {
  const [postalCode, setPostalCode] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${postalCode}`);
      const result = await response.json();

      if (result[0].Status === 'Success') {
        setData(result[0].PostOffice);
      } else {
        setError('Please enter a valid postal code');
        setData(null);
      }
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <nav className="nav">
        <p>Find all PostOffices Under Pincode</p>
      </nav>
      <section className="mainSec">
        <div className="form1">
          <h2 className="fh2">Enter Your PostalCode Here To find all areas :</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="number"
                name="postalcode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </label>
            <button className="btn" type="submit">Submit</button>
            {loading && <p style={{ color: 'red', marginLeft: '10px' }}>*Data Fetching...</p>}
          </form>
        </div>
        {data && <ResultTable data={data} />}
        {error && <div className="info" style={{ color: 'red' }}>{error}</div>}
      </section>
    </div>
  );
};

export default App;
