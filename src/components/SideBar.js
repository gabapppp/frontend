import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiUpload, HiSaveAs } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { IoIosCreate, IoIosOpen } from "react-icons/io";

export default function Sidebar() {
  const [showOpenModal, setOpenModal] = useState(false);

  return (
    <div
      className="w-60 flex flex-col h-screen p-3 bg-gray-800 shadow duration-300"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Coding Web
          </h2>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button
              type="submit"
              className="p-2 focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
          />
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <HiUpload
                  className="w-6 h-6 text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </HiUpload>
                <span className="text-gray-100">Upload</span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <IoIosCreate className="w-6 h-6 text-gray-100" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </IoIosCreate>
                <span className="text-gray-100">
                  Create
                </span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <HiSaveAs className="w-6 h-6 text-gray-100" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </HiSaveAs>
                <span className="text-gray-100">
                  Save
                </span>
              </Link>
            </li>
            <li className="rounded-sm">
              <button
                className="flex items-center p-2 space-x-3 rounded-md" onClick={() => setOpenModal(true)}
              >
                <IoIosOpen className="w-6 h-6 text-gray-100">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </IoIosOpen>
                <span className="text-gray-100">
                  Open
                </span>
              </button>
              {showOpenModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h6 className="text-xl font-semibold">
                            Open
                          </h6>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setOpenModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            List
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </li>
            <li className="rounded-sm">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-100">
                  Settings
                </span>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <CiLogout className="w-6 h-6 text-gray-100" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </CiLogout>
                <span className="text-gray-100">
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
}