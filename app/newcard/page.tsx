import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/common/ui/card";
import { Button } from "../../components/common/ui/button";
import {
  ChevronDownIcon,
  CircleIcon,
  PlusIcon,
  StarIcon,
  ClockIcon,
  CalendarIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

const NewCard = () => {
  return (
    <div className="w-[314px] my-20 mx-20">
      <Card>
        <img
          src="flutter.jpg"
          alt=""
          className="w-[314px] h-[145px] object-cover rounded-t-lg"
        />
        <CardHeader className="items-start gap-4 space-y-0">
          <div className="space-y-3 mb-3">
            <CardDescription>By Mozilla Campus Club IIT</CardDescription>
            <CardTitle>Flutter Bootcamp 2.0</CardTitle>
          </div>
        </CardHeader>
        {/* <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              4th Dec
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              9:00 AM
            </div>
            <div className="ml-auto">Bootcamp</div>
          </div>
        </CardContent> */}
        <CardFooter className="justify-between space-x-2">
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              4th Dec
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-1 h-3 w-3" />
              9:00 AM
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <RocketIcon className="mr-1 h-3 w-3" />
            Bootcamp
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewCard;
