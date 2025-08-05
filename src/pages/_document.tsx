import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased w-screen h-screen bg-gray-100 text-gray-900 overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
