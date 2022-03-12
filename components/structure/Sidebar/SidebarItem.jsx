/*
 *   The sidebaritem receives a title, an icon and a link
 *   The icon can be an svg or an image or a component
 *   Next js router is use so when the user click on the item, he is
 *   redirect to the link by next router
 *   @Author Philippe Pepinouz
 *
 */

import { useRouter } from "next/router";

function SidebarItem({ title, icon, link }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <ul className="space-y-2 cursor-pointer">
      <li>
        <a
          onClick={(e) => handleClick(e)}
          className="flex items-center p-2 text-base font-normal text-sidebar-items rounded-lg hover:bg-gray-100"
        >
          {icon}
          <span className="ml-3">{title}</span>
        </a>
      </li>
    </ul>
  );
}

export default SidebarItem;
