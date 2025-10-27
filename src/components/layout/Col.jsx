const Col = (props) => {
  const { style, className = '', nogap, children, ...rest } = props;
  return (
    <div className={['col', nogap ? 'nogap' : null, className].join(' ')} {...rest} style={style}>
      {children}
    </div>
  );
};

export default Col;
