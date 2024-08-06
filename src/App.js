import React from 'react';
import './index.scss';

function App() {
  const[open, setOpen] = React.useState(false);
  return(
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
        </button>
      
      <Modal open={open} setOpen={setOpen} >
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          <h3>
          modal window
          <button>12345546</button>
          </h3>
      </Modal>
      
      
    </div>)}
  ;


export default App;