import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

let observer = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";
//화면 안으로 이미지가 들어왔을 때 실행될 커스텀이벤트
const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};
const Image = ({
  lazy,
  threshold = 0.3,
  placeholder,
  src,
  width,
  height,
  alt,
  mode,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const imageStyle = {
    width,
    height,
    objectFit: mode,
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return;
    }
    const handleLoadImage = () => setLoaded(true);
    const imgElement = imgRef.current;
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  return (
    <img
      ref={imgRef}
      src={src}
      style={{ ...props.style, ...imageStyle }}
      alt={alt}
    />
  );
};

Image.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  placeholder: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
};
export default Image;
