import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Initial from './pages/Initial';
import Welcome from './pages/Welcome';
import Layout from './components/Layout';
import TutorialLayout from './pages/TutorialLayout';
import ReceiveGift from './pages/ReceiveGift';
import Home from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout />}>
        <Route index element={<Initial />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/tutorial" element={<TutorialLayout />} />
        <Route path="/receive-gift" element={<ReceiveGift />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
