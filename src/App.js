import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from '../src/Routes/Routes'
import { Toaster } from 'react-hot-toast';


function App() {
  // hello
  return (
    <div className="max-w-[1440px] mx-auto">
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  );
}

export default App;
