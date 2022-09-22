import { useEffect } from 'react';

import hljs from 'highlight.js';

import 'highlight.js/styles/default.css';

export default function useHighlightCode() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
}
