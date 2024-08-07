import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useEffect, useState } from "react";

export const SideBar = ({ data }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);

  const [sortByYear, setSortByYear] = useState("ascending");

  const rating = [1, 2, 3, 4, 5];

  const handleCheckboxChange = (rating) => (event) => {
    setSelectedRatings((prevSelectedRatings) =>
      event.target.checked
        ? [...prevSelectedRatings, rating]
        : prevSelectedRatings.filter((r) => r !== rating)
    );
  };

  const handleSortChange = (event) => {
    setSortByYear(event.target.value);
  };

  return (
    <>
      <div className="side-bar">
        <div className="filter">
          <h4>Filter by Rating</h4>
          <div>
            <FormGroup>
              {rating.map((value) => (
                <FormControlLabel
                  key={value}
                  control={<Checkbox onChange={handleCheckboxChange(value)} />}
                  label={
                    <div className="stars-box">
                      {[...Array(value)].map((_, index) => (
                        <StarIcon key={index} sx={{ fontSize: "1.2rem" }} />
                      ))}
                      {[...Array(5 - value)].map((_, index) => (
                        <StarBorderIcon
                          key={index + value}
                          sx={{ fontSize: "1.2rem" }}
                        />
                      ))}
                    </div>
                  }
                />
              ))}
            </FormGroup>
          </div>
        </div>

        <div>
          <h4>Sort By Year</h4>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              Value={sortByYear}
              name="radio-buttons-group"
              onChange={handleSortChange}
            >
              <FormControlLabel
                value="ascending"
                control={<Radio />}
                label="Ascending"
              />
              <FormControlLabel
                value="descending"
                control={<Radio />}
                label="Descending"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};
