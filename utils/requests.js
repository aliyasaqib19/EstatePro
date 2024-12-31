const apiDomain = process.env.NEXT_PUBLIC_DOMAIN_API || null; // for deployment issues

// Fetech all properties
async function fetchProperties({ showFeatured = false } = {}) {
  try {
    // Handle the case where the API domain is not available yet
    if (!apiDomain) {
        return [];
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/properties${showFeatured ? '/featured' : ''}`, {
      cache: "no-store",  // to display the property as soon as it is added
    });
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// fetch single property
async function fetchProperty(id) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_API}/properties/${id}`);
    if (!res.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { 
  fetchProperties, 
  fetchProperty,
 };
