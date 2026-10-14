# Portfolio

## Live Link

👉 Link to Live Portfolio

## Project Description

This project is a personal portfolio designed to showcase development projects, technical skills, and background.

## Design

Instead of using a Figma design, I used my old portfolio as a design template. It's fun to look back since it was the very first assignment of this program!

![image design-template](./src/assets/Screenshot%202026-10-12%20at%2015-12-23%20Portfolio%20Linn%20Boekhout.png)

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

1. **Clone the repository**

```bash
git clone https://github.com/Linboe/portfolio_react.git
```

2. **Navigate to the project directory and open in VS Code**

```bash
cd portfolio_react
code .
```

3. **Install project dependencies and start the development server**

```bash
npm install
npm run dev
```

4. **Access the application**

Open your browser and navigate to http://localhost:5173.

## Reflection

### Component Architecture

The application is divided into section components, reusable layout components, and small presentational components. Content lives in separate data files with their own types, which keeps the UI and the data separate.

#### Three Levels

1. **Sections** (`Home`, `About`, `Projects`, `Contact`)
   Each section is its own component with an `id` that the navbar links to (`#home`, `#about`, `#projects`, `#contact`). `Home` renders its own `<section>`, while the others use `Section`.

2. **Layout components** (`Section`, `Container`)
   Reusable wrappers: `Section` provides the heading, spacing, and a variant (`alt` for alternating backgrounds). `Container` provides the max width and horizontal margins.

3. **Presentational components** (`ProjectCard`, `ProjectFilter`, `LinkButton`, etc.)
   Small, focused components that receive data via props and render it. `ProjectFilter` also reports clicks upward via callbacks.

Two components fall outside these levels:

- `Navbar` receives `brand`, `links`, and `onBrandClick` via props and renders the links with `.map()`. It has its own local state for the mobile menu.
- `ContactForm` is a standalone form component with its own state and validation. It takes no props.

#### Separating Data from UI

- `data/projects.ts` and `data/contacts.ts` contain the content.
- `types/` contains the types (`Project`, `Technology`, `ContactLink`).

Components render the data, often with `.map()`. To add a project or a contact link, you update the data file, not the component.

The contact data stores an icon component (`icon: IconType`) instead of ready-made JSX. This keeps the data free of presentation concerns, and the component decides the icon's size and attributes.

#### Derived Values Instead of Duplicated Data

The filter buttons are built from `new Set(projects.flatMap(...))`. A new technology in a project therefore produces a new button automatically, without anything else needing to change.

#### CSS

The project uses CSS Modules, a global CSS file with CSS variables (design tokens), and, in a few places, small inline styles (`animationDelay` in `Home`). Tailwind is not used.

Responsiveness is handled mobile-first with media queries (480/720/900px), `clamp()`, flexbox, and grid.

### State

**Principle:** keep state minimal, and place it as low as possible but as high as necessary.

**Data flow:** data flows down via props, and events flow up via callbacks. State is used in three places in the project.

#### 1. `Projects.tsx`: the filter (lifting state up)

`selectedTags` is the list of technologies the user has selected. The filter is multi-select, so several tags can be selected at the same time.

```tsx
const [selectedTags, setSelectedTags] = useState<Technology[]>([]);
```

**Why the state lives in `Projects`:** two components need the same information. `ProjectFilter` needs to know which buttons to mark as active, and the project list needs to know which projects to display. The state therefore lives in their closest common parent. `Projects` passes down `selectedTags` and the callbacks (`onToggle`, `onClear`), and `ProjectFilter` owns nothing itself.

**How the array is updated:**

```tsx
setSelectedTags((prev) =>
    prev.includes(tag)
        ? prev.filter((selected) => selected !== tag)
        : [...prev, tag],
);
```

- A tag is added with `[...prev, tag]` and removed with `prev.filter(...)`. Both create a new array.
- The functional update form `prev => ...` guarantees that the update is based on the latest value.

**No tags selected = all projects.** If the array is empty, the full list is shown. The "All" button is not a value of its own but a view of the empty state: it is highlighted when nothing is selected, and clicking it clears the filter (`onClear` sets the array to `[]`). If at least one tag is selected, projects that have at least one of the selected technologies are shown.

**Derived instead of stored in state:**

- `visibleProjects` is computed on every render from `selectedTags`.
- `isActive` is computed with `selectedTags.includes(tag)`.
- `isAllActive` is computed with `selectedTags.length === 0`.

Duplicated data can get out of sync, so only values that cannot be computed are stored in state.

#### 2. `ContactForm.tsx`: the form (local)

There are three separate pieces of state, because they change for different reasons:

- `values`: what the user has typed (an object with one value per field).
- `errors`: which fields are invalid (an object with one error message per field).
- `isSent`: whether the success message should be shown (`true`/`false`). The message disappears when the user starts typing again.

```tsx
useState<FormValues>(INITIAL_VALUES);
useState<FormErrors>({});
useState(false);
```

**Controlled inputs:** all fields are controlled. The value comes from state (`value={values[name]}`) and is updated via `onChange`, so React always owns the text in the field.

Each field has a `name` that matches a key in `values`. A single shared `handleChange` is therefore enough for all five fields:

```tsx
setValues((prev) => ({ ...prev, [name]: value }));
```

`...prev` keeps the other fields, and `[name]: value` overwrites the one that changed. The fields are defined once in a configuration list (`FIELDS`) that both the rendering and the validation use.

The state is local because nothing else in the app needs to know the form's contents.

#### 3. `Navbar.tsx`: the hamburger menu (local)

```tsx
const [isMenuOpen, setIsMenuOpen] = useState(false);
```

`isMenuOpen` indicates whether the mobile menu is open. Only the navbar cares about it, so the state is local. The class name, icon, and `aria-expanded` are computed from this value instead of being stored separately.

## What I Would Do Differently
I first started building a different portfolio, but I chose to create a completely new project (this one) after realizing that the structure of the first one was not optimal. It felt easier to start from scratch than to fix the old one.

If I were to do it again, I would focus on finishing each component before starting a new one. During this process, I went back and changed the same component several times, which meant I had to clean up dead code afterwards.

In `Home`, I don't use `Section`, which creates an inconsistency. I would change this.

In `ContactForm`, the validation, state, and field list currently live in the same file. This is only because I will remove the whole form after submission, and keeping it in one file makes that easier.

I also mixed languages throughout the project (a habit of mine). In the future, I will try to be more consistent to avoid having to fix it afterwards.

## Use of AI

I used Claude as a learning and review tool throughout the project. I owned the code and the design decisions, and I used the AI in three ways:

- **Understanding:** I pasted my own code and asked for explanations of concepts I wanted to understand more deeply, such as lifting state up, controlled inputs, the spread operator, `flatMap`, and `clamp()`.
- **Implementation suggestions:** For the contact form and the multi-select filter, I gave the assignment requirements and received code suggestions. I then adapted them to my own component structure and design, for example placing the form above the contact links, using icon-only links, and making the "All" button clear the filter.
- **Code review:** I asked for critical feedback on accessibility, responsive design, and code quality, and used it to fix issues such as a syntax error in my global CSS.

**Limitations:** The AI never saw the site in a browser. Everything it suggested was untested by the AI, so I was the one who ran the code and verified the result.

I tested everything in the browser and did the debugging myself. I also learned that AI suggestions can be wrong or outdated (for example, a deprecated React event type in the form), so I verified them before using them. The final decisions and the understanding of how the code works are my own.