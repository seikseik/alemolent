import Link from "next/link";
import { PrismicLink, PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";

import { repositoryName, linkResolver } from "../prismicio";

import "../styles/globals.scss";




const richTextComponents = {
  paragraph: ({ children }) => <p className="mb-7 last:mb-0">{children}</p>,
  oList: ({ children }) => (
    <ol className="ordered-list">{children}</ol>
  ),
  oListItem: ({ children }) => (
    <li className="ordered-list-li">{children}</li>
  ),
  list: ({ children }) => (
    <ul className="unordered-list">{children}</ul>
  ),
  listItem: ({ children }) => (
    <li>{children}</li>
  ),
  preformatted: ({ children }) => (
    <pre className="">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  hyperlink: ({ children, node }) => (
    <PrismicLink
      field={node.data}
      className="rich-link"
    >
      {children}
    </PrismicLink>
  ),
};



export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      richTextComponents={richTextComponents}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
