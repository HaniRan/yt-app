import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import VideoList from './components/VideoList/VideoList.jsx';
import VideoDetail from './components/VideoDetail/VideoDetail.jsx';
import Nav from './components/Nav/Nav.jsx';
import { Container } from './appStyles.js';


function App() {
  const API_KEY = "AIzaSyCPvjfX1xDl39xwcmXJAhPG8ZxeGDWvtts";

  const [videos, setVideos] = useState(null),
    [selectedVideo, setSelectVideo] = useState();

  const handleSearch = term =>
    YTSearch({ key: API_KEY, term }, videos => {
      setVideos(videos);
      setSelectVideo(videos[0]);
    });

  useEffect(() => {
    handleSearch('Guns and roses');
  }, []);

  return (
    <Container>
      <Nav>
        <SearchBar handleSearch={handleSearch} />
      </Nav>
      <VideoDetail videos={selectedVideo}>
        <VideoList
          videos={videos}
          handleSelectVideo={selectedVideo => setSelectVideo(selectedVideo)}
        />
      </VideoDetail>
    </Container>
  );
}

export default App;
