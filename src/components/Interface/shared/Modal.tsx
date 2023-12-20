"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalBackdrop from "./ModalBackdrop";

const Modal = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return mounted && isOpen
    ? createPortal(
        <div className="fixed bottom-0 top-0 flex w-full items-center justify-center transition-all duration-500">
          <ModalBackdrop />
          <div className="gradient-cp-cyan z-50 w-1/2 border-2 border-cp-cyan px-10 py-4">
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
