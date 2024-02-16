import { Input } from "./ui/input";

const LinkInput = () => {
  return (
    <div>
      <label htmlFor="url">URL</label>
      <Input className="mt-1" id="url" type="url" />
    </div>
  );
};

export default LinkInput;
