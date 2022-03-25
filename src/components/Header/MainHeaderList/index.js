import React, { useCallback, useState } from "react";
import "../../Header/Header.css";
import cx from "classnames";
import HeaderFullConntentView from "./HeaderFullConntentView";

function MainHeaderList({ list }) {
  const [activeId, setActiveId] = useState("-1");

    const activate = useCallback((e,id) => {
      console.log(e,id);
      if(id){
        setActiveId(id.toString());
        return;
      }
      let a = e?.target?.getAttribute("attribute-id") || e?.target?.parent?.getAttribute("attribute-id");
      if (a) {
        setActiveId(a);
      }
  }, []);

  const deActivate = useCallback(() => {
    setActiveId('-1');
  }, []);


  return (
    <div className={"main-header-border"}>
      <div className={"main-list-container"}>
        <div
          className={"main-list-wrapper"}
          onMouseOver={activate}
          onMouseOut={deActivate}
          onMouseMove={activate}
        >
          {list.map((item, index) => {
            return (
              <div
                className={cx(
                  { "main-list-content-active": index == activeId },
                  "main-list-content"
                )}
                attribute-id={index}
                key={index}
                onMouseEnter={ e => activate(e, index)}
                onClick={ e => activate(e, index)}
              >
                <span
                  className={cx(
                    { "main-list-text-active": index == activeId },
                    "main-list-text"
                  )}
                >
                  {item.title}
                </span>
                {index == activeId ? (
                  <HeaderFullConntentView data={item} id={activeId} activate={activate} />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainHeaderList;
