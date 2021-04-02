/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 30vw;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  border: 2px solid #a0aec0;
  border-radius: 5px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0.5rem;
`;

const NotesList = () => {
  const existing = localStorage.getItem('notes');

  const notes = existing ? JSON.parse(existing) : [];

  const listItem = notes.map((note) => (
    <ListItem key={note.id}>
      <h4>
        <Link to={`/edit/${note.id}`}>{note.title}</Link>
      </h4>
    </ListItem>
  ));

  return (
    <NotesListContainer>
      <List>{listItem}</List>
    </NotesListContainer>
  );
};

export default NotesList;
