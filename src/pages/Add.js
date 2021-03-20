import React from 'react';
import PageLayout from '../layouts/PageLayout';

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
    <PageLayout>
      <h1>Add New Note</h1>
      <AddNoteForm />
    </PageLayout>
  );
};

export default AddPage;
