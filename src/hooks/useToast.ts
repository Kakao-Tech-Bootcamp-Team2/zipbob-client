import { useState } from "react";

export const useToast = () => {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  const showToast = (message: string, type = "success") => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast({ message: "", type: "", visible: false });
    }, 2500);
  };

  return { showToast, toast };
};
