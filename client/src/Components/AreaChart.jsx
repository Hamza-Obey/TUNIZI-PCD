import React from "react";
import Plot from "react-plotly.js";
class AreaChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [1, 2, 3, 4],
          y: [0, 2, 3, 5],
          fill: 'tozeroy',
          type: 'scatter',
          name: 'Positive'
        },
        {
          x: [1, 2, 3, 4],
          y: [3, 5, 1, 7],
          fill: 'tonexty',
          type: 'scatter',
          name: 'Negative'
        }],
      layout: {
        height: 400,
        width: 600,
        
      }
    };
  }
  render() {
    return (
      <div style={{marginLeft:"300px"}} >
        <Plot
          data={this.state.data}
          layout={this.state.layout}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
      </div>
    );
  }
}
export default AreaChart;