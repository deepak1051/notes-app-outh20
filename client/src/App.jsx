import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Notes from './components/Notes';

import New from './components/New';
import EditNote from './components/EditNote';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { authContext } from './context/authContext';
import Homepage from './components/Homepage';

function App() {
  const { setUser } = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/current_user');

        console.log(data);
        setUser(data || false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="new" element={<New />} />
        <Route path="edit/:noteId" element={<EditNote />} />
      </Route>
    </Routes>
  );
}

export default App;
