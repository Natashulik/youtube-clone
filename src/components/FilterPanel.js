import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedIcon } from "../redux/iconSlice";
import { formatCounts } from "../helpers/formatCounts";
import grid from "../images/grid.svg";
import grid_active from "../images/grid_active.svg";
import list from "../images/list.svg";
import list_active from "../images/list_active.svg";

function FilterPanel() {
  const text = useSelector((state) => state.input.text);
  let selectedIcon = useSelector((state) => state.icon.selectedIcon);
  const totalResults = useSelector((state) => state.input.totalResults);
  const dispatch = useDispatch();

  const handleList = () => {
    dispatch(setSelectedIcon("list"));
  };

  const handleGrid = () => {
    dispatch(setSelectedIcon("grid"));
  };

  return (
    <div className="filter_panel_container">
      <div className="filter_title_wrapper">
        <h3 className="filter_title">Видео по запросу "{text}"</h3>
        <h3 className="filter_number_cards">{formatCounts(totalResults)}</h3>
      </div>
      <div className="view_switcher">
        <img
          onClick={handleList}
          src={selectedIcon === "list" ? list_active : list}
          alt="list_image"
          className="list_image"
        />
        <img
          onClick={handleGrid}
          src={selectedIcon === "grid" ? grid_active : grid}
          alt="grid_image"
          className="grid_image"
        />
      </div>
    </div>
  );
}

export default FilterPanel;
