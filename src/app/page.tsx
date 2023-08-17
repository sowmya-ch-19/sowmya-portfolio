import { SocialMedia } from "@/components/SocialMedia";
import Button from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default async function Home() {
  return (
    <DefaultLayout>
      <section className="fcenter">
        <div className="flex flex-col items-center space-y-2 tracking-wider md:space-y-4 md:text-4xl">
          <div className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem]">
            Hello, {"I'm "}
            <span className="font-bold h1-gradient">Bowang Lan</span>
          </div>
          <div className="text-center lg:pt-3 sm:text-xl md:text-2xl lg:text-3xl">
            A full-stack developer, UI designer, and data scientist
          </div>
          <Button>View My Work</Button>
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}