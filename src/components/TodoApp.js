import Navbar from './Navbar';
import Header from './Header';
import TodosLogic from './TodosLogic';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
