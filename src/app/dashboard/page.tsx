import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";
import ContentBlock from "@/components/custom/ContentBlock";
import { memoDummyData, staffDummyData, vouchersDummyData } from "../dummyData";
import { StaffApplicationCard } from "@/components/custom/StaffApplicationCard";
import prisma from "../../lib/prisma";

export default async function Dashboard() {
  const staff = await prisma.staff.findMany();

  return (
    <>
      {console.log("staff", staff)}
      <div className="flex justify-between space-x-6 mb-6">
        <ContentBlock>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-xl mb-2">250</h2>
              <p className="mb-4 text-base">Total number of staff</p>
            </div>
            <Image
              src="/images/icon-staff.svg"
              width={50}
              height={50}
              alt="Staff icon"
            />
          </div>
          <div className="flex flex-row items-center">
            <ArrowUp
              color="green"
              size={16}
              className="mx-2"
            />
            <p className="text-xs">12 more than last quarter</p>
          </div>
        </ContentBlock>
        <ContentBlock>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-xl mb-2">100</h2>
              <p className="mb-4 text-base">Total application</p>
            </div>
            <Image
              src="/images/icon-files.svg"
              width={50}
              height={50}
              alt="Application icon"
            />
          </div>
          <div className="flex flex-row items-center">
            <ArrowDown
              color="red"
              size={16}
              className="mx-2"
            />
            <p className="text-xs">0.2% lover than last quarter</p>
          </div>
        </ContentBlock>
        <ContentBlock>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-xl mb-2">10</h2>
              <p className="mb-4 text-base">Total projects</p>
            </div>
            <Image
              src="/images/icon-rocket.svg"
              width={50}
              height={50}
              alt="Projects icon"
            />
          </div>
          <div className="flex flex-row items-center">
            <ArrowUp
              color="green"
              size={16}
              className="mx-2"
            />
            <p className="text-xs">2% more than last quarter</p>
          </div>
        </ContentBlock>
        <ContentBlock>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-xl mb-2">10</h2>
              <p className="mb-4 text-base">Total departments</p>
            </div>
            <Image
              src="/images/icon-hierarchy.svg"
              width={50}
              height={50}
              alt="Staff icon"
            />
          </div>
        </ContentBlock>
      </div>
      <div className="flex space-x-6 mb-6">
        <ContentBlock width="w-1/2">
          <h2 className="font-extrabold text-xl mb-6">Memo</h2>
          <div className="flex justify-between mb-4 pb-2">
            <p className="text-xs font-bold w-1/12">S/N</p>
            <p className="texts-xs font-bold w-3/12">Memo Title</p>
            <p className="text-xs font-bold w-3/12">Sent From</p>
            <p className="text-xs font-bold w-3/12">Sent To</p>
            <p className="text-xs font-bold w-2/12">Status</p>
          </div>
          {memoDummyData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-100 pb-2 mb-2">
              <p className="text-xs w-1/12">
                {index < 9 ? `0${index + 1}` : index + 1}
              </p>
              <p className="text-xs w-3/12">{item.memoTitle}</p>
              <p className="text-xs w-3/12">{item.sentFrom}</p>
              <p className="text-xs w-3/12">{item.sentTo}</p>
              <p
                className={`text-xs w-2/12 ${
                  item.status === "Pending"
                    ? "text-orange-400"
                    : "text-green-600"
                }`}>
                {item.status}
              </p>
            </div>
          ))}
        </ContentBlock>
        <ContentBlock
          width="w-1/2"
          className="max-h-96">
          <h2 className="font-extrabold text-xl mb-6">Staff List</h2>
          <div className="flex justify-between mb-4 pb-2">
            <p className="text-xs font-bold w-1/12">S/N</p>
            <p className="text-xs font-bold w-4/12">Staff Name</p>
            <p className="text-xs font-bold w-4/12">Staff Role</p>
            <p className="text-xs font-bold w-3/12">Position</p>
          </div>
          {staff.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between border-b border-gray-100 pb-2 mb-2">
              <p className="text-xs w-1/12">
                {index < 9 ? `0${index + 1}` : index + 1}
              </p>
              <p className="text-xs w-4/12">
                {item.firstName} {item.lastName}
              </p>
              <p className="text-xs w-4/12">{item.role}</p>
              <p className="text-xs w-3/12">{item.position}</p>
            </div>
          ))}
        </ContentBlock>
      </div>
      <div className="flex space-x-6">
        <ContentBlock width="w-1/2">
          <h2 className="font-extrabold text-xl mb-6">Payment Vouchers</h2>
          <div className="flex justify-between mb-4 pb-2">
            <p className="text-xs font-bold w-1/12">S/N</p>
            <p className="text-xs font-bold w-5/12">Subject</p>
            <p className="text-xs font-bold w-3/12">Date</p>
            <p className="text-xs font-bold w-3/12">Status</p>
          </div>
          {vouchersDummyData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-100 pb-2 mb-2">
              <p className="text-xs w-1/12">
                {index < 9 ? `0${index + 1}` : index + 1}
              </p>
              <p className="text-xs w-5/12">{item.subject}</p>
              <p className="text-xs w-3/12">{item.date}</p>
              <p
                className={`text-xs w-3/12 ${
                  item.status === "Pending"
                    ? "text-orange-400"
                    : "text-green-600"
                }`}>
                {item.status}
              </p>
            </div>
          ))}
        </ContentBlock>
        <ContentBlock width="w-1/2">
          <h2 className="font-extrabold text-xl mb-6">
            Staff Applications Card
          </h2>

          <StaffApplicationCard />
        </ContentBlock>
      </div>
    </>
  );
}
