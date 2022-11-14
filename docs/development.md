# Before starting any code

Please make sure you have Prettier and Eslint extension installed in your vs code

We take code quality very seriously. You have to make sure that your code is properly formatted, linted and free of any type errors before pushing any commits to your PR.

If you are unsure if your vscode is setup properly, you can run the following command in your terminal:

```bash
yarn lint
yarn tsc
```

If you see any errors, please fix them before pushing your code (warnings are fine). If you are unsure how to fix them, please ask in slack.

# How to build the UI components

To build the UI, you will **not** use any component library like bootstrap / material or antd.

You are going to use a library called stitches to build all the components yourself from scratch.

[Here is a video](https://www.youtube.com/watch?v=Gw28VgyKGkw) you can watch in 2x to get an overview of stitches and variant-based component development.

Note that, **we don't use div, span or any other html elements directly in the code** (unless very very very rarely)

To get you started, we provided two components, `Stack` and `Typography` and you can use them to build the rest of the layouts.

You can find the code for these components in `src/components/Stack.tsx` and `src/components/Typography.tsx` respectively and see how they are used in `pages/docs/stack.tsx`.

You'll use `XStack` and `YStack` for building layout and `Typography` for content (text).

You will be extending typography with newer variants (it currently has `h1` and `p1`) as you build out the pages. Refer to figma for style guide.

If you need other primitive components like button or input, your can use stitches to build them yourself. You can find the documentation for stitches [here](https://stitches.dev/docs/variants).

Additionally, take a look at `src/stitches.config.ts` where you can set global css tokens like colors. The tokens can be then used in different places as part of the css. The documentation for stitches has a section on [tokens](https://stitches.dev/docs/tokens).

# How to organize your code

Use `src/components` only for your resuable components. If you are building a page, create a new folder in `src/pages` and put all the components for that page in that folder.

It's also fine to have more than one components in a single file, as long as your are exporting only one.

When naming the files, follow existing conventions. Great engineers are very particular about naming things and we expect you to pay close attention to details like this.

In most cases, the convention / pattern should be obvious. If you are unsure, feel free to introduce a new convention and ask for feedback in slack.

eg: "I was creating a component for top navigation and I wasn't sure between top-nav.tsx and topNav.tsx. I am going with topNav.tsx for now. Is that ok?"

The answer will be yes, as long as you are consistent.
