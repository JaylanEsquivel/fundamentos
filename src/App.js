//  Conponents
import FirstComponent from './components/FirstComponent'

// Styles CSS
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
        <h1>Fundamentos</h1>
        <FirstComponent />
        <TemplateExpressions />

        <MyComponent />
    </div>
  );
}

export default App;
