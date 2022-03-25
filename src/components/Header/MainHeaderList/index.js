import React ,{useState}from "react";
import "../../Header/Header.css";
import cx from 'classnames';
import HeaderFullConntentView from './HeaderFullConntentView';

function MainHeaderList({ list }) {
    const [activeId, setActiveId] = useState('-1')

    const activate = (e) =>{
        let a = e.target.getAttribute("attribute-id")
        console.log(a);
        if(a){
            setActiveId(a);
        } else{
            // setActiveId('-1');
        }
  }
  const deActivate = (e) =>{
        // setActiveId('-1');
}

  return (
    <div className={"main-header-border"}>
      <div className={"main-list-container"}>
        <div className={"main-list-wrapper"} onMouseOver={activate} onMouseOut={deActivate} onMouseMove={activate} >
          {list.map((item,index) => {
            return (
              <div className={cx({"main-list-content-active":index == activeId},"main-list-content")} attribute-id={index} key={index}>
                <span className={cx({"main-list-text-active":index == activeId},"main-list-text")} >{item.title}</span>
                {index == activeId ? <HeaderFullConntentView data={item}/> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainHeaderList;
