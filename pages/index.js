import Head from "next/head";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MenuItem } from "../components";
import { drinks, salads, sandwiches } from "../data/menu.js";
import sardean from "../public/sardeanwithLines.webp";
import bones from "../public/tin.png";
export default function Home() {
  const googleLink =
    "https://www.google.com/maps/place/1%2F231+Whale+Beach+Rd,+Whale+Beach+NSW+2107/@-33.61103,151.3279416,17z/data=!3m1!4b1!4m5!3m4!1s0x6b72ad4a5e75eedb:0x9c5d0928105c02b8!8m2!3d-33.61103!4d151.3301303";

  return (
    <div className="">
      <Head>
        <title>Sardean | Cafe & Store | Whale Beach</title>
        <meta
          name="description"
          content="Specialty Cafe & Store in Whale Beach"
          key="desc"
        />
        <meta property="og:title" content="Sardean Cafe & Store" />
        <meta
          property="og:description"
          content="Specialty Cafe & Artisan Store in Whale Beach"
        />
        <meta
          property="og:image"
          content="https://www.sardean.com/sardean.png"
        />
      </Head>

      <div className="px-2 bg-repeat bg-[url('../public/scales.jpeg')] bg-cover bg-center min-h-screen flex items-center justify-center flex-col">
        <Image
          src={sardean}
          alt="sardean"
          quality={100}
          width={500}
          placeholder="blur"
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row container mx-auto mt-12">
        <div className="flex-col flex-1 flex items-start justify-center p-4">
          <h1 className="font-bold text-2xl mb-4">Sardean Cafe & Store</h1>
          <p className="mb-4">
            Sardean? Is it a small fish found in a can...? Kinda.
          </p>
          <p className="mb-4">
            Are we being a bit tongue in cheek being based in WHALE beach...?
            Maybe.
          </p>
          <p className="mb-8">
            Sardean - an ode to my parents Sarah and Dean (Sar-Dean). Who
            inspire me in everything that I do{" "}
            <span className="text-2xl">🫶</span>
          </p>

          <p className="mb-4">
            We are a beachy cafe &amp; convenience store, located moments from
            the iconic Whale Beach in the Northern Beaches. We sell artisan
            products from local suppliers as well as{" "}
            <span className="font-medium">specialty coffees</span>, freshly made{" "}
            <span className="font-medium">sandwiches</span>, and{" "}
            <span className="font-medium">salads</span>. We also offer a range
            of delicious <span className="font-medium">cakes</span> and{" "}
            <span className="font-medium">pastries</span>.
            <span className="font-medium"></span>
          </p>
          <p className="mb-4">
            Our store offers a huge range of locally produced ingredients such
            as breads, honey, fresh pasta, sauces and many daily essentials. You
            can also find art from local artists, as well as soft serve ice
            creams and natural ice lollies
          </p>
          <p className="mb-4">
            Come and see us at{" "}
            <a
              href={googleLink}
              target="_blank"
              className="font-semibold mb-2 text-sky-700"
              rel="noreferrer"
            >
              Shop 1/231 Whale Beach Road{" "}
            </a>
          </p>
          <p className="mb-4">
            We are open 7 days a week from 7:00am to 2:00pm.
          </p>
          <p> Hope to see you soon!</p>
          <p> Gary, Kylie &amp; James</p>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <Image src={bones} alt="sardean" quality={100} width={400} />
        </div>
      </div>
      {/* <div className="flex flex-col container mx-auto my-12">
        <h1 className=" text-center w-full font-bold text-2xl mb-4">Menu</h1>
        <hr className="mb-4" />
        <div className="grid grid-cols-3">
          <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="font-semibold mb-2">Coffees</p>
            <div className="w-full">
              <div className="flex flex-row items-center justify-between mb-1">
                <p className="text-sm">Milk</p>
                <p className="text-sm">$5.00</p>
              </div>
              <div className="flex flex-row items-center justify-between mb-1">
                <p className="text-sm">Short</p>
                <p className="text-sm">$4.00</p>
              </div>
              <div className="flex flex-row items-center justify-between mb-1">
                <p className="text-sm">Filter</p>
                <p className="text-sm">$4.00</p>
              </div>
              <div className="flex flex-row items-center justify-between mb-1">
                <p className="text-sm">Iced</p>
                <p className="text-sm">$4.00</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <p className="text-sm">Cold Brew</p>
                <p className="text-sm">$4.00</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="font-semibold mb-2">Cakes &amp; Pastries</p>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Mini Croissant</p>
              <p className="text-sm">$4.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Mini Almond Croissant</p>
              <p className="text-sm">$4.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Mini Danish</p>
              <p className="text-sm">$4.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Raisin Scroll</p>
              <p className="text-sm">$4.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Florentine</p>
              <p className="text-sm">$2.00</p>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="font-semibold mb-2">Salads</p>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Love Foods Green Goddess</p>
              <p className="text-sm">$14.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Love Foods Oodles of Noodles</p>
              <p className="text-sm">$14.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Love Foods Greek Mezza</p>
              <p className="text-sm">$14.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Love Foods Greek Mezza</p>
              <p className="text-sm">$14.00</p>
            </div>
          </div>
          <div className="border rounded-lg shadow-lg p-4 m-4 bg-white">
            <p className="font-semibold mb-2">Miss Lilly's Pies</p>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Beef &amp; Mushroom</p>
              <p className="text-sm">$8.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Chicken & Mustard</p>
              <p className="text-sm">$7.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Lamb Shephards</p>
              <p className="text-sm">$8.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Pumpkin &amp; Feta</p>
              <p className="text-sm">$7.00</p>
            </div>
            <div className="flex flex-row items-center justify-between mb-1">
              <p className="text-sm">Pork &amp; Fennel Sausage Roll</p>
              <p className="text-sm">$5.00</p>
            </div>
          </div>
        </div>
      </div> */}
      <footer className="flex flex-col w-full p-4">
        <div className="flex flex-row items-center justify-center w-full mb-4">
          <a href="https://www.instagram.com/sardean.cafe">
            <FaFacebook className="text-xl mr-2" />
          </a>
          <a href="https://www.instagram.com/sardean.cafe">
            <FaInstagram className="text-xl" />
          </a>
        </div>
        <div className="flex flex-col items-center  w-full">
          <a
            href={googleLink}
            target="_blank"
            className="font-semibold mb-2 text-sky-700"
            rel="noreferrer"
          >
            Shop 1/231 Whale Beach Road{" "}
          </a>
          <div className="flex flex-col">
            <p className="font-semibold">Opening Times</p>
            <p>Mon: 7:00am - 2:00pm</p>
            <p>Tues: CLOSED</p>
            <p>Wed-Sun: 7:00am - 2:00pm</p>
          </div>
          {/* <div className="flex md:flex-row">
            <p className="font-semibold mr-2">Store Times: </p>
            <p>Mon-Sun: 6:30am - 6:00pm</p>
          </div> */}
          <p className="text-xs font-light mt-4">
            We acknowledge the Traditional Owners of country throughout
            Australia, and acknowledge their continuing connection to land,
            waters and community. We pay our respects to Elders past, present
            and emerging.
          </p>
        </div>
      </footer>
    </div>
  );
}
