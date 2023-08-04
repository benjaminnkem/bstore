import { useRef } from "react";

const useCustomSlider = (slideAmount) => {
  const slider = useRef();

  const slideLeft = () => (slider.current.scrollLeft -= slideAmount ? slideAmount : 500);
  const slideRight = () => (slider.current.scrollLeft += slideAmount ? slideAmount : 500);

  return { slider, slideLeft, slideRight };
};

export default useCustomSlider;
