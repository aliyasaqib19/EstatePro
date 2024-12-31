import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { fetchProperties } from "@/utils/requests";

const HomeProperties = async () => {
  const data = await fetchProperties();
  const recentProperties = data.properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl m-auto lg:container">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentProperties.length === 0 ? (
              <div className="text-center text-gray-600">
                No properties found
              </div>
            ) : (
              recentProperties.map((property : any) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="m-auto my-10 max-w-lg px-6">
        <Link
          href="/properties"
          className="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
