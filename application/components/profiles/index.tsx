import CardWrapper from '@/components/profiles/card-wrapper'
import { getSVG } from '@/lib/getSVG'
import { OPTIONS } from '@/lib/constants'

const Profiles = () => {
  return (
    <div className="flex flex-col w-full gap-3 justify-center p-5 max-w-[1500px] bg-amber-50  ">
      <div className="flex  w-full gap-3 max-[1200px]:flex-wrap">
        <CardWrapper header="Ninjafire" icon={getSVG(OPTIONS.LEETCODE)}>
          <div className="">body</div>
        </CardWrapper>

        <CardWrapper header="riyanshig816" icon={getSVG(OPTIONS.GFG)}>
          <div className="">body</div>
        </CardWrapper>
      </div>

      <div className="flex w-full gap-3 max-[900px]:flex-wrap">
        <CardWrapper header="tourist" icon={getSVG(OPTIONS.CODEFORCES)}>
          <div className="">body</div>
        </CardWrapper>

        <CardWrapper header="aryan070" icon={getSVG(OPTIONS.CODECHEF)} iconStyles="mr-12">
          <div className="">body</div>
        </CardWrapper>

        <CardWrapper header="someone69" icon={getSVG(OPTIONS.STRIVER)}>
          <div className="">body</div>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Profiles
