import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Általános szerződési feltételek | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          ÁSZF - {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Utoljára frissítve: September 26, 2024

Üdvözöljük!

Jelen Általános Szerződési Feltételek (“ÁSZF”) szabályozzák a Palotásné Kaszás Edina által nyújtott szolgáltatások igénybevételét. A szolgáltatások igénybevételével Ön elfogadja a jelen feltételeket.

1. A Szolgáltatás Leírása
Palotásné Kaszás Edina a gyermekek mozgás- és képességfejlesztésére specializálódott szolgáltatásokat nyújt, ideértve a TSMT terápiát, beszédfejlesztést, figyelem- és koncentrációjavító gyakorlatokat, érzékelési és viselkedési problémák kezelését.

2. Tulajdonjog és Felhasználási Feltételek
Az igénybe vett szolgáltatások kizárólag személyes és nem kereskedelmi célú felhasználásra vehetők igénybe. Az órákon és konzultációkon nyújtott tanácsokat és útmutatásokat tilos harmadik fél számára értékesíteni vagy kereskedelmi célokra felhasználni.

3. Adatkezelés és Adatvédelem
A szolgáltatások igénybevételéhez szükséges személyes adatokat, beleértve az Ön nevét, e-mail címét és telefonszámát, az adatvédelmi irányelveknek megfelelően kezeljük. Részletekért kérjük, olvassa el az Adatvédelmi és Adatkezelési Szabályzatot.

4. Lemondási Feltételek
Az órák lemondását kérjük, legalább 24 órával az időpont előtt jelezze. A határidőn túl lemondott vagy elmulasztott időpontok esetében a szolgáltatás díja nem téríthető vissza.

5. Számlázás és Fizetés
A szolgáltatások díjának megfizetése történhet készpénzben, banki átutalással vagy egyéb, előre egyeztetett módon. A számlát minden esetben a fizetést követően állítjuk ki.

6. Jogszabályi Hivatkozások
Jelen ÁSZF-et a Magyarországon hatályos jogszabályok, különösen a Polgári Törvénykönyv és a fogyasztóvédelmi törvény szabályozzák.

7. Az ÁSZF Módosítása
Az ÁSZF változtatásának jogát fenntartjuk. A módosításokról a weboldalon vagy e-mailben értesítjük az ügyfeleket. A változások a közzététel napján lépnek hatályba.

Elérhetőség
Palotásné Kaszás Edina
Cím: Jókai utca 28-30., 6000 Kecskemét
Email: palotasne.kaszasedina@gmail.com
Telefonszám: +36 [telefonszám]

Kérdéseivel és észrevételeivel forduljon hozzám bizalommal!
Köszönöm, hogy a szolgáltatásaimat választja!

`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
