/*
 *   The page heading is the sub heading of the page under the title
 *   Usually match the nav bar title (Dashboard, Home, etc)
 *   @Author Philippe Pepinouz
 *
 */

function PageSubheading({ text }) {
    return <p className="text-sm text-gray-400 font-main mt-2">{text}</p>;
  }
  
  export default PageSubheading