import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import CategoryList from "@/components/Admin/CategoryList";

// Metadata for the category page
export const metadata: Metadata = {
  title: "Category Page | NextAdmin Dashboard",
  description: "Browse categories in the NextAdmin Dashboard Kit built with Next.js.",
};

// Category page component
const Category = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full max-w-[1080px] px-4">
        {/* Breadcrumb navigation */}
        <Breadcrumb pageName="Sửa danh mục" />

        {/* Category content */}
        <CategoryList />
      </div>
    </DefaultLayout>
  );
};

export default Category;
