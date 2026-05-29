import { createContext, useContext, useRef } from "react";
import type { FC, ReactNode, RefObject } from "react";
import "./index.module.css";
import { Toast } from "primereact/toast";
import SvgCheckIcon from "../../assets/icons/SvgCheckIcon";
import SvgErrorIcon from "../../assets/icons/SvgErrorIcon";

interface Props {
    children: ReactNode;
}

interface ToastContextType {
    current: RefObject<Toast | null> | null;
    success: (message: string) => void;
    error: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: FC<Props> = ({ children }) => {
    const toast = useRef<Toast | null>(null);

    const success = (message: string) => {
        toast.current?.show({
            icon: <SvgCheckIcon />,
            severity: "info",
            detail: message,
            closable: false,
            life: 2000,
        });
    };

    const error = (message: string) => {
        toast.current?.show({
            icon: <SvgErrorIcon />,
            severity: "error",
            detail: message,
            closable: false,
            life: 2000,
        });
    };

    return (
        <ToastContext.Provider value={{ current: toast, success, error }}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};