# graphcms-localized-textfields

A GraphCMS UI Extension component for adding localized text fields to models.
Looks like this:
![Extension screenshot](https://ibb.co/wpGpW5n)

# Usage

A basic example of usage can be like this:

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

Then, all you have to do is to host the website, and then provide GraphCMS with the link to it.

# API

**LocalizedTextPage** receives the following options:

- **locales** - an array of language codes ([preferably in the ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes))

- **mapLocaleCodeToString** - an object that maps from the language code, such as "en" to a natural language string, such as "English".
  By default, the following language codes already have mappings: en, de, it, es, fr, ru, uk.

- **isMultiline** - indicates whether the text inputs should be multiline. By default, is set to **false**.
