import React, { FC, ReactNode } from "react";

interface Props {
  heading: string;
  imgSrc: string;
  description: string;
  btnValue: string;
}

const Card: FC<Props> = ({ heading, imgSrc, description, btnValue }) => {
  return (
    <>
      <article className="card">
        <img
          className="card__background"
          src={imgSrc}
          alt="gay kissing"
          width="1920"
          height="2193"
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title">{heading}</h2>
            <p className="card__description">{description}</p>
          </div>
          <button className="card__button">{btnValue}</button>
        </div>
      </article>
    </>
  );
};

export default Card;
