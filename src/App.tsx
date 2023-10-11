import { useState } from 'react';
import './App.css'

function App() {

  const [ text, setText ] = useState('')

  function sliptCopy() {
    var copyText = document.getElementById("text") as HTMLInputElement;
    copyText.select();
    var replaceText = copyText.value.replace(/\s/g, '')
    navigator.clipboard.writeText(replaceText);
    setText(replaceText)
  }

  return (
    <div className='container'>
      <h2>Cole abaixo sua URL</h2>
      <div className='box'>
        <textarea id='text' value={text} onChange={e => setText(e.target.value)}>
        </textarea>
        <div className="action">
          <button onClick={sliptCopy}>
            Copiar sem espaços
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
