const Button = (props) => {
  return (
    <div>
      <button onClick={props.countHandler}>
        <img src={props.btnImg} title={props.title} />
      </button>
    </div>
  );
};

export default Button;
