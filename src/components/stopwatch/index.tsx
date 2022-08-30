import Clock from "./clock";
import Button from "../button";
import style from "./stopwatch.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
}

export default function Stopwatch({ selected }: Props) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);
  return (
    <div className={style.stopwatch}>
      <p className={style.title}> choose a card and start the timer </p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Init</Button>
    </div>
  );
}
