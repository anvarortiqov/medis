import React from 'react'
import './style.css'

const servicehistory = () => {

  const SickHistory = [
    {
      id: 1,
      korik: 'Qon Bosimi',
      doctor: 'Janny Smoth',
      year: 2007,
      month: 2,
      day: 14
    },
    {
      id: 2,
      korik: 'Qon Testi',
      doctor: 'Andrea Lalema',
      year: 2014,
      month: 8,
      day: 6
    },
    {
      id: 3,
      korik: 'Emerte',
      doctor: 'William Stephin',
      year: 2019,
      month: 3,
      day: 19
    },
    {
      id: 4,
      korik: 'Qon Testi',
      doctor: 'Andrea Lalema',
      year: 2014,
      month: 8,
      day: 6
    },
    {
      id: 5,
      korik: 'Qon Bosimi',
      doctor: 'Janny Smoth',
      year: 2007,
      month: 2,
      day: 14
    },
    {
      id: 6,
      korik: 'Qon Testi',
      doctor: 'Andrea Lalema',
      year: 2014,
      month: 8,
      day: 6
    },
    {
      id: 7,
      korik: 'Qon Bosimi',
      doctor: 'Janny Smoth',
      year: 2007,
      month: 2,
      day: 14
    },
    {
      id: 8,
      korik: 'Emerte',
      doctor: 'William Stephin',
      year: 2019,
      month: 3,
      day: 19
    },
    {
      id: 9,
      korik: 'Qon Testi',
      doctor: 'Andrea Lalema',
      year: 2014,
      month: 8,
      day: 6
    },
    {
      id: 10,
      korik: 'Emerte',
      doctor: 'William Stephin',
      year: 2019,
      month: 3,
      day: 19
    },
    {
      id: 11,
      korik: 'Qon Testi',
      doctor: 'Andrea Lalema',
      year: 2014,
      month: 8,
      day: 6
    },
    {
      id: 12,
      korik: 'Emerte',
      doctor: 'William Stephin',
      year: 2019,
      month: 3,
      day: 19
    },
    {
      id: 13,
      korik: 'Emerte',
      doctor: 'William Stephin',
      year: 2019,
      month: 3,
      day: 19
    },
  ]


  return (
    <div className="sickness-history">
      <div className="sickness-history_head">
        <div>N</div>
        <div>Ko'rik</div>
        <div>Shifokor</div>
        <div>Sana</div>
      </div>
      {SickHistory.map((sickness)=> (
        <li key={sickness.id}>
          <div>{sickness.id}</div>
          <div>{sickness.korik}</div>
          <div>{sickness.doctor}</div>
          <div className="sickness-history_date">
            <h4>{sickness.day}</h4>/<h4>{sickness.month}</h4>/<h4>{sickness.year}</h4>
          </div>
        </li>
      ))}
      
    </div>
  )
}

export default servicehistory
