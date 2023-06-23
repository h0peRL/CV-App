# CV-App

Dies ist eine Webseite von Nico Delvecchio die als ergänzung zu einem Lebenslauf dient, um interesseierten Personen einen Einblick zu meinen Arbeiten zu gewähren. Die Webseite wurde mit dem Framework React programmiert.

# Dokumentation

Diese Dokumentation geht nach dem IPERKA prinzip.

### Informieren

- [Einleitung](#1-i--informieren)

### Planen

- [Zeitplan](#21-zeitplan)
- [Testfälle](#22-testfälle)

### Entscheiden

- [Entscheidungen](#3-e--entscheiden)

### Realisieren

- [Realisierungsplan](#41-realisierungsplan)

### Kontrollieren

- [Testfälle](#22-testfälle)
- [Testprotokoll und Testfazit](#51-testprotokoll-und-testfazit)

### Auswerten

- [Testbericht / Fazit](#51-testprotokoll-und-testfazit)
- [Schlusswort / allg. Fazit](#61-bericht--fazit)

---

## 1. I | Informieren

| Datum      | Version                   | Änderung                                       |
| :--------- | ------------------------- | ---------------------------------------------- |
| 31.03.2023 | 0.0.1<br /> Erste Version | Informieren, Initialisierung                   |
| 28.04.2023 | 0.0.2                     | Erstellung der Dokumentation, Initialierung    |
| 05.05.2023 | 0.0.3                     | Erste Realisationsphase                        |
| 12.05.2023 | 0.0.4                     | Ins Detail gegangen mit der Webseite und React |
| 16.05.2023 | 0.0.5                     | Deployment mit Eigener Domain auf Netlify      |
| 2.06.2023  | 0.0.6                     | Fertigstelllen der Dokumentation               |
| 2.06.2023  | 1.0.0<br />Finale Version | Finaler Schliff, letzte Änderungen vornehmen   |

### 1.1 Ihr Projekt

CV-APP ist eine Projekt vo die als ergänzung zu einem Lebenslauf dient, um interesseierten Personen einen Einblick zu meinen Arbeiten zu gewähren. Die Webseite wurde mit dem Framework React programmiert.

### 1.2 Quellen

[Stackoverflow](https://stackoverflow.com)

[React Documentation](https://legacy.reactjs.org/docs/getting-started.html)

[TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app)

### 1.3 Anforderungen

| Nummer | Muss/Kann | Funktional? Qualität? Rand? | Beschreibung                                                         |
| ------ | --------- | :-------------------------- | :------------------------------------------------------------------- |
| 1      | Muss      | Funktional                  | Ein MockUp ist vorhanden                                             |
| 2      | Muss      | Funktional                  | MockUp wird mit basic HTML und CSS programmiert                      |
| 3      | Muss      | Funktional                  | Richtige Version wird mit React programmiert                         |
| 4      | Muss      | Funktional                  | Die einzelnen Bauteile der Webseite werden als Komponenten eingebaut |
| 5      | Muss      | Funktional                  | Die Navigation funktioniert                                          |
| 6      | Muss      | Funktional                  | Es gibt ein Abteil wo mein meine Projekte sieht                      |
| 7      | Muss      | Funktional                  | Die Projekte verweisen auf ihren Portfoliobeitrag                    |
| 8      | Kann      | Funktional                  | Einige Projekte leiten auf ihre Webseite oder weitere Anhänge        |
| 9      | Muss      | Funktional                  | Es gibt ein Kontaktformular mit dem man mich Kontaktieren kann.      |
| 10     | Muss      | Funktional                  | Die Webseite ist einigermassen responsive                            |

### 1.4 Diagramme

Keine

---

## 2. P | Planen

### 2.1 Zeitplan

| **Nummer** | **Frist** | **Beschreibung**   | **Zeit (geplant)** |
| :--------- | --------- | :----------------- | ------------------ |
| 1          | 3.2.2023  | Anforderung Nr. 1  | 90 Min             |
| 2          | 3.2.2023  | Anforderung Nr. 2  | - Min              |
| 3          | 3.2.2023  | Anforderung Nr. 3  | 120 Min            |
| 4          | 3.2.2023  | Anforderung Nr. 4  | 30 Min             |
| 5          | 3.2.2023  | Anforderung Nr. 5  | 20 Min             |
| 6          | 3.2.2023  | Anforderung Nr. 6  | 20 Min             |
| 7          | 3.2.2023  | Anforderung Nr. 7  | 10 Min             |
| 8          | 3.2.2023  | Anforderung Nr. 8  | 5 Min              |
| 9          | 3.2.2023  | Anforderung Nr. 9  | 60 Min             |
| 10         | 3.2.2023  | Anforderung Nr. 10 | 60 Min             |

### 2.2 Testfälle

| **Nummer** | **Datum**   | **Voraussetzungen**                                                                  | **Eingabe**                                                                | **Erwartete Ausgabe**                                                 |
| :--------- | ----------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 1          | 24.05.2023  | In den Ordner Navigieren                                                             | Folder nach MockUp durchstöbern und MockUp öffnen, und Live Server starten | MockuUp ist vorhanden                                                 |
| 2          | 24.05.2023  | VSCode offen, HTML und CSS geöffnet                                                  | Anschauen des HTMLS und CSS's                                              | Webseite ist in HTML und CSS geschrieben                              |
| 3          | 24.05.2023  | React folder geöffnet                                                                | Inspizieren des Folders und den Dateien                                    | Das Projekt ist in React                                              |
| 4          | 24.05.2023  | VSCode offen, Komponentenfolder geöffnet                                             | In die einzelnen Komponenten rein gehen                                    | Nav, Projekte und Contact sind als eigene Komponente vorhanden        |
| 5          | 24.053.2023 | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Navigation anklicken                                                       | Man wird zu den einzellnen Komponenten naviigiert                     |
| 6          | 24.05.2023  | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Zum Projekte Abteil navigieren                                             | Projekte sind vorhanden                                               |
| 7          | 24.05.2023  | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Bei den Projekten auf ihren Link klicken                                   | Man kommt zu der Portfolio-Seite                                      |
| 8          | 24.05.2023s | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Bei den Projekten auf ihren Link klicken                                   | Man kommt zu der Seite, die man anklickt                              |
| 9          | 24.05.2023  | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Zu Kontaktformular navigieren und Formular                                 | In meinem Emaileingang befindet sich ein Ausgefülltes Kontaktformular |
| 10         | 24.05.2023  | Webseite geöffnet, ob localhost oder[nicodelvecchio.xyz](https://nicodelvecchio.xyz) | Control-Shift-C unnd dann auf Responsive clicken                           | Elemente passen sich auf Bildschirmgrösse ans                         |

## 3. E | Entscheiden

Auswahl dess Frameworks: React

Auswahl des CSS Frameworks: TailwindCSS

Auswahl des Domainhosts: Godaddy

Auswahl des Websitedeployers: Netlify

## 4. R | Realisieren

### 4.1 Realisierungsplan

| **Nummer** | **Datum** | **Beschreibung**                                                      | **Zeit (geplant)** | **Zeit (effektiv)** |
| ---------- | --------- | --------------------------------------------------------------------- | ------------------ | ------------------- |
| 1          | 5.5.2023  | Anforderung komplett implementiert(Nummer entspricht der Anforderung) | 90 Min             | 100 Min             |
| 2          | 5.5.2023  | Anforderung komplett implementiert                                    | - Min              | - Min               |
| 3          | 5.5.2023  | Anforderung komplett implementiert                                    | 120 Min            | 130 Min             |
| 4          | 12.5.2023 | Anforderung komplett implementiert                                    | 30 Min             | 40 Min              |
| 5          | 12.5.2023 | Anforderung komplett implementiert                                    | 20 Min             | 15 Min              |
| 6          | 12.5.2023 | Anforderung komplett implementiert                                    | 20 Min             | 15 Min              |
| 7          | 12.5.2023 | Anforderung komplett implementiert                                    | 10 Min             | 15 Min              |
| 8          | 12.5.2023 | Anforderung komplett implementiert                                    | 5 Min              | 10 Min              |
| 9          | 12.5.2023 | Anforderung komplett implementiert                                    | 60 Min             | 60 Min              |
| 10         | 19.5.2023 | Anforderung komplett implementiert                                    | 60 Min             | 70 Min              |

## 5. K | Kontrollieren

### 5.1 Testprotokoll und Testfazit

Testumgebung: VisualstudioCode und [nicodelvecchio.xyz](https://nicodelvecchio.xyz)

| **Nummer** | **Datum** | **Resultat** | **Durchgeführt** |
| :--------- | --------- | ------------ | ---------------- |
| 1          | 24.3.2023 | OK           | Nico Delvecchio  |
| 2          | 24.3.2023 | OK           | Nico Delvecchio  |
| 3          | 24.3.2023 | OK           | Nico Delvecchio  |
| 4          | 24.3.2023 | OK           | Nico Delvecchio  |
| 5          | 24.3.2023 | OK           | Nico Delvecchio  |
| 6          | 24.3.2023 | OK           | Nico Delvecchio  |
| 7          | 24.3.2023 | OK           | Nico Delvecchio  |
| 8          | 24.3.2023 | OK           | Nico Delvecchio  |
| 9          | 24.3.2023 | OK           | Nico Delvecchio  |
| 10         | 24.3.2023 | OK           | Nico Delvecchio  |

## Testfazit

Es sind alle Testfälle in Ordnung. Es gibt keine grossen Veränderungen oder Abweichungen in den Resultaten.

## 6. A | Auswerten

### 6.1 Bericht / Fazit

Das Projekt LA1305 im Lernatteilier des 2. Jahres hat eigentlich im Grund und Ganzen gut funktioniert. Ich habe zuerst begonnen die Dokumentation ein bisschen zu erarbeiten, damit ich mich danach wirklich umd die Realisierung kümmern kann. Bei der Realisation gab es dann einen keine Haken. Alles was ich implementieren wollte hat funktioniert und das deployment funktionierte erstaunlicherweise ziemlich einfach.
