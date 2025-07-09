import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {
  const { isLoading, error, data } = useQuery("background", () =>
    axios
      .get("api/background")
      .then(({ data }) => data)
      .catch((error) =>
        console.error("Error fetching background data:", error)
      )
  );

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        {/* Éducation */}
        <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Éducation
          </div>
          {isLoading ? (
            [1, 2, 3].map((i) => (
              <ParagraphSkeleton key={i} className="p-8 h-full w-full relative" />
            ))
          ) : (
            data?.[0]?.eduCards?.map((card, key) => (
              <Edu_Card key={key} data={card} />
            ))
          )}
        </div>

        {/* Expérience */}
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <div className="pt-4 md:pt-0 text-xl text-Snow font-semibold">
              Expérience
            </div>
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <ParagraphSkeleton key={i} className="p-8 h-full w-full relative" />
              ))
            ) : (
              data?.[1]?.expCards?.map((card, key) => (
                <Exp_Card key={key} data={card} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
