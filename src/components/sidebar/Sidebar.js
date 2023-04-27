import { useReducer } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { sideBarMenu, socialIcons } from "../../data/data"

import { BsXLg, BsListNested } from "react-icons/bs"
import { reducer } from "../../hooks/useReducer"
import "./sidebar.scss"
import { FaEthereum } from "react-icons/fa"

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

function Sidebar() {
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  const navigate = useNavigate()

  return (
    <>
      <BsListNested onClick={() => dispatch({ type: "OPEN_NAVBAR" })} className="menu-icon switch__color" />
      <aside
        className={`${state.openCloseNav1 ? "aside open-sidebar" : "aside"} ${
          state.showAside1 ? "aside show-asideBar" : "aside"
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg onClick={() => dispatch({ type: "CLOSE_NAVBAR" })} className="close-btn switch__color" />
          <span
            onClick={() => navigate("/")}
            className="logo-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              lineHeight: "4",
            }}
          >
            <span style={{ fontSize: "1.2rem" }} className="switch__color">
              <div>
                <FaEthereum
                  className="borderSelf"
                  style={{
                    fontSize: 60,
                    width: "100%",
                    height: "100%",
                    padding: 10,
                    borderRadius: 30,
                  }}
                />
              </div>
            </span>
          </span>
          <ul className="side-link">
            {sideBarMenu.map(({ text, icon, url }) => (
              <li key={url}>
                <NavLink
                  onClick={() => dispatch({ type: "CLOSE_NAVBAR" })}
                  className={({ isActive }) => {
                    return isActive ? "nav__links active-links" : "nav__links"
                  }}
                  to={url}
                >
                  {icon}
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="social-icon">
            {socialIcons.map(({ icon, url }) => (
              <a target="_blank" href={url} key={url}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
