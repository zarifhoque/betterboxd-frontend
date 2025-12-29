import { HomePageHero } from "@/components/HomePage/HomePageHero";
import { HomePageLatestReviews } from "@/components/HomePage/HomePageLatestReviews";
import { ReviewCard } from "@/components/common/ReviewCard";
import { Layout } from "@/components/Layout/Layout";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <HomePageHero />
        <HomePageLatestReviews />
      </Layout>
    </div>
  );
}
