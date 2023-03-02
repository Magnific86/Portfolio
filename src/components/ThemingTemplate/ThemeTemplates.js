import { FiSettings } from "react-icons/fi";
import { BsMoonStars, BsFillSunFill } from "react-icons/bs";
import { useGLobalContext } from "../../hooks/contextAPI";

import { BsXLg } from "react-icons/bs";
import "./themetemplate.scss";

function ThemeTemplate() {
  const {
    isTemplateOpen,
    openTemplate,
    handleTheme,
    closeTemplate,
    changeTemp,
    handleTemp,
    colorTheme,
  } = useGLobalContext();


  const arr = [
    "template-1",
    "template-2",
    "template-3",
    "template-4",
    "template-5",
    "template-6",
    "template-7",
  ].map((el, index) => (
    <div
      key={index}
      className={`template ${changeTemp === el ? "switch__border-color" : ""}`}
      onClick={() => handleTemp(el)}
    >
      <div className={el}></div>
    </div>
  ));

  return (
    <>
      <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className="theme-icon switch__color" />
      </div>
      <div
        className={`${
          isTemplateOpen
            ? "theme-wrapper show-template"
            : "theme-wrapper hide-template"
        }`}
      >
        <div className="theme-header">
          <span>Theme Template</span>
          <span>
            <BsXLg
              onClick={closeTemplate}
              className="close-template switch__color"
            />
          </span>
        </div>
        <div className="mode">
          <div
            className={`${colorTheme === "light-mode" ? "active-mode" : ""}`}
            onClick={() => handleTheme("light-mode")}
          >
            <BsFillSunFill className="icon switch__color" />
          </div>
          <div
            className={`${colorTheme === "dark-mode" ? "active-mode" : ""}`}
            onClick={() => handleTheme("dark-mode")}
          >
            <BsMoonStars className="icon switch__color " />
          </div>
        </div>
        <div className="template-wrapper">
          {arr}
        </div>
      </div>
    </>
  );
}

export default ThemeTemplate;
