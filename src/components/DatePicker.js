import * as React from 'react';

import dayjs from 'dayjs';
import 'dayjs/locale/de';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
    const [datePickerValue, setDatePickerValue] = React.useState(dayjs('2022-04-07'));

  return (
    <LocalizationProvider 
        dateAdapter={AdapterDayjs}
        adapterLocale="de"
        >
      <DatePicker
        label="Date"
        value={datePickerValue}
        onChange={(newValue) => {
            setDatePickerValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}