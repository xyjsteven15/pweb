'use client';

import { useState } from 'react';

const dates = [
  { day: '18', label: 'Fri' },
  { day: '19', label: 'Sat' },
  { day: '20', label: 'Sun' },
];

const partySizes = ['4', '8', '12'];

export default function BookingPreview() {
  const [selectedDate, setSelectedDate] = useState('19');
  const [selectedParty, setSelectedParty] = useState('8');
  const [sent, setSent] = useState(false);

  const updateDate = (date: string) => {
    setSelectedDate(date);
    setSent(false);
  };

  const updateParty = (party: string) => {
    setSelectedParty(party);
    setSent(false);
  };

  return (
    <div className="miniProgramVisual" aria-label="Interactive Qiaoshuiting booking preview">
      <div className="phone phoneBack" aria-hidden="true">
        <div className="phoneTop" />
        <p>桥水汀</p>
        <div className="roomShape"><span>今日可订</span><b>3 间</b></div>
        <small>宴饮于此 · 雅聚成席</small>
      </div>

      <div className="phone phoneFront">
        <div className="phoneTop" />
        <small className="bookingEyebrow">Reservation</small>
        <h3>预订席位</h3>

        <fieldset className="bookingGroup">
          <legend>选择日期</legend>
          <div className="dateStrip">
            {dates.map((date) => (
              <button
                className={selectedDate === date.day ? 'selected' : ''}
                key={date.day}
                type="button"
                aria-pressed={selectedDate === date.day}
                onClick={() => updateDate(date.day)}
              >
                <small>{date.label}</small>
                <b>{date.day}</b>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="bookingGroup partyGroup">
          <legend>用餐人数</legend>
          <div className="partyStrip">
            {partySizes.map((party) => (
              <button
                className={selectedParty === party ? 'selected' : ''}
                key={party}
                type="button"
                aria-pressed={selectedParty === party}
                onClick={() => updateParty(party)}
              >
                {party} 位
              </button>
            ))}
          </div>
        </fieldset>

        <p className="bookingSummary" aria-live="polite">
          {sent ? 'Booking sent ✓' : `Sep ${selectedDate} · ${selectedParty} guests`}
        </p>
        <button className={`sendBooking ${sent ? 'sent' : ''}`} type="button" onClick={() => setSent(true)}>
          {sent ? 'Sent successfully' : 'Send booking'}
        </button>
      </div>
    </div>
  );
}
