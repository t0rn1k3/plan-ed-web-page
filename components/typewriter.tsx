"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <div className="typewriter-container text-left w-120 text-xl p-1 ">
      <Typewriter
        words={[
          "PlanEd არის თანამედროვე, მოქნილი ხელსაწყო თქვენი საგაკვეთილო ან სალექციო პროცესის დასაგეგმად.",
          "შეადგინეთ თქვენზე და თქვენს სასწავლო დაწესებულებაზე მორგებული გრაფიკი.",
          "PLanEd გისურვებთ წარმატებას! <3",
        ]}
        loop={true}
        typeSpeed={50}
        deleteSpeed={0}
        delaySpeed={1000}
        cursor
        cursorStyle="|"
      />
    </div>
  );
}
