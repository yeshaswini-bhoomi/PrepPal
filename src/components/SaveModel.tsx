
import Model from "./Model";
import { Button } from "./ui/button";

interface SaveModelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export const SaveModel = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: SaveModelProps) => {
  return (
    <Model
      title="Are you sure?"
      description="This action cannot be undone you can't edit or re-answer this question again!"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant={"outline"} onClick={onClose}>
          Cancel
        </Button>
        <Button
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-800"
          onClick={onConfirm}
        >
          Continue
        </Button>
      </div>
    </Model>
  );
};