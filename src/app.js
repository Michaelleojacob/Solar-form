import React from 'react';
import MyForm from './components/form/form';
import FileUploads from './components/file-uploader/fileUploads';
import { useState } from 'react';
import MyPagination from './components/pagination/pagination';
import Notes from './components/notes/notes';

const App = () => {
  const [page, setPage] = useState(1);
  const NavigateToPage = (newPage) => setPage(newPage);
  return (
    <div className='app-container'>
      {page === 1 ? (
        <MyForm NavigateToPage={NavigateToPage} />
      ) : (
        <FileUploads NavigateToPage={NavigateToPage} />
      )}
      <MyPagination page={page} />
      <Notes />
    </div>
  );
};

export default App;
