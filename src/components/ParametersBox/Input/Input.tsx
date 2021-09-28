import './Input.css';

type Props = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

function Input({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: Props): JSX.Element {
  return (
    <div className="property-input">
      <label style={{ marginRight: 3 }} htmlFor={id}>
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          let value = Number(e.target.value);

          value = Math.max(min, value);
          value = Math.min(max, value);

          onChange(value);
        }}
      />
    </div>
  );
}

export default Input;
