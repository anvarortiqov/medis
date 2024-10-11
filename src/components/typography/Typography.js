import "./index.css";
import classNames from "classnames";
export const Typography = ({ type = "p", children, className }) => {
  switch (type) {
    case "p": {
      return <p className={classNames(className, "text")}>{children}</p>;
    }
    case "h1": {
      return <h1>{children}</h1>;
    }
    default: {
      return <span className={className}>{children}</span>;
    }
  }
};
