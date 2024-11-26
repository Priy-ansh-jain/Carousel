
import level from "./level.png";

export const Box = () => {
  return (
    <div className="w-4 h-4">
      <img
        className="fixed w-4 h-4 top-0 left-0"
        alt="Vuesax bold level"
        src={level}
      />
    </div>
  );
};
