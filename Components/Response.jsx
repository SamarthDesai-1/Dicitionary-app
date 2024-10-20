export default function Response({ response }) {
  
  return (
    <>
      <h3 style={{ color: response === "Word doesn't exist!" ? "red" : "black" }} className="fontText">{response}</h3>
    </>
  )
  
};