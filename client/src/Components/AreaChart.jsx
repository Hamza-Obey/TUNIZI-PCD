import React, { useState } from "react";
import Plot from "react-plotly.js";

export default function AreaChart(props) {
    
    
    {
        var trace1 = {
            x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            y: [40,70,60,20,40,45,90],
            mode: 'lines+markers',
            name: 'POSITIVE'
          };
          
        var trace2 = {
            x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            y: [10,50,70,80,80,10,90],
        mode: 'lines+markers',
        name: 'NEGATIVE'
        };
    }
    
    
      
      var data = [trace1, trace2 ];


  return (
    <div style={{marginLeft:"400px"}}>
      <Plot
        data={data}
        layout={{
          width: 500,
          height: 500,
          title: "Suivi des analyses des sentiments",
        }}
      />
    </div>
  );
}