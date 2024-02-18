import Image from "next/image";
import LinkForm from "./LinkForm";
import { Card, CardContent, CardHeader } from "./ui/card";

const LinkCard = () => {
  return (
    <Card className="w-[400px] max-mobile:w-full ">
      <CardHeader>
        <Image
          src={"/logo.svg"}
          className="mx-auto w-[300px] h-[85px] max-mobile:w-[300px] max-mobile:h-[50px]"
          width={300}
          height={300}
          alt="logo"
        />
      </CardHeader>
      <CardContent>
        <LinkForm />
      </CardContent>
    </Card>
  );
};

export default LinkCard;
