import React, { useEffect, useState } from 'react';
import { getCharacter } from 'rickmortyapi';
import { Link } from 'react-router-dom';

function Home() {
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const char = await getCharacter();
      setCharData(char.results);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Client Side Rendering</h1>
        <Link to="/about">
          <h3>go to another page</h3>
        </Link>
      </div>

      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {charData.map(char => (
          <div key={char.id} style={{ margin: '25px' }}>
            <h4>{char.name}</h4>
            <img src={char.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
