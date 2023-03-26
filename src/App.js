import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("");

  return (
    <div>{page === "submit" ? <Submit /> : <Login setPage={setPage} />}</div>
  );
}
const Submit = () => {
  return (
    <div className="submitForm">
      <div>Submitted</div>
    </div>
  );
};
const Login = ({ setPage }) => {
  const [captcha, setCaptcha] = useState(createCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  function createCaptcha() {
    const captchaArray = [];

    for (let q = 0; q < 6; q++) {
      if (q % 2 === 0) {
        captchaArray[q] = String.fromCharCode(
          Math.floor(Math.random() * 26 + 65)
        );
      } else {
        captchaArray[q] = Math.floor(Math.random() * 10 + 0);
      }
    }
    return captchaArray.join("");
  }
  const submitForm = () => {
    if (captcha === captchaInput) {
      setPage("submit");
    }
  };
  const refreshCaptch = () => {
    setCaptcha(createCaptcha());
  };
  return (
    <div className="loginBox">
      <h3>Login</h3>
      <div className="inputBox">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="inputBox">
        <label>Password</label>
        <input type="password" />
      </div>

      <div className="captchaBox">
        <h3>Captcha :</h3>
        <p> {captcha}</p>
        <span onClick={refreshCaptch} class="material-symbols-outlined">
          cached
        </span>
      </div>
      <input
        className="captchaInput"
        type="text"
        placeholder="Enter captcha here"
        onChange={(e) => setCaptchaInput(e.target.value)}
        value={captchaInput}
      />
      <button onClick={submitForm} className="submitButton">
        Submit
      </button>
    </div>
  );
};
export default App;
