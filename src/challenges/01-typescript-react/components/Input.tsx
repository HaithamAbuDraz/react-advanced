interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
}

function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  disabled = false,
  error = '',
  name,
  id,
}: InputProps) {
  const inputId =
    id || name || `input-${label.toLowerCase().replace(/\s/g, '-')}`;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label
        htmlFor={inputId}
        style={{
          display: 'block',
          marginBottom: '0.25rem',
          fontWeight: '500',
          color: '#2c3e50',
        }}
      >
        {label}
        {required && (
          <span style={{ color: '#e74c3c', marginLeft: '0.25rem' }}>*</span>
        )}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={{
          width: '100%',
          padding: '0.5rem',
          border: `1px solid ${error ? '#e74c3c' : '#ddd'}`,
          borderRadius: '4px',
          fontSize: '1rem',
          backgroundColor: disabled ? '#f5f5f5' : 'white',
          outline: 'none',
          boxShadow: error ? '0 0 0 2px rgba(231, 76, 60, 0.2)' : 'none',
          transition: 'all 0.2s',
        }}
      />
      {error && (
        <p
          style={{
            margin: '0.25rem 0 0 0',
            color: '#e74c3c',
            fontSize: '0.875rem',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
