import { OPTIONS } from "@/lib/constants";
import LeetcodeCard from "./leetcode-card";
import GFGCard from "./geeksforgeeks-card";
import CodeforcesCard from "./codeforces-card";
import CodechefCard from "./codechef-card";
import StriverCard from "./striver-card";

const Profiles = ({ type, data }: { type: string, data: Record<string, unknown> }) => {
  switch (type) {
    case OPTIONS.LEETCODE:
      return <LeetcodeCard data={data} />;
    case OPTIONS.GFG:
      return <GFGCard data={data} />;
    case OPTIONS.CODEFORCES:
      return <CodeforcesCard data={data} />;
    case OPTIONS.CODECHEF:
      return <CodechefCard data={data} />;
    case OPTIONS.STRIVER:
      return <StriverCard data={data} />;
    default:
      return <div>Profile data not available</div>;
  }
};

export default Profiles;
