import React, { useState } from "react";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomDatePickerProps {
  isEndDate?: boolean;
}

export function CustomDatePicker({ isEndDate }: CustomDatePickerProps) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartDateOpen, setIsStartDateOpen] = useState<boolean>(false);

  const [endDate, setEndDate] = useState<Date>();
  const [isEndDateOpen, setIsEndDateOpen] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "h-12 pl-4 w-fit pr-3 flex justify-between relative group items-center border rounded-md rounded-tr-none hover:border-gray-600 border-gray-200 dark:bg-gray-900",
        {
          "!border-primary border-2 hover:border-primary hover:border-2": true,
        }
      )}
    >
      <span className="text-xs whitespace-nowrap absolute -top-2 left-3 px-1 dark:bg-gray-900 bg-white text-black text-opacity-60 dark:text-white dark:opacity-100">
        Start Date
      </span>
      <button
        onClick={() => {
          setIsStartDateOpen(true);
          setIsEndDateOpen(false);
        }}
        type="button"
        aria-label="Select departure date"
      >
        <DatePicker
          calendarClassName="!border-none !shadow !flex"
          className="focus:outline-none w-fit dark:bg-transparent dark:placeholder:text-white text-sm font-medium"
          dateFormat="EEEE, dd MMM yyyy"
          minDate={new Date()}
          monthsShown={2}
          popperClassName="!py-6"
          selected={startDate}
          selectsStart
          shouldCloseOnSelect
          onBlur={() => {
            setIsStartDateOpen(false);
            setIsEndDateOpen(false);
          }}
          startDate={startDate}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
        />
      </button>
      {isEndDate && (
        <>
          <span className="w-2 border-2 border-gray-500 mr-6" />
          <span className="text-xs whitespace-nowrap absolute -top-2 right-3 px-1 dark:bg-gray-900 bg-white text-black text-opacity-60 dark:text-white dark:opacity-100">
            End Date
          </span>
          <button
            onClick={() => {
              setIsStartDateOpen(false);
              setIsEndDateOpen(true);
            }}
            type="button"
            aria-label="Select departure date"
          >
            <DatePicker
              calendarClassName="!border-none !shadow !flex"
              className="focus:outline-none w-fit dark:bg-transparent dark:placeholder:text-white text-sm font-medium"
              dateFormat="EEEE, dd MMM yyyy"
              minDate={new Date()}
              monthsShown={2}
              popperClassName="!py-6"
              selected={endDate}
              selectsStart
              shouldCloseOnSelect
              onBlur={() => {
                setIsStartDateOpen(false);
                setIsEndDateOpen(true);
              }}
              startDate={endDate}
              onChange={(date: Date) => {
                setEndDate(date);
              }}
            />
          </button>
        </>
      )}
    </div>
  );
}
