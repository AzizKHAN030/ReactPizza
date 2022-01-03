import classNames from "classnames";

export default function Button({ className, children, onClick }) {
  return (
    <>
      <button className={classNames("button", className)} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
