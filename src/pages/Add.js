import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Header';

const AddNoteForm = () => {
  return (
    <>
      <form>
        <label>
          Title :
          <input type="text" name="title" />
        </label>
        <label>
          Note :
          <textarea name="note" />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

const AddPage = () => {
  return (
    <>
      <Header />
      <h1>Add New Note</h1>
      <AddNoteForm />
      <Footer />
    </>
  );
};

export default AddPage;
