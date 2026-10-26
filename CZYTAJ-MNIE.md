# AWS CLF-C02 — notatki ze Skill Builder

| Folder | Co jest w środku |
|---|---|
| `materialy\` | czysty tekst lekcji, zacznij od `index.html` |
| `pytania\` | pytania kontrolne (`*.md`) do zaznaczenia i `testownik.html` |
| `narzedzia\` | `capture.js`, czyli snippet do konsoli |

## Start (raz na sesję w przeglądarce)
1. Otwórz kurs w Skill Builder, naciśnij F12 → **Console**, wklej `narzedzia\capture.js` i naciśnij Enter.
2. W prawym dolnym rogu pojawi się panel **AWS-CLF**. Przy pierwszym zapisie wskaż folder `Dokumenty\AWS-CLF`.
   Jeśli Chrome zapyta o dostęp, wybierz „Zezwalaj przy każdej wizycie”.

**Żeby nie wklejać za każdym razem:** w DevTools przejdź do **Sources → Snippets → + New snippet**, wklej kod
i zapisz go jako `aws-clf`. Potem wystarczy Ctrl+P, wpisać `!aws-clf` i nacisnąć Enter.

## Nauka
Przechodź po lekcjach jak zwykle. Na każdej kliknij **💾 Zapisz tę lekcję**. Plakietka pokazuje, czy lekcja
jest już zapisana (**✓ zapisana**), czy jeszcze nie (**nowa**). Ponowny zapis nadpisuje lekcję,
ale zachowuje Twoje zaznaczenia `[x]` w pytaniach.

## Klucz odpowiedzi i testownik
- W `pytania\*.md` zmień `- [ ]` na `- [x]` przy poprawnych odpowiedziach.
- `pytania\testownik.html` bierze tylko pytania z `[x]`. Po zaznaczaniu kliknij w nim **↻ Wczytaj folder pytania**
  i wskaż `AWS-CLF\pytania`. Dane odświeżą się też same przy każdym zapisie lekcji z panelu.
