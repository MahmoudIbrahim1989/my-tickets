import PropTypes from "prop-types";
import React from "react";
import "../App.css";
import { useSubLoad } from "./useSubLoad";

const SubLoad = ({
  containerSelector,
  itemId,
  itemSubject,
  itemPriority,
  itemStatus,
  itemDescription,
}) => {
  const [loaded, elRef] = useSubLoad(containerSelector, true);

  return (
    <div className={"sub-load"} ref={elRef}>
      {loaded ? (
        <div className="item">
          <div className="mainList">
            <p>{itemSubject}</p>
            <p>{itemDescription}</p>
          </div>
          <div className="SubList">
            <p>
            {itemPriority}
            </p>
            <p>
            {itemStatus}
            </p>
          </div>
        </div>
      ) : (
        <p className="loading">loading</p>
      )}
    </div>
  );
};
SubLoad.propTypes = {
  containerSelector: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default SubLoad;
