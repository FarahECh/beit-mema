"use client";

import { CONTACT_INFO } from "@/constants/guesthouses";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function GetInTouchSection() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get("user_name"),
      from_email: formData.get("user_email"),
      phone_number: formData.get("user_phone"),
      message: formData.get("message"),
      to_email: CONTACT_INFO.email,
      reply_to: formData.get("user_email"),
    };

    emailjs
      .send(
        "service_zv2wf4s",
        "template_62ihj2o",
        templateParams,
        "RUlPZ7GYXje59YVSl"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-main w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-32 py-16 md:h-[800px] gap-12">
      {/* Left side */}
      <div className="text-white w-full md:w-auto">
        <h2 className="font-made-mirage-regular text-4xl md:text-5xl text-center md:text-left">
          Get in
        </h2>
        <h1 className="font-made-mirage-medium text-5xl md:text-7xl mb-7 text-center md:text-left">
          Touch
        </h1>
        <p className="font-metropolis-regular text-base md:text-lg max-w-[500px] mb-12 opacity-80 text-center md:text-left">
          Whether you have questions, need more information, or want to make a
          booking, we're here to help. Feel free to reach out to us through any
          of the following channels:
        </p>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4">
          <div className="flex items-center gap-3">
            <Phone />
            <Link href={`tel:${CONTACT_INFO.phone}`}>
              <p className="font-metropolis-regular">{CONTACT_INFO.phone}</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Mail />
            <Link href={`mailto:${CONTACT_INFO.email}`}>
              <p className="font-metropolis-regular">{CONTACT_INFO.email}</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="bg-white/10 rounded-xl p-6 md:p-8 w-full md:w-[450px]">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 focus:outline-none font-metropolis-regular appearance-none w-full"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            className="bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 focus:outline-none font-metropolis-regular appearance-none w-full"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 focus:outline-none font-metropolis-regular appearance-none w-full"
          />
          <textarea
            name="message"
            placeholder="Your Request"
            rows={4}
            className="bg-transparent border-b border-white/30 pb-2 text-white placeholder:text-white/50 focus:outline-none resize-none font-metropolis-regular appearance-none w-full"
            required
          />
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="border border-white w-full md:w-[150px] rounded-lg py-3 font-metropolis-medium text-white hover:bg-white hover:text-main transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
        {submitStatus === "success" && (
          <p className="text-green-400 mt-4">
            Your message was sent successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-400 mt-4">
            There was an error sending your message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}

/*
EmailJS Template:

New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone_number}}

Message:
{{message}}

This email was sent from the contact form on Beit Mema website.
Reply directly to this email to respond to {{from_name}}.
*/
