import Header from '../components/Header.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import Dashboard from '../components/Dashboard/Dashboard.jsx';
import NewHabit from '../components/Habits/NewHabit.jsx';
import Habits from '../components/Habits/Habits.jsx';
import Calendar from '../components/Calendar/Calendar.jsx';
import Overview from '../components/Overview/Overview.jsx';
import Profile from '../components/Profile/Profile.jsx';
import { useState } from 'react';
import './index.css';
import WeekOverview from '../components/Calendar/WeekOverview.jsx';


export default function MainApp() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [selectedHabit, setSelectedHabit] = useState(0);
  const [isReadonly, setIsReadonly] = useState(true);
  // for now, changing the comp depending on the activeMenu state, will need router later
  return (
    <>
      <title>Motivaa</title>
      <main className="flex flex-col gap-12 mb-20">
        <Header active={activeMenu} setActive={setActiveMenu} />
        {activeMenu === "home" && (
          <>
            <ProgressBar />
            <Dashboard />
          </>
        )}
        {activeMenu === "habits" && (
          <>
            <Habits
              selectedHabit={selectedHabit}
              setSelectedHabit={setSelectedHabit}
              edit={isReadonly}
              setEdit={setIsReadonly}
            />
            <NewHabit />
          </>
        )}
        {activeMenu === "calendar" && <Calendar setActive={setActiveMenu} />}
        {activeMenu === "week-overview" && (
          <WeekOverview setActive={setActiveMenu} />
        )}
        {activeMenu === "overview" && <Overview />}
        {activeMenu === "profile" && (
          <Profile edit={isReadonly} setEdit={setIsReadonly} />
        )}
      </main>
    </>
  );
}

// class App extends React.Component {
//   state = {
//     client: null,
//     message: null,
//     error: null,
//   };

//   async componentDidMount() {
//     await this.fetchHealthCheck();
//     await this.fetchAuthenticatedMessage();
//   }

//   fetchHealthCheck = async () => {
//     try {
//       const response = await fetch('http://localhost:8093/apis/healthcheck');
//       const body = await response.json();
//       this.setState({ client: body.healthStatus });
//     } catch (error) {
//       console.error('Error during fetch:', error);
//       this.setState({ error: 'Failed to fetch health check data.' });
//     }
//   };

//   fetchAuthenticatedMessage = async () => {
//     try {
//       const response = await fetch('http://localhost:8093/apis/authTest', {
//         headers: {
//           Authorization: `Bearer ${this.props.keycloak.token}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch the authenticated message.');
//       }

//       const data = await response.text(); 
//       this.setState({ message: data });
//     } catch (error) {
//       console.error('Error during fetch:', error);
//       this.setState({ error: 'Failed to fetch authenticated message.' });
//     }
//   };



//   render() {
//     const { client, message, error } = this.state;
//     return (
//       <div>
//         <h1>API Messages</h1>
//         <UserInfo /> {/* Displaying the user info component */}
//         {error && <p>Error: {error}</p>}
//         {client ? <p>Health Check: {client}</p> : <p>Loading health check...</p>}
//         {message ? <p>Authenticated Message: {message}</p> : <p>Loading authenticated message...</p>}
//       </div>
//     );
//   }
// }

// export default withAuth(App);