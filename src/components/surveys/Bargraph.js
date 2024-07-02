import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts';

const { width } = Dimensions.get('window');
const chartWidth = width * 0.8;

const BarGraph = ({ data }) => {
  // Define your labels
  const labels = ['a', 'b', 'c', 'd'];

  return (
    <View style={styles.container}>
      <BarChart
        style={{ height: chartWidth * 0.75, width: chartWidth }}
        data={data.map(item => item.value)}
        svg={{ fill: 'rgb(134, 65, 244)' }}
        contentInset={{ top: 30, bottom: 30 }}
        spacingInner={0.5}
        animate={true}
        gridMin={0}
      >
        <Grid
          svg={{ stroke: 'rgba(0,0,0,0.2)' }}
          belowChart={true}
        />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10, height: 30 }}
        data={data.map(item => item.value)} // Use the same array length as the data
        formatLabel={(value, index) => labels[index]}
        contentInset={{ left: 30, right: 30 }}
        svg={{ fontSize: 12, fill: 'black' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default BarGraph;
