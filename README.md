# graphcms-localized-textfields

A GraphCMS UI Extension component for adding localized text fields to models.
Looks like this:

![Extension screenshot](https://i.ibb.co/SVYVnFk/Screenshot-2021-12-12-at-19-23-29.png)

Under the hood, the field will be of the JSON format, mapping the language code to the string in the input.

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
In case you wish to have a both the single-line & the multi-like text fields, you can use a router library such as [Wouter](https://github.com/molefrog/wouter), and place each each version of the component on separate uris.

Note that the GraphCMS SDK's **Wrapper** context is already built into the **LocalizedTextPage** component. In case you wish to customize the declaration or replace the context, feel free to import the **LocalizationsList** component, which is not Wrapped.

# API

**LocalizedTextPage** receives the following options:

- **locales** - an array of language codes ([preferably in the ISO 639-1 format](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes))

- **mapLocaleCodeToString** - an object that maps from the language code, such as "en" to a natural language string, such as "English".
  By default, the following language codes already have mappings: en, de, it, es, fr, ru, uk.

- **isMultiline** - indicates whether the text inputs should be multiline. By default, is set to **false**.
