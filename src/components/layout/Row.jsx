import { JoinClasses } from 'utils';

const Row = (props) => {
  const { className = '', children, nogap, nopadding, ...rest } = props;
  return (
    <div
      className={JoinClasses(['row', nogap && 'nogap', nopadding && 'nopadding', className])}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Row;
