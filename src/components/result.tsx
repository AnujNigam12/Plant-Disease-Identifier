import { Prediction } from "@/lib/types";

// For development purpose
import { sampleData } from "@/lib/sample-data";

interface ResultProps {
  data: Prediction;
}

export default function Result({ data }: ResultProps) {
  console.log(data);
  const prediction = data.result;
  return (
    <div className="w-full mt-8 ">
      {/* If the image is not a plant just show one line */}
      {prediction.is_plant.binary ? (
        <div className=" bg-white">
          <p className="text-center text-3xl md:text-4xl">
            Plant is{"  "}
            <span className="font-bold">
              {prediction.is_healthy.binary ? (
                <span className="gradient-text">Healthy</span>
              ) : (
                <span className="text-red-500">Unhealthy</span>
              )}
            </span>
          </p>
          {/* If the plant is healthy display a motivated message :) */}
          {prediction.is_healthy.binary && (
            <p className="text-center mt-4 text-lg">
              Your plant is happy, you are truly a nature lover!
            </p>
          )}
          {/* If the plant is unhealthy then only display the diseases */}
          {!prediction.is_healthy.binary && (
            <div>
              <p className="text-center text-lg md:text-2xl mt-8">
                Potential Diseases
              </p>
              <div
                className={`${
                  prediction.disease.suggestions.length === 1
                    ? ""
                    : "md:grid-cols-1"
                } grid gap-6 place-content-center`}
              >
                {prediction.disease.suggestions.map((disease) => (
                  <div
                    className="mt-4 text-center md:grid grid-cols-2 gap-4 border-b-2 pb-4"
                    key={disease.id}
                  >
                    <div className="">
                      <div className="flex items-start justify-start">
                        <p className="text-2xl font-bold text-left">
                          {disease.name}:{" "}
                          {(disease.probability * 100).toPrecision(7)}%
                        </p>
                      </div>
                      <p className="my-2 text-left">Plants with {disease.name}</p>
                      <div className="flex gap-4 text-left">
                        {disease.similar_images.map((image) => (
                          <div key={image.id}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={image.url}
                              alt={image.citation}
                              className="rounded-md "
                            />
                            <p className="my-4">
                              Similarity:{" "}
                              <span className="font-bold">
                                {(image.similarity * 100).toPrecision(4)}%
                              </span>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2 md:gap-8">
                        <div>
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
                        <div>
                          <h3 className="text-left font-bold text-xl mb-1">
                            Description
                          </h3>
                          <p className="text-justify">
                            {disease.details.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2 md:gap-8">
                        <div>
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

                        <div>
                          <h3 className="text-left font-bold text-xl mb-1">
                            Treatment
                          </h3>
                          <div className="text-justify flex flex-col gap-2 md:gap-8">
                            <p>
                              <span className="font-bold">Chemical:</span>{" "}
                              {disease.details.treatment.chemical}
                            </p>
                            <p>
                              <span className="font-bold">Biological:</span>{" "}
                              {disease.details.treatment.biological}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 md:gap-8">
                        <div>
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

                        <div>
                          <h3 className="text-left font-bold text-xl mb-1">
                            Prevention
                          </h3>
                          <p className="text-justify">
                            {disease.details.treatment.prevention}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-2xl">Image is not a Plant</p>
          <p className="text-red-500 mt-1 text-lg">
            Please put the correct image and retry!
          </p>
        </div>
      )}
    </div>
  );
}
