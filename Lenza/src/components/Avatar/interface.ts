import { HTMLProps } from "react";

interface IAvatar extends HTMLProps<HTMLDivElement> {
  src?: string;
  imgSize?: "md" | "sm";
}

export default IAvatar;
