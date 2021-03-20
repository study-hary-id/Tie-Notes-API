import React from 'react';
import PageLayout from '../layouts/PageLayout';

const NotesList = () => {
  return <div>Notes List</div>;
};

const HomePage = () => {
  return (
    <PageLayout>
      <button>Add New Note</button>
      <NotesList />
    </PageLayout>
  );
};

export default HomePage;
