import dbConnect from "./lib/dbConnect";
import ReferalCodes from "./models/ReferalCodes";
import { ReferalCodeSchemaType } from "./models/ReferalCodes";

export default async function seedDb(arg: ReferalCodeSchemaType) {
  try {
    await dbConnect();

    const refCode = await ReferalCodes.create(arg);

    console.log("SUCESS");
    console.log(refCode);
  } catch (error) {
    console.log("FAILED");
    console.error(error);
  }
}

const refs: ReferalCodeSchemaType[] = [];

const insertRefCodes = () => {
  for (let i = 0; i < refs.length; i++) {
    seedDb(refs[i]);
  }
};

insertRefCodes();
