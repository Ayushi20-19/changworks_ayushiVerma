import { HotKeys } from "react-hotkeys";
import confetti from "canvas-confetti";
import "./App.css";

//mapping the word from keyboard
const keyMap = {
  KEYWORD: "c h a n g w o r k",
};

//triggering the confite
const handlers = {
  KEYWORD() {
    confetti({
      particleCount: 500,
      spread: 360,
      origin: { x: 0.5 },
    });
  },
};

function App() {
  return (
    <div className='App'>
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <header className='App-header'>
          Type "changwork" on your keyboard and see 🎊
        </header>
      </HotKeys>
    </div>
  );
}

export default App;
