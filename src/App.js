import './App.css';
import alphaNumericSort from './alphaNumericSort'

function App() {
    const arr = [" person1   /"," person10   /","person11   /"," person12   /"," person13   /"," person14   /"," person15   /"," person2   /"," person3   /"," person4   /"," person5   /"," person6   /"," person7   /"," person8   /"," person9   /"];
    const example = [" person1   /"," person10   /","person11   /"," person12   /"," person13   /"," person14   /"," person15   /"," person2   /"," person3   /"," person4   /"," person5   /"," person6   /"," person7   /"," person8   /"," person9   /"];

    const arr2 = [" per1son1   /"," per10son10   /"," per22son11   /"," per14son12   /"," per12son13   /"," per12son14   /"," per22son15   /"," per1son2   /"," per3son3   /"," per3son4   /"," per5son5   /"," per5son6   /"," per6son7   /"," per6son8   /"," per9son9   /"];
    const example2 = [" per1son1   /"," per10son10   /"," per22son11   /"," per14son12   /"," per12son13   /"," per12son14   /"," per22son15   /"," per1son2   /"," per3son3   /"," per3son4   /"," per5son5   /"," per5son6   /"," per6son7   /"," per6son8   /"," per9son9   /"];


   alphaNumericSort(example);
   alphaNumericSort(example2);

    return (
    <div className="App">
      <header className="App-header">
        <div className="box">
            <div className="arr">
                <h2>Array without sorting:</h2>
                <p>{arr}</p>
            </div>
            <div className="arr">
                <h2>Array with sorting:</h2>
                <p>{example}</p>
            </div>
        </div>
        <div className="box">
            <div className="arr">
                <h2>Array without sorting:</h2>
                <p>{arr2}</p>
            </div>
            <div className="arr">
                <h2>Array with sorting:</h2>
                <p>{example2}</p>
            </div>
          </div>
      </header>
      <body className="App-header">
      </body>
    </div>
  );
}

export default App;
