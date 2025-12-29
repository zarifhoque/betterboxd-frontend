import { Layout } from "@/components/Layout/Layout";
import { RegistrationForm } from "@/components/RegistrationPage/RegistrationForm";
import { RegistrationIllustration } from "@/components/RegistrationPage/RegistrationIllustration";

export default function RegisterPage() {
  return (
    <Layout>
      <div className="min-h-[calc(80vh)] flex items-center justify-between gap-8">
        <div className="hidden lg:block flex-1">
          <RegistrationIllustration />
        </div>
        <div className="flex-1 ">
          <RegistrationForm />
        </div>
      </div>
    </Layout>
  );
}
