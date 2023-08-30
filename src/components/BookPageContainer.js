import React from "react";
import { useLocation } from "react-router-dom";

const BookPageContainer = () => {
  let { state } = useLocation();
  return (
    <>
      <h1>Book Details</h1>
      <div className="d-flex justify-content-center">
        {state && typeof state === "object" && (
          <ul className="list-group" style={{ width: "18rem" }}>
            {Object.entries(state).map(([name, value]) => {
              return (
                <li key={name} className="list-group-item">
                  {name} : {value}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default BookPageContainer;
