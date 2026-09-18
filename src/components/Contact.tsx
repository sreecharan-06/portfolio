import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle, 
  Sparkles, 
  MapPin, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi ${personalInfo.name},\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="py-20 bg-dark-950/20 backdrop-blur-[2px] relative border-t border-sky-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss <span className="text-gradient-cyan">Opportunities</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            I am currently open to software engineering internships, graduate roles, and collaborative projects. Reach out via the form below or email directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Col: Contact Information & Direct Options */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span>Contact Channels</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Feel free to contact me directly through email or connect with me on LinkedIn and GitHub.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-brand-cyan/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/15 flex items-center justify-center text-brand-cyan shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                    <div className="text-xs font-mono font-semibold text-white truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-brand-cyan border border-slate-700 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span>Open to Software Engineering & Full-Stack Opportunities</span>
                </div>
              </div>

              {/* Mail client launch button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-brand-cyan/50 transition-all"
              >
                <span>Open in Email App</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-cyan" />
              </a>

            </div>

          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              
              {isSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. Since this is a static client-side portfolio without a backend server, you can launch your default email client right now to transmit this message directly.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-brand-cyan to-teal-400 hover:from-cyan-400 hover:to-teal-300 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send via Email Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-5 py-3 rounded-xl text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.name
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : 'border-slate-700/80 focus:border-brand-cyan focus:ring-brand-cyan'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                            : 'border-slate-700/80 focus:border-brand-cyan focus:ring-brand-cyan'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Software Engineering Internship / Project Discussion"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                        errors.subject
                          ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                          : 'border-slate-700/80 focus:border-brand-cyan focus:ring-brand-cyan'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hi Sree Charan, I came across your portfolio and would like to connect regarding..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full bg-slate-900/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500 focus:ring-red-500'
                          : 'border-slate-700/80 focus:border-brand-cyan focus:ring-brand-cyan'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-brand-cyan to-teal-400 hover:from-cyan-400 hover:to-teal-300 shadow-lg shadow-brand-cyan/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    Client-side validated • Mailto fallback provided upon submission
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
