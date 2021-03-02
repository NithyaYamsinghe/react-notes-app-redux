import React from "react";
import { connect } from "react-redux";
import { toggleNotes } from "./action";
import NoteItem from "./NoteItem";

const NotesList = ({ notes, toggleNotes }) => (
  <>
    <h3>Notes list</h3>
    <ul>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          onClick={() => toggleNotes(note.id)}
          {...note}
        />
      ))}
    </ul>
  </>
);

const mapStateToProps = (state) => ({
  notes: state.notes,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNotes: (id) => dispatch(toggleNotes(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
