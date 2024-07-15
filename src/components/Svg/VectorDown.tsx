import React from "react";

const VectorDown: React.FC<{ width: string; height: string }> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.80687 9.01954C8.36059 9.46582 7.63584 9.46582 7.18956 9.01954L0.33471 2.16469C-0.11157 1.71841 -0.11157 0.993651 0.33471 0.547373C0.780989 0.101093 1.50575 0.101093 1.95203 0.547373L8 6.59535L14.048 0.550943C14.4943 0.104664 15.219 0.104664 15.6653 0.550943C16.1116 0.997222 16.1116 1.72198 15.6653 2.16826L8.81044 9.02311L8.80687 9.01954Z"
        fill="white"
      />
    </svg>
  );
};

export default VectorDown;
