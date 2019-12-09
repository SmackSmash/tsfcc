import React from 'react';
import EditorJs from 'react-editor-js';
import EDITOR_JS_TOOLS from '../../../utils/editorJsTools';
import Common from '../../../containers/Common/Common';
import './Home.scss';

const Home = props => {
  const page = 'home';
  const data = {};
  let editor;

  const savePage = async () => {
    try {
      const outputData = await editor.save();
      console.log({ page, ...outputData });
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <Common>
      <EditorJs instanceRef={instance => (editor = instance)} data={data} tools={EDITOR_JS_TOOLS} />
      <button onClick={savePage}>Save Page</button>
    </Common>
  );
};

export default Home;
