import { useEffect, useState } from "react";
import moment from "moment";
import "./CalcDate.css";

const CalcDate = () => {
  const [today] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [checked, setChecked] = useState("plus");
  const [datePlus, setDatePlus] = useState(70);
  const [dateOne, setDateOne] = useState(today);
  const [dateTwo, setDateTwo] = useState(today);
  const [dateDiff, setDateDiff] = useState(
    moment(dateTwo).diff(moment(dateOne), "days"),
  );

  useEffect(() => {
    const diff = moment(dateTwo).diff(moment(dateOne), "days");
    if (diff > 0) {
      setDateDiff(diff);
    } else {
      setDateDiff(diff * -1);
    }
  }, [dateOne, dateTwo]);

  return (
    <div>
      <div>
        <h2 style={{ marginTop: "0px" }}>Calculo de Data</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "145px" }}>
          <span style={{display: "block"}}>Hoje</span>
          <input id="date-today" type="date" disabled={true} value={today} />
          <div style={{ marginTop: "20px" }}>
            <div style={{ marginBottom: "5px" }}>
              <input
                style={{ marginLeft: "0px", marginRight: "7px" }}
                type="radio"
                id="plus"
                name="dataCalc"
                value={checked}
                defaultChecked
                onClick={() => setChecked("plus")}
              />
              <label htmlFor="plus">Soma de Data</label>
            </div>
            <div>
              <input
                type="radio"
                style={{ marginLeft: "0px", marginRight: "7px" }}
                id="diff"
                name="dataCalc"
                value={checked}
                onClick={() => setChecked("diff")}
              />
              <label htmlFor="diff">Diferença de Data</label>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        {checked === "plus" ? (
          <div style={{ display: "flex" }}>
            <div style={{ width: "145px" }}>
              <span style={{ display: "block" }}>Dias a Adicionar</span>
              <input
                style={{ width: "60px", paddingLeft: "5px" }}
                type="number"
                min="0"
                value={datePlus}
                onChange={(e) => setDatePlus(Number(e.target.value))}
              />
            </div>
            <div style={{ width: "145px" }}>
              <span style={{ display: "block" }}>Dias</span>
              <input
                type="date"
                value={moment(today).add(datePlus, "days").format("YYYY-MM-DD")}
                disabled
              />
            </div>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <div style={{ width: "145px" }}>
              <span>Data 1</span>
              <input
                type="date"
                value={dateOne}
                onChange={(e) =>
                  setDateOne(moment(e.target.value).format("YYYY-MM-DD"))
                }
              />
            </div>
            <div style={{ width: "145px", marginLeft: "20px" }}>
              <span>Data 2</span>
              <input
                type="date"
                value={dateTwo}
                onChange={(e) =>
                  setDateTwo(moment(e.target.value).format("YYYY-MM-DD"))
                }
              />
            </div>
            <div style={{ width: "60px", marginLeft: "20px" }}>
              <span>Resultado</span>
              <input
                style={{ width: "60px" }}
                value={dateDiff > 0 ? dateDiff : dateDiff * -1}
                disabled
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalcDate;
