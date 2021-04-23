import logo from './logo.svg';
import './App.css';
import Posts from './components/posts.jsx'

function App() {
  return (
    <div className="App">
      <div class = "container">
        <div class = "row">
            <div class = "col sm-12">
                <Posts/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
