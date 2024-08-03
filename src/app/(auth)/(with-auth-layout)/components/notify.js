import toast from "react-hot-toast";

export default function useNotify() {
  const saveSettings = async (settings) => {
    // Simulate a network request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (settings === "success") {
          resolve("Success");
        } else {
          reject("Error");
        }
      }, 1000);
    });
  };
  const notify = (status, msg) =>
    toast.promise(saveSettings(status), {
      loading: "Saving...",
      success: <b>{msg}</b>,
      error: <b>{msg}</b>,
    });
  return { notify };
}
