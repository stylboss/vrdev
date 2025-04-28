import { toast } from "sonner";

export const toastSuccess = (msg: string) =>
  toast.success(msg, {
    className: "text-green-500 border-green-100 bg-green-50"
  });

export const toastError = (msg: string) =>
  toast.error(msg, {
    className: "text-red-500 border-red-100 bg-red-50"
  });
