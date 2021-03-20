import React from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

const EditNoteForm = () => {
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
        <button type="submit">Save</button>
        <button>Delete</button>
      </form>
    </>
  );
};

const EditPage = () => {
  return (
    <>
      <Header />
      <h1>Edit Note</h1>
      <EditNoteForm />
      <Footer />
    </>
  );
};

export default EditPage;
