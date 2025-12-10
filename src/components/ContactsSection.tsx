import Link from "next/link";

const ContactsSection = () => {
  return (
    <div className="h-[50%] w-screen pt-20 justify-center content-center gap-30 flex flex-col lg:flex-row">
      <p className="w-[40vw] text-5xl justify-top content-top">
        I believe great design and solid code deserve real care. I combine art, design, and software
        to create tailored experiences that feel intuitive and enjoyable.
      </p>
      <div className=" w-[40vw] justify-top content-center gap-5 flex flex-col">
        <p className="text-2xl content-center">
          Leveraging my full-stack development experience and strong foundation in modern web
          technologies, I focus on building user-friendly applications that create enjoyable
          experiences for the people who use them.
        </p>
        <p className="text-2xl text-black/60">socials ↘</p>
        <div className="text-2xl gap-5 flex">
          <Link className="underline" href="https://github.com/jroxasqq">
            github
          </Link>
          <Link className="underline" href="https://www.linkedin.com/in/justin-roxas-a72329231/">
            linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
