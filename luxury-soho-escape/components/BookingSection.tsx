
import React from 'react';

const BookingSection: React.FC = () => {
  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Booking Inquiry: Soho Escape - ${data.name}`;
    const body = `
Name: ${data.name}
Email: ${data.email}
Check-in: ${data.checkin}
Check-out: ${data.checkout}
Guests: ${data.guests}

Message:
${data.message}
    `.trim();

    window.location.href = `mailto:fanshawproperties@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="booking" className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>Fast Track Response Active</span>
          </span>
          <h2 className="text-5xl font-serif text-slate-900 mb-6">Secure Your Stay</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
            Reach out directly for the most competitive rates and priority assistance. We aim to respond to all inquiries immediately.
          </p>

          {/* Direct Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            {/* WhatsApp Amanda */}
            <a 
              href="https://wa.me/447808803798" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/><path d="M9.5 14c.5 1.5 2 2.5 4 2.5"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Instant Message</h3>
              <p className="text-slate-500 text-sm mb-6">WhatsApp Amanda: +44 7808 803798</p>
              <span className="px-8 py-3 bg-[#25D366] text-white rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-100">
                Message Now
              </span>
            </a>

            {/* Email Inquiry */}
            <a 
              href="mailto:fanshawproperties@gmail.com"
              className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H17.5C20 5 22 7 22 9.5V17Z"/><path d="m22 7-10 7L2 7"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Priority Email</h3>
              <p className="text-slate-500 text-sm mb-6">fanshawproperties@gmail.com</p>
              <span className="px-8 py-3 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-widest group-hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-100">
                Send Email
              </span>
            </a>
          </div>
        </div>

        {/* Booking Form Card (Secondary) */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-serif text-slate-900 mb-4">Express Inquiry</h3>
              <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">Leave your details below. Our reservation team typically responds with a formal quote within the hour.</p>
            </div>
            
            <form onSubmit={handleBookingSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Full Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Email Address</label>
                  <input required name="email" type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Check-in</label>
                  <input required name="checkin" type="date" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Check-out</label>
                  <input required name="checkout" type="date" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Guests</label>
                  <div className="relative">
                    <select name="guests" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option selected>6 Guests (Full Loft)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500 ml-2">Your Message</label>
                <textarea name="message" rows={4} placeholder="Any specific requirements or questions for your stay?" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
                Send Quick Inquiry
              </button>
            </form>
            
            <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">
              Safe and Secure Direct Booking • 1 Hour Response Target
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
