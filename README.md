# Case
We have several local lit-element based libraries to be installed on many projects. We have done this approach since polymer v3 to collect our internal reusable elements.

It has been long issue since polymer v3 where we need to be struggling with duplicate or nested libraries. On polymer v3, we solved this issue with several solution such as custom script for pre-install, deduping-fix and npm dedupe

# Expectation
We migrated to lit-element to improve our development and find new spirit. One thing of our expectations was hopefully the duplication issue will be gone. So it will make simplify the development.

However, We still need npm dedupe every succeed install the packages. If possible - as we integrate lit-element We want to move away from dedupe

## serve the demo

```
cd child-element
npm start
```
