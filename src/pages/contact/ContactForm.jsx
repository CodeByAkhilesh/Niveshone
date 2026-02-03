import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        alert("Something went wrong!");
        console.error(error);
      },
    );
  };

  return (
    <section className="border w-full md:w-140 lg:w-full border-[#268eff] rounded-2xl mt-25 mb-20 mx-auto">
      {/* Form Section Heading  */}
      <header>
        <h2 className="text-3xl lg:text-4xl text-[#268eff] font-bold text-center mt-15">
          Leave a Message
        </h2>
      </header>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full px-9 lg:px-0 lg:w-1/2 mx-auto flex flex-col gap-10 mt-8 mb-20"
      >
        <input
          required
          className="border-b border-white text-gray-400 font-medium text-xl outline-none"
          name="name"
          type="text"
          placeholder="Full Name"
        />
        <input
          required
          className="border-b border-white text-gray-400 font-medium text-xl outline-none"
          name="email"
          type="email"
          placeholder="Email"
        />
        <textarea
          required
          className="border-b border-white text-gray-400 font-medium text-xl text-wrap outline-none"
          name="message"
          type="text"
          placeholder="Message"
        />
        <button
          className="px-10 py-2 text-center text-lg font-semibold rounded-md bg-linear-to-r from-[#3aab50] to-[#268eff] text-black shadow-lg cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
