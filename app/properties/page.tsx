import PropertySearchForm from "@/components/PropertySearchForm";
import Properties from "@/components/Properties";

const PropertiesPage = () => {
  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-start px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
