import UserInput from "./components/UserInput";
import TaskState from './context/TaskState';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import PreviewPage from "./components/PreviewPage";

function App() {
  return (
    <div>
      <TaskState>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserInput/>} />
            <Route path="/previewPage" element={ <PreviewPage/> } />

          </Routes>
        </BrowserRouter>
          
      </TaskState>
    
    </div>
  );
}

export default App;
