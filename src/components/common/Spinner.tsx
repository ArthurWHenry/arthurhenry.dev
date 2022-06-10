import classNames from "classnames";
import { SpinnerComponentTypes } from "./types";

const SIZES = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
};

/**
 * Spinner component.
 *
 * @remarks To be used throughout the application
 *
 * @param {SpinnerSizeTypes} size The size of the spinner.
 * @param {boolean} inheritColor If it should inherit the parent's color.
 * @returns {Spinner} The spinner.
 * @returns
 */
const Spinner: React.FC<SpinnerComponentTypes> = ({
  size = "md",
  inheritColor = false,
}: SpinnerComponentTypes) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        className={classNames(
          SIZES[size],
          { "text-gray-600": !inheritColor },
          "animate-spin"
        )}
      >
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

export default Spinner;
