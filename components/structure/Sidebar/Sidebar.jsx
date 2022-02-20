/*
 *   This is a simple sidebard, a logo can be inserted in the fist <a> tag
 *   You can then pass Sidebar items for the different pages of your app
 *   @Author Philippe Pepinouz
 *
 */

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside class="w-64" aria-label="Sidebar">
      <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-screen">
        <a href="https://www.techguys.consulting/" class="flex pl-2.5 mb-5 w-20">
          <img src="https://uploads-ssl.webflow.com/60a52a7dc2e7990e30d3dca2/60a531643c389b85a9807d60_Groupe%20(1)-p-2000.png" />
        </a>
        <SidebarItem
          link={"/dashboard"}
          title={"Dashboard"}
          icon={
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          }
        />
      </div>
    </aside>
  );
}

export default Sidebar;
