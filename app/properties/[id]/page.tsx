"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import { FaArrowLeft } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButtons from "@/components/ShareButtons";
import PropertyContactForm from "@/components/PropertyContactForm";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null) as any;
  const [loading, setLoading] = useState(true);
  // console.log(property)

  useEffect(() => {
    // fetchProperty(id).then((data) => {
    //   setProperty(data);
    //   setLoading(false);
    // });

    const fetchData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log("Error Fetching Property: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto px-6 py-6">
              <Link
                href="/properties"
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <FaArrowLeft className="mr-2" /> Back to Properties
              </Link>
            </div>
          </section>

          {/* <!-- Property Info --> */}
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <PropertyDetails property={property} />

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">

            <BookmarkButton property={property} />
            <ShareButtons property={property} />
            
            {/* <!-- Contact Form --> */}
            <PropertyContactForm property={property} />
          </aside>
        </div>
      </div>
    </section>
    <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
