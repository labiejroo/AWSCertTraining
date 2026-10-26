# AWS Certified Cloud Practitioner (CLF-C02) – notatki i testownik

Materiały z kursu AWS Skill Builder (Cloud Practitioner) w wersji dwujęzycznej (PL obok EN) oraz testownik z pytań kontrolnych.

## Struktura

| Folder | Zawartość |
|---|---|
| `materialy/` | lekcje (EN) + `dwujezyczny.js`, który układa je w dwie kolumny PL / EN; start: `materialy/index.html` |
| `pytania/` | pytania kontrolne z każdej lekcji (`*.md`, poprawne odpowiedzi oznaczone `[x]`), `pytania-dane.js` i `testownik.html` |
| `narzedzia/` | `capture.js` (snippet do konsoli przeglądarki) i `tlumaczenia.js` (polskie tłumaczenia, klucz = tekst EN) |
| `surowe/` | kopie stron lekcji z chwili zapisu (do diagnozy i ponownego przetworzenia) |

## Jak to działa

1. **Zapis lekcji:** w Skill Builder otwierasz konsolę (F12), wklejasz `narzedzia/capture.js`, a w prawym dolnym rogu pojawia się panel **AWS-CLF**. Na każdej lekcji klikasz **Zapisz tę lekcję**. Skrypt przeklikuje karuzele, zakładki, znaczniki i fiszki, odczytuje klucz odpowiedzi ze strony i zapisuje lekcję do `materialy/`, a pytania do `pytania/`.
2. **Tłumaczenie:** brakujące polskie fragmenty dopisuje Claude do `narzedzia/tlumaczenia.js`. Strony lekcji pokazują je automatycznie, a w prawym górnym rogu jest przełącznik **PL | EN**, **PL** lub **EN**.
3. **Testownik** (`pytania/testownik.html`):
   - wybór zakresu modułów (np. tylko moduł 2 albo moduły 2–3),
   - pierwsze kliknięcie to odpowiedź; po dobrej odpowiedzi następne pytanie pojawia się samo po 3 sekundach,
   - za błędną odpowiedź pytanie wraca więcej razy,
   - klawisze: 1–4 to wybór odpowiedzi, Enter lub spacja to „Dalej”.

## Wysyłanie zmian na GitHub

Dwuklik na `wyslij-na-github.bat`. Skrypt robi commit wszystkich zmian i push do `git@github.com:labiejroo/AWSCertTraining.git`.
