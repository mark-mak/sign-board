import { useEffect, useState } from "react";
import sign01 from "./demo/a.png";
import sign02 from "./demo/b.png";
import "./SignBoard.scss";

const initialSignList = [
  {
    id: "id001",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id002",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id003",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id004",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id005",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id006",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id007",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id008",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id009",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id010",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id011",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id012",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id013",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id014",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id015",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id016",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id017",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id018",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id019",
    src: sign01,
    name: "sign01",
  },
  {
    id: "id020",
    src: sign01,
    name: "sign01",
  },
];

const initialCount = 20;

const SignBoard: React.FC = () => {
  const [signList, setSignList] = useState(initialSignList);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log("useeffect");
    const timer = setInterval(() => {
      const result = [...signList];
      const randomKey = Math.floor(Math.random() * 20);

      result[randomKey] = {
        id: "id".concat(`00${count + 1}`.slice(-3)),
        src: result[randomKey].name === "sign01" ? sign02 : sign01,
        name: result[randomKey].name === "sign01" ? "sign02" : "sign01",
      };
      setSignList(result);
      setCount((prev) => prev + 1);

      // console.log(result, randomKey);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [signList, count]);

  return (
    <div className="SignBoard">
      <div className="banner">
        <span>BANNER</span>
      </div>
      <div className="SignBoardContainer">
        {signList.map((item) => (
          <img key={item.id} className="signImage" alt="sign" src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default SignBoard;
