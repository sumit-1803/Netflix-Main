import {Toaster} from 'react-hot-toast';
import Body from './Components/Body';
import MovieDialog from './Components/MovieDialog';
function App() {
  return (
    <div>
      <Body></Body>
      <Toaster></Toaster>
      <MovieDialog></MovieDialog>
    </div>
  );
}

export default App;
