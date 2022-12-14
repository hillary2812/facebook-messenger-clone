import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import { useState, useEffect } from "react";
import "./App.css";
import db from "./firebase";
import Message from "./Message";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  //useState = variable in React
  //useEffect = executed based on condition

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here..
    setUsername(prompt("Please enter your name"));
  }, []); //here condition, if blank than this code runs once when app component load for the first time

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="app">
      <img src="https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s180-rw?w=100&h=100" />
      <form className="app__form">
        <FormControl className="app__formControl">
          {/* <InputLabel>Enter a message</InputLabel> */}
          <Input
            className="app__input"
            placeholder="Enter a message...."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      {/* input field */}
      {/* button */}
      {/* messages themselves */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
