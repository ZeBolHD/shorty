import LinkForm from "./LinkForm";
import { Card, CardContent, CardHeader } from "./ui/card";

const LinkCard = () => {
  return (
    <Card className="w-[400px] max-mobile:w-full ">
      <CardHeader>
        <h1 className="text-xl font-bold">Shorty</h1>
      </CardHeader>
      <CardContent>
        <LinkForm />
      </CardContent>
    </Card>
  );
};

export default LinkCard;
