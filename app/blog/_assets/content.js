import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/DSC_8214.jpg";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/sandy-millar-nuS2GDpCDoI-unsplash.jpg";
import introducingSupabaseImg2 from "@/public/blog/introducing-supabase/erika-fletcher-YfNWGrQI3a4-unsplash.jpg";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  program: "program",
  tsmt: "tsmt",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.program,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Program",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Program",
    // The description of the category to display in the category page. Up to 160 characters.
    description: "Tudj meg többet a fejlesztési programjainkról.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Fejlesztési programjaink.",
  },
  {
    slug: categorySlugs.tsmt,
    title: "TSMT",
    titleShort: "TSMT",
    description: "Tudj meg többet a TSMT terápiáról.",
    descriptionShort: "Tudj meg többet a TSMT-ről",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  twitter: {
    name: "Twitter",
    svg: (
      <svg
        version="1.1"
        id="svg5"
        x="0px"
        y="0px"
        viewBox="0 0 1668.56 1221.19"
        className="w-9 h-9"
        // Using a dark theme? ->  className="w-9 h-9 fill-white"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: "GitHub",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  edina: "edina",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.edina,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Palotásné Kaszás Edina",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Tanító, fejlesztő pedagógus",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "Gyermekfejlesztési szakember, aki több mint 20 éves tapasztalattal segít a gyermekek beszéd-, mozgás- és figyelmi problémáinak leküzdésében. Három gyermek édesanyjaként és a TSMT terápia szakértőjeként elkötelezett abban, hogy a szülőket és gyermekeiket támogassa a sikeres fejlődés útján.",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: marcImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.twitter.name,
        icon: socialIcons.twitter.svg,
        url: "https://twitter.com/marc_louvion",
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "https://www.linkedin.com/in/marclouvion/",
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: "https://github.com/Marc-Lou-Org/ship-fast",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed [&>a]:text-blue-600 [&>a]:underline",
  strong: "text-base-content/90 leading-relaxed font-bold text-l lg:text-xl",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "tsmt-modszer",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "A TSMT módszer",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "A Tervezett SzenzoMotoros Tréning (TSMT) egy olyan mozgásterápia, amely az idegrendszerre gyakorolt hatása révén segít az agynak megszabadulni bizonyos akadályoktól, mint például a fennmaradt primitív reflexek.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.tsmt),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-28",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <p className={styles.p}>
            Személyre szabott gyermek-mozgásterápia és fejlesztési útmutatás,
            ami segít gyermeked testi-lelki fejlődésének a támogatásában.
            <br></br>
          </p>
          <p className={styles.p}>
            <br></br>
            Tünetek, amiket ha tapasztalsz, szüksége lehet gyermekednek
            TSMT-tornára:
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3 hónapos kortól 3 éves korig</h3>
          <p className={styles.strong}>Motoros:</p>
          <p className={styles.p}>
            Tartós táplálkozási / szopási nehézség, eltérő izomtónus, megkésett
            / eltérő mozgásfejlődés, egyensúlyi gyengeség / zavar, aszimmetria a
            test két féloldalának használata között, csecsemőkori reflexek
            tartós fennmaradása, kóros együttmozgások spontán jelentkezési,
            finommotorika késése / éretlensége, beszédmotorika beindulásának
            késése. <br></br> <br></br>
          </p>
          <p className={styles.strong}>Pszichés-kognitív:</p>
          <p className={styles.p}>
            Alvászavar, észlelési funkciók gyengesége (látás, hallás, tapintás,
            stb.), figyelem rövidsége, gyengesége, beszédértési problémák,
            kommunikációs igény kialakulásának késése / eltérése, megkésett
            beszédfejlődés, megkésett pszichomotoros fejlődés, szem-kéz
            koordináció hiánya, rövidsége, ok-okozati gondolkozás megjelenésének
            késése, szerepjáték megjelenésének hiánya, feladathelyzetbe nehezen
            bevonható. <br></br> <br></br>
          </p>
          <p className={styles.strong}>Szociális:</p>
          <p className={styles.p}>
            Nehéz megnyugtathatóság, kötődés-zavarok (organikus oka is lehet),
            együttműködési készség csökkent / kiszámíthatatlan volta, érzelmek
            megosztásának eltérő működése / hiánya, irányíthatóság nehézsége,
            tiltás meg nem értése / be nem tartása, akaratos, öntörvényű
            viselkedés, agresszió, auto-agresszió, dührohamok.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3 éves kortól 7 éves korig</h3>
          <p className={styles.strong}>Motoros:</p>
          <p className={styles.p}>
            Mozgáskoordináció gyengesége, pontatlan mozgáskivitelezés, új
            mozgások tanulásának gyengesége, lassúsága, erőadagolási problémák,
            diszpraxia, apraxia, grafomotorika éretlensége, hanyag tartás, a
            szinkronfunkciók gyengesége, a motoros kontrollfunkciók gyengesége.{" "}
            <br></br> <br></br>
          </p>
          <p className={styles.strong}>Pszichés-kognitív:</p>
          <p className={styles.p}>
            Sikertelen szobatisztaság, emlékezeti gyengeség,
            információ-feldolgozási zavar, egyidejű többcsatornás figyelem és
            tevékenységszervezés képességének gyengesége, figyelemzavar, a
            belátáson / tapasztalatokon álló gondolkozás megjelenésének késése,
            az analógiás gondolkozás megjelenésének késése, testvázlat,
            lateralizáció, téri orientáció gyengesége, diszlexia / diszkalkúlia
            veszélyeztetettség, szorongás, depresszió, fóbiák. <br></br>{" "}
            <br></br>
          </p>
          <p className={styles.strong}>Szociális:</p>
          <p className={styles.p}>
            Nehezített beilleszkedési képesség, nehezített szabályfelismerés,
            nehezített szabályelfogadás, szabálykövetés kiszámíthatatlansága,
            leválások-kötődések dinamikájának eltérései, segítségadás
            elutasítása, feladathelyzetekből való kiszállás, viselkedésszervezés
            során a kontrollfunkciók gyengesége (társas kapcsolatokban
            megmutatkozva), autizmus spektrum zavar, gyermekkori szorongás,
            depresszió.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Kisiskolás kortól</h3>
          <p className={styles.strong}>Motoros:</p>
          <p className={styles.p}>
            Sportági alaptechnikák elsajátításának pontatlansága, lassúsága,
            nehézségei, lordosis. kiphosis. <br></br> <br></br>
          </p>
          <p className={styles.strong}>Pszichés-kognitív:</p>
          <p className={styles.p}>
            Tanulási zavar (olvasás, írás, számolás), lassú, nehézkes tanulási
            tempó. <br></br> <br></br>
          </p>
          <p className={styles.strong}>Szociális:</p>
          <p className={styles.p}>
            Áldozat/ bohóc/ agresszor szerepek, pszichoszomatikus tünetek
            megjelenése, az időbeosztás nehézségei, játszmák. <br></br>{" "}
            <br></br>
            Ezek a tünetek azért veszélyesek, mert a gyerek az aktuálisan
            mozgósítható képességeivel rövidebb idejű, alacsonyabb minőségű
            teljesítményre/kooperációra képes, mint kortársai. Célirányos
            vizsgálat és terápia nélkül rögzül az a szint, ahol a tünetek
            először jelentkeztek. Iskolai kudarcok, kapcsolati, önértékelési
            problémák, zavarok jelenhetnek meg. Mindez látványosan hat azon
            kompetenciák kialakulására és megerősödésére, amelyekre minden
            munkaerőpiacra beilleszkedni akaró XXI. századi embernek szüksége
            van. (Forrás: Lakatos Katalin Ph.D)
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Ismert diagnózisok</h3>
          <p className={styles.p}>
            Amelyek esetében hatékony a TSMT I, TSMT II és/vagy HRG terápiák
            alkalmazása: hiperaktivitás, figyelemzavar, autizmus,
            Asperger-szindróma, hipotónia, megkésett beszédfejlődés, megkésett
            mozgásfejlődés, nagy- és/vagy finommotorikus ügyetlenség, értelmi
            akadályozottság, cerebral paresis (CP).
          </p>
        </section>
      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "felmeres",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "1. Felmérés",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "A Longitudinális Komplex vizsgálat, LongiKid olyan szenzomotoros teszt, amely már 3 hónapos kortól 11 éves korig életkoronként  elkészített fejlődési skála és tünetészlelő program segítségével objektív képet mutat az esetleges organikus értetlenség tüneteiről.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.program),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-19",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg2,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Felmérés</h2>
          <p className={styles.p}>
            A Longitudinális Komplex vizsgálat, LongiKid olyan szenzomotoros
            teszt, amely már 3 hónapos kortól 11 éves korig életkoronként
            elkészített fejlődési skála és tünetészlelő program segítségével
            objektív képet mutat az esetleges organikus értetlenség tüneteiről.
            A vizsgálati protokoll része még egy egyszerű szemészeti,
            audiológiai szűrés, illetve izomtónus vizsgálat is. A teszt kiterjed
            az életkoronként elvárható mozgásteljesítményre, az idegrendszeri
            érettségre, valamint a kognitív és nyelvi teljesítményre. <br></br>{" "}
            <br></br>A LongiKid eszközrendszere a BHRG alapítvány által
            kifejlesztett, 2013-ban Magyar Terméknagydíjat is nyert. Találhatóak
            benne játékok, mérőeszközök (hallásvizsgálat), az egyensúlyi
            rendszert tesztelő eszközök, szemészeti szűrőeljárások (pld. vísus
            vizsgálat), valamint saját feladatlapok is, melyek a grafomotorika,
            a vizuális feldolgozás és nyelvi terület feladatait tartalmazzák.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Állapot- és mozgásvizsgálat (ÁMV)</h3>
          <p className={styles.p}>
            Neuro-szenzomotoros szűrőeljárás, amely 5 éves kortól alkalmas az
            idegrendszer érési zavar azonosítására és a sikeres iskolai
            beváláshoz szükséges funkciók mérésére.
          </p>
        </section>
      </>
    ),
  },

  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "tsmt-egyeni",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "2. TSMT-I. egyéni terápia",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "A terápia lényege, hogy olyan szenzoros ingereket kap a gyermek, ami jólesik a számára, például plédben egyenletes lüktetésre lengetjük, miközben énekelünk és szemkontaktust veszünk fel vele, nagylabdán különböző irányokban mozgatjuk, és folytathatnám a több száz feladatunkkal.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.program),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-18",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg2,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>TSMT-I</h2>
          <p className={styles.p}>
            A gyermek életkorát, állapotát, érettségét, terhelhetőségét
            vizsgálati eredményét figyelembe véve történik a javaslattétel a
            TSMT-I (egyéni) terápiára. A terápia lényege, hogy olyan szenzoros
            ingereket kap a gyermek, ami jólesik a számára, például plédben
            egyenletes lüktetésre lengetjük, miközben énekelünk és
            szemkontaktust veszünk fel vele, nagylabdán különböző irányokban
            mozgatjuk, és folytathatnám a több száz feladatunkkal. <br></br>{" "}
            <br></br>
            Az egyéni terápiákban jelentős hangsúly helyeződik a sokoldalú
            vesztibuláris ingerlésre (például plédes/függőágyas lengetések),
            mely által a gyermek egyensúlyszervét ingereljük. Ezzel az a cél,
            hogy a gyermek egyensúlyszervébe közvetítsünk passzív ingereket,
            mert az egyensúlyszerv összeköttetésben van a vizuális (látó),
            auditív (halló) és beszélő rendszerrel. Az ide közvetett ingerek
            segítik érni az idegrendszert, hatnak az izomtónusra, ezáltal a
            mozgásra. Ennek eredményeképpen javulni fog a gyermek vizuális,
            auditív feldolgozása, mozgása, beszéde.<br></br> <br></br>A terápia
            során a gyermek komplex vizuális-auditív-taktilis-proprioceptív
            ingert kap, melyek rendszeres ismétlésével vizuális (látott),
            auditív(hallott), taktilis(tapintott), térbeli, mozgásos emléknyomok
            alakulnak ki, miközben végigjárjuk az ontogenetikus fejlődésmenetet
            a fejemeléstől egészen a felállásig. A hiányzó lépcsőfokokat
            megerősítjük, „újrahuzalozzuk” az idegrendszer kéreg alatti
            érző-mozgató területeit. A terápia során szoros érzelmi kohéziót
            alakítunk ki a szülő és a gyerek között.<br></br> <br></br>
            Az egyéni terápiát home-training (otthon végezhető tréning) formában
            tanítom be a szülőknek, megbeszélve a feladatok sorrendjét,
            ismétlésszámát, heti gyakoriságát. A családok a betanított
            feladatsort otthon végzik gyermekükkel, majd 4 hét múlva egy
            kontrollvizsgálaton bemutatják a feladatsort, elmondják az aktuális
            állapotot. Ennek tükrében történik a feladatok átírása.<br></br>{" "}
            <br></br>A TSMT-I átlagos időtartama 6-12 hónap. Nagyjából ennyi idő
            szükséges ahhoz, hogy a gyermek csoportos terápián (TSMT-II) tudjon
            részt venni, amennyiben szükséges a továbbiakban.
          </p>
        </section>
      </>
    ),
  },

  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "tsmt-csoportos",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "3. TSMT-II. csoportos terápia",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Csoportos terápia azoknak a gyermekeknek javasolt, akik Állapot- és mozgásvizsgálatuk alapján enyhén megkésett (eltérő) teljesítményt vagy életkoruknak nem megfelelő teljesítményt mutatnak, de együttműködőek, terhelhetőek, irányíthatóak.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.program),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-18",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg2,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>TSMT-II</h2>
          <p className={styles.p}>
            Csoportos terápia azoknak a gyermekeknek javasolt, akik Állapot- és
            mozgásvizsgálatuk alapján enyhén megkésett (eltérő) teljesítményt
            vagy életkoruknak nem megfelelő teljesítményt mutatnak, de
            együttműködőek, terhelhetőek, irányíthatóak.<br></br> <br></br>
            Közel ezer feladatból, izgalmas eszközök felhasználásával, a
            fokozódó terhelés elvét figyelembe véve állítom össze és mutatom be
            minden alkalommal azt a pályát, amit meg kell jegyezniük, le kell
            „küzdeniük”. Eközben észrevétlenül fejlődik a gyermekek nagymozgása,
            testvázlata, térbeli tájékozódása, oldalisága, mozgáskoordinációja,
            egyidejű, többcsatornás figyelme, emlékezete, problémamegoldó
            gondolkodása, szerialitása, viselkedéskontrollja, feladat- és
            szabálytudata, illetve feladattartása.<br></br> <br></br>A terápia
            során figyelmi, emlékezeti aktivitási folyamatokat ingerlünk.
            Figyelünk arra, hogy a beszéd és a mozgás szinkronban legyen, hiszen
            ez a tanulás alapja az iskolában. Tehát néz, hall, beszél,
            gondolkodik, mozog egyszerre. Ez a jó szenzomotoros szinkron, amitől
            függ a sikeres iskolai beválás. A gyerekek azokat az idegpályákat
            fogják a tanulásra használni, amelyeket ezekkel a nagymozgásokkal ki
            tudunk alakítani.<br></br> <br></br>A TSMT-II (a TSMT-I-hez
            hasonlóan) is alkalmazza a fokozódó terhelés elvét, vagyis a
            könnyebbtől a nehezebb, egyszerűbbtől az összetettebb, a lassabbtól
            a gyorsabb felé haladunk.<br></br> <br></br>A csoportos terápia
            feladatai közé több kognitív (értelmi) feladatokat teszünk, mely
            során a gyermekeknek figyelniük, emlékezniük, gondolkodniuk,
            helyzeteket megoldaniuk, beszélniük, rajzolniuk, társaikkal
            együttműködve kell. Tehát a gyermek figyeli, megfigyeli, megérti a
            feladathelyzetet, majd egyedül vagy társaival kooperálva megtervezi
            és kivitelezi a helyzetnek megfelelő (adaptív) válaszát.<br></br>{" "}
            <br></br>A csoportos foglalkozáson heti 2×45 percben vesznek részt a
            gyerekek kislétszámú csoportban.<br></br> <br></br>A csoportos
            TSMT-nek akkor van vége, ha az Állapot- és mozgásvizsgálat eredménye
            azt mutatja és bekövetkezik az általános bejavulás motoros,
            pszichés-kognitív, szociális területen. A gyermek gyorsabb,
            hatékonyabb, terhelhetőbb, elfogadja az irányítást és együttműködő.
          </p>
        </section>
      </>
    ),
  },

  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "iskolaelokeszito",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "ISKOLAELŐKÉSZTŐ program",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Minden gyermek életében meghatározó pont az iskolakezdés. A program célja, hogy , magabiztosan motiváltan kezdjék meg a gyermekek a tanulmányaikat.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.program),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-29",
    image: {
      // The image to display in <CardArticle /> components.
      src: introducingSupabaseImg2,
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "/blog/introducing-supabase/header.jpg",
      alt: "Supabase and ShipFast logo combined",
    },
    // The actual content of the article that will be shown under the <h1> title in the article page.
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Supabase and ShipFast logo combined"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>ISKOLAELŐKÉSZTŐ program</h2>
          <p className={styles.p}>
            Iskolára felkészítő csoportos foglalkozás az “Áthidaló Iskola
            Előkészítő Program” segítségével 8 hónap, 6 hónap alatt. <br></br>{" "}
            <br></br> Ezen a foglalkozáson a grafomotorium; nagy és
            finommozgások ügyesítésével; a befogadó és kifejelző beszéd
            fejlesztésével; orientációs képességek fejlesztésével készülünk az
            iskolára: „iskolásat” játszunk, csoportos (max. 4-5 fő) foglalkozás
            keretein belül az Áthidaló Iskola Előkészítő Program alapján.{" "}
            <br></br> <br></br>
            Jelentkezés <a href="www.athidalo.com/palotasne.edina">ezen az oldalon</a> a
            “Jelentkezés” gombra kattintva.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>Mi az Áthidaló Program célja?</h3>
          <p className={styles.p}>
            A nyolc hónapos normál, valamint a négy-, illetve hat hónapos
            intenzív iskolaelőkészítő foglalkozássorozat célja, hogy a gyermekek
            tanulmányaik megkezdése előtt, saját tempójukban, komplex,
            szakemberek által támogatott folyamat során sajátítsák el azokat a
            készségeket és képességeket, melyek a sikeres iskolai működéshez
            szükségesek. <br></br> <br></br>Szülői kérésre felmérjük a
            jelentkező gyermekek aktuális állapotát, majd legjobb tudásomnak
            megfelelően az iskolában szükséges alapkészségek fejlesztésével
            foglalkozunk , kis létszámú csoportokban.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>
            Hogyan működik az Áthidaló Iskola Előkészítő Program?
          </h3>
          <p className={styles.p}>
            A gyerekek heti rendszerben vesznek részt élménypedagógia alapú,
            játékos foglalkozásainkon, melyek megadják számukra az örömteli
            tanulás élményét. Az Áthidaló Program egyes elemei egymásra épülve
            biztosítják a fokozatosságot a nagymozgásos feladatoktól a
            grafomotorikai fejlesztőfeladatok kifinomultsága felé. A gyerekek a
            különféle szórakoztató tevékenységek és gyakorlatok során
            betekintést nyernek a számok és a betűk varázslatos világába,
            felfedezik a ritmusok erdejét és kalandoznak a hangok
            labirintusában. A nyolchónapos program végére komfortossá válnak
            számukra az iskolai működés alapszabályai. Megismerik önmagukat épp
            úgy, mint a jól végzett munka örömét, a hibák keserédes ízét és az
            újrakezdés erejét.
          </p>
        </section>
      </>
    ),
  },
];
