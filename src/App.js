import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, VerticalGridLines, XAxis, YAxis} from 'react-vis';

function App() {

  let data = []
    const getVaccineData = async() => {
      const response = await fetch(
        "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={%22date%22:%22date%22,%22cumPeopleVaccinatedFirstDoseByPublishDate%22:%22cumPeopleVaccinatedFirstDoseByPublishDate%22}",
        {
          mode: 'cors',
        }
      )
    const responseData = await response.json();
    const vaccineData = responseData.data;
    console.log(data)

  }
 
  return (
    <div className='App'>

    </div>
    );
}

export default App;
