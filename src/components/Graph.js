import "components/Graph.css";
import Graphelement from "components/Graphelement";
import styled from "styled-components";

const data = [
    {
        key : 1,
        name : 'a',
        value : 20
    },
    {
        key : 2,
        name : 'a',
        value : 50
    },
    {
        key : 3,
        name : 'a',
        value : 65
    },
    {
        key : 4,
        name : 'a',
        value : 95
    }
]

const Graph = () => {
    return (
        <div className="graphContainer">
            <div className="graph">
            {
                data.map((prop, index) => {
                    return (
                        <Graphelement value={prop.value} />
                    )
                }
                )
            }
            </div>
            <div className="graphName">
            {
                data.map((prop) => (
                <span className="elementText">{prop.name}</span>
                ))
            }
            </div>
        </div>
    )
}

export default Graph;