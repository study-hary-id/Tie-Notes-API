import React from 'react';
import PageLayout from '../layouts/PageLayout';

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
    <PageLayout>
      <h1>Edit Note</h1>
      <EditNoteForm />
    </PageLayout>
  );
};

export default EditPage;
