import React, { useEffect, useState } from "react";

export default function GameStats(props) {
  const {
    time,
    setTime,
    dieValuesArr,
    tenzies,
    numOfRolls,
    isEffectRun,
    setIsEffectRun,
  } = props;

  const [bestTime, setBestTime] = useState(
    JSON.parse(localStorage.getItem("bestTime")) || 0
  );

  useEffect(() => {
    if (
      !isEffectRun &&
      (dieValuesArr.some((die) => die.isHeld) || numOfRolls === 1)
    ) {
      setTime(`${currentTime()}`);
      setIsEffectRun(true);
    } else if (tenzies) {
      setTime((prevTime) => Math.abs(currentTime() - prevTime));
    }
  }, [dieValuesArr, isEffectRun, tenzies]);

  useEffect(() => {
    if (tenzies && bestTime === 0) {
      setBestTime(time);
      localStorage.setItem("bestTime", JSON.stringify(time));
    } else if (tenzies && bestTime > time && time != 0) {
      setBestTime(time);
      localStorage.setItem("bestTime", JSON.stringify(time));
    }
  }, [time, tenzies]);

  function currentTime() {
    const date = new Date();
    const timeInSec = date.getMinutes() * 60 + date.getSeconds();
    return timeInSec;
  }

  function convertTimeToMinAndSecFormat(timeToConvert) {
    if (timeToConvert < 60) {
      return `${timeToConvert}sec`;
    } else {
      const min = parseInt(timeToConvert / 60);
      const sec = Math.round(timeToConvert % 60);
      return `${min}min ${sec}sec`;
    }
  }

  return (
    <div className="game-stats">
      <div className="game-stats-time">
        <p className="time-to-win">
          Time to Win:{" "}
          <span>{tenzies ? convertTimeToMinAndSecFormat(time) : "00:00"}</span>
        </p>
        <p className="best-time">
          Best Time:{" "}
          <span>
            {bestTime ? convertTimeToMinAndSecFormat(bestTime) : "00:00"}
          </span>
        </p>
      </div>
      <p className="game-stats-rolls">Rolls: {numOfRolls}</p>
    </div>
  );
}
