// 主页内容
import React, { lazy, Suspense, useState, useEffect } from "react";
import UserAssets from "../components/UserAssets"
export default ({ state, accountAssets }) => {

  return (
    <>
      {accountAssets === [] ? null : <UserAssets state={state} type='vToken' accountAssets={accountAssets} />}
      <UserAssets state={state} type='Market' />

    </>
  )
};
