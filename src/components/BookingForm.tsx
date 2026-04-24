'use client';

import { useState } from 'react';
import { services, categoryLabels, ServiceCategory } from '@/data/services';
import { business } from '@/data/business';

interface BookingData {
  serviceId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const availableTimes = [
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    serviceId: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleServiceSelect = (id: string) => {
    setFormData({ ...formData, serviceId: id });
    handleNext();
  };

  const handleDateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.date && formData.time) handleNext();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = services.find((s) => s.id === formData.serviceId)?.name || 'General Appointment';
    const subject = `Appointment Request: ${formData.name} - ${serviceName}`;
    const body = `
New Appointment Request from AbenezerHair.com

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Requested Service: ${serviceName}
Requested Date: ${formData.date}
Requested Time: ${formData.time}

Additional Notes:
${formData.notes || 'None'}
    `.trim();

    const smsHref = business.phoneHref.replace('tel:', 'sms:');
    // Using ?body= which is standard for modern devices
    window.location.href = `${smsHref}?body=${encodeURIComponent(body)}`;
  };

  const selectedService = services.find((s) => s.id === formData.serviceId);

  return (
    <div className="card booking-form" style={{ padding: 'var(--space-2xl)', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-xl)' }}>
        <div style={{ flex: 1, textAlign: 'center', fontWeight: step >= 1 ? 'bold' : 'normal', color: step >= 1 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
          1. Service
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontWeight: step >= 2 ? 'bold' : 'normal', color: step >= 2 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
          2. Date & Time
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontWeight: step >= 3 ? 'bold' : 'normal', color: step >= 3 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
          3. Details
        </div>
      </div>
      
      <div className="gold-line" style={{ width: '100%', height: '1px', marginBottom: 'var(--space-xl)' }} />

      {/* Step 1: Select Service */}
      {step === 1 && (
        <div className="step-1">
          <h3 className="heading-card mb-md text-center">Select a Service</h3>
          <p className="body-text text-center mb-xl">Choose the service you'd like to book to continue.</p>
          
          <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '1rem' }}>
            {Object.entries(servicesByCategory).map(([category, items]) => (
              <div key={category} className="mb-lg">
                <h4 className="heading-card mb-sm" style={{ fontSize: '1.25rem' }}>{categoryLabels[category as ServiceCategory]}</h4>
                <div style={{ display: 'grid', gap: '0.5rem' }}>
                  {items.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '1rem',
                        border: formData.serviceId === service.id ? '2px solid var(--color-accent)' : '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        background: formData.serviceId === service.id ? 'var(--color-accent-bg)' : 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        color: 'var(--color-text-heading)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--color-accent)'}
                      onMouseOut={(e) => e.currentTarget.style.borderColor = formData.serviceId === service.id ? 'var(--color-accent)' : 'var(--color-border)'}
                    >
                      <div>
                        <strong>{service.name}</strong>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>{service.duration}</div>
                      </div>
                      <div style={{ fontWeight: 'bold' }}>From ${service.priceFrom}</div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Date & Time */}
      {step === 2 && (
        <form onSubmit={handleDateSubmit} className="step-2">
          <h3 className="heading-card mb-md text-center">Choose Date & Time</h3>
          <p className="body-text text-center mb-xl">
            Selected Service: <strong>{selectedService?.name}</strong>
            <br />
            <button type="button" onClick={() => setStep(1)} style={{ color: 'var(--color-accent)', textDecoration: 'underline', fontSize: '0.875rem', marginTop: '0.5rem' }}>Change Service</button>
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Preferred Date</label>
              <input 
                type="date" 
                required 
                min={new Date().toISOString().split('T')[0]} 
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Preferred Time</label>
              <select 
                required 
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)' }}
              >
                <option value="">Select a time...</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button" onClick={handlePrev} className="btn btn--outline">Back</button>
            <button type="submit" className="btn btn--primary" disabled={!formData.date || !formData.time}>Continue to Details</button>
          </div>
        </form>
      )}

      {/* Step 3: Client Details */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="step-3">
          <h3 className="heading-card mb-md text-center">Your Details</h3>
          <p className="body-text text-center mb-xl">Requesting <strong>{selectedService?.name}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.</p>
          
          <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
              <input 
                type="text" 
                required 
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)' }}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Additional Notes (Optional)</label>
              <textarea 
                rows={3} 
                placeholder="Any special requests or hair history Rodas should know about?"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'transparent', color: 'var(--color-text-body)', resize: 'vertical' }}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button type="button" onClick={handlePrev} className="btn btn--outline">Back</button>
            <button type="submit" className="btn btn--primary">Text Booking Request</button>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: '2rem' }}>
            This will draft a text message to the studio containing your request details.
          </p>
        </form>
      )}
    </div>
  );
}
