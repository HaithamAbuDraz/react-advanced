interface ButtonProps {
  text: string;
  color?: string; // optional
}

function Button({ text, color = 'blue' }: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {text}
    </button>
  );
}

export default Button;
