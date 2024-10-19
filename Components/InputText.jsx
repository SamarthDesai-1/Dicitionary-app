import { useRef } from "react"

export default function InputText({ setInput }) {

  const text = useRef();

  return (
    <>
      <input type="text" ref={text} className="inputBox"/>
      <br />
      <br />
      <button className="button" onClick={() => setInput(text.current.value)}>Search</button>
    </>
  )
};

