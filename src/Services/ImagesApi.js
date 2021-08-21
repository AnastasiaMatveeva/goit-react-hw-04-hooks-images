import axios from "axios";

function fetchImagesWithQuery(searchQuery, pageNum) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${pageNum}&key=22812304-3b9840aba1a79f008a4d1352a&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
}

export default {
  fetchImagesWithQuery,
};
