import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Adatvédelmi és Adatkezelési Szabályzat | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Adatvédelmi Szabályzat | {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Utoljára frissítve: 2024-08-25

Palotásné Kaszás Edina egyéni vállalkozó
Érvényes: 2025. január 24-től

Cím: Jókai utca 28-30., 6000 Kecskemét
Telefonszám: +36 [telefonszám]
Email: palotasne.kaszasedina@gmail.com
Adószám: [adószám]

1. ÁLTALÁNOS RENDELKEZÉSEK
A jelen Adatvédelmi és Adatkezelési Szabályzat célja, hogy tájékoztassa az érintetteket a személyes adatok kezelésének elveiről, módjáról, céljairól és jogalapjáról, valamint a vonatkozó jogokról. Az adatkezelés során a vonatkozó hatályos jogszabályokat maradéktalanul betartjuk, különös tekintettel az alábbiakra:
  •	Az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR),
  •	Az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény (Info tv.),
  •	Az elektronikus kereskedelmi szolgáltatásokra vonatkozó 2001. évi CVIII. törvény.

2. WEBOLDAL HASZNÁLATA, COOKIE POLICY
A weboldalam (amennyiben létezik): szabadon látogatható regisztráció és személyes adat megadása nélkül. A weboldalon ún. „cookie”-kat (sütiket) használok, amelyek a felhasználói élmény javítását és a látogatási adatok elemzését szolgálják. A weboldal használatával a látogató elfogadja a sütik használatát.

A cookie-k kezelését a látogató a böngészője beállításaiban szabályozhatja, illetve tilthatja le.

3. HÍRLEVÉL SZOLGÁLTATÁS
Hírlevél-szolgáltatást nyújtok azoknak, akik önként feliratkoznak a szolgáltatásra. A regisztráció során megadott személyes adatokat (név, email-cím, telefonszám stb.) kizárólag az előzetes hozzájárulás alapján kezelem. A hírlevelek küldése során harmadik fél, például a Google Mail szolgáltatását használom.

A feliratkozók bármikor kérhetik adataik törlését a palotasne.kaszasedina@gmail.com email-címen.

4. ADATOK KEZELÉSE, MÓDOSÍTÁSA ÉS TÖRLÉSE
A személyes adatokat kizárólag a jelen szabályzatban meghatározott célokra használom, és csak addig tárolom, amíg az szükséges. Az érintettek kérhetik személyes adataik módosítását vagy törlését a palotasne.kaszasedina@gmail.com email-címen. A kéréseket haladéktalanul, legkésőbb 15 napon belül teljesítem.

5. JOGORVOSLATI LEHETŐSÉGEK
Ha úgy érzi, hogy személyes adatait jogosulatlanul kezeltem, tiltakozhat az adatkezelés ellen az alábbi elérhetőségeken:
  •	Email: palotasne.kaszasedina@gmail.com
  •	Postai cím: Jókai utca 28-30., 6000 Kecskemét

Ha a problémát nem sikerül rendezni, panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH):
  •	Cím: 1055 Budapest, Falk Miksa utca 9-11.
  •	Weboldal: www.naih.hu

6. ZÁRÓ RENDELKEZÉSEK
Jelen Adatvédelmi és Adatkezelési Szabályzat bármikor módosítható. A módosításokat a weboldalamon (ha van) teszem közzé, és azok a közzététel napjától hatályosak.

`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
