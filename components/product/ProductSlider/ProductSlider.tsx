import { FC, cloneElement, Children, isValidElement } from "react";
import { useKeenSlider } from "keen-slider/react";
import s from "./ProductSlider.module.css";
import cn from "classnames";

const ProductSlider: FC = ({ children }) => {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
  });

  return (
    <div className={s.root}>
      <div ref={sliderRef} className="keen-slider h-full transition-opacity">
        <button
          onClick={() => slider.current?.prev()}
          className={cn(s.leftControl, s.control)}
        />
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, {
              className: `${
                child.props.className ? `${child.props.className}` : ""
              } keen-slider__slide`,
            });
          }

          return child;
        })}
        <button
          onClick={() => slider.current?.next()}
          className={cn(s.rightControl, s.control)}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
