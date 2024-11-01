import CardWrapper from '@/components/profiles/card-wrapper'
import SkeletonBody from './skeleton-body'
import { getSVG } from '@/lib/getSVG'
import { OPTIONS } from '@/lib/constants'

const Profiles = () => {
  return (
    <div className="flex flex-col w-full gap-7 justify-center p-5 max-w-[1500px]">
      <div className="flex  w-full gap-7 max-[1200px]:flex-wrap">
        <CardWrapper header="Ninjafire" icon={getSVG(OPTIONS.LEETCODE)}>
          <SkeletonBody profile={OPTIONS.LEETCODE} />
        </CardWrapper>

        <CardWrapper header="someGFGid" icon={getSVG(OPTIONS.GFG)}>
          <SkeletonBody profile={OPTIONS.GFG} />
        </CardWrapper>
      </div>

      <div className="flex w-full gap-7 max-[900px]:flex-wrap">
        <CardWrapper header="tourist" icon={getSVG(OPTIONS.CODEFORCES)}>
          <SkeletonBody profile={OPTIONS.CODEFORCES} />
        </CardWrapper>

        <CardWrapper header="aryan070" icon={getSVG(OPTIONS.CODECHEF)} iconStyles="mr-12">
          <SkeletonBody profile={OPTIONS.CODECHEF} />
        </CardWrapper>

        <CardWrapper header="someone69" icon={getSVG(OPTIONS.STRIVER)}>
          <SkeletonBody profile={OPTIONS.STRIVER} />
        </CardWrapper>
      </div>
    </div>
  )
}

export default Profiles
