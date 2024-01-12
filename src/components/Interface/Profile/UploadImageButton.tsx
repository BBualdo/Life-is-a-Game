"use client";

import { updateAvatar } from "@/src/redux/slices/userSlice";
import { AppDispatch } from "@/src/redux/store";
import { Input } from "@/src/shadcn/ui/input";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const UploadImageButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const uploadInput = useRef<HTMLInputElement | null>(null);

  const openImagePicker = () => {
    uploadInput.current!.click();
  };

  const handleImageChange = () => {
    if (uploadInput.current!.files && uploadInput.current!.files.length > 0) {
      const selectedImage = uploadInput.current!.files[0];
      const imageUrl = URL.createObjectURL(selectedImage);
      dispatch(updateAvatar({ avatar: imageUrl }));
    }
  };

  return (
    <>
      <button
        onClick={openImagePicker}
        className="text-md absolute bottom-0 w-full translate-y-full border-t-2 border-cp-cyan bg-black py-2 font-bold uppercase text-cp-cyan transition-all duration-300 group-hover:translate-y-0"
      >
        Change Avatar
      </button>
      <Input
        id="avatar"
        name="avatar"
        ref={uploadInput}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  );
};

export default UploadImageButton;
