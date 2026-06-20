import { useState } from 'react';
import { Send } from 'lucide-react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import content from '../content/content';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const initial = { name: '', email: '', phone: '', company: '', service: '', message: '' };

// variant: 'default' (light bg) | 'onAccent' (on yellow CTA banner)
export default function ContactForm({ variant = 'default', redirectTo = '/thank-you' }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { contact } = content;
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initial);
  const [errors, setErrors] = useState({});

  const onAccent = variant === 'onAccent';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const errs = {};
      (result.error.issues ?? result.error.errors ?? []).forEach(err => { errs[err.path[0]] = err.message; });
      setErrors(errs);
      return;
    }
    navigate(redirectTo);
  };

  // Filter out budget field; keep all others
  const fields = contact.form.fields.filter(f => f.name !== 'budget');
  const nonTextarea = fields.filter(f => f.type !== 'textarea');
  const textarea = fields.filter(f => f.type === 'textarea');

  const inputClass = (name) => {
    const base = 'w-full px-4 py-3 text-sm outline-none transition-all duration-200 resize-none';
    const err = errors[name] ? 'border-2 border-red-400' : '';
    if (onAccent) return `${base} ${err || 'border-2 border-black'} bg-white/90 text-black placeholder:text-black/40 focus:bg-white`;
    if (isDark) return `${base} ${err || 'bg-surface-card border-2 border-surface-border text-white placeholder:text-gray-600 focus:border-primary-500'}`;
    return `${base} ${err || 'bg-white border-2 border-black text-gray-900 placeholder:text-gray-400 focus:border-primary-500'}`;
  };

  const labelClass = onAccent
    ? 'block text-sm font-medium mb-2 text-black'
    : `block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`;

  const errorClass = onAccent ? 'mt-1.5 text-xs font-medium text-red-800' : 'mt-1.5 text-xs font-medium text-red-400';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {nonTextarea.map(field => (
          <div key={field.name}>
            <label htmlFor={`cf-${field.name}`} className={labelClass}>
              {field.label}{field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            {field.type === 'select' ? (
              <select
                id={`cf-${field.name}`}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                aria-invalid={!!errors[field.name]}
                className={inputClass(field.name)}
              >
                <option value="">Select an option</option>
                {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            ) : (
              <input
                id={`cf-${field.name}`}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ''}
                onChange={handleChange}
                aria-invalid={!!errors[field.name]}
                className={inputClass(field.name)}
              />
            )}
            {errors[field.name] && <p className={errorClass}>{errors[field.name]}</p>}
          </div>
        ))}
      </div>

      {textarea.map(field => (
        <div key={field.name}>
          <label htmlFor={`cf-${field.name}`} className={labelClass}>
            {field.label}{field.required && <span className="text-red-400 ml-1">*</span>}
          </label>
          <textarea
            id={`cf-${field.name}`}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] || ''}
            rows={5}
            onChange={handleChange}
            aria-invalid={!!errors[field.name]}
            className={inputClass(field.name)}
          />
          {errors[field.name] && <p className={errorClass}>{errors[field.name]}</p>}
        </div>
      ))}

      <button
        type="submit"
        className={
          onAccent
            ? 'w-full flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-display font-bold text-sm uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black hover:shadow-[-6px_6px_0_0_#000] hover:-translate-y-1 hover:translate-x-1 transition-all duration-300'
            : 'btn-primary w-full sm:w-auto justify-center'
        }
      >
        <span>{contact.form.submitLabel}</span>
        <Send size={16} className="relative z-[1]" />
      </button>
    </form>
  );
}
