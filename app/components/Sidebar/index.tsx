import React from "react";

interface SidebarToggleProps {
  onClick: () => void;
  showSidebar: boolean;
}

export const Sidebar = ({ onClick, showSidebar }: SidebarToggleProps) => {
  return (
    <div
      onClick={onClick}
      className={`align-top rounded-2xl w-[24vw] bg-white text-white fixed h-full ease-in-out duration-300  ${
        showSidebar ? "translate-y-0 p-10 pl-10" : "sidebar-close p-6"
      }`}
    >
      <div
        className={`flex justify-normal items-center	font-semibold text-black ${
          showSidebar ? `` : "hidden"
        }`}
      >
        <div className="mr-2">
          <img className="w-6	h-6" src="/icon/ic_user_exclamation.svg" alt="" />
        </div>
        <div className="text-xl	font-semibold	text-primary-black">
          Risk Profile{" "}
        </div>
        <button
          className={`text-black cursor-pointer z-50 ml-auto ${
            showSidebar ? "" : "hidden"
          }`}
          onClick={onClick}
        >
          <img src="/icon/ic_close_sidebar.svg" alt="close sidebar" />
        </button>
      </div>
      <div className={`w-full my-6 ${showSidebar ? "" : "hidden"}`}>
        <form>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Profile Title
            </label>
            <input
              type="text"
              id="txt_title"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              defaultValue={`Child Safety`}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Responsible Person
            </label>
            <input
              type="text"
              id="txt_title"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              defaultValue={`Direct of Operation`}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              id="message"
              rows={18}
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              defaultValue={`Est orci gravida diam tempus. Mauris elit sed feugiat consequat habitant urna nibh diam ornare. Fringilla egestas libero turpis ipsum turpis urna vestibulum cras. Eget lorem facilisi faucibus condimentum nullam volutpat. Fusce fames pharetra sagittis vitae venenatis. Aliquam aliquet accumsan sapien at. Fringilla vestibulum. Est orci gravida diam tempus. Mauris elit sed feugiat consequat habitant urna nibh diam ornare. Fringilla egestas libero turpis ipsum turpis urna vestibulum cras. Eget lorem facilisi faucibus condimentum nullam volutpat. Fusce fames pharetra sagittis vitae venenatis. Aliquam aliquet accumsan sapien at. Fringilla vestibulum.`}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};
