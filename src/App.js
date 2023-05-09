import './App.css';
import SimpleCardApp from './apps/SimpleCardApp/SimpleCardApp';
import FBCommentCardApp from './apps/FacebookCommentCard/FBCommentCardApp';

function App() {
  return (
    <div className="App">
      <div className='app-title one'>
        <h2>Nested Components: Simple Card</h2>
        <SimpleCardApp />
      </div>
      <div className='app-two'>
        <h2 className='app-title two'>
          Nested components: Facebook Comment Card
        </h2>
        <FBCommentCardApp />
      </div>
    </div>
  );
}

export default App;
