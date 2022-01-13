function Message({ msg, bgColor }) {
  let box = {
    padding: "0.5rem",
    marginBlock: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };
  let text = {
    color: bgColor,
    fontWeight: "bold",
  };
  return (
    <div style={text}>
      <p>{msg}</p>
    </div>
  );
}

export default Message;
