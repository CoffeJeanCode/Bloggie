---
title: Como debbugear con React
description: My first post.
cover: https://res.cloudinary.com/coffejeancode/image/upload/v1606265156/images_vvhl28.png
tags: [React]
lang: Spanish
date: 2020-11-16
---

El **rendimiento** en la web actual es muy importante para UX (User Experience/ Experiencia de Usuario), esto ayuda a poder atraer a las personas, y para la escalabilidad en un app, en el equipo de React, hay una herramienta/extención, que nos ayuda en el momento de desarollo una inspeccion facil y eficaz, en las app y sitios web, llamada **React Dev Tools**, esta herramienta se instala como una [extensión](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es).

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const [counter, setCounter] = React.useState<number>(0);
  return <div>{counter}</div>;
};

const root = document.querySelector("#root");

ReactDOM.render(<App />, root);
```
