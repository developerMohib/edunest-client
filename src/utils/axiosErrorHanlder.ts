import { AxiosError } from "axios";

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return (
      error.response?.data?.data?.errors?.message ||
      error.response?.data?.data?.message ||
      error.response?.data?.message ||
      `Request failed with status ${error.response?.status}`
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong. Please try again.";
}
