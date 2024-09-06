import { FC } from "react";
import styles from "./avatar.module.scss";
import IAvatar from "./interface";
import "./avatar.module.scss";
import classNames from "classnames";

export const Avatar: FC<IAvatar> = (props: IAvatar) => {
  const { src, imgSize = "md", className } = props;
  const avatarClassname = classNames(styles.avatar, className, {
    [styles.small]: imgSize === "sm",
    [styles.medium]: imgSize === "md",
  });
  // const className = `component-avatar component-avatar--${size}`;

  return (
    <div className={avatarClassname}>
      <img className={styles.image} src={src} alt="user avatar" />
    </div>
  );
};
