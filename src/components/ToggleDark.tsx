import React from "react";

export default function ToggleDark(props: any) {
  return (
    <div>
      <div className="wrapper">
        <label className="switch">
          <input
            type="checkbox"
            id="checkbox-toggle"
            onClick={() => {
              props.toggleDark();
            }}
          />
        </label>
      </div>
    </div>
  );
}
