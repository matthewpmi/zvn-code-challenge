import { Button } from "@nextui-org/react";

interface SubmitProps {
  onSubmit: any;
}

const Submit = ({ onSubmit }: SubmitProps) => {
  return (
    <div>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  )
}

export default Submit;