import React from "react";
import "../css/searchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays | 26 Aug to 30 Aug | 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of New York"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1.5 shared bathrooms - WiFi - Kitchen - Free Parking - W/D"
        stars={4.67}
        price="$68 / night"
        total="$140 total"
      />
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of New York"
        title="Stay at this spacious Edwardian House"
        description="1 guest - 1.5 shared bathrooms - WiFi - Kitchen - Free Parking - W/D"
        stars={4.67}
        price="$68 / night"
        total="$140 total"
      />
    </div>
  );
}

export default SearchPage;
