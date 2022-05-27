import React, { useState } from "react";
import styles from "./MediaScreen.module.css";
import HoverScreen from "../HoverScreen/HoverScreen";
import prime from "../../assets/logo/prime.svg";
const MediaScreen = ({ movies, id, heading }) => {
  var count = 0;
  const scrollToLeft = () => {
    document.getElementById("bannerDiv" + id.toString()).scrollBy({
      left: -800,
    });
    if (count === -5) {
      count = -5;
      setToggleLeftButton(false);
    }
    count++;

    if (count > 0) {
      count = 0;
      setToggleLeftButton(false);
    }
  };
  const scrollToRight = () => {
    setToggleLeftButton(true);
    document.getElementById("bannerDiv" + id.toString()).scrollBy({
      left: 800,
    });
    count--;
    console.log("RIght count is ", count);
    if (count < -5) {
      count = -5;
    }
  };

  const setPosition = (id) => {
    var x = document.getElementById(`1${id}`);
    var divItem = document.getElementById(`2${id}`);
    if (divItem) {
      divItem.style.position = "absolute";
      divItem.style.top = parseInt(x.offsetTop, 10) + "px";
      divItem.style.left = parseInt(x.offsetLeft, 10) + count * 800 + "px";
    }
    return divItem.style;
  };

  const shuffleData = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  if (movies?.length > 0) {
    shuffleData(movies);
  }
  return (
    <div className={styles.mediaScreen}>
      <div className={styles.heading}>{heading}</div>
      {toggelLeftButton && (
        <div className={styles.leftIconDiv} onClick={scrollToLeft}>
          <img
            src={leftScrollIcon}
            alt="left_Scroll"
            className={styles.leftIcon}
          />
        </div>
      )}
      <div className={styles.banner} id={"bannerDiv" + id.toString()}>
        &nbsp;
        {movies.map((movie, index) => {
          return (
            <div key={index} id={movie._id}>
              <div
                className={styles.mediaDiv}
                id={`1${index}`}
                onMouseEnter={() => {
                  setPosition(index);
                }}
              >
                <div className={styles.media}>
                  <img
                    src={prime}
                    alt="logo"
                    className={styles.mediaHoverPrimeImg}
                  />
                  <img
                    src={movie?.["image"]}
                    alt="movie_image"
                    className={styles.movieImg}
                  />
                </div>

                <div className={styles.displayhoverScreen} id={`2${index}`}>
                  <HoverScreen movie={movie} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rightIconDiv} onClick={scrollToRight}>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljc2MyAxNy4yMzd2LTIuNDc0bC0xNCAxNGExLjc0OCAxLjc0OCAwIDAgMCAwIDIuNDc0Yy42ODMuNjg0IDEuNzkuNjg0IDIuNDc0IDBsMTQtMTRhMS43NDggMS43NDggMCAwIDAgMC0yLjQ3NGwtMTQtMTRBMS43NSAxLjc1IDAgMCAwIC43NjMgMy4yMzdsMTQgMTR6IiBmaWxsPSIjRUZGMUYxIi8+PC9zdmc+"
          alt="left_Scroll"
          className={styles.rightIcon}
        />
      </div>
    </div>
  );
};

export default MediaScreen;
