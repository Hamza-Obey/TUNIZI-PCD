import React from "react";
import Plot from "react-plotly.js";
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        values: [19, 26, 55],
        labels: ['Neutral', 'Positif', 'Negatif'],
        type: 'pie'
      }],
      layout: {
        height: 400,
        width: 500,
       
      }
    };
  }
  render() {
    return (
      <div >
        <Plot style={{marginLeft:"300px"}}
          data={this.state.data}
          layout={this.state.layout}
          onInitialized={(figure) => this.setState(figure)}
          onUpdate={(figure) => this.setState(figure)}
        />
      </div>
    );
  }
}
export default Graph;
