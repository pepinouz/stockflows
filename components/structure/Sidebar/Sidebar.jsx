/*
 *   This is a simple sidebard, a logo can be inserted in the fist <a> tag
 *   You can then pass Sidebar items for the different pages of your app
 *   @Author Philippe Pepinouz
 *
 */

import MultiLevelItem from "./MultiLevelItem";
import SidebarItem from "./SidebarItem";

const sidebarItems = (
  <>
    <SidebarItem link={"/dashboard"} title={"Dashboard"} />
    <MultiLevelItem
      title="E-commerce"
      items={
        <>
          <SidebarItem title="Products" />
          <SidebarItem title="Billing" />
          <SidebarItem title="Invoide" />
        </>
      }
    />
  </>
);

function Sidebar() {
  return (
    <aside className="w-64 font-main sticky top-0" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-screen">
        {/* <a
          href="https://www.techguys.consulting/"
          className="flex pl-2.5 mb-5 w-20"
        >
          <img src="https://uploads-ssl.webflow.com/60a52a7dc2e7990e30d3dca2/60a531643c389b85a9807d60_Groupe%20(1)-p-2000.png" />
        </a> */}
        {sidebarItems}
      </div>
    </aside>
  );
}

export default Sidebar;
