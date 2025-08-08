// src/App.js
import React from "react";
import "./index.css";

export default function App() {
  const year = new Date().getFullYear();

  const handleBuy = (plan) => {
    alert(`Wybrano pakiet: ${plan}. Tutaj podłącz płatność (np. Tpay/Przelewy24/Stripe).`);
    // TODO: window.location.href = '/checkout?plan=' + encodeURIComponent(plan)
  };

  return (
    <div className="bg-[#0f1222] text-white antialiased">
      {/* Nawigacja */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0f1222]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-rose-400 group-hover:text-rose-300 transition-colors"
            >
              <path
                d="M12 21s-7.5-4.35-7.5-10.2A4.5 4.5 0 0 1 12 7.2a4.5 4.5 0 0 1 7.5 3.6C19.5 16.65 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
              />
            </svg>
            <span className="font-semibold tracking-tight">Związek na Lata</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#program" className="hover:text-white">Program</a>
            <a href="#dla-kogo" className="hover:text-white">Dla kogo</a>
            <a href="#opinie" className="hover:text-white">Opinie</a>
            <a href="#pakiety" className="hover:text-white">Pakiety</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a
            href="#kup-teraz"
            className="inline-flex items-center gap-2 rounded-2xl bg-rose-500 hover:bg-rose-400 active:bg-rose-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-rose-500/20 transition-colors"
          >
            Kup teraz
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-rose-500/20 blur-3xl"></div>
        <div className="absolute -bottom-56 -right-40 w-[42rem] h-[42rem] rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Kurs dla Par, który <span className="text-rose-400">zatrzymuje iskrę</span> i buduje bliskość
              </h1>
              <p className="mt-5 text-white/80 text-lg max-w-xl">
                Praktyczny program 6-tygodniowy: komunikacja bez spięć, rytuały codziennej czułości, zarządzanie
                konfliktami i pielęgnowanie namiętności. Zero teorii bez zastosowania – same sprawdzone narzędzia.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="kup-teraz"
                  href="#pakiety"
                  className="shine inline-flex justify-center items-center gap-2 rounded-2xl bg-rose-500 hover:bg-rose-400 active:bg-rose-600 px-6 py-3 text-base font-bold shadow-xl shadow-rose-500/25 transition-all"
                >
                  Rozpocznijcie dziś
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#wideo"
                  className="inline-flex justify-center items-center gap-2 rounded-2xl border border-white/15 hover:border-white/25 px-6 py-3 text-base font-semibold"
                >
                  Zobacz wideo 2:09
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 5v14l11-7-11-7Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>Gwarancja satysfakcji 14 dni
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400"></span>Dostęp na zawsze
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-violet-400"></span>Materiały PDF + audio
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden">
                {/* Placeholder "mockup" karty kursu */}
                <div className="h-full w-full grid place-items-center bg-grid text-center p-8">
                  <div className="max-w-sm mx-auto">
                    <div className="text-6xl">💗</div>
                    <p className="mt-3 text-lg font-semibold">Wasza relacja, Wasze zasady</p>
                    <p className="mt-2 text-white/70">
                      Wideo-lekcje, ćwiczenia dla dwojga, checklisty i mini-rytuały czułości
                    </p>
                  </div>
                </div>
              </div>
              {/* Odznaki */}
              <div className="absolute -bottom-6 -left-4 bg-white/10 backdrop-blur rounded-2xl px-4 py-3 text-sm border border-white/15 shadow-lg">
                4.9/5 na podstawie 842 opinii
              </div>
              <div className="absolute -top-6 -right-4 bg-white/10 backdrop-blur rounded-2xl px-4 py-3 text-sm border border-white/15 shadow-lg">
                Dołączacie w 2 minuty ⏱️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section id="dla-kogo" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <h2 className="text-2xl md:text-3xl font-extrabold">Dla kogo jest ten kurs?</h2>
              <p className="mt-3 text-white/70">
                Dla świeżo zakochanych i par z dłuższym stażem – jeśli chcecie mniej kłótni, więcej zrozumienia i iskry na
                co dzień.
              </p>
            </div>
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <h3 className="font-bold">Macie poczucie, że „wszyscy czymś żyją”, a wy mijacie się w biegu?</h3>
                <p className="mt-2 text-white/70">Damy wam mikro-rytuały bliskości na 10 minut dziennie.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <h3 className="font-bold">Kłócicie się o drobiazgi?</h3>
                <p className="mt-2 text-white/70">Nauczymy, jak zatrzymać eskalację i zamienić spór w rozmowę.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <h3 className="font-bold">Zgasła namiętność?</h3>
                <p className="mt-2 text-white/70">Wprowadzicie tygodniowe „randki z sensem” i gry zbliżające.</p>
              </div>
              <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
                <h3 className="font-bold">Brak wam planu na rozwój?</h3>
                <p className="mt-2 text-white/70">Dostaniecie gotowy, lekki plan 6-tygodni z checklistą postępów.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section id="program" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Program 6 tygodni</h2>
            <p className="mt-3 text-white/70">
              Każdy tydzień to krótki moduł wideo + ćwiczenie dla dwojga + mini-rytuał do wdrożenia od razu.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 1</p>
              <h3 className="text-xl font-bold">Bezpieczna rozmowa</h3>
              <p className="mt-2 text-white/70">
                Ramka 20-20-20, słuchanie bez przerywania, język potrzeb zamiast pretensji.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 2</p>
              <h3 className="text-xl font-bold">Mapy miłości</h3>
              <p className="mt-2 text-white/70">
                Poznajcie na nowo swoje światy – hobby, stresy, marzenia, granice.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 3</p>
              <h3 className="text-xl font-bold">Konflikt bez rany</h3>
              <p className="mt-2 textWhite/70">Stop-klatka, „prawda i tylko prawda”, naprawa po potknięciu.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 4</p>
              <h3 className="text-xl font-bold">Czułość nawykowa</h3>
              <p className="mt-2 text-white/70">Mikro-gesty, podziękowania, codzienny łącznik 10 minut.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 5</p>
              <h3 className="text-xl font-bold">Namiętność z kalendarzem</h3>
              <p className="mt-2 text-white/70">Randki tematyczne, rozmowy o pragnieniach, baza pomysłów.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">Tydzień 6</p>
              <h3 className="text-xl font-bold">Plan na lata</h3>
              <p className="mt-2 text-white/70">
                Wspólne wartości, rytuały świąteczne i awaryjny plan "pauzy".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wideo */}
      <section id="wideo" className="py-16 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 grid place-items-center">
            <div className="text-white/70">
              Tutaj wstaw film wprowadzający (YouTube/Vimeo lub własny odtwarzacz)
            </div>
          </div>
        </div>
      </section>

      {/* Opinie */}
      <section id="opinie" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Pary, które już skorzystały</h2>
            <p className="mt-3 text-white/70">
              Setki historii o mniejszej ilości spięć, większym spokoju i powrocie czułości.
            </p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-white/90">
                „Przestaliśmy się nakręcać. Zamiast wojny – rozmowa. Mamy swoje 10 minut i to działa.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/70">— Ola & Marek, 4 lata razem</figcaption>
            </figure>
            <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-white/90">
                „Najbardziej lubimy randki tematyczne z modułu 5. Wróciła ekscytacja.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/70">— Kasia & Paweł, 8 lat razem</figcaption>
            </figure>
            <figure className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <blockquote className="text-white/90">
                „Prosty język potrzeb odmienił nasze kłótnie. Polecamy każdej parze.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-white/70">— Magda & Kuba, świeżo po ślubie</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Pakiety i zakup */}
      <section id="pakiety" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Wybierzcie swój pakiet</h2>
            <p className="mt-3 text-white/70">Gwarancja satysfakcji 14 dni. Dostęp natychmiast po zakupie.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-bold">Starter</h3>
              <p className="mt-1 text-white/70">Dla par, które chcą zacząć od podstaw</p>
              <div className="mt-4 text-4xl font-extrabold">299 zł</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• 6 modułów wideo</li>
                <li>• PDF: checklisty i karty rozmów</li>
                <li>• Dostęp na zawsze</li>
              </ul>
              <button
                className="mt-6 rounded-2xl bg-white text-[#0f1222] font-bold py-3 hover:opacity-90 active:opacity-80"
                onClick={() => handleBuy("Starter")}
              >
                Kup Starter
              </button>
            </div>

            {/* Premium */}
            <div className="relative rounded-3xl border-2 border-rose-400 bg-white/5 p-6 flex flex-col shadow-[0_0_60px_-12px_rgba(244,63,94,.4)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-400 text-[#0f1222] text-xs font-extrabold px-3 py-1 rounded-full">
                Najczęściej wybierany
              </div>
              <h3 className="text-xl font-bold">Premium</h3>
              <p className="mt-1 text-white/70">Z dodatkowymi materiałami i wsparciem</p>
              <div className="mt-4 text-4xl font-extrabold">449 zł</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Wszystko ze Starter</li>
                <li>• 6 audio-lekcji do słuchania</li>
                <li>• Baza 60 pomysłów na randki</li>
                <li>• 2 spotkania Q&amp;A na żywo</li>
              </ul>
              <button
                className="mt-6 rounded-2xl bg-rose-500 hover:bg-rose-400 active:bg-rose-600 font-bold py-3"
                onClick={() => handleBuy("Premium")}
              >
                Kup Premium
              </button>
            </div>

            {/* VIP */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col">
              <h3 className="text-xl font-bold">VIP</h3>
              <p className="mt-1 text-white/70">Dla par, które chcą indywidualnego wsparcia</p>
              <div className="mt-4 text-4xl font-extrabold">1290 zł</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Wszystko z Premium</li>
                <li>• 2 konsultacje 1:1 (online)</li>
                <li>• Plan wdrożenia „szyty na miarę”</li>
              </ul>
              <button
                className="mt-6 rounded-2xl bg-white text-[#0f1222] font-bold py-3 hover:opacity-90 active:opacity-80"
                onClick={() => handleBuy("VIP")}
              >
                Kup VIP
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-white/60">
            Bezpieczne płatności • Faktura dla firmy • Gwarancja 14 dni
          </p>
        </div>
      </section>

      {/* Bonusy i gwarancja */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-extrabold">Bonusy w pakietach Premium i VIP</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>• Karty rozmów „trudne tematy” (PDF)</li>
              <li>• Skarbnica randek tematycznych (60+ pomysłów)</li>
              <li>• Ścieżki audio „Reset po kłótni”</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-extrabold">Gwarancja spokoju</h3>
            <p className="mt-2 text-white/70">
              Jeśli w 14 dni nie uznacie, że kurs wam pomaga, zwrócimy 100% środków. Bez pytań, bez stresu.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Najczęstsze pytania</h2>
            <p className="mt-3 text-white/70">
              Masz inne pytanie? Napisz:{" "}
              <a href="mailto:wsparcie@zwiazeknalata.pl" className="underline decoration-dotted">
                wsparcie@zwiazeknalata.pl
              </a>
            </p>
          </div>
          <div className="mt-10 space-y-3">
            <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold">Czy kurs jest dla nas, jeśli prawie się nie kłócimy?</span>
                <svg className="chev w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-white/70">
                Tak! Kurs to nie tylko „gaszenie pożarów”, ale tworzenie nawyków czułości i rozmowy zanim pojawią się
                spięcia.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold">Ile czasu zajmuje praca z modułem?</span>
                <svg className="chev w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-white/70">
                Średnio 45–60 minut tygodniowo: 25 min wideo + 20–30 min ćwiczeń i rozmowy.
              </p>
            </details>

            <details className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer flex items-center justify-between">
                <span className="font-semibold">Czy dostaniemy fakturę?</span>
                <svg className="chev w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-white/70">Tak, fakturę wystawiamy automatycznie po zakupie.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA końcowe */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Gotowi dać sobie najlepszy prezent?</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Dołączcie dziś, a w ciągu kilku tygodni poczujecie więcej spokoju, czułości i bliskości. Małe kroki, wielkie
            efekty.
          </p>
          <a
            href="#pakiety"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-rose-500 hover:bg-rose-400 active:bg-rose-600 px-6 py-3 text-base font-bold shadow-xl shadow-rose-500/25 transition-all"
          >
            Kup kurs teraz
          </a>
        </div>
      </section>

      {/* Stopka */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© <span>{year}</span> Związek na Lata. Wszelkie prawa zastrzeżone.</p>
          <nav className="flex items-center gap-6">
            <a href="#regulamin" className="hover:text-white">Regulamin</a>
            <a href="#polityka" className="hover:text-white">Polityka prywatności</a>
            <a href="mailto:wsparcie@zwiazeknalata.pl" className="hover:text-white">Kontakt</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
