import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const NotesList = () => {
  return <div>Notes List</div>;
};

const HomePage = () => {
  return (
    <>
      <Header />
      <button>Add New Note</button>
      <NotesList />
      <Footer />
    </>
  );
};

export default HomePage;
