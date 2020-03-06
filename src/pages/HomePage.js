// 主页内容
import React, { lazy, Suspense, useState, useEffect } from "react";
import UserAssets from "../components/UserAssets"
export default ({ state }) => {

  return (
    <>
      <UserAssets state={state} type='vToken'/>
      <UserAssets state={state} type='Market'/>

    </>
  )
};
