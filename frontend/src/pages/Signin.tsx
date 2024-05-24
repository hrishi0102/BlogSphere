import Quote from "../Components/Quote";
import { Auth } from "../Components/Auth";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1 lg:col-span-1">
        <Auth type="signin"></Auth>
      </div>
      <div className="hidden lg:block">
        <Quote></Quote>
      </div>
    </div>
  );
};
