import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Common from '../../../containers/Common/Common';
import './Home.scss';

const Home = props => {
  const editor = new EditorJS({
    holderId: 'editor',
    tools: {
      header: Header
    }
  });

  const savePage = async () => {
    try {
      const outputData = await editor.save();
      console.log(outputData);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <Common>
      <div id="editor"></div>
      <button onClick={savePage}>Save Page</button>
    </Common>
  );
};

export default Home;
