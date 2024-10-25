import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between space-x-6 mb-6">
        <div className="p-6 bg-white rounded-xl w-1/4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-3xl mb-2">250</h2>
              <p className="mb-4">Total number of staff</p>
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
            <p>12 more than last quarter</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl w-1/4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-3xl mb-2">250</h2>
              <p className="mb-4">Total number of staff</p>
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
            <p>12 more than last quarter</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl w-1/4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-3xl mb-2">250</h2>
              <p className="mb-4">Total number of staff</p>
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
            <p>12 more than last quarter</p>
          </div>
        </div>
        <div className="p-6 bg-white rounded-xl w-1/4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-extrabold text-3xl mb-2">250</h2>
              <p className="mb-4">Total number of staff</p>
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
            <p>12 more than last quarter</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="p-6 bg-white rounded-xl w-1/2">
          <h2 className="font-extrabold text-3xl mb-2">Memo</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            dolores nesciunt amet nisi aut distinctio maiores quia quidem
            dignissimos, non libero maxime, aliquid ipsum laboriosam labore nemo
            aliquam recusandae ratione sit in esse omnis inventore hic nulla.
            Ad, accusantium consequuntur dolorum voluptate iure quam quos
            maiores impedit, cum temporibus minus?
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl w-1/2">
          <h2 className="font-extrabold text-3xl mb-2">Staff List</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            dolores nesciunt amet nisi aut distinctio maiores quia quidem
            dignissimos, non libero maxime, aliquid ipsum laboriosam labore nemo
            aliquam recusandae ratione sit in esse omnis inventore hic nulla.
            Ad, accusantium consequuntur dolorum voluptate iure quam quos
            maiores impedit, cum temporibus minus?
          </p>
        </div>
      </div>
    </>
  );
}
