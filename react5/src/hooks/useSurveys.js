import { useState } from "react";

export default function useSurveys() {
  const [surveys, setSurveys] = useState(
    JSON.parse(localStorage.getItem("survey")) || []
  );

  function saveSurvey(data) {
    const newSurvey = [...surveys, data];

    setSurveys(newSurvey);

    localStorage.setItem(
      "survey",
      JSON.stringify(newSurvey)
    );
  }

  return {
    surveys,
    saveSurvey,
  };
}