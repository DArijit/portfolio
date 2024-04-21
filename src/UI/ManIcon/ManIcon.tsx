import "./ManIcon.module.css";

const ManIcon = () => {
  window.addEventListener(
    "scroll",
    () => {
      return document.body.style.setProperty(
        "--scroll",
        `${window.scrollY / (document.body.offsetHeight - window.innerHeight)}`
      );
    },
    false
  );
  return (
    <svg width="100" height="100" viewBox="0 0 24 24">
      <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
    </svg>
  );
};

export default ManIcon;
