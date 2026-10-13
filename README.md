# Portfolio
## Live Link
👉 Link to Live Portfolio 

## Design
Instead of using a Figma design, I used my old portfolio as a design template. It's fun to look back since it was the very first assignment of this program!
![Beskrivning av bilden](./src/assets/Screenshot%202026-10-12%20at%2015-12-23%20Portfolio%20Linn%20Boekhout.png)

## Project Description
This project is a personal portfolio designed to showcase development projects, technical skills, and background. 

## Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## Getting Started
Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher (comes with Node.js)
* **Git**
* **VS Code** (recommended editor)

### Installation & Local Setup

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher (comes with Node.js)
* **Git**
* **VS Code** (recommended editor)

### Installation & Local Setup

1. **Clone the repository**
```bash
git clone [https://github.com/Linboe/portfolio_react](https://github.com/Linboe/portfolio_react)
```

2. **Navigate to the project directory and open in VS Code**
```bash
cd portfolio-react
code .
```
3. **Install project dependencies and start the development server**
```bash
npm install
npm run dev
```
4. **Access the application**
```bash
Open your browser and navigate to http://localhost:5173.
```
## Reflection
### Komponentarkitektur

Applikationen är uppdelad i sektionskomponenter, återanvändbara layoutkomponenter och små presentationskomponenter. Innehållet ligger i separata datafiler med egna typer, så att UI och data hålls isär.

#### Tre nivåer

1. **Sektioner** (`Home`, `About`, `Projects`, `Contact`)
   Varje sektion på den långa sidan är en egen komponent med ett `id` som navbaren länkar till (`#home`, `#about`, `#projects`, `#contact`).

2. **Layoutkomponenter** (`Section`, `Container`)
   Återanvändbara: `Section` ger rubrik, avstånd och en variant (`alt` för växlande bakgrund). `Container` ger maxbredd och marginaler.

3. **Presentationskomponenter** (`ProjectCard`, `ProjectFilter`, `LinkButton` m.fl.)
   Små, fokuserade komponenter som får data via props och ritar upp den.

#### Data skiljs från UI

- `data/projects.ts` och `data/contacts.ts` innehåller innehållet.
- `types/` innehåller typerna (`Project`, `Technology`, `ContactLink`).

Komponenterna renderar datan med `.map()` eller callbacks. För att lägga till ett projekt eller en kontaktlänk uppdateras datafilen, inte komponenten.

Kontaktdatan lagrar en ikonkomponent (`icon: IconType`) i stället för färdig JSX. Datan blir därmed ren, och komponenten bestämmer själv ikonens storlek och attribut.

#### Härledda värden i stället för dubbel data

Filterknapparna byggs från `new Set(projects.flatMap(...))`. En ny teknik i ett projekt ger därför automatiskt en ny knapp, utan att något annat behöver ändras.

#### CSS
Projektet använder CSS Modules + en global CSS-fil + CSS-variabler, och på några ställen små inline-styles.

Responsiviteten löses med media queries (480/720/900px), clamp(), flex och grid.

### State

**Princip:** minimalt state, placerat så lågt som möjligt men så högt som nödvändigt.

**Dataflöde:** data går neråt via props och händelser går uppåt via callbacks.

State används på tre ställen i projektet.

#### 1. `Projects.tsx`: filtret (lifting state up)

`selectedTags` är listan med de tekniker användaren har valt.

Två komponenter behöver samma information: `ProjectFilter` måste veta vilka knappar som ska vara markerade, och projektlistan måste veta vilka projekt som ska visas. Hade statet legat i `ProjectFilter` hade projektlistan inte kunnat läsa det. Därför ligger det i deras gemensamma förälder, `Projects`.

```tsx
const [selectedTags, setSelectedTags] = useState<Technology[]>([]);
```

#### 2. `ContactForm.tsx`: formuläret (lokalt)

Här finns tre separata state, eftersom de ändras av olika anledningar:

- `values`: vad användaren har skrivit (ett objekt med ett värde per fält).

Alla fält i `ContactForm` är *controlled inputs*: värdet kommer från state (`value={values[name]}`) och ändras via `onChange`, så React äger alltid texten i fältet.

Varje fält har ett `name` som matchar en nyckel i `values`. Därför räcker en gemensam `handleChange` för alla fem fälten:

```tsx
setValues((prev) => ({ ...prev, [name]: value }));
```
`...prev` behåller de övriga fälten och `[name]: value` skriver över det som ändrades. Fälten definieras en gång i en konfigurationslista (`FIELDS`) som både renderingen och valideringen använder.

- `errors`: vilka fält som är ogiltiga (ett objekt med ett felmeddelande per fält).
- `isSent`: om success-meddelandet ska visas (`true`/`false`).


#### 3. `Navbar.tsx`: hamburgermenyn (lokalt)
`isMenuOpen` anger om mobilmenyn är öppen.
```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

### Vad skulle jag göra annorlunda

### AI-verktyg
vilka AI-verktyg och till vad
