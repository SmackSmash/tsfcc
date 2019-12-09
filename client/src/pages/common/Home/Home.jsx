import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditorJs from 'react-editor-js';
import EDITOR_JS_TOOLS from '../../../utils/editorJsTools';
import Common from '../../../containers/Common/Common';
import Loading from '../Loading/Loading';
import './Home.scss';

const Home = props => {
  const [pageData, setPageData] = useState({});
  const pageName = 'home';
  let editor;

  useEffect(() => {
    const getPageData = async pageName => {
      const result = await axios.get(`/api/pages/${pageName}`);
      setPageData(result.data);
    };
    getPageData(pageName);
  }, []);

  console.log(pageData);

  const handleSave = async () => {
    try {
      const outputData = await editor.save();
      console.log({ pageName, ...outputData });
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  return (
    <Common>
      {!Object.entries(pageData).length ? (
        <Loading />
      ) : (
        <>
          <EditorJs
            instanceRef={instance => (editor = instance)}
            data={pageData}
            tools={EDITOR_JS_TOOLS}
          />
          <button onClick={handleSave}>Save Page</button>
        </>
      )}
    </Common>
  );
};

export default Home;
