import { toast } from "react-hot-toast";

export function ToastMessage(type, message) {
  const options = {
    style: {
      background: "#17352a",
      color: "#fff",
      fontFamily: "sans-serif",
      borderRadius: "12px",
      width: "fit-content",
    },
  };

  if (type === "error") {
    return toast.error(message, options);
  }

  if (type === "success") {
    return toast.success(message, options);
  }
}