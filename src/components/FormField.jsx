import '../styles/FormField.scss';

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  autoComplete,
  onChange,
  required,
}) {
  return (
    <label className="form-field">
      <span>
        {label}
        {required && (
          <span className="form-field__required" aria-hidden="true">
            {' (required)'}
          </span>
        )}
      </span>
      {type === 'textarea' ? (
        <textarea
          className="form-field__textarea"
          name={id}
          id={id}
          value={value}
          rows="5"
          onChange={onChange}
          required={required}
        ></textarea>
      ) : (
        <input
          className="form-field__input"
          type={type}
          name={id}
          id={id}
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          required={required}
        />
      )}
    </label>
  );
}
