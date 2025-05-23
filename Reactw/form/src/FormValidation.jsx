import React, { useState } from 'react';
import './FormValidation.css';

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    qualification: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!phonePattern.test(formData.phone)) newErrors.phone = 'Enter valid 10-digit phone number';

    if (!formData.qualification.trim()) newErrors.qualification = 'Qualification is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        qualification: ''
      });
      setErrors({});
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>React Form with Validation</h2>

      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>Qualification</label>
        <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} />
        {errors.qualification && <span className="error">{errors.qualification}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
