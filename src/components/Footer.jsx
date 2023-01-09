import "../App.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <button type="button" name="All" onClick={() => props.onFilter("all")}>
        All
      </button>
      <button
        type="button"
        name="Active"
        onClick={() => props.onFilter("active")}
      >
        Active
      </button>
      <button
        type="button"
        name="Completed"
        onClick={() => props.onFilter("completed")}
      >
        Completed
      </button>
      <button
        type="button"
        name="Clear Completed"
        onClick={() => props.onClearCompleted()}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
