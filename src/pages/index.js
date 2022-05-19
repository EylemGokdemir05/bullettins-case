import React, { useState, useEffect, useContext } from "react";
import data from "../data/bulten_data.json";
import ContextState from "../context/store";
import Card from "./Card";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  box-sizing: border-box;
  z-index: 99;
  transition: right 0.2s;

  @media screen and (max-width: 600px) {
    width: 450px;
  }
`;

const StyledCardBtn = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: grey;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;

  &:focus-visible {
    outline: 3px solid #d50000;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

function HomePage() {
  const [isAdded, setIsAdded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ContextState);
  const events = data.Events;
  var result = Object.keys(events).map((key) => [Number(key), events[key]]);
  context.bullettins = result;
  console.log("context AFTER assign events: ", context.bullettins);

  const getFromContext = (props) => {
    console.log("getFromContext props: ", props);
    console.log("context assign events: ", context);
    // return (
    //   <Card>
    //     {(context) => {
    //       console.log("contextState: ", context);
    //     }}
    //   </Card>
    // );
  };

  useEffect(() => {
    console.log("useEffect active!");
    getFromContext();
    // <StyledContainer style={{ right: isOpen ? "0" : "100%" }}>
    //   <StyledCardBtn onClick={()=>setIsOpen(true)}>
    //     {isOpen ? (
    //           <span>X</span>
    //         ) : null}
    //   </StyledCardBtn>
    // </StyledContainer>
    
    console.log("useEffect after");
  }, []);

  return (
    <table>
      <>
        <thead>
          <tr className="headContainer">
            <th className="redStyle" scope="col">
              Event Count: {result.length}
            </th>
            <th scope="col">Yorumlar</th>
            <th scope="col"> </th>
            <th scope="col">1</th>
            <th scope="col">X</th>
            <th scope="col">2</th>
            <th scope="col">Alt</th>
            <th scope="col">Üst</th>
            <th scope="col">H1</th>
            <th scope="col">1</th>
            <th scope="col">X</th>
            <th scope="col">2</th>
            <th scope="col">H2</th>
            <th scope="col">1-X</th>
            <th scope="col">1-2</th>
            <th scope="col">X-2</th>
            <th scope="col">Var</th>
            <th scope="col">Yok</th>
            <th scope="col">+99</th>
          </tr>
        </thead>
        <tbody>
          {context.bullettins.map((item, index) => {
            return (
              <>
                <tr key={index} className="bodyContainer">
                  <td className="indexStyle" scope="col">
                    {index}
                  </td>
                  <td className="redStyle" scope="col">
                    {item[1].D}
                  </td>
                  <td className="redStyle" scope="col">
                    {item[1].DAY}
                  </td>
                  <td className="redStyle" scope="col">
                    {item[1].LN}
                  </td>
                  <td scope="col">Yorumlar</td>
                  <td scope="col"> </td>
                  <td scope="col">{item[1].OCG[1].OC[0].N}</td>
                  <td scope="col">{item[1].OCG[1].OC[1].N}</td>
                  <td scope="col">{item[1].OCG[5].SO}</td>
                  <td scope="col">{item[1].OCG[5].OC[25].N}</td>
                  <td scope="col">{item[1].OCG[5].OC[26].N}</td>
                  <td scope="col">H1</td>
                  <td scope="col">{item[1].OCG[1].OC[0].N}</td>
                  <td scope="col">{item[1].OCG[1].OC[1].N}</td>
                  <td scope="col">{item[1].OCG[5].SO}</td>
                  <td scope="col">H2</td>
                  <td scope="col">{item[1].OCG[2].OC[3].N}</td>
                  <td scope="col">{item[1].OCG[2].OC[4].N}</td>
                  <td scope="col">{item[1].OCG[2].OC[5].N}</td>
                  <td scope="col">Var</td>
                  <td scope="col">Yok</td>
                  <td scope="col">+99</td>
                </tr>
                <tr key={index} className="secondContainer">
                  <td scope="col">{item[0]}</td>
                  <td scope="col">{item[1].T}</td>
                  <td scope="col">{item[1].N}</td>
                  <td scope="col">Yorumlar</td>
                  <td scope="col">{item[1].OCG[1].MBS}</td>
                  <td
                    style={{ backgroundColor: isAdded ? "yellow" : "" }}
                    onClick={context.addBullettinToCard.bind(this, item)}
                    scope="col"
                  >
                    {item[1].OCG[1].OC[0].O}
                  </td>
                  <td scope="col">{item[1].OCG[1].OC[1].O}</td>
                  <td scope="col"> </td>
                  <td scope="col">{item[1].OCG[5].OC[25].O}</td>
                  <td scope="col">{item[1].OCG[5].OC[26].O}</td>
                  <td scope="col"> </td>
                  <td scope="col"> </td>
                  <td scope="col"> </td>
                  <td scope="col"> </td>
                  <td scope="col"> </td>
                  <td scope="col">{item[1].OCG[2].OC[3].O}</td>
                  <td scope="col">{item[1].OCG[2].OC[4].O}</td>
                  <td scope="col">{item[1].OCG[2].OC[5].O}</td>
                  <td scope="col"> </td>
                  <td scope="col"> </td>
                  <td scope="col">3</td>
                </tr>
              </>
            );
          })}
          {/* <Card /> */}
        </tbody>
        <tfoot style={{textAlign:'center',position:'fixed',bottom:0,right:0,border: '1px solid #636e72'}}>
    <tr style={{backgroundColor:'#7f8c8d'}}>
      <td>Toplam Tutar:</td>
      <td>{context.card.length}</td>
    </tr>
  </tfoot>
        {/* <tfoot style={{position:'fixed', backgroundColor:'red', bottom:0}}>
        <tr>
        <StyledContainer style={{ right: isOpen ? "0" : "100%" }}>
      <StyledCardBtn onClick={()=>setIsOpen(true)}>
        {isOpen ? (
              <span>X</span>
            ) : null}
      </StyledCardBtn>
    </StyledContainer>
        </tr>
        </tfoot> */}
      </>
    </table>
  );

  //   const events = data.Events;
  //   var result = Object.keys(events).map((key) => [Number(key), events[key]]);
  //   console.log("events", result);
  //   const rows = new Array(10000)
  //     .fill(true)
  //     .map(() => 25 + Math.round(Math.random() * 100));

  //   const columns = new Array(10000)
  //     .fill(true)
  //     .map(() => 75 + Math.round(Math.random() * 100));

  //   return (
  //     <>
  //       <h3>Rows</h3>
  //       <RowVirtualizerDynamic rows={result} />
  //     </>
  //   );
  // }

  // function RowVirtualizerDynamic({ rows }) {
  //   const parentRef = React.useRef();

  //   const rowVirtualizer = useVirtual({
  //     size: rows.length,
  //     parentRef,
  //   });

  //   return (
  //     <>
  //       <div
  //         ref={parentRef}
  //         className="List"
  //         style={{
  //           height: `100%`,
  //           width: `100%`,
  //           overflow: "auto",
  //         }}
  //       >
  //         <div
  //           className="tContainer"
  //           style={{
  //             height: rowVirtualizer.totalSize,
  //             width: "100%",
  //             position: "relative",
  //           }}
  //         >
  //           {rowVirtualizer.virtualItems.map((virtualRow) => (
  //             <div
  //               key={virtualRow.index}
  //               ref={virtualRow.measureRef}
  //               className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
  //               style={{
  //                 position: "absolute",
  //                 top: 0,
  //                 left: 0,
  //                 width: "100%",
  //                 transform: `translateY(${virtualRow.start}px)`
  //               }}
  //             >
  //               <div
  //                 className="rowStyle"
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div
  //                   style={{
  //                     height: rows[virtualRow.index],
  //                     border: "1px",
  //                     color: "#EA2027",
  //                     fontWeight: "bold",
  //                     borderBottom: "1px solid black"
  //                   }}
  //                 >
  //                   {rows[virtualRow.index][1].D}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].C}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div
  //                   style={{
  //                     height: rows[virtualRow.index],
  //                     border: "1px",
  //                     color: "#EA2027",
  //                     fontWeight: "bold",
  //                     borderBottom: "1px solid black"
  //                   }}
  //                 >
  //                   {rows[virtualRow.index][1].DAY}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].T}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div
  //                   style={{
  //                     height: rows[virtualRow.index],
  //                     border: "1px",
  //                     color: "#EA2027",
  //                     fontWeight: "bold",
  //                     borderBottom: "1px solid black"
  //                   }}
  //                 >
  //                   {rows[virtualRow.index][1].LN}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].N}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px", }}>
  //                   <p>Yorumlar</p>
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p>Yorumlar</p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].MBS}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].OC[0].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].OC[0].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p>x</p>
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].OC[1].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].SO}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].OC[25].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].OC[25].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].OC[26].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].OC[26].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p>H1</p>
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].OC[0].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[1].OC[0].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p>x</p>
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[5].SO}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   <p> </p>
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[3].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[3].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[4].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[4].O}
  //                 </div>
  //               </div>
  //               <div
  //                 style={{
  //                   height: rows[virtualRow.index],
  //                   display: "flex",
  //                   flexDirection: "column",
  //                 }}
  //               >
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[5].N}
  //                 </div>
  //                 <div style={{ height: rows[virtualRow.index], border: "1px" }}>
  //                   {rows[virtualRow.index][1].OCG[2].OC[5].O}
  //                 </div>
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </>
  //   );
}

export default HomePage;
