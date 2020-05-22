# This repo

This repo demonstrates problems with nesting inherited elements. When you serve this repo and view it in the browser, you get "[object Object]" instead of the intended render.

The master branch will render "[object Object]"
The branch dedupeExample renders as expected. This dedupeExample branch uses dedupe to remove node_modules nesting and the problems goes away.

All html and js code is the same. The only difference between the branches master and dedupeExample is the structure of the node_modules directory.

# serve the demo

```
cd child-element
npm start
```
