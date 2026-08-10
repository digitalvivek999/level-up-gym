import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Flame, ShieldAlert } from 'lucide-react';
import { GYM_CONFIG, createWhatsAppUrl } from '../config/gymConfig';

interface EnquiryFormProps {
  initialProgram?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialProgram, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    gender: 'Male',
    fitnessGoal: 'Weight Loss',
    preferredProgram: initialProgram || 'Personal Training',
    preferredTime: 'Morning',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fitnessGoals = [
    'Weight Loss',
    'Muscle Building',
    'Strength',
    'General Fitness',
    'Functional Fitness',
    'Boxing',
    'Kickboxing',
    'MMA',
    'Yoga',
    'Zumba',
    'CrossFit',
    'HIIT',
    'Other'
  ];

  const preferredPrograms = [
    'Personal Training',
    'Group Fitness',
    'Combat Training',
    'Weight Training',
    'Functional Training',
    'Not Sure'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }

    // Format WhatsApp message
    const formattedMsg = `Hello Level Up Fitness Studio,

I want to enquire about joining.

Name: ${formData.fullName}
Phone: ${formData.phone}
Age: ${formData.age || 'Not specified'}
Gender: ${formData.gender}
Fitness Goal: ${formData.fitnessGoal}
Preferred Program: ${formData.preferredProgram}
Preferred Time: ${formData.preferredTime}
${formData.message ? `Message: ${formData.message}\n` : ''}
Please share the available plans and details.

Thank you!`;

    const waUrl = createWhatsAppUrl(formattedMsg);
    
    setSubmitted(true);
    if (onSuccess) onSuccess();

    // Open WhatsApp after brief delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#151515] border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#DFFF00]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[#DFFF00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5" />
              START YOUR TRANSFORMATION TODAY
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-3">
              READY TO <span className="text-[#DFFF00]">LEVEL UP?</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm">
              Fill in your details below to generate an instant WhatsApp enquiry for Coach Shashank Khare in Satna.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-zinc-900 border border-[#DFFF00]/50 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#DFFF00] text-black flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-heading font-black text-2xl text-white uppercase mb-2">
                ENQUIRY GENERATED!
              </h3>
              <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6">
                Your enquiry is redirecting to WhatsApp. If the page didn't open automatically, click the button below:
              </p>
              <a
                href={createWhatsAppUrl(`Hi Level Up Studio, I am ${formData.fullName} enquiring about ${formData.preferredProgram}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-black font-extrabold text-sm uppercase tracking-wider shadow-lg"
              >
                <MessageSquare className="w-5 h-5 fill-black" />
                <span>OPEN WHATSAPP NOW</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-900/40 border border-red-800 text-red-300 text-xs font-bold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Grid 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07249550348"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  />
                </div>
              </div>

              {/* Grid 2: Age & Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 26"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Grid 3: Fitness Goal & Preferred Program */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Fitness Goal
                  </label>
                  <select
                    value={formData.fitnessGoal}
                    onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  >
                    {fitnessGoals.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                    Preferred Program
                  </label>
                  <select
                    value={formData.preferredProgram}
                    onChange={(e) => setFormData({ ...formData, preferredProgram: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                  >
                    {preferredPrograms.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Preference */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['Morning', 'Evening', 'Flexible'].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTime: time })}
                      className={`py-2.5 rounded-xl text-xs font-bold uppercase transition-all ${
                        formData.preferredTime === time
                          ? 'bg-[#DFFF00] text-black font-extrabold'
                          : 'bg-zinc-900 border border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-zinc-300 mb-2">
                  Message / Specific Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about any previous workout experience or health goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-[#DFFF00] text-sm"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#DFFF00] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(223,255,0,0.3)] flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                <span>GET STARTED (SEND WHATSAPP ENQUIRY)</span>
              </button>

              <div className="text-center text-zinc-500 text-[11px]">
                🔒 We respect your privacy. Submitting opens a direct chat with Level Up Fitness Studio.
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
