//import { useMutation, useQueryClient } from "react-query";


const SignOutButton = () => {

    const handleClick = () => {
        //mutation.mutate();
      };

return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100 "
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;