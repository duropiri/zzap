import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text as SvgText } from 'react-native-svg';

const DoughnutChart = ({ data }) => {
    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { pieCentroid, data } = slice;
            return (
                <SvgText
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={24}
                    stroke={'none'}
                    strokeWidth={0.2}
                >
                    {data.amount}
                </SvgText>
            );
        });
    };

    return (
        <PieChart
            // style={{ height: 200, width: 200 }}
            className="h-52 w-52"
            valueAccessor={({ item }) => item.amount}
            data={data}
            spacing={0}
            outerRadius={'95%'}
        >
            <Labels />
        </PieChart>
    );
};

export default DoughnutChart;
