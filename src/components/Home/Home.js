import React from "react";
import Marquee from "react-fast-marquee";
import swal from "sweetalert2";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const pop1 =
    "Join us at TB awareness camp where we aim to raise awareness about tuberculosis a serious health concern effective community globally this information event provides essential insights into tb preventions, early detection and available treatments our expert will share valuable knowledge enabling remains to understand the final symptoms risk factor and best practise for prevention together less compact tb and work together as a healthier tb free future";

  const pop2 =
    "Join us at Eye checking camp where you provide a comprehensive range of essential services to enter ensure optimal I health for all participants or activities include free eye screening conducted by experienced optometrist who performed through examination to detect vision issues and common eye conditions additionally we offer personalised vision consultations with eye care professionals";

  const pop3 =
    "Health is most valuable effect in spite of having all luxury and comfort in life and individual can't be happy if he/she is not Healthy medical awareness is a vital aspect of our life that should never be overlooked it empower us to look at control of our health make informed decision and contribute to the well being of our communities in a world where health is wealth education play a major role in understanding the importance of Health and the factor of affecting it";

  const pop4 =
    "Woman empowerment is more than simply a phrase it represent a shift in society perception and approach to utilising the potential of women it's about giving women the resources chances and freedom to speak up take control of their features and actively contribute to their community having access to a good education is more important women who have more education are better able to make decision about their life professions and health that will benefit their family and community";

  const launch1 = () => {
    swal.fire(pop1);
  };
  const launch2 = () => {
    swal.fire(pop2);
  };
  const launch3 = () => {
    swal.fire(pop3);
  };
  const launch4 = () => {
    swal.fire(pop4);
  };
  return (
    <>
      <div
        className="h-screen w-full sm:text-4xl font-bold sm:font-extrabold p-10 text-white/75 font-mono text-center"
        style={{
          backgroundImage: `url("https://rare-gallery.com/uploads/posts/545420-begging-child.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <TypeAnimation
          sequence={[
            "Together, we can make a difference.",
            1000,
            "Be the change you wish to see in the world.",
            1000,
            "Join hands for a better tomorrow.",
            1000,
            "Every person counts, every action matters.",
            1000,
            "Uniting for a cause, making an impact.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className=" sm:p-10 p-3 bg-black">
        <Carousel>
          <Carousel.Item style={{ height: "50%" }}>
            <img src="./HomeGalleryImages/medical2.jpg" alt="first " />
            <Carousel.Caption>
              <h3 className="font-extrabold text-2xl   text-black">
                Medical Camp
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "50%" }}>
            <img src="./HomeGalleryImages/medical3.jpg" alt="second " />
            <Carousel.Caption>
              <h3 className="font-extrabold text-2xl  text-black">
                Medical Camp
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "50%", objectFit: "contain" }}>
            <img src="./HomeGalleryImages/medical5.jpg" alt="third " />
            <Carousel.Caption>
              <h3 className="font-extrabold text-2xl  text-black">
                Medical Camp
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "50%" }}>
            <img src="./HomeGalleryImages/plantation2.jpg" alt="fourth " />
            <Carousel.Caption>
              <h3 className="font-extrabold text-2xl  text-black">
                Plantation Drive
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ height: "50%" }}>
            <img src="./HomeGalleryImages/plantation5.jpg" alt="fifth " />
            <Carousel.Caption>
              <h3 className="font-extrabold text-2xl  text-black">
                Plantation Drive
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        
        {/* Moving content upcoming events */}
        <Marquee
          direction="right"
          speed={200}
          className="bg-pink-700 text-yellow-300 "
          pauseOnHover
          style={{ height: 40 }}
        >
          UPCOMING EVENTS
        </Marquee>

        {/* upcoming events holder div */}
        <div className="sm:flex gap-4 w-full  p-2 bg-black justify-center ">
          <div className="max-w-sm rounded-lg bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <img
              className="rounded-t-lg h-auto overflow-hidden w-full"
              src="./Upcoming_Events_Photos/imglogo.png"
              alt="tb"
            />

            <div className="p-5 ">
              <p className="mb-3  text-gray-700 font-extrabold text-lg  dark:text-black">
                TB Awarness Camp
              </p>
              <button
                onClick={launch1}
                className="bg-blue-600 rounded-md p-1 border-black"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 m-4 rounded-lg">
            <img
              className="rounded-t-lg h-auto overflow-hidden w-full"
              src="./Upcoming_Events_Photos/eye.png"
              alt="eye"
            />

            <div className="p-5">
              <p className="mb-3  font-extrabold  text-lg text-gray-700 dark:text-black">
                Eye Checking Camp
              </p>
              <button
                onClick={launch2}
                className="bg-blue-600 rounded-md p-1 border-black"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 m-4 rounded-lg">
            <img
              className="rounded-t-lg h-auto overflow-hidden w-full"
              src="./Upcoming_Events_Photos/medical_awareness.png"
              alt="medical awaremenss"
            />

            <div className="p-5">
              <p className="mb-3  font-extrabold text-lg text-gray-700 dark:text-black">
                Medical Awarness
              </p>
              <button
                onClick={launch3}
                className="bg-blue-600 rounded-md p-1 border-black"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 m-4 rounded-lg">
            <img
              className="rounded-t-lg h-auto overflow-hidden w-full"
              src="./Upcoming_Events_Photos/women_empowerment.png"
              alt="women empowerment"
            />

            <div className="p-5">
              <p className="mb-3  font-extrabold text-lg text-gray-700 dark:text-black">
                Women's Empowerment
              </p>
              <button
                onClick={launch4}
                className="bg-blue-600 rounded-md p-1 border-black"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
