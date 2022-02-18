import React, { memo, useRef, useState } from "react";
import StakeHeader from "./header";
import styles from "./Stake.module.scss"
import btnLeft from '../../assets/btn_left.png'


function Stake() {
  const [approveDate, setApproveDate] = useState(5)
  const [stakeDate, setStakeDate] = useState(5)
  const thumb = useRef()

  console.log("parent")
  return (
    <div>
      <StakeHeader />
      <div className={`${styles.stakeContainer} min-h-screen items-center flex py-32 lg:py-12 xl:py-8`}>
        <div className="flex w-full justify-center lg:flex-row flex-col items-center px-4">
          <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 ">
            <p className="text-center text-xl font-bold text-white py-4">FULL SET OWNER</p>
            <div className="rounded-2xl bg-gray-100 flex flex-col divide-y p-8 justify-center">
              <div className="flex justify-between pb-6">
                <p className="text-left">TOTAL REWARDS ACCUMULATED:</p>
                <p>N/A</p>
              </div>
              <div className="flex flex-col gap-10 pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p>APPRECTION</p>
                    <p>1100%</p>
                  </div>
                  <div className="flex justify-between">
                    <p>START</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>YOUR STAKE</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>LOCK DURATION</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>DAYS LEFT</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>PENDING REWARDS</p>
                    <p>-</p>
                  </div>
                </div>
                <div className="bg-black rounded-xl p-4 text-white 2xl:w-2/3 mx-auto mt-8 pb-16 flex flex-col gap-12">
                  <div className="flex justify-between items-center">
                    <p className="text-xs">ODINEUM BALANCE</p>
                    <p className="text-xs">2,000,000,000</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-lg">5,000,000,000</p>
                    <p>$OD</p>
                  </div>
                </div>
                <div className="relative flex flex-col h-12">
                  <input className={styles.seekOwner} type="range" name="vol" min="0" max="99" step={1} value={approveDate} onChange={(e) => setApproveDate(parseFloat(e.target.value))} style={{ background: `linear-gradient(to right, #d5bf46 0%, #d5bf46 ${approveDate / 99 * 100}%, #4d4d4d ${approveDate / 99 * 100}%, #4d4d4d 100%)` }} />
                  <div className="w-full pr-16 relative">
                    <div className="relative h-8">
                      <p style={{ left: `${approveDate / 99 * 100}%` }} className="absolute transform bottom-0 whitespace-nowrap">{approveDate} DAYS</p>
                    </div>
                  </div>
                </div>
                <button className="bg-black text-white text-xl font-bold mx-8 py-4 rounded-full" type="button">APPROVE</button>
              </div>
            </div>
          </div>
          <div className="flex h-64 w-full lg:w-64 lg:h-full lg:items-center justify-start items-start lg:justify-start relative">
            <div className="w-full lg:w-1/2 flex flex-row lg:flex-col gap-1 px-4 items-center justify-center py-4">
              <img src="https://odineum.mypinata.cloud/ipfs/QmT73sCoBQEF3W595UyaBn11GMcscGvF1ofbRwREFRnLVL" className="w-14" alt="-nft" />
              <img src="https://odineum.mypinata.cloud/ipfs/QmXmhA9SsTHGB3MZ1SvedwoYCdSkasFLJqe8RQLmEhEtQM" className="w-14" alt="-nft" />
              <img src="https://odineum.mypinata.cloud/ipfs/Qmayfk1LcAL4dabyh2v79uCKifT2A536tbvANTJtXDxctU" className="w-14" alt="-nft" />
              <img src="https://odineum.mypinata.cloud/ipfs/QmdS3xkuMRe5K7MzLtLAX8SJji8V1p9dFpy4pLJ654Qq3U" className="w-14" alt="-nft" />
              <img src="https://odineum.mypinata.cloud/ipfs/QmbYqFvR6X4HAnVCTevSigsyVvsHDU9znG7dpLzfPC14xw" className="w-14" alt="-nft" />
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 lg:rotate-0">
              <button type="button">
                <img src={btnLeft} className="shadow-md" alt="button" />
              </button>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-2/3 md:w-1/2 lg:w-1/3 ">
            <p className="text-center text-xl font-bold text-black py-4">REGULAR INVESTOR</p>
            <div className="rounded-3xl bg-black flex flex-col divide-y p-8 justify-center text-white border-white border-2">
              <div className="flex justify-between pb-6">
                <p className="text-left">TOTAL REWARDS ACCUMULATED:</p>
                <p>N/A</p>
              </div>
              <div className="flex flex-col gap-10 pt-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p>APPRECTION</p>
                    <p>1100%</p>
                  </div>
                  <div className="flex justify-between">
                    <p>START</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>YOUR STAKE</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>LOCK DURATION</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>DAYS LEFT</p>
                    <p>-</p>
                  </div>
                  <div className="flex justify-between">
                    <p>PENDING REWARDS</p>
                    <p>-</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 text-black w-3/4 2xl:w-2/3 mx-auto mt-8 pb-16 flex flex-col gap-12">
                  <div className="flex justify-between items-center text-gray-500">
                    <p className="text-xs">ODINEUM BALANCE</p>
                    <p className="text-xs">2,000,000,000</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-lg">5,000,000,000</p>
                    <p>$OD</p>
                  </div>
                </div>
                <div className="relative flex flex-col h-12">
                  <input className={styles.seekStake} type="range" name="vol" min="0" max="99" step={1} value={stakeDate} onChange={(e) => setStakeDate(parseFloat(e.target.value))} style={{ background: `linear-gradient(to right, #d5bf46 0%, #d5bf46 ${stakeDate / 99 * 100}%, #c3c3c3 ${stakeDate / 99 * 100}%, #c3c3c3 100%)` }} />
                  <div className="w-full pr-16 relative">
                    <div className="relative h-8">
                      <p style={{ left: `${stakeDate / 99 * 100}%` }} className="absolute transform bottom-0 whitespace-nowrap">{stakeDate} DAYS</p>
                    </div>
                  </div>
                </div>
                <button className="bg-white text-black text-xl font-bold mx-8 py-4 rounded-full" type="button">STAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stake