import Header from "@/components/header";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import clickPhoto from "@/assets/click-photo.jpg";
import monitoring from "@/assets/monitoring.jpg";

export default function HowItWorks() {
  return (
    <section className="w-full pt-24 px-4 md:px-16 lg:px-44">
      <div>
        <Header heading={`Key Highlights`} />
      </div>
      <div className="flex flex-col gap-8 w-full mt-16">
        <div className="flex gap-8">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(30,131,0,1)"
            >
              <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
            </svg>
          </div>
          <div className="">
            <h1 className="font-bold text-xl">Simple and Easy to Use</h1>
            <p className="text-sm md:text-lg">
              Our platform is designed with busy farmers in mind. No complex
              software or technical knowledge required.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col md:flex-row gap-8">
          <div className="flex gap-6 w-full md:max-w-[70%]">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(30,131,0,1)"
              >
                <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
              </svg>
            </div>
            <div className="w-full">
              <h1 className="font-bold text-xl">
                Disease Identification with AI
              </h1>
              <ul style={{ listStyleType: "circle" }} className="text-sm md:text-lg">
                <li className="text-sm md:text-lg">Upload a clear image of your affected leaf.</li>
                <li className="text-sm md:text-lg">
                  Our powerful AI analyzes the image and provides:
                  <p>
                    <strong>Accurate Disease Identification:</strong> Know
                    exactly what's harming your crops.
                  </p>
                  <p>
                    <strong>Detailed Disease Description: </strong> Learn about
                    the disease's lifecycle and impact.
                  </p>
                  <p>
                    <strong>Effective Treatment Recommendations: </strong> Get
                    targeted solutions to combat the disease and save your
                    crops.
                  </p>
                  <p>
                    <strong>Preventative Measures: </strong> Implement
                    strategies to avoid future outbreaks.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <Image
            src={clickPhoto}
            alt="click"
            className="md:max-w-[20%] max-h-56 object-cover rounded-xl"
          />
        </div>
        <div className="flex  justify-between flex-col md:flex-row gap-8">
          <div className="flex gap-6">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="rgba(30,131,0,1)"
              >
                <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L7.0964 18.9999C7.3079 15.9876 8.24541 14.1648 10.6939 11.9989C11.8979 10.9338 11.7965 10.3189 11.2029 10.6721C7.1193 13.1016 5.09114 16.3862 5.00119 21.6302L4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3Z"></path>
              </svg>
            </div>
            <div className="">
              <h1 className="font-bold text-xl">Real-Time Crop Monitoring:</h1>
              <ul style={{ listStyleType: "circle" }}>
                <li className="text-sm md:text-lg">
                  <p>
                    <strong>Temperature: </strong>Monitor ambient air and soil
                    temperature to ensure optimal growing conditions for your
                    crops.
                  </p>
                </li>
                <li className="text-sm md:text-lg">
                  <p>
                    <strong>Soil Moisture: </strong>Track the water content in
                    your soil, allowing you to make informed irrigation
                    decisions and avoid over or under-watering.
                  </p>
                </li>
                <li className="text-sm md:text-lg">
                  <p>
                    <strong>Humidity: </strong>Control humidity levels to
                    prevent the spread of diseases and encourage healthy crop
                    development.
                  </p>
                </li>
                <li className="text-sm md:text-lg">
                  <p>
                    <strong>Air Pressure: </strong>Monitor air pressure
                    fluctuations to anticipate potential weather changes that
                    could impact your crops.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <Image
            src={monitoring}
            alt="click"
            className="md:max-w-[20%] max-h-56 object-cover rounded-xl mx-auto md:m-0"
          />
        </div>
      </div>
    </section>
  );
}
