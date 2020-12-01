import React from "react";

/* Styling */
import "./trackerpage.styles.scss";

/* Components */
import SummaryContainer from "../../components/SummaryContainer/summarycontainer.component";
import CountryStatsTable from "../../components/CountryStatsTable/countryStatsTable.component";

interface Props {}

const TrackerPage: React.FC<Props> = () => {
  return (
    <div className="trackerpage u-container">
      <h1>Global Statistics 🌎</h1>
      <div className="trackerpage-section">
        <div className="trackerpage-section__left">
          <SummaryContainer />
        </div>
        <div className="trackerpage-section__right">
          <CountryStatsTable/>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
