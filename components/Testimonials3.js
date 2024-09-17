import Image from "next/image";
import config from "@/config";

// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
  
    // REQUIRED
    name: "D. Márta",
    // REQUIRED
    text: "Edina néni iskolaelőkészítő óráinak köszönhetően gyermekem magabiztosabb lett, szebben színez és ügyesebben számol. Azért ajánlom, mert kisfiam minden foglalkozáson nagyon jól érezte magát, így egyfajta élmény volt neki a sulira való készülődés.",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img:
      "/assets/philippe-murray-pietsch-wQfSjUM8xsg-unsplash.jpg"
  },
  {
    name: "K. Réka",
    text: "Alízzal a negyedik TSMT gyakorlatsorozatot kezdtük meg nemrég. A kislányom egy roppant nyitott és kedves gyermek, akinek mindazonáltal nagy nehézséget okozott és okoz máig az érzelemszabályozás, és noha erős és tökéletesen egészséges fizikailag, mozgása sokszor koordinálatlan, imbolygó, pl. miután megtanult járni, még nagyon hosszú ideig nekiment fejjel ajtófélfának, széknek, falnak stb. Míg a nagyobbik lányomnál nagyon nehezen találtam meg, hogyan motiváljam tornára, Alíz szereti csinálni, ilyenkor a figyelmem csak rá irányul, ettől különlegesek ezek a napi 20 percek, a sok érintés és mondóka nagy meghittséget ad, és a humornak is mindig van hely.",
    img: "/assets/sarah-cervantes-79GLX12EY98-unsplash.jpg",
  },
  {
    name: "F. Andrea",
    text: "Edina néni foglalkozásainak hála, kislányom jelentős fejlődést mutatott mind a finommotorika, mind a szociális készségek terén. Korábban nehezen barátkozott és tartott az új helyzetektől, de a támogató és szeretetteljes légkörben magabiztosabbá vált. Különösen tetszik, hogy Edina egyénre szabottan foglalkozik a gyerekekkel, figyelembe véve az egyedi igényeiket és képességeiket. Minden szülőnek szívből ajánlom, aki szeretné megkönnyíteni gyermeke számára az iskolakezdést.",
    img: "/assets/brooke-cagle-NoRsyXmHGpI-unsplash.jpg", 
  },
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
              {testimonial.username && (
                <div className="mt-0.5 text-sm text-base-content/80">
                  @{testimonial.username}
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              Több mint 100 elégedett szülő és gyerek!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Ne csak a mi szavunknak higgy – íme, mit mondanak azok, akik már próbálták.
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} />
          ))}
        </ul>
      </div>
    </section>
    
  );
};

export default Testimonials3;
