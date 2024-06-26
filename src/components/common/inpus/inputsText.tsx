import "@/styles/form/inputText.css";

interface Props {
  disabled?: boolean;
  className?: string;
  error: string;
  label: string;
  maxLength?: number;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  isTextArea?: boolean;
  required?: boolean;
  value?: string;
}

const InputText: React.FC<Props> = (props) => {
  const {
    disabled,
    className = "",
    error,
    label,
    maxLength,
    name,
    onChange,
    placeholder,
    isTextArea,
    required,
    value,
  } = props;

  const classNameId = "input-text";
  return (
    <div className={`${classNameId} ${className}`}>
      <div className={`${classNameId}__container-main ${isTextArea ? 'text-area-container' : ""} `}>
        <label
          className={`${classNameId}__inputLabel ${required ? "is-bold" : ""} `}
          htmlFor={name}
        >
          {label}:
        </label>
        {!isTextArea ? (
          <input
            className={`${classNameId}__inputField ${
              error ? `${classNameId}__inputError` : ""
              }`}
            id={name}
            placeholder={placeholder}
            name={name}
            type={"text"}
            autoComplete={"off"}
            maxLength={maxLength}
            onChange={onChange}
            defaultValue={value}
            required={required}
            disabled={disabled}
          />
        ) : (
          <textarea
            className={`${classNameId}__inputField ${classNameId}__inputTextArea ${
              error ? `${classNameId}__inputError` : ""
            }`}
            id={name}
            placeholder={placeholder}
            name={name}
            maxLength={250}
            onChange={onChange}
            defaultValue={value}
            required={required}
            disabled={disabled}
          />
        )}
      </div>
      {error ? (
        <span className={`${classNameId}__errorText`}>{error}</span>
      ) : null}
    </div>
  );
};

export default InputText;
