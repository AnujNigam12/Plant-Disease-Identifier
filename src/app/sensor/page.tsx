import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-centerpy-24 px-4 md:px-16 lg:px-44 mt-16">
      <div className="w-full text-center mt-8">
        <h1 className="w-full mb-8 text-xl md:text-2xl font-extrabold tracking-tight lg:text-3xl">
          <span className="gradient-text">{siteConfig.name}</span> - Plant
          Health Monitoring System
        </h1>

        <div className="frame-containers flex flex-wrap items-center justify-evenly rounded shadow-lg  lg:p-10 ">
          <div className="frame-card min-w-fit">
            <h1 className="text-center text-green-400">Temperature Graph</h1>
            <iframe
              className="w-full md:w-[500px] h-[300px]"
              src="https://thingspeak.com/channels/3402309/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&api_key=7YEB3BHWZS6WU3XG"
            ></iframe>
          </div>
          <div className="frame-card min-w-fit">
            <h1 className="text-center text-green-400">Humidity Graph</h1>
            <iframe
              className="w-full md:w-[500px] h-[300px]"
              src="https://thingspeak.com/channels/3402309/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15&api_key=7YEB3BHWZS6WU3XG"
            ></iframe>
          </div>
          <div className="frame-card">
            <h1 className="text-center text-green-400">Soil Moisture Graph</h1>
            <iframe
              className="w-full md:w-[500px] h-[300px]"
              src="https://thingspeak.com/channels/3402309/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Soil+Moisture&type=line&api_key=7YEB3BHWZS6WU3XG"
            ></iframe>
          </div>
          {/* <div className="frame-card">
            <h1 className="text-center text-green-400">Pressure Graph</h1>
            <iframe
              height={300}
              width={500}
              src="https://thingspeak.com/channels/2473517/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
            ></iframe>
          </div> */}
        </div>
      </div>
    </main>
  );
}
