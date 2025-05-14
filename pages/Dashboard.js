import ColorPicker from '../components/ColorPicker';
import Counter from '../components/Counter';
import Notes from '../components/Notes';
import TodoList from '../components/TodoList';

export default function Dashboard() {
  return (
    <div>
      <h1>My Productivity Dashboard</h1>
      <Counter />
      <TodoList />
      <ColorPicker />
      <Notes />
    </div>
  );
}
