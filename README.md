# MK Farms (FarmCare)

A smart-agriculture web app that combines **AI-based plant disease detection** with **live crop monitoring** from IoT sensors.

- Upload a leaf photo and get a health assessment, probable diseases, similar reference images and treatment advice.
- View live temperature, humidity and soil-moisture graphs sent by an ESP8266 sensor node.

---

## Features

| Feature | Description |
|---|---|
| Disease detection | Upload a `.png` / `.jpg` / `.jpeg` leaf image. The app checks if it is a plant, whether it is healthy, and lists potential diseases with probability, similar images, description, and chemical / biological / prevention treatments. |
| Crop monitoring | Embedded ThingSpeak charts (Temperature, Humidity, Soil Moisture) that auto-refresh with data from the sensor node. |
| 3D models | Echo3D model viewer page (`/models`). Currently hidden from the navbar. |
| Info pages | About, disease info and tech-stack content written in MDX. |
| UI | Light/dark theme support, toast notifications, responsive layout. |

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page (intro, how it works, FAQs) |
| `/detect-disease` | Image upload and disease detection |
| `/sensor` | Live crop-monitoring dashboard |
| `/models` | 3D model viewer (Echo3D iframes) |
| `/about` | About page |

## Tech Stack

**Web:** Next.js 13 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui + Radix UI, TanStack React Query, MDX

**External services:**
- [Plant.id](https://plant.id) – plant health assessment / disease identification API
- [ThingSpeak](https://thingspeak.com) – IoT data storage and charts
- [Echo3D](https://www.echo3d.com) – 3D model hosting

**Hardware (`Integrate.ino`):** ESP8266 (NodeMCU), DHT11 (temperature and humidity), BMP180 (pressure), analog rain / soil-moisture sensor

## Project Structure

```
.
├── Integrate.ino            # Arduino sketch for the ESP8266 sensor node
├── next.config.js           # Next.js + MDX config
├── src
│   ├── app                  # Routes: /, detect-disease, sensor, models, about
│   ├── components           # UI components (image-box, result, navbar, ui/*)
│   ├── config/site.ts       # Site name, URLs, metadata
│   ├── content/docs         # MDX content (about, disease, tech-stack)
│   ├── lib                  # types, helpers, sample API response
│   └── assets               # Images and logos
└── public                   # Favicons and web manifest
```

## How It Works

**Disease detection**
1. The user selects a leaf image in `ImageBox`.
2. The image is converted to a base64 string in the browser.
3. A `POST` request is sent to the Plant.id `health_assessment` endpoint.
4. `Result` renders the response: plant check, healthy / unhealthy status, and disease suggestions.

**Crop monitoring**
1. The ESP8266 reads DHT11, BMP180 and the analog sensor every 10 seconds.
2. It posts the readings to ThingSpeak (`field1` temperature, `field2` humidity, `field3` pressure, `field4` rain / soil moisture).
3. The `/sensor` page embeds the ThingSpeak channel charts.

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm
- A [Plant.id](https://web.plant.id) API key
- A ThingSpeak channel (only needed for the monitoring page and hardware)

### Install and run

```bash
git clone <your-repo-url>
cd Plant-Disease-Identifier
npm install
npm run dev
```

Open <http://localhost:3000>.

### Build

```bash
npm run build
```

## Configuration and Credentials

> **Important:** this project does **not** read any `.env` file yet. API keys, the ThingSpeak channel details and the WiFi credentials are currently **hardcoded** in the source. Move them to environment variables before sharing or deploying, and **rotate any key that was ever committed**.

| Secret / setting | Where it is hardcoded today | Suggested variable |
|---|---|---|
| Plant.id API key | `src/components/image-box.tsx` | `PLANT_ID_API_KEY` |
| ThingSpeak channel ID | `src/app/sensor/page.tsx` | `NEXT_PUBLIC_THINGSPEAK_CHANNEL_ID` |
| ThingSpeak **read** key | `src/app/sensor/page.tsx` | `NEXT_PUBLIC_THINGSPEAK_READ_KEY` |
| ThingSpeak **write** key | `Integrate.ino` | `secrets.h` (git-ignored) |
| WiFi SSID and password | `Integrate.ino` | `secrets.h` (git-ignored) |
| Site URL | `src/config/site.ts` | `NEXT_PUBLIC_SITE_URL` (optional) |

Example `.env.local` (already covered by `.gitignore`):

```env
PLANT_ID_API_KEY=your_plant_id_key
NEXT_PUBLIC_THINGSPEAK_CHANNEL_ID=your_channel_id
NEXT_PUBLIC_THINGSPEAK_READ_KEY=your_read_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Example `secrets.h` for the Arduino sketch:

```cpp
#define WIFI_SSID "your_wifi_name"
#define WIFI_PASS "your_wifi_password"
#define THINGSPEAK_WRITE_KEY "your_write_key"
```

### Note on API key safety
`next.config.js` uses `output: "export"` (static site). A static site has no server, so any key used in browser code is visible to visitors. To keep the Plant.id key private, remove `output: "export"` and call Plant.id from a Next.js API route (or any serverless proxy) instead of directly from the browser.

## Hardware Setup

1. Install the Arduino libraries: `SFE_BMP180`, `DHT sensor library`, and the ESP8266 board package.
2. Wire the sensors: DHT11 on `D3`, BMP180 on I2C (`D1` / `D2`), rain / soil sensor on `A0`.
3. Put your WiFi and ThingSpeak write key in `secrets.h` (or edit `Integrate.ino`).
4. Upload `Integrate.ino` to the board.
5. In ThingSpeak, create a channel with 4 fields: Temperature, Humidity, Pressure, Rain / Soil Moisture.

## Troubleshooting

**`Image Optimization using the default loader is not compatible with { output: 'export' }`**
Add `unoptimized: true` to the images config in `next.config.js`:

```js
images: {
  unoptimized: true,
  domains: ["plant-id.ams3.cdn.digitaloceanspaces.com"],
},
```

Then restart `npm run dev`. Alternatively, remove `output: "export"`.

**`npm install` shows vulnerabilities**
Avoid `npm audit fix --force`; it can upgrade Next.js and other packages to breaking versions.

## Known Issues / TODO

- Move all secrets to environment variables and proxy the Plant.id call through a server.
- `image-box.tsx`: the request can fire before the image has finished converting to base64 (`FileReader.onload` is async), and state is mutated directly. Store the base64 string in state and send it from a mutation.
- `layout.tsx`: the Google Translate script URL is malformed (`http//:`) and `loadGoogleTranslate` is not defined.
- Remove the unused `@godspeedsystems/plugins-prisma-as-datastore` dependency.
- Keep only one Tailwind config (`tailwind.config.js` or `tailwind.config.ts`).
- `Integrate.ino`: validate the BMP180 pressure reading before sending, and use `\r\n` in HTTP headers.
- Fill in `description` and links in `src/config/site.ts`.

## License

See the [LICENSE](LICENSE) file.
