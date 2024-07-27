import './App.css'
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
// components
import Header from './components/Header/index'
import Navbar from './components/Navbar/index'
import NotFoundPage from './components/NotFound/index'
import Personal from './components/PatientInfo/patientinfo'
import Analyses from './components/PatientInfo/analyses'
import SicknessHistory from './components/PatientInfo/servicehistory'
import Statsionar from './components/PatientInfo/statsionar'
import Massaj from './components/ServicesInfo/massaj'
import Employers from './components/EmployeeInfo/Rahbariyat'
import Doctors from './components/EmployeeInfo/Shifokorlar'
import TechEmployees from './components/EmployeeInfo/TechEmployee'
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

// imports
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <Header />
      <div className='app-block'>
        <Navbar />
        {/* app-contentanda hamma page ho aylanmish mukunat */}
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<Main />}></Route>
             <Route path='/patient' element={<Patient />}>
              <Route path='personal' element={<Personal/>}></Route>
              <Route path='analyses' element={<Analyses/>}></Route>
              <Route path='sickhistory' element={<SicknessHistory/>}></Route>
              <Route path='statsionar' element={<Statsionar/>}></Route>
              <Route path='qabul' element={<Qabul/>}></Route>
            </Route>
            <Route path='/rooms' element={<Rooms/>}></Route>
            <Route path='/services' element={<Services/>}>
              <Route path="massaj" element={<Massaj/>}></Route>
              <Route path="addservice" element={<AddService/>}></Route>
              <Route path="newservicetype" element={<NewServiceType/>}></Route>
            </Route>
            <Route path='/hodimlar' element={<Employees/>}>
              <Route path="rahbarlar" element={<Employers/>}></Route>
              <Route path="shifokorlar" element={<Doctors/>}></Route>
              <Route path="texhodimlar" element={<TechEmployees/>}></Route>
              <Route path="addemployee" element={<AddEmployee/>}></Route>
            </Route>
            <Route path='/laboratory' element={<Laboratory/>}>
              <Route path="analyseresults" element={<Rsults/>}></Route>
              <Route path="allanalyses" element={<Allanalyses/>}></Route>
              <Route path="addanalyses" element={<Addanalyses/>}></Route>
              <Route path="newequipment" element={<NewEquipment/>}></Route>
            </Route>
            <Route path='/statistics' element={<Statistics/>}></Route>
            <Route path='/accaunting' element={<Accaunting/>}>
              <Route path="payments" element={<Payments/>}></Route>
              <Route path="harajatlar" element={<Harajatlar/>}></Route>
              <Route path="payment-info" element={<PaymentInside/>}></Route>
              <Route path="harajat-info" element={<HarajatInside/>}></Route>
            </Route>
            <Route path='/settings' element={<Sozlamalar/>}>
              <Route path="shifohona" element={<Hospital/>}></Route>
            </Route>
            <Route path='*' element={<NotFoundPage/>}></Route>

            {/*<Route path='/doctor' element={<Doctor />}></Route>
            <Route path='/doctor/doctorinfo' element={<DoctorInfo/>}></Route>
            <Route path='/doctor/add' element={<AddWorker />}></Route>
            <Route path='/doctor/info' element={<AboutDoctor />}></Route>
            <Route path='/rooms' element={<Rooms/>}></Route>
            <Route path='/rooms/add' element={<Add/>}></Route>
            <Route path='/services' element={<Services/>}></Route>

            <Route path='/bemorlar' element={<Bemorlar/>}></Route>
            <Route path='/laboratory' element={<Laboratory/>}></Route>
            <Route path='/accounting' element={<Accounting/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            <Route path='/logout' element={<Logout/>}></Route> */}
          </Routes >
        </div>
      </div>
    </div>
  )
}

export default App
