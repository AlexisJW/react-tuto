import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../routes/Home';
import About from '../routes/About';
import NotMatch from '../routes/NotMatch';

const TodoApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);
export default TodoApp;
