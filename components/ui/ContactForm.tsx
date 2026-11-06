const labelClass =
  "font-rodin text-white text-[0.95cqw] mb-[0.4cqw]";

const fieldClass =
  "w-full bg-transparent text-white font-sans text-[1cqw] px-[1cqw] " +
  "border-[0.1cqw] border-[#888] rounded-[0.6cqw] outline-none " +
  "focus:border-white transition-colors";

function ContactForm() {
  return (
    <form className="flex flex-col">
      <label htmlFor="name" className={labelClass}>
        Full Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className={`${fieldClass} h-[2.7cqw] mb-[1.2cqw]`}
      />

      <label htmlFor="email" className={labelClass}>
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={`${fieldClass} h-[2.7cqw] mb-[1.2cqw]`}
      />

      <label htmlFor="message" className={labelClass}>
        message
      </label>
      <textarea
        id="message"
        name="message"
        className={`${fieldClass} h-[10cqw] py-[0.8cqw] resize-none`}
      />

      <button
        type="submit"
        className="mt-[2.6cqw] w-full h-[3.2cqw] bg-white text-black font-rodin text-[1.9cqw]"
      >
        SEND
      </button>
    </form>
  );
}

export default ContactForm;