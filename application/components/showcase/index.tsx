'use client'
import { useCallback, useEffect, useState } from 'react'
import CardWrapper from '@/components/showcase/card-wrapper'
import SkeletonBody from './skeleton-body'
import { getSVG } from '@/lib/getSVG'
import { OPTIONS } from '@/lib/constants'
import axios from 'axios'
import Profiles from './profiles'
import { useUser } from '@clerk/nextjs'
import { createProfileEntry, getProfileByUserId } from '@/actions/profile'

type DataType = {
  [key: string]: Record<string, unknown>
}

const Showcase = () => {
  const session = useUser()
  const { loading, data, onClick, getUserData } = useShowCaseStates(session)

  useEffect(() => {
    getUserData(session)
  }, [getUserData, session])

  const renderCard = (header: string, type: string) => (
    <CardWrapper
      header={header}
      icon={getSVG(type)}
      type={type}
      onClick={onClick}
      loading={loading}
    >
      {Object.keys(data[type]).length > 0
        ? <Profiles type={type} data={data[type]} />
        : <SkeletonBody profile={type} />
      }
    </CardWrapper>
  )

  return (
    <div className="flex flex-col w-full gap-7 justify-center p-5 max-w-[1500px]">
      <div className="flex w-full gap-7 max-[1200px]:flex-wrap">
        {renderCard("Ninjafire", OPTIONS.LEETCODE)}
        {renderCard("riyanshig816", OPTIONS.GFG)}
      </div>
      <div className="flex w-full gap-7 max-[900px]:flex-wrap">
        {renderCard("tourist", OPTIONS.CODEFORCES)}
        {renderCard("aryan070", OPTIONS.CODECHEF)}
        {renderCard("someone69", OPTIONS.STRIVER)}
      </div>
    </div>
  )
}

const useShowCaseStates = (session) => {
  const [loading, setLoading] = useState<string | null>(null)
  const [data, setData] = useState<DataType>({
    "Leetcode": {},
    "Geeks For Geeks": {},
    "Codeforces": {},
    "Code Chef": {},
    "Striver": {}
  })

  const fetchData = async (endpoint: string, username: string) => {
    try {
      const response = await axios.post(endpoint, { username })
      return response.data.data
    } catch (error) {
      console.error(error)
      return {}
    }
  }

  const onClick = async (username: string, type: string) => {
    setLoading(type)
    let responseData: Record<string, unknown>

    switch (type) {
      case OPTIONS.LEETCODE:
        responseData = await fetchData('/api/scrap/leetcode', username)
        await createProfileEntry(OPTIONS.LEETCODE, { ...responseData, profileId: session.user.id })
        setData(prev => ({ ...prev, "Leetcode": responseData }))
        break

      case OPTIONS.GFG:
        responseData = await fetchData('/api/scrap/geeksforgeeks', username)
        await createProfileEntry(OPTIONS.GFG, { ...responseData, profileId: session.user.id })
        setData(prev => ({ ...prev, "Geeks For Geeks": responseData }))
        break

      case OPTIONS.CODECHEF:
        responseData = await fetchData('/api/scrap/codechef', username)
        await createProfileEntry(OPTIONS.CODECHEF, { ...responseData, profileId: session.user.id })
        setData(prev => ({ ...prev, "Code Chef": responseData }))
        break

      case OPTIONS.CODEFORCES:
        responseData = await fetchData('/api/scrap/codeforces', username)
        await createProfileEntry(OPTIONS.CODEFORCES, { ...responseData, profileId: session.user.id })
        setData(prev => ({ ...prev, "Codeforces": responseData }))
        break

      case OPTIONS.STRIVER:
        responseData = await fetchData('/api/scrap/striver', username)
        await createProfileEntry(OPTIONS.STRIVER, { ...responseData, profileId: session.user.id })
        setData(prev => ({ ...prev, "Striver": responseData }))
        break

      default:
        console.log("Invalid type")
    }
    setLoading(null)
  }
  const getUserData = useCallback(async (session) => {
    if (session?.user) {
      try {
        const profileData = await getProfileByUserId(session.user.id);

        setData({
          "Leetcode": profileData?.leetcode || {},
          "Geeks For Geeks": profileData?.gfg || {},
          "Codeforces": profileData?.codeforces || {},
          "Code Chef": profileData?.codechef || {},
          "Striver": profileData?.striver || {},
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }
  }, []);
  return { loading, data, onClick, getUserData }
}

export default Showcase
