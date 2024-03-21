import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhotosWithTopic } from "./photos-api";

const App = () => {
  const [photos, setPhotos] = useState([]);

  const handleSearch = async (topic) => {
    try {
      setPhotos([]);
      const response = await fetchPhotosWithTopic(topic);
      setPhotos(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("AAAAAAAAAA");
    }
  };

  return (
    <div>
      App
      <ImageGallery photos={photos} />
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default App;
