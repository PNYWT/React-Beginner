import './App.css'

function App() {

  const isLoggedIn = true;
  const element = isLoggedIn ? "Mr. Oni" : "Please login";
  const imagePlaceholderURL = "https://placehold.co/600x400";

  const message = ["Hello message"];

  function welcomeMessage(name: string) {
    return <h1>{"Welcome to React." + " " + name}</h1>;
  }

  function isMorning() {
    const date = new Date();
    if (date.getHours() < 12) {
      return <h2>Good Morning!</h2>
    } else {
      return <h2>Good Evening!</h2>
    }
  }

  function showAlertMessage(message: string) {
    alert(`📢 Message: ${message}`);
  }

  if (isLoggedIn) {
    return (
      <div className='App'>
        {message.length > 0 && <h2>You have {message.length} unread messages</h2>}
        {welcomeMessage(element)}
        {isMorning()}
        <p>This is my first React app</p>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "8px" }}>
          <button style={
            {
              backgroundColor: "blue", color: "white"
            }
          }>
            Click Me
          </button>
          <button onClick={() => showAlertMessage("Test Alert Message.")}>
            Alert Me!
          </button>
        </div>

        <img src={imagePlaceholderURL} alt="" style={{ marginTop: "16px" }} />
      </div>
    )
  }

  return (
    <div>{element}</div>
  )
}

export default App
