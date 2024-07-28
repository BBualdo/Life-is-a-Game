import IUser from "@/src/models/IUser";
import providers from "@/src/constants/externalProviders";
import { Switch } from "@/src/shadcn/ui/switch";

const UserLinks = ({ user }: { user: IUser }) => {
  return (
    <div className="mt-10 flex w-full items-center justify-center gap-2">
      {providers.map((provider) => {
        const idName = provider.idName as keyof IUser;

        return (
          <div
            key={provider.id}
            className="flex w-[100px] flex-col items-center gap-2 border-2 border-cp-red py-4 text-cp-red md:w-[200px]"
          >
            <provider.icon className="text-lg md:text-2xl" />
            <p className="uppercase md:text-lg">{provider.name}</p>
            <Switch checked={!!user[idName]} />
          </div>
        );
      })}
      )
    </div>
  );
};

export default UserLinks;
