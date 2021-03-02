import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import notes from "./reducer";
import NotesList from "./NotesList";

const initialState = {
  notes: [
    { id: 1, name: "complete mathematics assignment", completed: false },
    { id: 2, name: "ready for mid semester examination", completed: false },
  ],
};
const store = createStore(notes, initialState);
function App() {
  return (
    <Provider store={store}>
      <NotesList />
    </Provider>
  );
}

export default App;
