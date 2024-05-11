import { AxiosError } from "axios";
import { useCallback } from "react";

const useOnServerError = () => {
  const onError = useCallback((error: AxiosError) => {
    alert(error.message || "An error occurred");
  }, []);

  return {
    onError,
  };
};

export default useOnServerError;
