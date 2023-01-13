import Confetti from "react-confetti";

export default () => {
  const [width, height] = [window.innerWidth, window.innerHeight];
  return <Confetti width={width} height={height} numberOfPieces = {1000} />;
};
