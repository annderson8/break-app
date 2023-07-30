import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DashboardLink = () => {
  return (
    <>
      <Link
        to="/dashboard/payments"
        className={classNames(
          "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
        )}
      >
        <CreditCardIcon
          className={classNames(
            "mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          )}
          aria-hidden="true"
        />
        Order History
      </Link>
      <Link
        to="/dashboard/profile"
        className={classNames(
          "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
        )}
      >
        <HomeIcon
          className={classNames(
            "mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
          )}
          aria-hidden="true"
        />
        Your profile
      </Link>

      {/* <Link
            to="/dashboard/profile"
            className={classNames('text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
            )}
            >
            <UserIcon
                className={classNames(
                'mr-4 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500',
                )}
                aria-hidden="true"
            />
            Profile
            </Link> */}
    </>
  );
};

export default DashboardLink;
