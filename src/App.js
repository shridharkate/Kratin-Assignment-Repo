
import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarpage from './components/Navbarpage';
import Slider from './components/Slider';
import Content from './components/content ';
function App() {
  return (
   <>
   <div className='app'>
   <Navbarpage />
   <Content/>
   <Slider />
   </div>
   </>
  );
}

export default App;
