import { FC } from "react";
import s from "./Swatch.module.css";

import { Check } from "@components/icons";
import cn from "classnames";
import { isDark } from "@lib/color";

interface Props {
  color?: string;
  label?: string;
  variant: "size" | "color" | string;
  onClick: () => void;
  active: boolean;
}

const Swatch: FC<Props> = ({ color, label, variant, active, ...rest }) => {
  label = label.toLowerCase();
  variant = variant.toLowerCase();

  const rootClassName = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: isDark(color)
  });

  return (
    <button
      className={rootClassName}
      style={color ? { backgroundColor: color } : {}}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : ""}
    </button>
  );
};

export default Swatch;
