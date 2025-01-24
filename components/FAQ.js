"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Hogyan foglalhatok időpontot egy foglalkozásra?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Egyszerűen kattints a “Foglalj időpontot” gombra ezen a weboldalon,
        amely elvisz a foglalási oldalra. Itt kiválaszthatod a megfelelő
        foglalkozás típusát és időpontját, majd lefoglalhatod a kívánt alkalmat.
      </div>
    ),
  },
  {
    question:
      "Mennyi ideig tart egy foglalkozás, és milyen gyakran kell járni?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Neuro-szenzomotoros szemléletű Longitudinális Komplex vizsgálat
        (LongiKid©) Időtartam: 90 perc <br></br> TSMT (tervezett szenzomotoros)
        tréning szükségességének megítéléséhez. A 60-90 perces játékos
        mozgásvizsgálat alatt a gyermek képességei motoros, pszichés-kognitív és
        szociális területen kerülnek feltérképezésre. A vizsgálatot anamnézis
        felvétel, eddigi életesemények megbeszélésével kezdjük, majd
        szülőkonzultációval zárjuk. Pedagógiai szakvélemény írásban igényelhető.
      </div>
    ),
  },
  {
    question: "Hogyan készülhetek fel az első konzultációra?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        A letölthető anamnézislap kitöltése, és visszaküldése a felmérés előtt 2
        nappal-elősegíti a terapeutát a munkahipotézis felállításában. Érdemes
        összegyűjteni a gyermek fejlődésével kapcsolatos megfigyeléseidet, és ha
        van korábbi szakvéleményed vagy orvosi leleted, hozd magaddal. Az első
        találkozón közösen átbeszéljük a célokat és a megfelelő terápiás tervet.
      </div>
    ),
  },
  {
    question: "Mit jelent az egyéni TSMT?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Az egyéni TSMT célja, hogy a gyermek jelenlegi fejlettségi szintjét az
        adott életkorban elvárhatóhoz emeljük, fenntartsuk. Azoknak a
        gyerekeknek, javaslom, akik az eddigi fejlődésük során valamilyen
        eltérést mutattak. Ezek a tünetek jelentkezhetnek a mozgás és beszéd
        területén, az értelmi funkciókban, figyelmükben, értelmi fejlődésükben,
        aktivitásukban, illetve szociális téren. <br></br> <br></br>
        Az egyéni terápiát home-training (otthon végezhető tréning) formában
        tanítom be a szülőknek, megbeszélve a feladatok sorrendjét,
        ismétlésszámát, heti gyakoriságát. A családok a betanított feladatsort
        otthon végzik gyermekükkel, majd 4 hét múlva egy kontrollvizsgálaton
        bemutatják a feladatsort, elmondják az aktuális állapotot. Ennek
        tükrében történik a feladatok átírása.
      </div>
    ),
  },
  {
    question: "Mi az a TSMT terápia, és hogyan segít a gyermekemnek?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        A TSMT (Tervezett SzenzoMotoros Tréning) egy olyan mozgásterápia, amely
        segít a gyermekek idegrendszeri érettségének javításában. A terápia
        szenzoros és motoros feladatokkal dolgozik, amelyek fejlesztik a
        mozgáskoordinációt, a figyelmet, a beszédet és a viselkedést. Személyre
        szabottan alkalmazzuk a gyermek egyéni fejlődési igényeire. (bővebben A
        program-részben olvashatsz erről!)
      </div>
    ),
  },
  {
    question: "Hogyan segítesz a beszédfejlődési zavarokkal küzdő gyerekeknek?",
    answer: (
      <p>
        A terápia során a gyermek komplex
        vizuális-auditív-taktilis-proprioceptív ingert kap, melyek rendszeres
        ismétlésével vizuális (látott), auditív(hallott), taktilis(tapintott),
        térbeli, mozgásos emléknyomok alakulnak ki, miközben végigjárjuk az
        ontogenetikus fejlődésmenetet a fejemeléstől egészen a felállásig. A
        hiányzó lépcsőfokokat megerősítjük, „újrahuzalozzuk” az idegrendszer
        kéreg alatti érző-mozgató területeit. A terápia során szoros érzelmi
        kohéziót alakítunk ki a szülő és a gyerek között.
      </p>
    ),
  },
  {
    question:
      "Milyen 'tünetek' esetén javasolt a mozgáskoordinációs fejlesztés?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Ha a gyermeked egyensúlyi problémákkal küzd, gyakran elesik, nehezen
        használja a finommotoros készségeit (pl. cipőfűzés, ceruza használata),
        vagy mozgásügyessége elmarad a kortársaihoz képest, akkor a
        mozgáskoordinációs tréning segíthet. A célzott gyakorlatok segítenek
        megerősíteni a testtudatosságot és javítani az egyensúlyt.
      </div>
    ),
  },
  {
    question: "Mi a teendő figyelmi és koncentrációs zavarok esetén?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        A figyelmi és koncentrációs zavarok esetén strukturált, játékos
        feladatokon keresztül segítek fejleszteni ezeket a készségeket. A
        foglalkozások során a gyermek megtanul fókuszálni és hatékonyabban
        végezni a feladatokat, ami javítja az iskolai teljesítményt is.
      </div>
    ),
  },
  {
    question: "Hogyan kezelhetők a szenzoros feldolgozási zavarok?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        A szenzoros feldolgozási zavarok esetén a TSMT módszert alkalmazva olyan
        szenzoros integrációs tréningeket kínálok, amelyek segítenek a
        gyermekednek megtanulni jobban kezelni az érzékszervi ingereket. A
        különböző ingerekhez való fokozatos hozzászokás segíti a nyugodtabb,
        kiegyensúlyozottabb viselkedést mindennapi helyzetekben.
      </div>
    ),
  },
  {
    question:
      "Mi a megoldás a viselkedésbeli problémák és szorongás kezelésére?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Ha a gyermeked gyakran szorong, stresszel új helyzetekben, agressziót
        vagy visszahúzódást mutat társas helyzetekben, akkor a terápiás
        foglalkozások során segítek neki megtanulni, hogyan kezelje ezeket az
        érzéseket. A gyakorlatok célja, hogy a gyermek magabiztosabban reagáljon
        a stresszhelyzetekre, és javítsa a társas kapcsolatait.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Gyakran Ismételt Kérdések
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
