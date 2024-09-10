import { Html } from "@react-three/drei";

function Loader() {
  return (
    <Html>
      <div
        className="absolute top-9 left-0 w-full
      h-full flex justyfy-center items-center"
      >
        <div className="w-[100vw] h-[10vw] rounded-full">
            Loading...
            </div>
      </div>
    </Html>
  );
}

export default Loader;
