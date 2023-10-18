// eslint-disable-next-line no-unused-vars
import React from "react";

const DownloadPage = () => {
  return (
    <div className="lg:mx-0 md:mx-0 mx-10">
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0  "
              src="https://i.ibb.co/KbkjSgL/app.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Download Our Official Application
            </h2>

            <p className="block lg:max-w-2xl  my-4 text-gray-500 dark:text-gray-300">
              MLWBD is an all-encompassing streaming service available on a wide
              array of devices, from smartphones and tablets to smart TVs and
              gaming consoles. With a vast, constantly updated library of
              movies, TV shows, and original content, MLWBD offers an
              unparalleled entertainment experience that adapts to your
              preferences, transcending platform limitations, and ensuring that
              high-quality, ad-free content is at your fingertips wherever and
              whenever you choose to watch.
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-2 gap-5">
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-android"></i> Android
              </button>
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-app-store-ios"></i> IOS
              </button>

              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-windows"></i> Windows
              </button>
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-apple"></i> Mac OS
              </button>
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-ubuntu"></i> Linux
              </button>
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-solid fa-tv"></i> Smart TV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
