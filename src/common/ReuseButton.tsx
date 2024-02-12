import { FaCaretRight } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const ReuseButton = ({
  text,
  textClass = "",
  iconClass = "",
  mainClass = "",
}: {
  text: string;
  textClass?: string;
  iconClass?: string;
  mainClass?: string;
}) => {
  const allClass = "flex items-center cursor-pointer justify-center  w-[100%]";
  const additionClass = `${allClass} ${mainClass}`;
  return (
    <a className={additionClass}>
      <span className={textClass}>{text}</span>
      {text.includes("visit") ? (
        <FaExternalLinkAlt className={iconClass} />
      ) : (
        <FaCaretRight className={iconClass} />
      )}
      <div className=""></div>
    </a>
  );
};

export default ReuseButton;
