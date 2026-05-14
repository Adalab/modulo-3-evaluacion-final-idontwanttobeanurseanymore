# Technical Enhancement Report: Harry Potter Database

This document details the identified bugs, technical debt, and proposed UI/UX improvements for the project.

---

## 1. Critical Bugs & Logic Errors

### 性能 (Performance) & API
*   **Duplicate Fetching:** The `useEffect` in `App.jsx` depends on `[characterHouse]`. This causes a full API reload every time a user filters by house.
    *   *Proposed Fix:* Change dependency array to `[]`.
*   **Detail Page Crash:** Refreshing on a detail page causes a crash because `characters` starts as an empty array, making `findCharacter` return `undefined`.
    *   *Proposed Fix:* Add a conditional check or loading state in `CharacterDetailPage`.

### 业务逻辑 (Business Logic)
*   **Incorrect "Alive" Status:** The status is currently derived from gender, not the actual `alive` property.
    *   *Example:* Dumbledore (Male) shows as "Vivo" even if the API says `alive: false`.
    *   *Proposed Fix:* Use the `isItAlive` boolean correctly in the ternary operator.

---

## 2. React & HTML Syntax Errors

*   **`class` vs `className`:** Found in `CharacterDetailPage.jsx`.
*   **Duplicate Attributes:** House image in detail page has two `alt` tags.
*   **Invalid SVG Attributes:** `fill='pink'` on a standard `<img>` tag in `Header.jsx`.
*   **Naming Conventions:** `setshowList` should be `setShowList` (camelCase).

---

## 3. Filtering Improvements

*   **The "Filter Trap":** Once a house is selected, there is no way to go back to "All Characters" because the select menu lacks a default empty option.
*   **Proposed Improvement:**
    1.  Add an `<option value="">All Houses</option>` to the select menu.
    2.  Include "No House" (for characters like Filch or Hagrid who aren't in a house) as an explicit category if necessary, or group them under "Others".

---

## 4. Styling & UI Enhancements

### CSS Architecture
*   **Undefined Variables:** `var(--accent-detail)` and `var(--text-constant-detail)` are used but not defined in `:root`.
*   **Default House Style:** Characters without a house (empty string) result in an invalid class `.house`. 
    *   *Proposed Fix:* Add a default `.house` or `.houseNoHouse` style in SCSS.

### Visual Polishing
*   **Filter UX:**
    *   Add hover and focus states to inputs/selects.
    *   Ensure the filter bar stays centered on large screens.
*   **Detail Page:**
    *   Improve the contrast of the "Volver" button.
    *   Add a subtle gradient background to the detail card based on the house color.
*   **Responsive Grid:**
    *   Optimize the `grid-template-columns` for tablet views to prevent awkward whitespace.

---

## 5. UX Improvements

*   **Initial View:** Currently, the character list is hidden until the user interacts. 
    *   *Improvement:* Set `showList` to `true` by default so users see content immediately upon landing, or add a "Search" button if the intent is to be search-driven.
*   **Loading State:** Add a "Sorting hat is thinking..." or "Loading characters..." message while the fetch is in progress.
