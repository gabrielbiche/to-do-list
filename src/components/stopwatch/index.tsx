import Clock from "./clock";
import Button from "../button";
import style from "./stopwatch.module.scss";

export default function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}> choose a card and start the timer </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Init</Button>
    </div>
  );
}
