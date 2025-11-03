import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
const ContentModal = ({
  title,
  trigger,
  content,
  ContentClassName,
  triggerClassName,
  asChild,
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen} key={title}>
      <DialogTrigger
        asChild={asChild}
        className={`${
          triggerClassName || "text-black"
        } flex cursor-pointer items-center`}
      >
        {trigger && trigger}
      </DialogTrigger>
      <DialogContent
        className={`border-0 max-h-[95vh] overflow-y-auto ${
          ContentClassName && ContentClassName
        }`}
      >
        <DialogHeader>
          <DialogTitle className="text-sm pe-[70px]">
            {title && title}
          </DialogTitle>
          <div className="bg-white/100 whitespace-pre-wrap">
            {typeof content === "function" ? content({ closeModal }) : content}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContentModal;
