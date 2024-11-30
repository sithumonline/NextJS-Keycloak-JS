import WeeklyHabitAny from "../Habits/WeeklyHabitAny";
import WeeklyHabitFixed from "../Habits/WeeklyHabitFixed";
import { useState } from "react";

import Cookies from "js-cookie";
import TextInput from "../Inputs/TextInput";

export default function DashboardHabits() {
  const [userId, setUserId] = useState("");

  const sendRequest = async () => {
    // get keycloak-token from cookie
    const token = Cookies.get("keycloak-token");
    // set headers with token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    // send GET request to the server
    const response = await fetch(
      "http://localhost:8081/api/v1/notes/" + userId,
      {
        method: "GET",
        headers,
      }
    );

    // if response is not ok, throw an error
    if (!response.ok) {
      console.error("Failed to fetch the authenticated message.");
      return;
    }

    const res = await response.json();
    console.log("Response from server:", res);
  };

  return (
    <section className="w-4/5 mx-auto flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h4 className="text-xl uppercase [word-spacing:3px]">
          Today is 24th of June
        </h4>
        <h2 className="text-2xl uppercase font-bold">Welcome username!</h2>
        <h4 className="text-xl uppercase [word-spacing:3px]">
          Week 26 June 24-30
        </h4>
      </div>
      <WeeklyHabitFixed habitTitle="Walk the dog" />
      <WeeklyHabitAny habitTitle="Take out the trash" />
      <TextInput
        text="User ID"
        value={userId}
        setValue={setUserId}
        placeholder="Enter user ID"
      />
      <button
        onClick={sendRequest}
        className="bg-purple text-white uppercase py-2 px-4 rounded-md"
      >
        Send Request
      </button>
    </section>
  );
}
