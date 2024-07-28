"use client";

import { Form } from "@/src/shadcn/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/src/redux/store";
import { toast } from "sonner";
import FirstName from "./FormComponents/FirstName";
import LastName from "./FormComponents/LastName";
import CurrentGoal from "./FormComponents/CurrentGoal";
import Bio from "./FormComponents/Bio";
import IUser from "@/src/models/IUser";
import editProfileInfoSchema from "@/src/schemas/editProfileInfoSchema";
import UserService from "@/src/services/UserService";
import { updateUserInfo } from "@/src/redux/slices/userSlice";
import { PiWarningCircleFill } from "react-icons/pi";

const EditProfileForm = ({
  closeModal,
  user,
}: {
  closeModal: () => void;
  user: IUser;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { firstName, lastName, username, currentGoal, bio } = user;

  const form = useForm<z.infer<typeof editProfileInfoSchema>>({
    resolver: zodResolver(editProfileInfoSchema),
    defaultValues: {
      firstName,
      lastName,
      currentGoal,
      bio,
    },
  });

  async function onSubmit(values: z.infer<typeof editProfileInfoSchema>) {
    try {
      const res = await UserService.updateProfile(user.id, values);
      dispatch(updateUserInfo(values));
      toast(res.data.message);
    } catch (error: any) {
      if (error.res) {
        toast.error(error.res.data.message, {
          description: error.res.data.errors?.map(
            (error: string, index: number) => <p key={index}>{error}</p>,
          ),
          icon: <PiWarningCircleFill />,
        });
      } else {
        toast.error("Profile update failed!", {
          description:
            "Server error occurred. Please try again later or contact customer support.",
          icon: <PiWarningCircleFill />,
        });
      }
    }

    closeModal();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div className="flex w-full flex-col justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-6">
          <FirstName form={form} />
          <LastName form={form} />
          <CurrentGoal form={form} />
          <Bio form={form} />
          <div className="flex items-center justify-center xs:gap-2 xs:max-lg:flex-col lg:gap-10">
            <button className="btn btn-yellow hover:bg-black">Update</button>
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-red hover:bg-cp-red/50"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EditProfileForm;
