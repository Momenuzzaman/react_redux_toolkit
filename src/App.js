
import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <h1>Counter app</h1>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
