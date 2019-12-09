import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import EditorJs from 'react-editor-js';
import EDITOR_JS_TOOLS from '../../../utils/editorJsTools';
import renderPageContent from '../../../utils/renderPageContent';
import Common from '../../../containers/Common/Common';
import Loading from '../Loading/Loading';
import './Home.scss';

const Home = ({ isAuthenticated }) => {
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
      ) : isAuthenticated ? (
        <>
          <EditorJs
            instanceRef={instance => (editor = instance)}
            data={pageData}
            tools={EDITOR_JS_TOOLS}
          />
          <button onClick={handleSave}>Save Page</button>
        </>
      ) : (
        pageData.blocks.map(block => renderPageContent(block))
      )}
    </Common>
  );
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default connect(mapStateToProps)(Home);
