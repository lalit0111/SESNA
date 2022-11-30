import React, { useEffect, useState } from "react";

const DatePicker = ({ signinUser, setSignInUser }) => {
  const [date, setDate] = useState({ dd: "", mm: "", yyyy: "" });

  useEffect(() => {
    signinUser.personal_detail.dob = `${date.yyyy}/${date.mm}/${date.dd}`;
    setSignInUser(signinUser);
  }, [date]);
  return (
    <div className="date-picker">
      <input
        type="text"
        placeholder="YYYY"
        maxLength={4}
        onChange={(e) => {
          setDate({ ...date, yyyy: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="MM"
        maxLength={2}
        onChange={(e) => {
          setDate({ ...date, mm: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="DD"
        maxLength={2}
        onChange={(e) => {
          setDate({ ...date, dd: e.target.value });
        }}
      />
    </div>
  );
};

export default DatePicker;
