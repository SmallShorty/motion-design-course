import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <div className="message-container">
      <span>400</span>
      <p>Oops! Something went wrong. . .</p>
      <button onClick={handleClick}>Home</button>
    </div>
  );
};
