import React from "react";

type ResetProps = {
  handleReset: () => void;
};

const Reset: React.FC<ResetProps> = (props: ResetProps) => {
  const { handleReset } = props;

  return (
    <button onClick={handleReset}>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#8d99ae"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="matrix(0 1 1 0 2.5 2.5)"
          >
            {" "}
            <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>{" "}
            <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>{" "}
          </g>{" "}
        </g>
      </svg>
      Reset!
    </button>
  );
};

export default Reset;
