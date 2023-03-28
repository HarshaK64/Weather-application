import PropTypes from 'prop-types';
import './styles.css';

const RightPanel = ({ label, labelValue, styled }) => {
  return (
    <div className={'spaced-content detail'}>
      <span className={'label'}>{label}</span>
      <span className={styled ? 'value redValue' : 'value'}>{labelValue}</span>
    </div>
  );
};

RightPanel.propTypes = {
  label: PropTypes.string,
  labelValue: PropTypes.func,
  styled: PropTypes.bool,
};

export default RightPanel;
