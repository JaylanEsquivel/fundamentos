//  Conponents
import FirstComponent from './components/FirstComponent'

// Styles CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challange from './components/Challange';

function App() {
  return (
    <div className="App">
        <h1>Fundamentos</h1>
        <FirstComponent />
        <TemplateExpressions />

        <MyComponent />
        <Events />
        <Challange />
    </div>
  );
}

export default App;
