import React, { useEffect, useState } from 'react';
import { getCharacter } from 'rickmortyapi';
import { Link } from 'react-router-dom';

function Home() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const char = await getCharacter([1, 2, 3, 5]);
      setCharData(char);
    }
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'aquamarine' }}>
      <div style={{ textAlign: 'center', paddingTop: '15px' }}>
        <h1
          style={{
            fontSize: '45px',
            backgroundColor: 'lightskyblue',
            padding: '10px'
          }}
        >
          Client Side Rendering
        </h1>
        <Link to="/about">
          <h3>go to another page</h3>
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          height: '100vh'
        }}
      >
        {charData.map(char => (
          <div key={char.id} style={{ margin: '25px' }}>
            <h2>
              {char.name} - {char.species}
            </h2>
            <img src={char.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
