import React, { useState } from "react";
const Accordion =()=>{
    const [active, setActive] = useState(0);
    return(
        <div>
            <h2>글목록</h2>
            <Panel title="쇼핑라이브" isActive={active===0} onShow={()=>{setActive(0)}}>
                박여사의 꼬기린이 풍성한 이유
                
            </Panel>
            <Panel title="원뿔딜" isActive={active===1} onShow={()=>{setActive(1)}}>
                닥터 차정숙이가 재미있어요
            </Panel>
        </div>

    )}

function Panel({title, children, isActive, onShow}){
    // children으로 다른 프롭도 다 받을 수 있다.
    return(
        <section>
            <h3>{title}</h3>
            {isActive?(<p>{children}</p>):(<button onClick={onShow}>더보기</button>)}
        </section>
    )
}


export default Accordion;
