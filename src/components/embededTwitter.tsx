import React from "react";
import { Timeline } from "react-twitter-widgets";
import SectionHeader from "./sectionHeaderLine";

export default function EmbededTwitter() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center", fontSize: 50 }}>
        <SectionHeader /> Twitter <SectionHeader />
      </div>
      <div style={{ marginLeft: "40%", marginRight: "40%" }}>
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "inui_toko",
          }}
          options={{
            height: "600",
            width: "480",
          }}
        />
      </div>
    </>
  );
}
