import * as React from 'react';

const Picker = ({
  value, onChange, options
}) =>(
  <span>

    <h1>
      {value}
    </h1>

    <select
      onChange={e => onChange(e.target.value)}
      value={value}>

      {options.map(option =>
        <option value={option} key={option}>

          {option}
        </option>
      )
    }
  </select>

</span>
);


Picker.propTypes = {
  options: React.PropTypes.arrayOf(
    React.PropTypes.string.isRequired
  ).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Picker;
