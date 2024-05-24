import React from "react";
import { countries } from "./Countries";
import "./ListSection.css";
function ListSection() {
  const getCountryDescription = (countryCode) => {
    return countries[countryCode] ? countries[countryCode].description : "";
  };
  return (
    <div className="overviewListsSection">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="countries-list-container europe_bdt_list">
              <div className="list-content">
                <div className="heading">
                  <h3 style={{ verticalAlign: "inherit" }}>Europe Countries</h3>
                </div>
                <ul>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Ireland
                    </span>
                    <p className="discription">{getCountryDescription("IE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      United Kingdom
                    </span>
                    <p className="discription">{getCountryDescription("GB")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Germany
                    </span>
                    <p className="discription">{getCountryDescription("DE")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      France
                    </span>
                    <p className="discription">{getCountryDescription("FR")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Austria
                    </span>
                    <p className="discription">{getCountryDescription("AT")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Belgium
                    </span>
                    <p className="discription">{getCountryDescription("BE")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Bosnia and Herzegovina
                    </span>
                    <p className="discription">{getCountryDescription("BA")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Bulgaria
                    </span>
                    <p className="discription">{getCountryDescription("BG")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Czech
                    </span>
                    <p className="discription">{getCountryDescription("CZ")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Denmark
                    </span>
                    <p className="discription">{getCountryDescription("DK")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Faroe Islands
                    </span>
                    <p className="discription">{getCountryDescription("FO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Finland
                    </span>
                    <p className="discription">{getCountryDescription("FI")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Croatia
                    </span>
                    <p className="discription">{getCountryDescription("HR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Netherlands
                    </span>
                    <p className="discription">{getCountryDescription("NL")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Spain
                    </span>
                    <p className="discription">{getCountryDescription("ES")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Sweden
                    </span>
                    <p className="discription">{getCountryDescription("SE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Switzerland
                    </span>
                    <p className="discription">{getCountryDescription("CH")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Italy
                    </span>
                    <p className="discription">{getCountryDescription("IT")}</p>
                  </li>

                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Iceland
                    </span>
                    <p className="discription">{getCountryDescription("IS")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Latvia
                    </span>
                    <p className="discription">{getCountryDescription("LV")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Lithuania
                    </span>
                    <p className="discription">{getCountryDescription("LT")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Luxembourg
                    </span>
                    <p className="discription">{getCountryDescription("LU")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Hungary
                    </span>
                    <p className="discription">{getCountryDescription("HU")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Macedonia
                    </span>
                    <p className="discription">{getCountryDescription("MK")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Norway
                    </span>
                    <p className="discription">{getCountryDescription("NO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Portugal
                    </span>
                    <p className="discription">{getCountryDescription("PT")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Romania
                    </span>
                    <p className="discription">{getCountryDescription("RO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Serbia
                    </span>
                    <p className="discription">{getCountryDescription("RS")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Ukrain
                    </span>
                    <p className="discription">{getCountryDescription("UA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Greece
                    </span>
                    <p className="discription">{getCountryDescription("GR")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="countries-list-container america_list">
              <div className="list-content">
                <div className="heading">
                  <h3 style={{ verticalAlign: "inherit" }}>
                    America Countries
                  </h3>
                </div>
                <ul>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      United States Of America
                    </span>
                    <p className="discription">{getCountryDescription("US")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Argentina
                    </span>
                    <p className="discription">{getCountryDescription("AR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Bolivia
                    </span>
                    <p className="discription">{getCountryDescription("BO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Brazil
                    </span>
                    <p className="discription">{getCountryDescription("BR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Greenland
                    </span>
                    <p className="discription">{getCountryDescription("GL")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Guatemala
                    </span>
                    <p className="discription">{getCountryDescription("GT")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Canada
                    </span>
                    <p className="discription">{getCountryDescription("CA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Colombia
                    </span>
                    <p className="discription">{getCountryDescription("CO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Costa Rica
                    </span>
                    <p className="discription">{getCountryDescription("CR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Cuba
                    </span>
                    <p className="discription">{getCountryDescription("CU")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Dominican Republic
                    </span>
                    <p className="discription">{getCountryDescription("DO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Mexico
                    </span>
                    <p className="discription">{getCountryDescription("MX")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Paraguay
                    </span>
                    <p className="discription">{getCountryDescription("PY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Peru
                    </span>
                    <p className="discription">{getCountryDescription("PE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Porto Rico
                    </span>
                    <p className="discription">{getCountryDescription("PR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      San Marino
                    </span>
                    <p className="discription">{getCountryDescription("SM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Chile
                    </span>
                    <p className="discription">{getCountryDescription("CL")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Uruguay
                    </span>
                    <p className="discription">{getCountryDescription("UY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Venezuela
                    </span>
                    <p className="discription">{getCountryDescription("VE")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="countries-list-container african_middleeast_list">
              <div className="list-content">
                <div className="heading">
                  <h3 style={{ verticalAlign: "inherit" }}>
                    African and Middle Eastern Countries
                  </h3>
                </div>
                <ul>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      United Arab Emirates
                    </span>
                    <p className="discription">{getCountryDescription("AE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Afghanistan
                    </span>
                    <p className="discription">{getCountryDescription("AF")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Armenia
                    </span>
                    <p className="discription">{getCountryDescription("AM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Angola
                    </span>
                    <p className="discription">{getCountryDescription("AO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Azerbaijan
                    </span>
                    <p className="discription">{getCountryDescription("AZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Burkina Faso
                    </span>
                    <p className="discription">{getCountryDescription("BF")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Bahrain
                    </span>
                    <p className="discription">{getCountryDescription("BH")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Democratic Republic Of Congo{" "}
                    </span>
                    <p className="discription">{getCountryDescription("CD")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Central African Republic
                    </span>
                    <p className="discription">{getCountryDescription("CF")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Ivory Coast
                    </span>
                    <p className="discription">{getCountryDescription("CI")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Cameroon
                    </span>
                    <p className="discription">{getCountryDescription("CM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Djibouti
                    </span>
                    <p className="discription">{getCountryDescription("DJ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Algeria
                    </span>
                    <p className="discription">{getCountryDescription("DZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Ecuador
                    </span>
                    <p className="discription">{getCountryDescription("EC")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Egypt
                    </span>
                    <p className="discription">{getCountryDescription("EG")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Ethiopia
                    </span>
                    <p className="discription">{getCountryDescription("ET")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Gabon
                    </span>
                    <p className="discription">{getCountryDescription("GA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Gambia
                    </span>
                    <p className="discription">{getCountryDescription("GM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Guinea
                    </span>
                    <p className="discription">{getCountryDescription("GN")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Jordan
                    </span>
                    <p className="discription">{getCountryDescription("JO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Kenya
                    </span>
                    <p className="discription">{getCountryDescription("KE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Cambodia
                    </span>
                    <p className="discription">{getCountryDescription("KH")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Qatar
                    </span>
                    <p className="discription">{getCountryDescription("QA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Kuwait
                    </span>
                    <p className="discription">{getCountryDescription("KW")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Lebanon
                    </span>
                    <p className="discription">{getCountryDescription("LB")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Libya
                    </span>
                    <p className="discription">{getCountryDescription("LY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Morocco
                    </span>
                    <p className="discription">{getCountryDescription("MA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Mali
                    </span>
                    <p className="discription">{getCountryDescription("ML")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Namibia
                    </span>
                    <p className="discription">{getCountryDescription("NA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Niger
                    </span>
                    <p className="discription">{getCountryDescription("NE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Saudi Arabia
                    </span>
                    <p className="discription">{getCountryDescription("SA")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Sudan
                    </span>
                    <p className="discription">{getCountryDescription("DZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Senegal
                    </span>
                    <p className="discription">{getCountryDescription("SN")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Somalia
                    </span>
                    <p className="discription">{getCountryDescription("SO")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      South Sudan
                    </span>
                    <p className="discription">{getCountryDescription("SS")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Syria
                    </span>
                    <p className="discription">{getCountryDescription("SY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Turkey
                    </span>
                    <p className="discription">{getCountryDescription("TR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Chad
                    </span>
                    <p className="discription">{getCountryDescription("TD")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Uganda
                    </span>
                    <p className="discription">{getCountryDescription("UG")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Yemen
                    </span>
                    <p className="discription">{getCountryDescription("YE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Zambia
                    </span>
                    <p className="discription">{getCountryDescription("ZM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Zimbabwe
                    </span>
                    <p className="discription">{getCountryDescription("ZW")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <div className="countries-list-container asia_pasific_list">
              <div className="list-content">
                <div className="heading">
                  <h3 style={{ verticalAlign: "inherit" }}>
                    Asia Pacific Countries
                  </h3>
                </div>
                <ul>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Australia
                    </span>
                    <p className="discription">{getCountryDescription("AU")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Bangladesh
                    </span>
                    <p className="discription">{getCountryDescription("BD")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Belarus
                    </span>
                    <p className="discription">{getCountryDescription("BY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      China
                    </span>
                    <p className="discription">{getCountryDescription("CN")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Georgia
                    </span>
                    <p className="discription">{getCountryDescription("GE")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Indonesia
                    </span>
                    <p className="discription">{getCountryDescription("ID")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Japan
                    </span>
                    <p className="discription">{getCountryDescription("JP")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      South Korea
                    </span>
                    <p className="discription">{getCountryDescription("KR")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Kazakhstan
                    </span>
                    <p className="discription">{getCountryDescription("KZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Sri Lanka
                    </span>
                    <p className="discription">{getCountryDescription("LK")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Malaysia
                    </span>
                    <p className="discription">{getCountryDescription("MY")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Nepal
                    </span>
                    <p className="discription">{getCountryDescription("NP")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      New Zealand
                    </span>
                    <p className="discription">{getCountryDescription("NZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Philippines
                    </span>
                    <p className="discription">{getCountryDescription("PH")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Pakistan
                    </span>
                    <p className="discription">{getCountryDescription("PK")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Russian Federation
                    </span>
                    <p className="discription">{getCountryDescription("RU")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Singapore
                    </span>
                    <p className="discription">{getCountryDescription("SG")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Thailand
                    </span>
                    <p className="discription">{getCountryDescription("TH")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Tajikistan
                    </span>
                    <p className="discription">{getCountryDescription("TJ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Turkmenistan
                    </span>
                    <p className="discription">{getCountryDescription("TM")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Taiwan
                    </span>
                    <p className="discription">{getCountryDescription("TW")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Uzbekistan
                    </span>
                    <p className="discription">{getCountryDescription("UZ")}</p>
                  </li>
                  <li className="country-has-data-li">
                    <span
                      className="country-has-data"
                      style={{ verticalAlign: "inherit" }}
                    >
                      Vietnam
                    </span>
                    <p className="discription">{getCountryDescription("VN")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSection;
