import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    
    try {
      await base44.functions.invoke('sendContactEmail', form);
      setSubmitted(true);
    } catch (error) {
      alert('Failed to send message. Please try again or call us directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1B2A4A] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#6BA3D6] text-sm font-medium tracking-[0.3em] uppercase mb-3">
              Get In Touch
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-white/50 max-w-lg mx-auto">
              Visit our store or send us a message. We'd love to help you find the perfect suit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-[#1B2A4A] text-2xl sm:text-3xl mb-8">
                Visit Our Store
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6BA3D6]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#6BA3D6]" />
                  </div>
                  <div>
                    <h3 className="text-[#1B2A4A] font-semibold mb-1">Address</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Upper High Street, Killarney,<br />
                      Co. Kerry, V93 YTY2
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6BA3D6]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#6BA3D6]" />
                  </div>
                  <div>
                    <h3 className="text-[#1B2A4A] font-semibold mb-1">Phone</h3>
                    <div className="space-y-1">
                      <div>
                        <a href="tel:0646637693" className="text-[#6BA3D6] text-sm hover:underline">
                          064 663 7693
                        </a>
                      </div>
                      <div>
                        <a href="tel:0879106933" className="text-[#6BA3D6] text-sm hover:underline">
                          087 910 6933
                        </a>
                        <span className="text-gray-400 text-sm"> (Alan)</span>
                      </div>
                      <div>
                        <a href="mailto:formally-yours@hotmail.com" className="text-[#6BA3D6] text-sm hover:underline">
                          formally-yours@hotmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#6BA3D6]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#6BA3D6]" />
                  </div>
                  <div>
                    <h3 className="text-[#1B2A4A] font-semibold mb-1">Opening Hours</h3>
                    <div className="text-gray-500 text-sm space-y-1">
                      <p>Monday – Saturday: 10:00am – 6:00pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-xl overflow-hidden h-[250px] bg-gray-100">
                <iframe
                  title="Formally Yours Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.5!2d-9.510!3d52.059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4845594c3e9bffff%3A0x7e2b0a5e5e5e5e5e!2sHigh%20St%2C%20Killarney%2C%20Co.%20Kerry!5e0!3m2!1sen!2sie!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#F5F7FA] rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-display text-[#1B2A4A] text-2xl mb-3">
                    Message Sent
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for getting in touch. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                    }}
                    className="mt-8 bg-[#1B2A4A] hover:bg-[#2A3D5F] rounded-sm"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <div className="bg-[#F5F7FA] rounded-2xl p-8 sm:p-10">
                  <h2 className="font-display text-[#1B2A4A] text-2xl mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-8">
                    Fill in the form below and we'll get back to you.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-[#1B2A4A] mb-1.5 block">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Murphy"
                          className="bg-white border-gray-200 focus:ring-[#6BA3D6] focus:border-[#6BA3D6]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#1B2A4A] mb-1.5 block">
                          Email *
                        </label>
                        <Input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@email.com"
                          className="bg-white border-gray-200 focus:ring-[#6BA3D6] focus:border-[#6BA3D6]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-medium text-[#1B2A4A] mb-1.5 block">
                          Phone
                        </label>
                        <Input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="087 123 4567"
                          className="bg-white border-gray-200 focus:ring-[#6BA3D6] focus:border-[#6BA3D6]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#1B2A4A] mb-1.5 block">
                          Subject
                        </label>
                        <Select
                          value={form.subject}
                          onValueChange={(val) => setForm({ ...form, subject: val })}
                        >
                          <SelectTrigger className="bg-white border-gray-200">
                            <SelectValue placeholder="Select enquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding Enquiry</SelectItem>
                            <SelectItem value="debs">Debs / Graduation</SelectItem>
                            <SelectItem value="blacktie">Black Tie Event</SelectItem>
                            <SelectItem value="purchase">Suit Purchase</SelectItem>
                            <SelectItem value="general">General Enquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#1B2A4A] mb-1.5 block">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your requirements..."
                        className="bg-white border-gray-200 focus:ring-[#6BA3D6] focus:border-[#6BA3D6] min-h-[140px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-[#1B2A4A] hover:bg-[#2A3D5F] text-white py-6 text-sm font-medium tracking-wide rounded-sm disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}