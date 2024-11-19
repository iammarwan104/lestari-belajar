import { Spinner } from "flowbite-react";

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center gap-4 text-center mt-4">
        <Spinner color={"warning"} size="xl" />
        {/* <p className="mt-2 ">loading table</p> */}
      </div>
    </div>
  );
}
