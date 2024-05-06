export default function Contact() {
  return (
    <div id="contact" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h2 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h2>
      <form action="https://getform.io/f/zaxdydoa" method="POST" encType="multipart/form-data"></form>
      <div className="grid grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="">
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col">
          <label className="uppercase text-sm py-2" htmlFor="">
            Phone
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="phone"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="">
          Email
        </label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="">
          Subject
        </label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="text"
          name="subject"
        />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="">
          Message
        </label>
        <textarea
          className="border-2 rounded-lg p-3 flex border-gray-300"
          rows="10"
          name="name"
        ></textarea>
      </div>
      <button className="bg-[#001b5e] text-gray-100 w-full mt-4 p-4 rounded-lg">
        Send Message
      </button>
    </div>
  )
}
