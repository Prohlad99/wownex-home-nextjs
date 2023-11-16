const Footer = () => {
  return (
    <div className="mt-6">
      <div className="h-[90px] bg-white grid grid-cols-2 justify-items-center items-center">
        <div>
          <span className="flex items-center gap-4">
            <span>
              <img
                className="w-[25px]"
                src="/assets/icons/mobile.png"
                alt="icon"
              />
            </span>
            <span className="text-2xl font-bold">Call Us</span>
          </span>
        </div>
        <div>
          <span className="flex items-center gap-4">
            <span>
              <img
                className="w-[25px]"
                src="/assets/icons/whatsapp.png"
                alt="icon"
              />
            </span>
            <span className="text-2xl font-bold">Chat on WhatsApp</span>
          </span>
        </div>
      </div>
      <footer className="bg-transparent dark:bg-gray-900 px-2 md:px-10">
        <div className=" w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
          <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 w-ful gap-8 sm:gap-6 sm:grid-cols-3">
              <div className="">
                <img className="mb-4" src="/assets/logo/logo.png" alt="logo" />
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-1 text-black font-serif">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                </ul>
              </div>
              <div className=" flex justify-center">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-black uppercase dark:text-white">
                    Contact Us
                  </h2>
                  <ul className="text-black dark:text-gray-400 font-medium font-serif">
                    <li className="mb-1">Call us 10am-11pm (Everyday)</li>
                    <li className="mb-1 font-bold">+8801710-696950</li>
                    <li className="mb-1 font-bold">info@wownex.com</li>
                    <li className="mb-1">G3, Ground Floor, House# 307,</li>
                    <li className="mb-1">
                      Elephant Road, Pubali Bank Building,
                    </li>
                    <li className="mb-1">Dhaka-1205.</li>
                  </ul>
                </div>
              </div>
              <div className=" flex justify-center">
                <div>
                  <h2 className="mb-4 text-2xl font-semibold text-gray-900 uppercase dark:text-white">
                    Information
                  </h2>
                  <ul className="text-black font-serif dark:text-gray-400 font-medium">
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        Return & Refund Policy
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        After-Sale Support
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        Replacement Warranty
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:underline">
                        Shipping or Delivery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>
      <div className="flex bg-[#4A4A4A] items-center justify-center h-[64px] text-white">
        <p>Copyright 2023 WoWnex - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
