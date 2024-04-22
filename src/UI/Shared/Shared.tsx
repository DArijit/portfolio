import classNames from "classnames";
import styles from "./Shared.module.css";

interface ContentWrapperProps {
  children: JSX.Element;
  header: string;
}

export const ContentWrapper = (props: ContentWrapperProps) => {
  const { children, header } = props;

  return (
    <div className={styles.contentWrapperContainer}>
      <h3 className={classNames([styles.headerName, styles.removeMargin])}>
        {header}
      </h3>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
