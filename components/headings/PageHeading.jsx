/*
 *   The page heading is the principal heading of the page
 *   Usually match the nav bar title (Dashboard, Home, etc)
 *   @Author Philippe Pepinouz
 *
 */

function PageHeading({ text }) {
  return <h1 className="text-2xl text-primary-full font-main font-bold">{text}</h1>;
}

export default PageHeading