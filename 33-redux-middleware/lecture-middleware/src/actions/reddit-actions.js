export const SET_IMAGES = 'SET_IMAGES';

export function downloadImages() {
  const URL = 'https://www.reddit.com/r/gallagher.json';
  return (dispatch) => {
    fetch(URL)
    .then(res => res.json())
    .then(json => {
      let imgUrls = json.data.children.filter(child => {
        return !!child.data.preview;
      }).map(child => {
        return child.data.preview.images[0].source.url;
      });

      dispatch(setImages(imgUrls));
    });
  }
}

export function setImages(images) {
	return {type: SET_IMAGES, images}
}
