# Bug Analysis Report - Harry Potter Character Database

## 1. Logic & Performance Issues

### App.jsx
*   **Inefficient API Fetching:** 
    *   **Issue:** The `useEffect` hook has `[characterHouse]` as a dependency. 
    *   **Impact:** Every time a user changes the house filter, the entire character list is re-fetched from the API.
    *   **Fix:** Change dependency to `[]` to fetch only once on mount.
*   **Detail Page Crash on Refresh:**
    *   **Issue:** If a user refreshes the browser while on `/detalle/:id`, the `characters` state is initially `[]`. The `findCharacter` function returns `undefined`, and `CharacterDetailPage` attempts to access properties of `undefined`.
    *   **Fix:** Add a loading state or a check in `CharacterDetailPage` to handle cases where the character hasn't been loaded yet.
*   **Naming Convention:**
    *   **Issue:** `setshowList` uses a lowercase 's'. 
    *   **Fix:** Rename to `setShowList` to follow React/JS camelCase conventions.

### CharacterDetailPage.jsx
*   **Incorrect "Alive" Logic:**
    *   **Issue:** The component determines if a character is alive based *only* on their gender:
        ```javascript
        if (characterFound.gender === 'male') { isItAlive = 'vivo'; }
        ```
    *   **Impact:** If a character is dead (e.g., Albus Dumbledore), it will still show them as "vivo" because he is male.
    *   **Fix:** Use the `isItAlive` (from `characterObj.alive`) boolean property fetched in `App.jsx`.

---

## 2. Syntax & React Errors

### CharacterDetailPage.jsx
*   **Invalid Attribute:** Used `class='houseRow'` instead of `className`.
*   **Duplicate Attributes:** The `<img>` tag for the house shield has two `alt` attributes.

### Filters.jsx
*   **Filter Trap:**
    *   **Issue:** The house selector is populated directly from the houses present in the data, but there is no "All" or "Default" option.
    *   **Impact:** Once a user selects a house, they cannot go back to seeing all characters without refreshing the page.

### Header.jsx
*   **Invalid HTML:** `fill='pink'` is used on an `<img>` tag. This is a partial SVG attribute that does not work on standard image tags or PNG files.

---

## 3. CSS & Styling Issues

### App.scss / CharacterDetailPage.jsx
*   **Undefined Variables:**
    *   The following variables are used in the components/CSS but never defined in `:root`:
        *   `--accent-detail` (used in `.housesImg` box-shadow)
        *   `--text-constant-detail` (used in `.gridInfo span`)
*   **Detail Card Background:** The dynamic class `` house${characterFound.house} `` is applied, but if the house is an empty string (some characters have no house), it results in `house`, which might have no styles.

---

## 4. User Experience (UX)

### CharacterList.jsx
*   **Empty State:** The list is completely hidden (`if (!showList) return;`) until the user starts typing or filtering. While this might be a design choice, it usually makes the landing page look "broken" or empty to first-time visitors.
