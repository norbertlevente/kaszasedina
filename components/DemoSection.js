import React from "react";
import Image from "next/image";
import ButtonExternal from "./ButtonExternal";

const DemoSection = () => {
  return (
    <section className="bg-base-100" id="demo">
      <div className="py-24 max-md:px-8 max-w-3xl mx-auto">
        <div className="leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto">
          <Image
            alt="DSC 8214"
            loading="lazy"
            width="300"
            height="450"
            decoding="async"
            data-nimg="1"
            className="w-32 h-32 md:w-52 md:h-52 rounded-lg float-left mr-8 mb-8 object-center object-cover"
            style={{
              color: "transparent",
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 320'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX38tz69uLn3bzt5cbk2LP36836367y7dbc0abfw5mWYkfy2bDLjW3LjGLgzJ+yGwYIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nCXEiQnAMAwEwdXptZ30324wgWEw49eda2U34bV3eeBTz1vj4HlOOmCakAEKSQLoGx8oEQD1dVLn6QAAAABJRU5ErkJggg==')`,
            }}
            srcSet="/assets/DSC_8214.jpg 1x, /assets/DSC_8214.jpg 2x"
            src="/assets/DSC_8214.jpg"
          />
          <p className="mb-4 text-base-content md:text-lg font-medium">
            Szeretettel köszöntelek, Edina vagyok! 👋
          </p>{" "}
          {/* Escaped single quote */}
          <p className="mb-5">
            Több mint 20 éve foglalkozom gyermekek fejlesztésével, és mindig is
            az vezérelt, hogy segítsek a szülőknek és gyermekeiknek a fejlődési
            nehézségek leküzdésében.
          </p>{" "}
          {/* Escaped single quote */}
          <p className="mb-5">
            Három gyermek édesanyjaként személyesen is megtapasztaltam, milyen
            kihívásokkal néznek szembe a szülők, amikor gyermekük fejlődése nem
            úgy alakul, ahogy várnák. Miután tanítóként és fejlesztő
            pedagógusként végeztem, a saját gyermekem mozgásfejlődési problémája
            terelt a{" "}
            <a
              className="link text-base-content font-medium hover:link-accent whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
              href="blog/tsmt"
            >
              TSMT terápia felé.
            </a>{" "}
            Azóta ezzel a módszerrel dolgozom.
          </p>
          <p className="mb-5">
            Az évek során számos családdal dolgoztam együtt, és láttam, milyen nagyszerű eredmények érhetők el, ha a gyermekek személyre szabott támogatást kapnak. Hiszem, hogy minden gyermek megérdemli a legjobb lehetőséget a sikeres fejlődéshez, és itt vagyok, hogy segítsek ebben.
          </p>
          <ul className="list-inside list-decimal space-y-1.5 ml-5 mb-5">
            <li>
              <span className="text-base-content font-medium">
                Személyes tapasztalat
              </span>{" "}
              – három gyermek édesanyjaként pontosan tudom, milyen fontos a
              korai fejlesztés
            </li>
            <li>
              <span className="text-base-content font-medium">Szakértelem</span>{" "}
              – több mint 20 év szakmai tapasztalat a gyermekfejlesztés
              területén
            </li>
            <li>
              <span className="text-base-content font-medium">
                Célzott módszerek
              </span>{" "}
              – a TSMT terápia segít leküzdeni a mozgás- és fejlődési
              nehézségeket
            </li>
          </ul>
          <p>
            <a
              className="link whitespace-nowrap text-base-content hover:link-accent font-medium group"
              target="_blank"
              rel="noopener noreferrer"
              href="#testimonials"
            >
              Több mint száz család
            </a>{" "}
            bízott már meg szakértelmemben, és segítettem gyermekeik
            fejlődésében. Tudj meg többet rólam, és olvasd el, mit mondanak a
            szülők, akiknek már segítettem.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <ButtonExternal />{" "}
          {/* Adding ButtonExternal within a div to center and narrow it */}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
