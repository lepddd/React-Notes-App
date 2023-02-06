import { Icon } from "@iconify/react";
import useStore from "../store/noteStore";

const Header = () => {
  const removeAllNotes = useStore((state) => state.removeAllNotes);

  return (
    <header className="flex items-center justify-between">
      <p className="text-4xl font-bold p-10">Notes</p>
      <button onClick={removeAllNotes}>
        <Icon
          icon="ic:sharp-layers-clear"
          color="#dc2626"
          width="24"
          height="24"
        />
      </button>
    </header>
  );
};

export default Header;
