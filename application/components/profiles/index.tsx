'use client'
import { useState } from 'react'
import CardWrapper from '@/components/profiles/card-wrapper'
import SkeletonBody from './skeleton-body'
import { getSVG } from '@/lib/getSVG'
import { OPTIONS } from '@/lib/constants'
import axios from 'axios'

const Profiles = () => {
  const [loading, setLoading] = useState<string | null>(null)

  const fetchData = async (endpoint: string, username: string) => {
    try {
      const response = await axios.post(endpoint, { username })
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const onClick = async (username: string, type: string) => {
    setLoading(type)
    let data
    switch (type) {
      case OPTIONS.LEETCODE:
        data = await fetchData('/api/scrap/leetcode', username)
        break
      case OPTIONS.GFG:
        data = await fetchData('/api/scrap/geeksforgeeks', username)
        break
      case OPTIONS.CODECHEF:
        data = await fetchData('/api/scrap/codechef', username)
        break
      case OPTIONS.CODEFORCES:
        data = await fetchData('/api/scrap/codeforces', username)
        break
      case OPTIONS.STRIVER:
        data = await fetchData('/api/scrap/striver', username)
        break
      default:
        console.warn("Invalid type")
    }
    console.log(data)
    setLoading(null)
  }

  const renderCard = (header: string, type: string) => (
    <CardWrapper
      header={header}
      icon={getSVG(type)}
      type={type}
      onClick={onClick}
      loading={loading}
    >
      <SkeletonBody profile={type} />
    </CardWrapper>
  )

  return (
    <div className="flex flex-col w-full gap-7 justify-center p-5 max-w-[1500px]">
      <div className="flex w-full gap-7 max-[1200px]:flex-wrap">
        {renderCard("Ninjafire", OPTIONS.LEETCODE)}
        {renderCard("noone", OPTIONS.GFG)}
      </div>
      <div className="flex w-full gap-7 max-[900px]:flex-wrap">
        {renderCard("tourist", OPTIONS.CODEFORCES)}
        {renderCard("aryan", OPTIONS.CODECHEF)}
        {renderCard("someone", OPTIONS.STRIVER)}
      </div>
    </div>
  )
}

export default Profiles
