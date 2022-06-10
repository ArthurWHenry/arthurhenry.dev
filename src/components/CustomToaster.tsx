import { NextComponentType } from "next";
import { ToastBar, Toaster } from "react-hot-toast";

/**
 * Custom Toaster
 *
 * @remarks Uses react-hot-toast and used at highest level of app.
 *
 * @returns {CustomToaster}
 */
const CustomToaster: React.FC = () => {
  return (
    <Toaster>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default CustomToaster;
