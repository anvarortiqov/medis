import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
import Main from './pages/Main/index'
import Patient from './pages/Patient/index'
import Rooms from './pages/Rooms/index'
import Services from './pages/Services/index'
import Employees from './pages/Employees/index'
import Laboratory from './pages/Labaratory/index'
import Sozlamalar from './pages/Sozlamalar/index'
import Statistics from './pages/Statistics/index'
import Accaunting from './pages/Accaunting/index'
import QabulXona from './pages/QabulXona/index.jsx'
import Login from './pages/Login/index'
import AboutWorkforce from './pages/AboutExployees/index.jsx'
// components
import NotFoundPage from './components/NotFound/index'
import Personal from './components/PatientInfo/patientinfo'
import Analyses from './components/PatientInfo/analyses'
import SicknessHistory from './components/PatientInfo/servicehistory'
import Statsionar from './components/PatientInfo/statsionar'
import Massaj from './components/ServicesInfo/massaj'
import Rsults from './components/LabaratoryInfo/natijalar'
import Allanalyses from './components/LabaratoryInfo/allanalyses'
import AddEmployee from './components/Modals/AddEmployee/index'
import Addanalyses from './components/Modals/AddAnalyses/index'
import AddService from './components/Modals/AddServices/index'
import NewServiceType from './components/Modals/NewServiceType/index'
import NewEquipment from './components/Modals/NewEquipment/index'
import Hospital from './components/HospitalInfo/hospital'
import Payments from './components/AccauntingInfo/payments'
import Harajatlar from './components/AccauntingInfo/harajatlar'
import Qabul from './components/Modals/Qabul/index'
import PaymentInside from './components/PaymentInside/index'
import HarajatInside from './components/HarajatInside/index'
import QabulCheck from './components/Checks/QabulCheck/index'
import WorkerInfo from './components/WorkforceSec/workforceInfo.jsx'
import WorkerSalary from './components/WorkforceSec/salary.jsx'
import WorkerFaoliyati from './components/WorkforceSec/faoliyati.jsx'


import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "qabulxona",
        element: <QabulXona />,
      },
      {
        path: "patient",
        element: <Patient />,
        children: [
          {
            path: "personal",
            element: <Personal />
          },
          {
            path: "analyses",
            element: <Analyses />
          },
          {
            path: "sickhistory",
            element: <SicknessHistory />
          },
          {
            path: "statsionar",
            element: <Statsionar />
          },
          {
            path: "qabul",
            element: <Qabul />
          }
        ]
      },
      {
        path: "rooms",
        element: <Rooms />
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "massaj",
            element: <Massaj />
          },
          {
            path: "addservice",
            element: <AddService />
          },
          {
            path: "newservicetype",
            element: <NewServiceType />
          }
        ]
      },
      {
        path: "hodimlar/:position",
        element: <Employees />,
      },
      {
        path: "hodimlar/addemployee",
        element: <AddEmployee />
      },
      {
        path: 'hodimlar/:position/about-workforce',
        element: <AboutWorkforce/>,
        children: [
          {
            path: 'worker-info',
            element: <WorkerInfo/>,
          },
          {
            path: 'worker-faoliyati',
            element: <WorkerFaoliyati/>,
          },
          {
            path: 'worker-salary',
            element: <WorkerSalary/>,
          }
        ]
      },
      {
        path: 'about-workforce',
        element: <AboutWorkforce/>,
        children: [
          {
            path: 'worker-info',
            element: <WorkerInfo/>,
          },
          {
            path: 'worker-faoliyati',
            element: <WorkerFaoliyati/>,
          },
          {
            path: 'worker-salary',
            element: <WorkerSalary/>,
          }
        ]
      },
      {
        path: "laboratory",
        element: <Laboratory />,
        children: [
          {
            path: "analyseresults",
            element: <Rsults />
          },
          {
            path: "allanalyses",
            element: <Allanalyses />
          },
          {
            path: "addanalyses",
            element: <Addanalyses />
          },
          {
            path: "newequipment",
            element: <NewEquipment />
          }
        ]
      },
      {
        path: "statistics",
        element: <Statistics />
      },
      {
        path: "accaunting",
        element: <Accaunting />,
        children: [
          {
            path: "payments",
            element: <Payments />
          },
          {
            path: "harajatlar",
            element: <Harajatlar />
          },
          {
            path: "payment-info",
            element: <PaymentInside />
          },
          {
            path: "harajat-info",
            element: <HarajatInside />
          }
        ]
      },
      {
        path: "settings",
        element: <Sozlamalar />,
        children: [
          {
            path: "shifohona",
            element: <Hospital />
          }
        ]
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
