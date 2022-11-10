import Group from './Group.svg';
import group1 from './group1.svg';
import Group2 from './Group2.svg';
import Group3 from './Group3.svg';
import Group4 from './Group4.svg';
import Group5 from './Group5.svg';
import Group6 from './Group6.svg';
import Group7 from './Group7.svg';
import Group8 from './Group8.svg';
import Group9 from './Group9.svg';
import Group10 from './Group10.svg';
import Group11 from './Group11.svg';
import Group12 from './Group12.svg';
import Group13 from './Group13.svg';
import Group14 from './Group14.svg';
import Group15 from './Group15.svg';
import Group16 from './Group16.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <div id="top-nav">
          <div className='container-fluid' >
            <div className='row'>
              <div className='col-lg-8'>
                <ul>
                  <li><a style={{fontSize: '25px'}}>DESIGN AGENCY</a></li>
                  <li><a>Specialize in</a></li>
                  <li><a>Case Study</a></li>
                  <li><a>Process</a></li>
                  <li><a>Industries</a></li>
                </ul>
              </div>
              <div className='col-lg-4'id='right-nav' >
                <ul>
                  <li id="call"><a>Shedule A Call</a></li>
                  <li id="btn"><a>We are Hiring</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div id="text-center">
            <h1>INNOVATION DIGITAL TECHNOLOGY</h1>
            <h6>everything we do is the consumer, imagination and you.</h6>
          </div>
          </div>
      </header>

      &nbsp;

      <div className='container' style={{backgroundColor: 'black'}} id="measurement">
        &nbsp;
        <h1 style={{color: '#00FF00'}}>MEASUREMENT</h1>
        <h1 style={{color: '#00FF00'}}>TO OUR SUCCESS</h1>
        &nbsp;
        <p style={{color: 'white'}}>Our process-driven approach keeps us going</p>
        &nbsp;
        <div className='row'>
          <div className='col-lg-4'>
           <li><img src={Group} alt="logo" />TRANSPARENCY AND RELIABILITY</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={group1} alt="logo" />REAL TIME PROJECT STATUS</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group2} alt="logo" />WELL STRUCTURED COMMUNICATION</li>
          </div>
        </div>
        &nbsp;
        <div className='row'>
          <div className='col-lg-4'>
           <li><img src={Group3} alt="logo" />AGILE METHODOLOGY</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group4} alt="logo" style={{marginTop: '80px'}} />ONSITE COLLABORATION</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group5} alt="logo" style={{marginTop: '80px'}} />INNOVATION AT WORK</li>
          </div>
        </div>
        &nbsp;
        <div className='row'>
          <div className='col-lg-4'>
           <li><img src={Group6} alt="logo" />CLIENT'S INVOLVEMENT IN EACH MILESTONE</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group7} alt="logo" />DEDICATED TEAM</li>
          </div>
        </div>
      </div>

      <div className='container' style={{backgroundColor: '#EDEDED'}} id="industries">
        &nbsp;
        <h1>WE ARE WORKING WITH THESE INDUSTRIES</h1>
        &nbsp;
        <div className='row'>
          <div className='col-lg-4'>
          <li><img src={Group8} alt="logo" />MEDIA & ENTERTAINMENT</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group9} alt="logo" />HEALTH CARE & WELLNESS</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group10} alt="logo" />HOSPITALITY & REAL ESTATE</li>
          </div>
        </div>

        &nbsp;

        <div className='row'>
          <div className='col-lg-4'>
          <li><img src={Group11} alt="logo" />RETAIL & E COMMERCE</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group12} alt="logo" />EDUCATION & LEARNING</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group13} alt="logo" />TRAVEL & TRANSPORT</li>
          </div>
        </div>

        &nbsp;

        <div className='row' id="it">
          <div className='col-lg-4'>
          <li><img src={Group14} alt="logo" />MOBILE & TELECOM</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group15} alt="logo" />IT & ITES</li>
          </div>
          <div className='col-lg-4'>
          <li><img src={Group16} alt="logo" />AGRITECH</li>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
