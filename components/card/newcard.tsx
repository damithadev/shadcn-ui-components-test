import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/common/ui/card";

import {
  ClockIcon,
  CalendarIcon,
  RocketIcon,
  EyeOpenIcon,
  EyeNoneIcon,
  SunIcon,
} from "@radix-ui/react-icons";

export const NewCard = () => {
  return (
    <div className="w-[314px] cursor-pointer">
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
            <SunIcon className="mr-1 h-3 w-3" />
            {/* <EyeOpenIcon className="mr-1 h-3 w-3" /> */}
            Public
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewCard;
