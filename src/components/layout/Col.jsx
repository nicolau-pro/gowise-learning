const Col = (props) => {
  const { className = "", nogap, children, ...rest } = props;
  return (
    <div
      className={["col", nogap ? "nogap" : null, className].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Col;
