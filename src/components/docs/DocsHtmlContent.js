import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import DOMPurify from "dompurify";

// Given a Json object of HTML markup generated from sphinx-build, rewrite
// internal links and capture their events to process them through the
// React Router system.
const DocsHtmlContent = ({ className, markupJson, children }) => {
  const history = useHistory();
  const contentRef = useRef();

  const { body, current_page_name } = markupJson;

  // Sphinx generates internal links at a depth that doesn't align with the
  // app routing structure. Rewrite link paths so they resolve within the app.
  // Note: currently assumes only child directories at a depth of 1 from root (/docs)
  const pathParts = current_page_name.split("/");
  const pwd = pathParts.length > 1 ? pathParts[0] : "";

  // Links that point to directories that share a parent with the current doc (../../)
  const anchorPeerRegex = /class="reference internal" href="..\/..\//gi;
  const anchorPeerReplace = 'class="reference internal" href="/docs/';

  // Links that point to a file in the current directory (../)
  const anchorSiblingRegex = /class="reference internal" href="..\//gi;
  const anchorSiblingReplace = `class="reference internal" href="/docs/${pwd}/`;

  // Links which treat a sub directory as root, and need to be a child of docs/
  const anchorRootRegex = /class="reference internal" href="/gi;
  const anchorRootReplace = `class="reference internal" href="/docs/`;

  const imagePathRegex = /..\/..\/_images/gi;

  // Load the markup fetched from the server. This was generated via nbconvert
  // and needs some preprocessing before it can be rendered
  const docsDoc = new DOMParser().parseFromString(body, "text/html");

  // Keyboard users needs a tabindex set on scrollable content if they
  // otherwise do not have focusable content. These python codeblocks are
  // brought over from nbconvert and must have a tabindex set to all keyboard
  // scrolling.
  docsDoc
    .querySelectorAll(".docutils.container .highlight-ipython3 pre")
    .forEach(el => {
      el.setAttribute("tabindex", 0);
    });

  // Move the Hub launcher buttons under the main header so it matches their
  // placement in non-Sphinx generate documents
  const launcherEl = docsDoc.querySelector(".docs-launcher");

  if (launcherEl) {
    docsDoc.querySelector("h1").insertAdjacentElement("afterend", launcherEl);
  }

  // Serialize the content back to a string so it can be injected
  const processedMarkup = new XMLSerializer().serializeToString(docsDoc);

  const handleClick = e => {
    const anchor = e.target.closest("a.reference.internal");
    if (anchor) {
      const path = anchor.getAttribute("href");
      e.preventDefault();
      history.push(path);
    }
  };

  // Replace any sibling links (shares a parent dir) with /docs/
  let bodyWithRoutedLinks = processedMarkup.replace(
    anchorPeerRegex,
    anchorPeerReplace
  );

  // If the current doc is not at root, replace peer links (in the same dir)
  // with /docs/{pwd}/
  if (pwd) {
    bodyWithRoutedLinks = bodyWithRoutedLinks.replace(
      anchorSiblingRegex,
      anchorSiblingReplace
    );
  }

  // If the current doc is at root, replace links so they start with /docs/
  if (!pwd) {
    bodyWithRoutedLinks = bodyWithRoutedLinks.replace(
      anchorRootRegex,
      anchorRootReplace
    );
  }

  bodyWithRoutedLinks = bodyWithRoutedLinks.replace(
    imagePathRegex,
    `${process.env.PUBLIC_URL}/_images`
  );

  // Allow sanitization to safely set new tab targets
  DOMPurify.addHook("afterSanitizeAttributes", node => {
    if ("target" in node) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });

  const content = processedMarkup ? (
    <div className={className}>
      {children}
      <div
        ref={contentRef}
        onClick={handleClick}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(bodyWithRoutedLinks),
        }}
      />
    </div>
  ) : null;

  return content;
};

export default DocsHtmlContent;