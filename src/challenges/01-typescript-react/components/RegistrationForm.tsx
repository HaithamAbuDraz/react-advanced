import { useState } from 'react';
import Input from './Input';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age: string;
  phone: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  age?: string;
  phone?: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (
      formData.age &&
      (parseInt(formData.age) < 18 || parseInt(formData.age) > 120)
    ) {
      newErrors.age = 'Age must be between 18 and 120';
    }

    if (formData.phone && !/^[\d\s\-()+]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setIsSubmitting(true);

    if (validate()) {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '1rem' }}>
      <h2 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
        📝 Registration Form
      </h2>
      <p style={{ color: '#7f8c8d', marginBottom: '1.5rem' }}>
        Create a new account with TypeScript
      </p>

      {submitSuccess && (
        <div
          style={{
            padding: '1rem',
            marginBottom: '1rem',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '4px',
          }}
        >
          ✅ Registration successful! Welcome, {formData.firstName}!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          label='First Name'
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
          placeholder='Enter first name'
          required
          error={errors.firstName}
        />

        <Input
          label='Last Name'
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
          placeholder='Enter last name'
          required
          error={errors.lastName}
        />

        <Input
          label='Email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter email'
          required
          error={errors.email}
        />

        <Input
          label='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter password (min 6 chars)'
          required
          error={errors.password}
        />

        <Input
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder='Confirm password'
          required
          error={errors.confirmPassword}
        />

        <Input
          label='Age'
          name='age'
          type='number'
          value={formData.age}
          onChange={handleChange}
          placeholder='Enter age (optional)'
          error={errors.age}
        />

        <Input
          label='Phone Number'
          name='phone'
          type='tel'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Enter phone number (optional)'
          error={errors.phone}
        />

        <button
          type='submit'
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: isSubmitting ? '#95a5a6' : '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.3s',
            fontWeight: 'bold',
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
