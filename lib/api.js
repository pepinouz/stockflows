// Fetch the companies logos
export const fetchLogos = async (thicker) => {
  let logosRes = await fetch("api/stock?request=logo&ticker=" + thicker);
  return logosRes.json();
};

// Fetch the companies info
export const fetchCompany = async (thicker) => {
  let companyRes = await fetch("api/stock?request=company&ticker=" + thicker);
  return companyRes.json();
};
