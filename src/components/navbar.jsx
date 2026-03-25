import React from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledWrapper = styled.div`
  .menu {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 20px);
    max-width: 520px;
    backdrop-filter: blur(12px) saturate(180%) contrast(200%);
    -webkit-backdrop-filter: blur(12px) saturate(180%) contrast(200%);
    background: rgba(0, 122, 255, 0.404);
    border: 1px solid var(--glass-border);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    padding: 8px;
    border-radius: 99rem;
    display: flex;
    justify-content: center;
    gap: 8px;
    z-index: 50;
  }

  .menu::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow:
      inset 2px 2px 5px -2px rgba(255, 255, 255, 0.4),
      inset -2px -2px 5px 2px rgba(255, 255, 255, 0.4),
      inset 0 -2px 0 rgba(255, 255, 255, 0.2);
    pointer-events: none;
    z-index: -1;
  }

  .menu a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0;
    min-width: 0;
    color: rgba(255, 255, 255, 90%);
    text-decoration: none;
    padding: 10px 6px;
    border-radius: 999rem;
    -webkit-tap-highlight-color: transparent;
    transition:
      background 0.18s var(--ease-spring),
      color 0.18s var(--ease-spring),
      transform 0.18s var(--ease-spring),
      box-shadow 0.3s ease-in-out;
  }

  .menu a:hover {
    transition:
      background 0.18s var(--ease-spring),
      color 0.18s var(--ease-spring),
      transform 0.18s var(--ease-spring),
      box-shadow 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 30%);
    box-shadow:
      inset 2px 2px 5px -2px rgba(255, 255, 255, 0.4),
      inset -2px -1px 5px 0 rgba(255, 255, 255, 0.4),
      inset 0 -2px 0 rgba(255, 255, 255, 0.2);
    transform: rotate(2.2);
    color: rgba(0, 122, 255, 70%);
  }

  .menu a svg {
    width: 1.4rem;
    font-size: 1.4rem;
  }

  .menu a span {
    font-size: 0.8rem;
    font-weight: 600;
    line-height: 1;
    margin-top: 4px;
  }

  .menu a.active {
    background: rgb(237, 237, 237, 60%);
    color: rgba(0, 122, 255, 90%);
  }

  .menu a:active {
    transform: scale(0.98);
  }
`;

const Navbar = () => {
  return (
    <StyledWrapper>
      <div className="menu">
        <NavLink to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <span>Home</span>
        </NavLink>
        <NavLink to="/resume">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
          </svg>
          <span>Resume</span>
        </NavLink>
        <NavLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          <span>Logout</span>
        </NavLink>
        <NavLink to="/spotify">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.33a1.5 1.5 0 0 1-1.483-2.354l.082-.123a.75.75 0 0 0-.125-.927l-1.109-1.109a.75.75 0 0 0-1.06 0L11.5 16.561V5.558l7.203-1.801a.75.75 0 0 1 .945.727v10.158a.75.75 0 0 0 1.5 0V4.484a2.25 2.25 0 0 0-1.713-2.182l-7.202-1.801a2.25 2.25 0 0 0-2.73 2.182v14.12a4.493 4.493 0 0 0-3.75-1.921 4.5 4.5 0 1 0 0 9 4.494 4.494 0 0 0 4.394-3.528l.056-.224V4.484a.75.75 0 0 1 .569-.727l7.202-1.801a.75.75 0 0 1 .569-.305Z"
            />
          </svg>
          <span>Spotify</span>
        </NavLink>
        <NavLink to="/quiz">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.e.246-.8.466-1.173.466-.372 0-.548-.22-.173-.466.307-.202.709-.346 1.173-.346.467 0 .867.144 1.173.346.375.246.2.466-.173.466-.374 0-.573-.22-.173-.466.307-.202.709-.346 1.173-.346ZM12 15.75c.621 0 1.125-.504 1.125-1.125s-.504-1.125-1.125-1.125-1.125.504-1.125 1.125.504 1.125 1.125 1.125Z" clipRule="evenodd" />
            <path d="M12 7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Z" />
          </svg>
          <span>Quiz</span>
        </NavLink>
        <NavLink to="/weather">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path d="M4.5 9.75a6 6 0 0 1 11.54-2.226 3.75 3.75 0 0 1 3.51 5.313A5.25 5.25 0 0 1 14.25 21H6.742a6 6 0 0 1-2.242-11.25Z" />
          </svg>
          <span>Weather</span>
        </NavLink>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;
