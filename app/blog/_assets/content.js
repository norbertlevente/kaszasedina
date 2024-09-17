import Image from "next/image";
import marcImg from "@/app/blog/_assets/images/authors/DSC_8214.jpg";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/sandy-millar-nuS2GDpCDoI-unsplash.jpg";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  hirek: "hírek",
  tippek: "tippek",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.hirek,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Hírek és blog",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Hírek",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Legújabb híreink, eseményeink és blog posztjaink.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Legújabb híreink",
  },
  {
    slug: categorySlugs.tippek,
    title: "Tippek és tanácsok",
    titleShort: "Tippek",
    description:
      "Olvasd el legújabb tippjeinket és tanácsainkat.",
    descriptionShort:
      "Olvasd el legújabb tippjeinket és tanácsainkat.",
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
  p: "text-base-content/90 leading-relaxed",
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
    slug: "tsmt",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "A TSMT módszerről",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "A Tervezett SzenzoMotoros Tréning (TSMT) egy olyan mozgásterápia, amely az idegrendszerre gyakorolt hatása révén segít az agynak megszabadulni bizonyos akadályoktól, mint például a fennmaradt primitív reflexek.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.tippek),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-18",
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
          <h2 className={styles.h2}>Bevezetés</h2>
          <p className={styles.p}>
            A Tervezett SzenzoMotoros Tréning (TSMT) egy olyan mozgásterápia, amely az idegrendszerre gyakorolt hatása révén újraszervezi és újrahuzalozza a neurológiai alapokat. Segít az agynak megszabadulni bizonyos akadályoktól, mint például a fennmaradt primitív reflexek. Ezek a reflexek befolyásolják a mozgást, beszédet, pszichikumot és a viselkedést is.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. A TSMT hatása</h3>
          <p className={styles.p}>
            A tervezett szenzomotoros terápia az első lépés a fejlődésben, amely végső soron hatással van a tanulásra, viselkedésre és mindennapi életvitelünkre. A terápia segít rendezni az alapvető idegrendszeri funkciókat, amelyekre épülnek az értelmi képességek, a figyelem és a pszichés stabilitás. Ez a módszer noninvazív, szelíd gyógymód, amely gyógyszeres kezelés nélkül képes hatni az idegrendszer működésére.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>2. Mi is az a TSMT?</h3>
          <p className={styles.p}>
            A TSMT, vagyis Tervezett SzenzoMotoros Tréning, egy olyan terápiás módszer, amely egyénre szabottan segít a gyermekek szenzoros és mozgásos fejlesztésében. A terápia megtervezett, mivel minden gyermek egyedi tünetegyüttesére van szabva. A szenzoros rendszerekre hat, azaz az érzékszerveinkre, és motoros, mivel mozgásos gyakorlatokkal segítjük a fejlődést. Tréning formájában zajlik, azaz rendszeres, ismétlődő gyakorlatokon keresztül fejleszti a gyermekeket. Ez a terápia nemcsak a fizikai mozgás javításában, hanem a figyelem, viselkedés és pszichés stabilitás fejlesztésében is hatékony.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3. Milyen tünetek esetén segíthet a TSMT?</h3>
          <p className={styles.p}>
            A TSMT terápia számos tünetet kezelhet, például:
            <ul className="list-inside list-disc space-y-1.5 ml-5">
              <li>Lassú vagy megkésett beszédfejlődés</li>
              <li>Megkésett mozgásfejlődés (pl. késői járás, kúszás-mászás kimaradása)</li>
              <li>Izomtónus problémák, mint laza vagy feszes izomzat</li>
              <li>Darabos, koordinálatlan mozgás</li>
              <li>Félénkség új helyzetekkel vagy mozgásformákkal szemben</li>
              <li>Túlérzékenység vagy alulérzékenység az érzékszervi ingerekre</li>
              <li>Figyelmi és koncentrációs nehézségek</li>
              <li>Viselkedésbeli problémák, mint agresszió, hiperaktivitás, vagy szorongás</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>4. Hogyan zajlik a TSMT terápia?</h3>
          <p className={styles.p}>
            A TSMT terápia során speciális, szenzo-motoros feladatokat alkalmazunk, amelyek a gyermekek idegrendszeri érettségét és mozgáskoordinációját fejlesztik. A feladatok célzottan segítenek az egyensúly, ritmusérzék és koordináció javításában, így a gyermekek képesek lesznek jobban alkalmazkodni a környezetükhöz, és javulnak kognitív képességeik is. A terápia kétféle formában történhet: egyéni és csoportos foglalkozásokon. Az egyéni torna lehetőséget ad arra, hogy a szülők otthon is gyakoroljanak gyermekükkel, míg a csoportos torna a közösségi készségek fejlesztésére is kiváló.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>5. Miért fontos az archaikus reflexek integrálása?</h3>
          <p className={styles.p}>
            Az emberi agy fejlődésének nagy része a születés után zajlik. A csecsemőkori reflexek, mint a Galant vagy ATNR, egy éves korig integrálódnak, vagyis a magasabb rendű agyi központok szabályozása alá kerülnek. Ha ezek a reflexek nem integrálódnak megfelelően, az akadályozhatja a mozgás, testtartás és egyensúly fejlődését. A TSMT terápiás torna segít ezeknek az archaikus reflexeknek az integrálásában, ami az alapja a magasabb rendű motoros és kognitív képességek fejlődésének.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>6. Hogyan segít a TSMT a mindennapi életben?</h3>
          <p className={styles.p}>
            A TSMT terápia hatására a gyermekek mozgása koordináltabbá és harmonikusabbá válik, javul a figyelmük és koncentrációjuk, valamint a társas kapcsolataik is fejlődnek. A terápia hozzájárul a beszédfejlődéshez, az érzékelési ingerek jobb feldolgozásához, és az önuralom növekedéséhez. A gyermekek iskolai teljesítménye javul, jobban alkalmazkodnak a változó helyzetekhez, és könnyebben kezelik az érzelmi kihívásokat. A terápia nemcsak a gyerekekre van pozitív hatással, hanem a szülő-gyermek kapcsolatra is, hiszen a közös munkával minőségi időt töltenek együtt.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>7. Miért szelíd gyógymód?</h3>
          <p className={styles.p}>
            A TSMT terápia noninvazív, nem igényel gyógyszeres kezelést vagy sebészeti beavatkozást. Mozgásterápiával, életmódbeli változtatásokkal és étrendi tanácsokkal természetes módon segítjük az idegrendszer fejlődését. A TSMT ráadásul remek lehetőség családépítésre is: a közös munka, a közösen elért eredmények megerősítik a szülő-gyermek kapcsolatot, és javítják a család dinamikáját.
          </p>
        </section>

      </>
    ),
  },
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "proba",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Teszt blog poszt",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    description:
      "Ez egy teszt.",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.tippek),
    ],
    // The author of the article. It's used to generate a link to the author's bio page.
    author: authors.find((author) => author.slug === authorSlugs.edina),
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2024-09-17",
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
          <h2 className={styles.h2}>Bevezetés</h2>
          <p className={styles.p}>
            A Tervezett SzenzoMotoros Tréning (TSMT) egy olyan mozgásterápia, amely az idegrendszerre gyakorolt hatása révén újraszervezi és újrahuzalozza a neurológiai alapokat. Segít az agynak megszabadulni bizonyos akadályoktól, mint például a fennmaradt primitív reflexek. Ezek a reflexek befolyásolják a mozgást, beszédet, pszichikumot és a viselkedést is.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. A TSMT hatása</h3>
          <p className={styles.p}>
            A tervezett szenzomotoros terápia az első lépés a fejlődésben, amely végső soron hatással van a tanulásra, viselkedésre és mindennapi életvitelünkre. A terápia segít rendezni az alapvető idegrendszeri funkciókat, amelyekre épülnek az értelmi képességek, a figyelem és a pszichés stabilitás. Ez a módszer noninvazív, szelíd gyógymód, amely gyógyszeres kezelés nélkül képes hatni az idegrendszer működésére.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>2. Mi is az a TSMT?</h3>
          <p className={styles.p}>
            A TSMT, vagyis Tervezett SzenzoMotoros Tréning, egy olyan terápiás módszer, amely egyénre szabottan segít a gyermekek szenzoros és mozgásos fejlesztésében. A terápia megtervezett, mivel minden gyermek egyedi tünetegyüttesére van szabva. A szenzoros rendszerekre hat, azaz az érzékszerveinkre, és motoros, mivel mozgásos gyakorlatokkal segítjük a fejlődést. Tréning formájában zajlik, azaz rendszeres, ismétlődő gyakorlatokon keresztül fejleszti a gyermekeket. Ez a terápia nemcsak a fizikai mozgás javításában, hanem a figyelem, viselkedés és pszichés stabilitás fejlesztésében is hatékony.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3. Milyen tünetek esetén segíthet a TSMT?</h3>
          <p className={styles.p}>
            A TSMT terápia számos tünetet kezelhet, például:
            <ul className="list-inside list-disc space-y-1.5 ml-5">
              <li>Lassú vagy megkésett beszédfejlődés</li>
              <li>Megkésett mozgásfejlődés (pl. késői járás, kúszás-mászás kimaradása)</li>
              <li>Izomtónus problémák, mint laza vagy feszes izomzat</li>
              <li>Darabos, koordinálatlan mozgás</li>
              <li>Félénkség új helyzetekkel vagy mozgásformákkal szemben</li>
              <li>Túlérzékenység vagy alulérzékenység az érzékszervi ingerekre</li>
              <li>Figyelmi és koncentrációs nehézségek</li>
              <li>Viselkedésbeli problémák, mint agresszió, hiperaktivitás, vagy szorongás</li>
            </ul>
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>4. Hogyan zajlik a TSMT terápia?</h3>
          <p className={styles.p}>
            A TSMT terápia során speciális, szenzo-motoros feladatokat alkalmazunk, amelyek a gyermekek idegrendszeri érettségét és mozgáskoordinációját fejlesztik. A feladatok célzottan segítenek az egyensúly, ritmusérzék és koordináció javításában, így a gyermekek képesek lesznek jobban alkalmazkodni a környezetükhöz, és javulnak kognitív képességeik is. A terápia kétféle formában történhet: egyéni és csoportos foglalkozásokon. Az egyéni torna lehetőséget ad arra, hogy a szülők otthon is gyakoroljanak gyermekükkel, míg a csoportos torna a közösségi készségek fejlesztésére is kiváló.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>5. Miért fontos az archaikus reflexek integrálása?</h3>
          <p className={styles.p}>
            Az emberi agy fejlődésének nagy része a születés után zajlik. A csecsemőkori reflexek, mint a Galant vagy ATNR, egy éves korig integrálódnak, vagyis a magasabb rendű agyi központok szabályozása alá kerülnek. Ha ezek a reflexek nem integrálódnak megfelelően, az akadályozhatja a mozgás, testtartás és egyensúly fejlődését. A TSMT terápiás torna segít ezeknek az archaikus reflexeknek az integrálásában, ami az alapja a magasabb rendű motoros és kognitív képességek fejlődésének.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>6. Hogyan segít a TSMT a mindennapi életben?</h3>
          <p className={styles.p}>
            A TSMT terápia hatására a gyermekek mozgása koordináltabbá és harmonikusabbá válik, javul a figyelmük és koncentrációjuk, valamint a társas kapcsolataik is fejlődnek. A terápia hozzájárul a beszédfejlődéshez, az érzékelési ingerek jobb feldolgozásához, és az önuralom növekedéséhez. A gyermekek iskolai teljesítménye javul, jobban alkalmazkodnak a változó helyzetekhez, és könnyebben kezelik az érzelmi kihívásokat. A terápia nemcsak a gyerekekre van pozitív hatással, hanem a szülő-gyermek kapcsolatra is, hiszen a közös munkával minőségi időt töltenek együtt.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>7. Miért szelíd gyógymód?</h3>
          <p className={styles.p}>
            A TSMT terápia noninvazív, nem igényel gyógyszeres kezelést vagy sebészeti beavatkozást. Mozgásterápiával, életmódbeli változtatásokkal és étrendi tanácsokkal természetes módon segítjük az idegrendszer fejlődését. A TSMT ráadásul remek lehetőség családépítésre is: a közös munka, a közösen elért eredmények megerősítik a szülő-gyermek kapcsolatot, és javítják a család dinamikáját.
          </p>
        </section>

      </>
    ),
  },
];
