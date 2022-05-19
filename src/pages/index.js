import React, { useState, useEffect, useContext } from "react";
import data from "../data/bulten_data.json";
// import data from "../data/bulten_data2.json"; // for ALL data
import ContextState from "../context/store";

function HomePage() {
  const [isAdded, setIsAdded] = useState(false);
  const context = useContext(ContextState);
  const events = data.Events;
  var result = Object.keys(events).map((key) => [Number(key), events[key]]);
  context.bullettins = result;

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
        </tbody>
        <tfoot>
          <tr style={{ backgroundColor: "#7f8c8d" }}>
          {context.card.map((item) => {
              <div className="card">
                <div>
                  <td>{item[1].OCG[1].MBS}</td>
                  <td>Kod:{item[0]}</td>
                  <td>Maç:{item[1].N}</td>
                </div>
                <div>
                  <td>Oran:{item[1].OCG[5].OC[26].O}</td>
                  <td>MBS:{item[1].OCG[1].MBS}</td>
                </div>
              </div>
            })}
            <td>Toplam Tutar:</td>
            <td>{context.card.length}</td>
          </tr>
        </tfoot>
      </>
    </table>
  );
}
export default HomePage;