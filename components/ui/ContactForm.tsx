const labelClass = "font-rodin text-white text-sm lg:text-[0.95cqw] mb-1 lg:mb-[0.4cqw]";

const fieldClass =
  "w-full bg-transparent text-white font-sans text-base px-3 lg:text-[1cqw] lg:px-[1cqw] " +
  "border-2 lg:border-[0.1cqw] border-[#888] rounded-lg lg:rounded-[0.6cqw] outline-none " +
  "placeholder:text-white/30 transition duration-300 " +
  "hover:border-white/70 focus:border-electric";

const inputSize = "h-12 lg:h-[2.7cqw] mb-4 lg:mb-[1.2cqw]";
const textareaSize = "h-40 lg:h-[10cqw] py-3 lg:py-[0.8cqw] resize-none";

const buttonClass =
  "mt-6 lg:mt-[2.6cqw] w-full h-14 lg:h-[3.2cqw] bg-white text-black font-rodin text-2xl lg:text-[1.9cqw] " +
  "cursor-pointer transition duration-300 hover:bg-electric hover:text-white active:scale-95";

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