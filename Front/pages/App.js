import React, { useState } from 'react';
import Adin from './components/Adin';
import Dva from './components/Dva';
import Carcas from './components/carcas';
import Crisha from './components/Crisha';
import Fundament from './components/fundament';

const App = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div>
      {page === 1 && <Adin setPage={handlePageChange} />}
      {page === 2 && <Dva setPage={handlePageChange} />}
      {page === 3 && <Fundament setPage={handlePageChange} />}
      {page === 4 && <Carcas setPage={handlePageChange} />}
      {page === 5 && <Crisha setPage={handlePageChange} />}
    </div>
  );
};

export default App;
