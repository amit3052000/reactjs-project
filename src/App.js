import './App.css';
import Header from './Mycomponents/header';
import Content from './Mycomponents/Content';
import Layer from './Mycomponents/Layer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <Header></Header>
    <Content></Content>
    <Layer></Layer>
    </Router>
     
    </>
  );
}

export default App;
