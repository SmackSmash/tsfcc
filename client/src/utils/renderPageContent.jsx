import React from 'react';

export default block => {
  switch (block.type) {
    case 'header':
      const Tag = `h${block.data.level}`;
      return <Tag>{block.data.text}</Tag>;
    case 'paragraph':
      return <p>{block.data.text}</p>;
    default:
      return block.data.text;
  }
};
