import { useRef } from "react";

function FormDashboard({ setTypingSection, section }) {
  const timeoutRef = useRef(null);

  const handleTyping = (value) => {
    if (value.length > 0) {
      setTypingSection(section);

      // Reset timer
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setTypingSection(null);
      }, 1500);
    } else {
      setTypingSection(null);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => handleTyping(e.target.value)}
          />

          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleTyping(e.target.value)}
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDashboard;