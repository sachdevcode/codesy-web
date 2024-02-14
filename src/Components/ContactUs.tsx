import { useState } from "react";
import Content from "../Content/Content";

const ContactUs = () => {
  // const [errors,setErrors]=useState("")
  const [userData, setUserData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    //         if(userData.email.trim() === "" || userData.message.trim() === "" || userData.subject.trim() === "" ){
    // setErrors("Enter valid data")
    //         }

    e.preventDefault();
    console.log(userData);
    setUserData({
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div id="contact" className="py-10">
      <section className="bg-white">
        <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-gray-900 ">
            {Content.twelvethSection.highlight}
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            {Content.twelvethSection.desc}
          </p>
          <form action="#" onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleData}
                value={userData.email}
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary focus:ring-1  focus:outline-none  focus:border-primary block w-full p-2.5 "
                placeholder="name@codesy.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium  "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={handleData}
                value={userData.subject}
                className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-1 focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium  "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg shadow-sm border focus:outline-none focus:ring-1 border-gray-300 focus:ring-primary focus:border-primary "
                onChange={handleData}
                value={userData.message}
                placeholder="Leave a comment..."
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
