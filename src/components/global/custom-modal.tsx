"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/provider/modal-provider";

interface Props {
  title: string;
  subheading: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const CustomModal: React.FC<Props> = ({
  title,
  subheading,
  children,
  defaultOpen,
}) => {
  const { isOpen, setClose } = useModal();
  return (
    <Dialog
      open={isOpen || defaultOpen}
      onOpenChange={setClose}
    >
      <DialogContent className='overflow-scroll md:max-h-[700px] md:h-fit h-screen bg-card'>
        <DialogHeader className='pt-8 text-left'>
          <DialogTitle className='text-2xl font-bold'>{title}</DialogTitle>
          <DialogDescription>{subheading}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
