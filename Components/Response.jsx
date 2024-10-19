export default function Response({ response }) {
  
  return (
    <>
      <h3 style={{ color: response === "Word doesn't exist!" ? "red" : "white" }} className="fontText">{response}</h3>
    </>
  )
  
};