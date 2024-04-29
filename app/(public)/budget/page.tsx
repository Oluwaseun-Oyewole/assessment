import Budget from "@/components/budget";
import Fallback from "@/components/fallback";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Budget />
    </Suspense>
  );
};

export default Page;
