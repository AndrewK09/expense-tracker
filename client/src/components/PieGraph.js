import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import * as actions from '../actions/fetchGraph';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const makeColors = chart => {
  let colors = [];
  Object.keys(chart).forEach(elem => {
    colors.push(getRandomColor());
  });
  return colors;
};

const PieGraph = props => {
  const { chart, fetchGraph } = props;
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setColors(makeColors(chart));
    setLabels(Object.keys(chart));
    setValues(Object.values(chart));
  }, [chart]);

  const pieChart = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
      },
    ],
  };

  let options = {
    animation: { animateRotate: true },
    legend: { position: 'left' },
    cutoutPercentage: 35,
  };

  return (
    <div>
      <Doughnut data={pieChart} options={options} />
    </div>
  );
};

const mapStateToProps = state => ({
  expenses: state.expenses,
  chart: state.chart,
});

export default connect(
  mapStateToProps,
  actions
)(PieGraph);
