# graphcms-localized-textfields

A GraphCMS UI Extension for adding localized text fields to models

# Usage

```js
import { LocalizedTextPage } from "graphcms-localized-textfields";

const locales = ["en", "de", "ch", "ru", "uk"];

const mapper = {
  ch: "Chinese",
  en: "English",
  de: "German",
  ru: "Russian",
  uk: "Ukrainian",
};

function App() {
  return (
    <LocalizedTextPage
      locales={locales}
      mapLocaleCodeToString={mapper}
      isMultiline
    />
  );
}

export default App;
```
