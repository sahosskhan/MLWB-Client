// eslint-disable-next-line no-unused-vars
import React from "react";

const Review = () => {
  return (
    <div className=" ">
      <div className="carousel w-full">
        {/* slide1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <div className="lg:mx-[500px]  md:mx-20">
            <img
              className="w-[626px] h-[417px]"
              src="https://i.ibb.co/4VqJkxk/p1.webp"
              alt=""
            />
            <h1 className="text-xl font-bold my-2 text-center">Sahoss Khan</h1>
            <q className="text-base font-semibold text-black/50 my-2 text-center">
              Buffer-free streaming, diverse library, a cinematic dream come
              true.
            </q>
          </div>

          <div className="absolute flex lg:justify-around justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slide2 */}

        <div id="slide2" className="carousel-item relative w-full">
          <div className="lg:mx-[500px] md:mx-20">
            <img
              className="w-[626px] h-[417px]"
              src="https://i.ibb.co/x8c9LMp/p2.webp"
              alt=""
            />
            <h1 className="text-xl font-bold my-2 text-center">Mostofa Taj</h1>
            <q className="text-base font-semibold text-black/50 my-2 text-center">
              Responsive support, fresh content & a reliable streaming platform.
            </q>
          </div>

          <div className="absolute flex lg:justify-around justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slide3 */}

        <div id="slide3" className="carousel-item relative w-full">
          <div className="lg:mx-[500px] md:mx-20">
            <img
              className="w-[626px] h-[417px]"
              src="
              https://i.ibb.co/NtGjsmB/p3.webp
             "
              alt=""
            />
            <h1 className="text-xl font-bold my-2 text-center">Sangram Khan</h1>
            <q className="text-base font-semibold text-black/50 my-2 text-center">
              Intuitive navigation, HD quality, the ultimate movie night
              companion.
            </q>
          </div>

          <div className="absolute flex lg:justify-around justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        {/* slide4 */}

        <div id="slide4" className="carousel-item relative w-full">
          <div className="lg:mx-[500px] md:mx-20">
            <img
              className="w-[626px] h-[417px]"
              src=" https://i.ibb.co/r6YW0d5/p4.webp"
              alt=""
            />
            <h1 className="text-xl font-bold my-2 text-center">
              Marjin Aratun Khan
            </h1>
            <q className="text-base font-semibold text-black/50 my-2 text-center">
              Sleek interface, vast selection, my top choice for streaming
              movies.
            </q>
          </div>

          <div className="absolute flex lg:justify-around justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

{
  /* <div className="p-8 border rounded-lg dark:border-gray-700">
<p className="leading-loose text-gray-500 dark:text-gray-400">
  “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
  quibusdam ducimus libero ad tempora doloribus expedita laborum saepe
  voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum,
  obcaecati corrupti aspernatur a.”.
</p>

<div className="flex items-center mt-8 -mx-2">
  <img
    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
    src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    alt=""
  />

  <div className="mx-2">
    <h1 className="font-semibold text-gray-800 dark:text-white">
      Ema Watson{" "}
    </h1>
    <span classNameName="text-sm text-gray-500 dark:text-gray-400">
      Marketing Manager at Stech
    </span>
  </div>
</div>
</div> */
}
