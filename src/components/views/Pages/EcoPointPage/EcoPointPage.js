import Navbar from '../../Navbar/Navbar';
import Title from '../../Navbar/Title';
import '../styles.css';
import './EcoPointPage.css';
import Chart from './Chart';
import Circle from './circleCanvas';

function EcoPointPage() {
    return (
        <div className="ecopoint">
            <Navbar selected={5} />
            <div className="board">
                <Title title="환경 오염도" />
                <div className="content ecoContent">
                    <Circle />
                </div>
                <Title title="환경 점수" />
                <Chart />
            </div>
        </div>
    )
}

export default EcoPointPage
