import {
    LineChart,
        Line,
        XAxis,
        YAxis,
        CartesianGrid,
        Label,
        ResponsiveContainer
} from "recharts";
import("./Graph.css");

const data = [
    { y: 0, x: 4 },
    { y: 14, x: 14 }
];

const Graph = () => {
    return (
       <div className={"container"}>
           <ResponsiveContainer aspect={2} width="50%" className={"graph"}>
               <LineChart
                   data={data}
                   margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
               >
                   <CartesianGrid />
                   <XAxis dataKey="x" type="number" domain={[4, 14]} tickCount={10}>
                       <Label value="Foot Length (cm)" dy={20}/>
                   </XAxis>
                   <YAxis domain={[0, 14]} tickCount={10}>
                       <Label value="Body Weight (kg)" angle={-90}  dx={-10}/>
                   </YAxis>
                   <Line type="monotone" dataKey="y" stroke="#000000" strokeWidth={2} dot={false} />
               </LineChart>
           </ResponsiveContainer>
       </div>

    );
}

export default Graph;