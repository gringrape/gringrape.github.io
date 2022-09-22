/* eslint-disable react/no-danger */

import 'github-markdown-css';

import useHighlightCode from '../hooks/useHighlightCode';

export default function Markdown({ html }) {
  useHighlightCode();

  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
