'use client'
import { useState } from 'react'
import CardWrapper from '@/components/profiles/card-wrapper'
import SkeletonBody from './skeleton-body'
import { getSVG } from '@/lib/getSVG'
import { OPTIONS } from '@/lib/constants'
import axios from 'axios'

const Profiles = () => {
  const [loading, setLoading] = useState<boolean[]>([false,false,false,false,false])
  const [showloader, setshowLoader] = useState<boolean[]>([true,true,true,true,true])


  const onClick = async (username: string, type: string) => { 
    try {
      let data
      switch (type) {
        case OPTIONS.LEETCODE:
          setLoading([false, true, true, true, true])
          setshowLoader([false, true, true, true, true])
          console.log('fetching for leetcode : ', username)
          data = await axios.post('/api/scrap/leetcode', { username })
          break
        case OPTIONS.GFG:
          setLoading([true, false, true, true, true])
          setshowLoader([true, false, true, true, true])
          console.log('fetching for GFG : ', username)
          data = await axios.post('/api/scrap/geeksforgeeks', { username })
          break
        case OPTIONS.CODECHEF:
          setLoading([true, true, false, true, true])
          setshowLoader([true, true, false, true, true])
          console.log('fetching for CodeChef : ', username)
          data = await axios.post('/api/scrap/codechef', { username })
          break
        case OPTIONS.CODEFORCES:
          setLoading([true, true, true, false, true])
          setshowLoader([true, true, true, false, true])
          console.log('fetching for Codeforces : ', username)
          data = await axios.post('/api/scrap/codeforces', { username })
          break
        case OPTIONS.STRIVER:
          setLoading([true, true, true, true, false])
          setshowLoader([true, true, true, true, false])
          console.log('fetching for Striver : ', username)
          data = await axios.post('/api/scrap/striver', { username })
          break
      }
      console.log(data?.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading([false, false, false, false, false])
      setshowLoader([true, true, true, true, true])
    }
  }

  return (
    <div className="flex flex-col w-full gap-7 justify-center p-5 max-w-[1500px]">
      <div className="flex w-full gap-7 max-[1200px]:flex-wrap">
        <CardWrapper
          header="Ninjafire"
          icon={getSVG(OPTIONS.LEETCODE)}
          type={OPTIONS.LEETCODE}
          onClick={(username, type) => onClick(username, type)}
          disabled={loading[0]}
          showedloader={showloader[0]}
        >
          <SkeletonBody profile={OPTIONS.LEETCODE} />
        </CardWrapper>

        <CardWrapper
          header="someGFGid"
          icon={getSVG(OPTIONS.GFG)}
          type={OPTIONS.GFG}
          onClick={(username, type) => onClick(username, type)}
          disabled={loading[1]}
          showedloader={showloader[1]}
        >
          <SkeletonBody profile={OPTIONS.GFG} />
        </CardWrapper>
      </div>

      <div className="flex w-full gap-7 max-[900px]:flex-wrap">
        <CardWrapper
          header="tourist"
          icon={getSVG(OPTIONS.CODEFORCES)}
          type={OPTIONS.CODEFORCES}
          onClick={(username, type) => onClick(username, type)}
          disabled={loading[3]}
          showedloader={showloader[3]}
        >
          <SkeletonBody profile={OPTIONS.CODEFORCES} />
        </CardWrapper>

        <CardWrapper
          header="aryan070"
          icon={getSVG(OPTIONS.CODECHEF)}
          iconStyles="mr-12"
          type={OPTIONS.CODECHEF}
          onClick={(username, type) => onClick(username, type)}
          disabled={loading[2]}
          showedloader={showloader[2]}
        >
          <SkeletonBody profile={OPTIONS.CODECHEF} />
        </CardWrapper>

        <CardWrapper
          header="someone69"
          icon={getSVG(OPTIONS.STRIVER)}
          type={OPTIONS.STRIVER}
          onClick={(username, type) => onClick(username, type)}
          disabled={loading[4]}
          showedloader={showloader[4]}
        >
          <SkeletonBody profile={OPTIONS.STRIVER} />
        </CardWrapper>
      </div>
    </div>
  )
}

export default Profiles
