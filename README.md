## Overview

Welcome to our `<CustomDatePicker/>` component, an innovative solution crafted using the `react-datepicker` library and styled elegantly with `Tailwind CSS 3`. This component is a direct outcome of the challenges we faced while integrating various date-picking functionalities into web projects. It's tailored to streamline the date selection process, especially for booking flows, and has been refined through insights and inputs from expert developer.

## Introduction
`<CustomDatePicker/>` is a versatile, independent, and reusable component designed to elevate the date-picking experience in your `Next.js` and `React.js` projects. This component is meticulously crafted with `TypeScript`, ensuring type safety and efficient integration.
 
## Key Features
- **Dynamic Properties**: Tailor the component to your needs with dynamic props. Features like setting an end date or a minimum date are effortlessly configurable.
- **End Date Functionality**: Utilize the `isEndDate` flag to activate the end date picker, catering to scenarios requiring both start and end date selections.
- **Date Validation**: The component intelligently ensures that the `endDate` is always equal to or later than the `startDate`, maintaining logical date ranges.
- **Customizable Date Popper**: Style your date popper to match your project's aesthetics by passing custom classes through the `additionalDatePickerClasses` prop.
- **Efficient Date Handling**: Leverages **[date-fns](https://date-fns.org/)** for all date formatting and operations, offering a lightweight alternative to bulkier libraries.
- **Styling Flexibility**: The component supports `global.css` for those projects that require global CSS styles. 

## Inspiration

Our journey began while working on a project where the need for an efficient and user-friendly date picker was paramount. The existing solutions were cumbersome, leading us to develop our own component. This endeavor was significantly enhanced by collaborating with an expert developer, whose experience brought valuable use cases and insights to the table.

## Customization and Usage

Developers are encouraged to explore and adapt this component to fit their specific needs. The code is designed to be flexible, allowing for easy modifications and enhancements.

## More about `<CustomDatePicker/>`.
- Independent and reusable date picker component built for `Next.js` and `React.js` Projects with `TypeScript`.
- Dynamic props to render more features of the component. ex: end date, minDate, ...
- `isEndDate` flag will render the endDate picker. in case of website expects the start and end date functionality.
- `endDate` will be alway >= `startDate`.
- `DatePopper` can be customizable by passing `additionalDatePickerClasses` prop to customize popper styles.
- Used [data-fns] for date formatting and other operations instead of other heavy libraries.
- No Material UI.
- used `global.css` in case global css styles are needed.
- I'm using RTL for Unit testing

_p.s_: _I'll be adding more features and solid unit test cases for this component in the next release_

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
