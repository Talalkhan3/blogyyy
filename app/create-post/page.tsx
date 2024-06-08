import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        Share your Idea&apos;s 🤑
      </h1>

      <Form />

      <LogoutLink>
        <Button variant={"destructive"} className="min-w-[400px] mb-10">
          Log out
        </Button>
      </LogoutLink>
    </main>
  );
}
