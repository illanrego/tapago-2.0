'use client'

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { Button } from './button';

const pagoStyle = { backgroundColor: '#338888' };
const restStyle = { border: '2px solid #338888' };

const css = `
    .my-selected:not([disabled]) {
      border: 2px solid currentColor;
    }

    .my-today {
      color: blue;
    }
`;

export default function PegadorDeDia() {
  const [date, setDate] = useState();
  const [pagoDays, setPagoDays] = useState([]);
  const restDays = new Date(2024, 1, 11); // This appears to be a static date; adjust if needed.

  useEffect(() => {
    // Fetch dates from the API
    async function fetchDates() {
      try {
        const response = await fetch('/api/getDates');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPagoDays(data.map(day => new Date(day)));
      } catch (error) {
        console.error('Error fetching dates:', error);
      }
    }

    fetchDates();
  }, []);

  function addPago() {
    if (date) {
      fetch('/api/getDates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: date.toISOString() }),
      })
      .then(response => response.json())
      .then(data => {
        setPagoDays(prevDays => [...prevDays, date]);
      })
      .catch(error => {
        console.error('Error adding date:', error);
      });
    }
  }

  let footer = <p>Today is {format(new Date(), 'PP')}.</p>;
  if (date) {
    footer = <p>You picked {format(date, 'PP')}.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <style>{css}</style>
      <h3>Você malhou {pagoDays.length} vezes!</h3>
      <DayPicker
        mode="single"
        selected={date}
        onSelect={setDate}
        modifiers={{ x: pagoDays, y: restDays }}
        modifiersStyles={{ x: pagoStyle, y: restStyle }}
        footer={footer}
        modifiersClassNames={{
          today: 'my-today',
          selected: 'my-selected'
        }}
        showOutsideDays
        showWeekNumber
        ISOWeek
      />
      <div className="flex justify-left items-center gap-3 flex-row">
        <Button variant="secondary">Descanso</Button>
        <Button onClick={addPago} className="bg-green-900 text-white hover:bg-green-800">Pago</Button>
      </div>
    </div>
  );
}
