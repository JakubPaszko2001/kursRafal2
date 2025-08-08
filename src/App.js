// src/App.js
import React from "react";
import "./index.css";

export default function App() {
  const year = new Date().getFullYear();

  const handleBuy = (plan) => {
    alert(`Wybrano pakiet: ${plan}. Tutaj podłącz płatność (np. Tpay/Przelewy24/Stripe).`);
  };

  return (
    <div className="bg-[#fffdf9] text-gray-800 antialiased">
      {/* Nawigacja */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-orange-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-orange-500 group-hover:text-orange-400 transition-colors">
              <path d="M12 21s-7.5-4.35-7.5-10.2A4.5 4.5 0 0 1 12 7.2a4.5 4.5 0 0 1 7.5 3.6C19.5 16.65 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
            </svg>
            <span className="font-semibold tracking-tight text-orange-600">Związek na Lata</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#program" className="hover:text-orange-500">Program</a>
            <a href="#dla-kogo" className="hover:text-orange-500">Dla kogo</a>
            <a href="#opinie" className="hover:text-orange-500">Opinie</a>
            <a href="#pakiety" className="hover:text-orange-500">Pakiety</a>
            <a href="#faq" className="hover:text-orange-500">FAQ</a>
          </nav>
          <a href="#kup-teraz" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-400 active:bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-colors">
            Kup teraz
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-transparent to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-orange-200/40 blur-3xl"></div>
        <div className="absolute -bottom-56 -right-40 w-[42rem] h-[42rem] rounded-full bg-pink-200/40 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-orange-700">
                Kurs dla Par, który <span className="text-orange-500">zatrzymuje iskrę</span> i buduje bliskość
              </h1>
              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Praktyczny program 6-tygodniowy: komunikacja bez spięć, rytuały codziennej czułości, zarządzanie konfliktami i pielęgnowanie namiętności.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a id="kup-teraz" href="#pakiety" className="inline-flex justify-center items-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-400 active:bg-orange-600 px-6 py-3 text-base font-bold text-white shadow-xl transition-all">
                  Rozpocznijcie dziś
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-gray-500">
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>Gwarancja satysfakcji 14 dni</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>Dostęp na zawsze</div>
                <div className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-pink-400"></span>Materiały PDF + audio</div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-white border border-orange-100 shadow-xl overflow-hidden">
                <div className="h-full w-full grid place-items-center text-center p-8">
                  <div className="max-w-sm mx-auto">
                    <div className="text-6xl">💗</div>
                    <p className="mt-3 text-lg font-semibold text-orange-600">Wasza relacja, Wasze zasady</p>
                    <p className="mt-2 text-gray-500">Wideo-lekcje, ćwiczenia dla dwojga, checklisty i mini-rytuały czułości</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 bg-white rounded-xl px-4 py-3 text-sm border border-orange-100 shadow">4.9/5 na podstawie 842 opinii</div>
              <div className="absolute -top-6 -right-4 bg-white rounded-xl px-4 py-3 text-sm border border-orange-100 shadow">Dołączacie w 2 minuty ⏱️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="py-16 md:py-24 border-t border-orange-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-orange-700">Dla kogo jest ten kurs?</h2>
              <p className="mt-3 text-gray-600">Dla świeżo zakochanych i par z dłuższym stażem – jeśli chcecie mniej kłótni, więcej zrozumienia i iskry na co dzień.</p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { t: "Macie poczucie, że mijacie się w biegu?", d: "Mikro-rytuały bliskości na 10 minut dziennie." },
                { t: "Kłócicie się o drobiazgi?", d: "Zatrzymywanie eskalacji i zamiana sporu w rozmowę." },
                { t: "Zgasła namiętność?", d: "Randki z sensem i gry zbliżające." },
                { t: "Brak planu na rozwój?", d: "Gotowy 6-tygodniowy plan z checklistą." },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl border border-orange-100 p-5 bg-orange-50">
                  <h3 className="font-bold text-orange-700">{item.t}</h3>
                  <p className="mt-2 text-gray-600">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Program 6 tygodni</h2>
            <p className="mt-3 text-gray-600">Każdy tydzień to krótki moduł wideo + ćwiczenie + mini-rytuał do wdrożenia.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["Tydzień 1", "Bezpieczna rozmowa", "Ramka 20-20-20, język potrzeb."],
              ["Tydzień 2", "Mapy miłości", "Poznawanie swoich światów."],
              ["Tydzień 3", "Konflikt bez rany", "Stop-klatka, naprawa po potknięciu."],
              ["Tydzień 4", "Czułość nawykowa", "Codzienne mikro-gesty i podziękowania."],
              ["Tydzień 5", "Namiętność z kalendarzem", "Randki tematyczne i rozmowy o pragnieniach."],
              ["Tydzień 6", "Plan na lata", "Wspólne wartości i rytuały."],
            ].map(([week, title, desc], i) => (
              <div key={i} className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
                <p className="text-sm text-gray-500">{week}</p>
                <h3 className="text-xl font-bold text-orange-700">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wideo */}
      <section id="wideo" className="py-16 border-y border-orange-100">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="aspect-video rounded-3xl overflow-hidden border border-orange-100 bg-orange-50 grid place-items-center">
            <div className="text-gray-500">Tutaj wstaw film wprowadzający</div>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section id="opinie" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Pary, które już skorzystały</h2>
            <p className="mt-3 text-gray-600">Historie o większym spokoju i powrocie czułości.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              ["„Przestaliśmy się nakręcać. Zamiast wojny – rozmowa.”", "Ola & Marek"],
              ["„Randki tematyczne przywróciły ekscytację.”", "Kasia & Paweł"],
              ["„Język potrzeb odmienił nasze kłótnie.”", "Magda & Kuba"],
            ].map(([quote, author], i) => (
              <figure key={i} className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
                <blockquote className="text-gray-700">{quote}</blockquote>
                <figcaption className="mt-4 text-sm text-gray-500">— {author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pakiety */}
      <section id="pakiety" className="py-16 md:py-24 border-t border-orange-100">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Wybierzcie swój pakiet</h2>
          <p className="mt-3 text-gray-600">Gwarancja satysfakcji 14 dni.</p>
          <div className="mt-10 flex justify-center">
            <div className="relative rounded-3xl border-2 border-orange-400 bg-orange-50 p-6 flex flex-col shadow-[0_0_40px_-12px_rgba(251,146,60,.4)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-400 text-white text-xs font-extrabold px-3 py-1 rounded-full">
                Najczęściej wybierany
              </div>
              <h3 className="text-xl font-bold text-orange-700">Premium</h3>
              <p className="mt-1 text-gray-600">Dodatkowe materiały i wsparcie</p>
              <div className="mt-4 text-4xl font-extrabold text-orange-600">449 zł</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Wszystko ze Starter</li>
                <li>• 6 audio-lekcji</li>
                <li>• 60 pomysłów na randki</li>
                <li>• 2 spotkania Q&A</li>
              </ul>
              <button onClick={() => handleBuy("Premium")} className="mt-6 rounded-xl bg-orange-500 hover:bg-orange-400 active:bg-orange-600 font-bold py-3 text-white">Kup Premium</button>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">Bezpieczne płatności • Faktura • Gwarancja 14 dni</p>
        </div>
      </section>

      {/* Bonusy i gwarancja */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
            <h3 className="text-2xl font-extrabold text-orange-700">Bonusy w pakietach</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Karty rozmów (PDF)</li>
              <li>• 60+ pomysłów na randki</li>
              <li>• Ścieżki audio „Reset po kłótni”</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
            <h3 className="text-2xl font-extrabold text-orange-700">Gwarancja spokoju</h3>
            <p className="mt-2 text-gray-600">14 dni na rezygnację, 100% zwrotu.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 border-t border-orange-100">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-700">Najczęstsze pytania</h2>
            <p className="mt-3 text-gray-600">Masz inne pytanie? Napisz: <a href="mailto:wsparcie@zwiazeknalata.pl" className="underline decoration-dotted">wsparcie@zwiazeknalata.pl</a></p>
          </div>
          <div className="mt-10 space-y-3">
            {[
              ["Czy kurs jest dla nas, jeśli prawie się nie kłócimy?", "Tak! To tworzenie dobrych nawyków czułości."],
              ["Ile czasu zajmuje moduł?", "Średnio 45–60 minut tygodniowo."],
              ["Czy dostaniemy fakturę?", "Tak, wysyłamy automatycznie po zakupie."],
            ].map(([q, a], i) => (
              <details key={i} className="group rounded-2xl border border-orange-100 bg-orange-50 p-5">
                <summary className="cursor-pointer flex items-center justify-between">
                  <span className="font-semibold text-orange-700">{q}</span>
                  <svg className="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-gray-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-orange-50 border-t border-orange-100 py-6 text-center text-sm text-gray-500">
        <div className="mx-auto max-w-7xl px-4">
          <p>&copy; {year} Związek na Lata. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}
