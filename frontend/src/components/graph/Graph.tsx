import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  options: Highcharts.Options;
};

const Graph = ({ options }: Props) => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
