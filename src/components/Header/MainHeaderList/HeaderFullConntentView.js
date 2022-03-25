import React from "react";
import cx from 'classnames';
import "../../Header/Header.css";

function HeaderFullConntentView({ data }) {
  return (
    <div className={"header-full-content-view"}>
      <div className={"nav-bar-list-content"}>
        {data.children.map((item,ind) => {
          return (
            <div className={cx("nav-sub-list",{"nav-sub-list-odd": (ind % 2)})}>
                <p className={'sub-list-title'}>
                    {item.headerName} {ind % 2}
                </p>
              {item.siblings.map((it) => {
                return <div className={"sub-list-item"}>
                        <a href={it.href}>
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
