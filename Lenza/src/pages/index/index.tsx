import React, { FC } from "react";
import { IPage } from "../../interface/page";
import Header from "../../components/Header";
import AsideChatsMenu from "../../components/AsideChatsMenu";
import styles from "./indexPage.module.scss";
import Input from "../../components/Input";
import Conversation from "../../components/Conversation";

const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;

  return (
    <div className="container">
      <div className={styles.mobileAlert}>
        ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
      </div>
      <div className={styles.wrapper}>
        <AsideChatsMenu />
        <div className={styles.mainContent}>
          <Header />
          <main>
            <Conversation />
            <Input />
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageIndex;
