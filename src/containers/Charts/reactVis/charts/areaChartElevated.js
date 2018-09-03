import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries,
  AreaSeries,
} from 'react-vis';
import ChartWrapper from '../../chart.style';


export default class extends Component {
  render() {
    const { datas, width, height } = this.props;
    return (
      <ChartWrapper className="isoChartWrapper">
        <XYPlot width={width} height={height}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {datas.map((data, key) => {
            const config = {
              key,
              className: data.className,
              data: data.data,
              color: data.color,
            };
            return <AreaSeries {...config} />;
          })}
          <LineMarkSeries
            className="area-elevated-line-series"
            data={datas[1].data}
          />
        </XYPlot>
      </ChartWrapper>
    );
  }
}
