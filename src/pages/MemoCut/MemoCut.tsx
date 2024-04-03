import React, { useEffect, useState } from "react";

const MemoCut = () => {
  const [memo, setMemo] = useState("");
  const [size, setSize] = useState(1);
  const [elements, setElements] = useState([<></>]);

  useEffect(() => {
    setSize(Math.ceil(memo.length / 200));
    if (size > 1) {
      let temp = memo;
      let aux = "";
      const elem = [];
      for (let i = 1; i <= size; i++) {
        aux = temp.slice(0, 200);
        temp = temp.slice(200, temp.length);
        elem.push(
          <React.Fragment>
            <span
              style={{ fontSize: "70%", display: "block", marginTop: "5px" }}
            >
              {i} Parte
            </span>
            <textarea
              style={{ width: "75%", resize: "none" }}
              rows={5}
              cols={20}
              value={aux}
              readOnly
            />
          </React.Fragment>,
        );
        setElements(elem);
      }
      console.log(size);
    } else {
      setElements([
        <span
          style={{ display: "block", fontSize: "120%", fontWeight: "bold" }}
        >
          Memo muito pequeno
        </span>,
      ]);
    }
  }, [memo, size]);

  return (
    <div>
      <div>
        <h2 style={{ marginTop: "0px" }}>Divisor De Memo</h2>
      </div>
      <div>
        <span
          style={{ display: "block", marginBottom: "5px", fontSize: "70%" }}
        >
          Cole o seu Memo aqui
        </span>
        <textarea
          style={{ width: "75%", resize: "none", marginBottom: "30px" }}
          rows={5}
          cols={20}
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
      </div>
      <div>
        {elements.map((element) => (
          <div key={elements.indexOf(element)}>{element}</div>
        ))}
      </div>
    </div>
  );
};

export default MemoCut;
