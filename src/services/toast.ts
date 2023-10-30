import { toast } from "react-toastify";

export function toastSuccess(message: string) {
    return toast.success(message, {
        position: 'top-left'
      })
}

export function toastWarning(message: string) {
    return toast.warning(message, {
        position: 'top-left'
      })
}

export function toastError(message: string) {
    return toast.error(message, {
        position: 'top-left'
      })
}