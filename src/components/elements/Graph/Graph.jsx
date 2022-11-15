import {
    LineChart,
        Line,
        XAxis,
        YAxis,
        CartesianGrid,
        Label,
        ResponsiveContainer,
        ReferenceLine
} from "recharts";

import("./Graph.css");

const data = [
    { y: -10, x: -8 },
    { y: 8, x: 2 }
];

//TODO:
//  add props from parent component
// find way to work multiple types of graph

const Graph = (props) => {
    return (
        <div />
       /*<div className={"container"}>
           <ResponsiveContainer aspect={props.asp} width={props.width} className={"graph"}>
               <LineChart
                   data={props.data}
                   margin={props.margin}
               >
                   <CartesianGrid />
                   <XAxis dataKey="x" type="number" domain={props.domX} tickCount={props.tickX}>
                       <Label value={props.labelX} dy={props.dy}/>
                   </XAxis>
                   <YAxis domain={props.domY} tickCount={props.tickY}>
                       <Label value={props.labelY} angle={props.angle}  dx={props.dx}/>
                   </YAxis>
                   <Line type={props.lineType} dataKey="y" stroke="#000000" strokeWidth={2} dot={props.dot} />
               </LineChart>
           </ResponsiveContainer>
       </div>*/

        /*<div className={"container"}>
            <ResponsiveContainer aspect={1} width="25%" className={"graph"}>
                <LineChart
                    data={[{ y: -10, x: -8 },
                        { y: 8, x: 2 }]}
                    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                >
                    <CartesianGrid />
                    <ReferenceLine x={0} stroke="#000000">
                        <Label value="x" dx={230}/>
                    </ReferenceLine>
                    <ReferenceLine y={0} stroke="#000000">
                        <Label value="y" dy={-250}/>
                    </ReferenceLine>
                    <XAxis dataKey="x" type="number" domain={[-8, 8]} tickCount={10} allowDataOverflow={true}>
                        <Label value="x" dy={20}/>
                    </XAxis>
                    <YAxis domain={[-8, 8]} tickCount={10} allowDataOverflow={true}>
                        <Label value="y" angle={0}  dx={-10}/>
                    </YAxis>
                    <Line type="function" dataKey="y" stroke="#000000" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>*/

        /*<div className={"container"}>
            <ResponsiveContainer width="99%" aspect={window.matchMedia("(max-width: 632px)").matches ? 1 : 2} className={"graph"}>
                <LineChart
                    data={[{ y: 0, x: 4 }, { y: 14, x: 14 }]}
                    margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
                >
                    <CartesianGrid />
                    <XAxis dataKey="x" type="number" domain={[4, 14]} ticks={[4,6,8,10,12,14]}>
                        <Label value="Foot Length (cm)" dy={20}/>
                    </XAxis>
                    <YAxis domain={[0, 14]} ticks={[0,2,4,6,8,10,12,14]}>
                        <Label value="Body Weight (kg)" angle={-90}  dx={-10}/>
                    </YAxis>
                    <Line type="monotone" dataKey="y" stroke="#000000" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>*/
    );
}

export default Graph;