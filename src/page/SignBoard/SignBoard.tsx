import sign01 from "./demo/a.png";
import "./SignBoard.scss";

const SignBoard: React.FC = () => {
  return (
    <div className="SignBoard">
      <div className="banner">
        <span>BANNER</span>
      </div>
      <div className="SignBoardContainer">
        <img className="signImage" alt="sign" src={sign01} />
      </div>
    </div>
  );
};

export default SignBoard;
