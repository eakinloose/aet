// src/components/CodeSnippet.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import styled from "styled-components";

const CodeContainer = styled.div`
  position: relative;
  margin: 20px 0;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background: ${({ theme }) => theme.colors.button};
  border: none;
  border-radius: 5px;
  width: 50px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeSnippet = ({ language, code }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <CodeContainer>
      <CopyButton onClick={handleCopy}>
        <FaRegCopy size={16} />
      </CopyButton>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </CodeContainer>
  );
};

export default CodeSnippet;
