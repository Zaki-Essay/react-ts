import ClientComponent from "@/ClientComponent";
import ServerComponent from "@/ServerComponent";

export default async function ServerPage() {

  console.log(" X this componnent will rendered in the server")
  return (
    <main>
      <h1>This runs on the server.</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
