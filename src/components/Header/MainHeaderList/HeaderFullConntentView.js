import React from "react";
import cx from 'classnames';
import "../../Header/Header.css";

function HeaderFullConntentView({ data, activate, id }) {
  return (
    <div className={"header-full-content-view"} onMouseEnter={ e => activate(e, id)} >
      <div className={"nav-bar-list-content"}>
        {data.children.map((item,ind) => {
          return (
            <div className={cx("nav-sub-list",{"nav-sub-list-odd": (ind % 2)})} onMouseEnter={ e => activate(e, id)}>
                <p className={'sub-list-title'} onMouseEnter={ e => activate(e, id)}>
                    {item.headerName} {ind % 2}
                </p>
              {item.siblings.map((it) => {
                return <div className={"sub-list-item"} onMouseEnter={ e => activate(e, id)}>
                        <a href={it.href}  onMouseEnter={ e => activate(e, id)} >
                            <span className={'sub-list-item-text'}>
                                {it.name}
                            </span>
                        </a>
                </div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderFullConntentView;
