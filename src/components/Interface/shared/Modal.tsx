"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import ModalBackdrop from "./ModalBackdrop";
import { motion } from "framer-motion";

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
        <div className="fixed bottom-0 top-0 z-50 flex w-full items-center justify-center">
          <ModalBackdrop />
          <motion.div
            initial={{ width: "0vw" }}
            animate={{ width: "80vw" }}
            transition={{ duration: 0.3, ease: "anticipate" }}
            className="gradient-cp-cyan absolute bottom-4 top-4 z-50 overflow-y-auto border-2 border-cp-cyan py-4 shadow-[0_0_12px_#34d0ff] xs:px-4 lg:px-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {children}
            </motion.div>
          </motion.div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
