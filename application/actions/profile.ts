"use server"
import { OPTIONS } from "@/lib/constants";
import prisma from "db";

export const getProfileByUserId = async (userId: string) => {
  return await prisma.profile.findUnique({
    where: {
      userId: userId,
    },
    include: {
      leetcode: true,
      gfg: true,
      striver: true,
      codechef: true,
      codeforces: true,
    },
  });
};

export const createProfileEntry = async (entry: string, data) => {
  switch (entry) {
    case OPTIONS.LEETCODE:
      await prisma.leetcode.create({
        data: data
      })
      break
    case OPTIONS.GFG:
      await prisma.gfg.create({
        data: data
      })
      break
    case OPTIONS.CODEFORCES:
      await prisma.codeforces.create({
        data: data
      })
      break
    case OPTIONS.CODECHEF:
      await prisma.codeChef.create({
        data: data
      })
      break
    case OPTIONS.STRIVER:
      await prisma.striver.create({
        data: data
      })
      break
  }
}
