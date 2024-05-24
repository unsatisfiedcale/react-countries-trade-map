import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { countries } from "./Countries";

function WorldMap() {
  return (
    <div style={{ margin: "auto", width: "80%", height: "80vh" }}>
      {/* width ve height özelliklerini düzenledim */}
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="#FFFFFF"
        series={{
          regions: [
            {
              scale: ['#FFFF00', '#FFA500', '#FF0000'],
              values: Object.keys(countries).reduce((result, code) => {
                result[code] = countries[code].value;
                return result;
              }, {}),
              normalizeFunction: 'polynomial',
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          const countryData = countries[code];
          const description = countryData ? countryData.description : "Bilgi Yok";
          return label.html(`
            <div style="color: white; ">
              <p>
                <b>
                  ${label.html()}
                </b>
              </p>
              <p>
                ${description}
              </p>
            </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
