import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import EditNoteForm from '../components/EditNoteForm';

const EditPage = () => (
  <PageLayout>
    <Container>
      <div>
        <h4>
          <Link to="/">Home</Link> / Edit{' '}
        </h4>
      </div>
      <h2>Edit Note</h2>
      <EditNoteForm />
    </Container>
  </PageLayout>
);

export default EditPage;
