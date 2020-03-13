// 主页内容
import React, { lazy, Suspense, useState, useEffect } from "react";
import UserAssets from "../components/UserAssets"
export default ({ state, accountAssets,polkadotAccount,api,vTokenBalance,
  exchangeRate,totalAssets,vTokens,vTokeninVariant }) => {

  return (
    <>
      {accountAssets.length === 0? null : <UserAssets vTokenBalance={vTokenBalance}
       polkadotAccount={polkadotAccount} exchangeRate={exchangeRate}
       state={state} type='vToken' accountAssets={accountAssets} api={api}/>}
       {totalAssets.length===0?null:
       <UserAssets api={api} polkadotAccount={polkadotAccount} state={state} type='Market' 
       totalAssets={totalAssets} vTokens={vTokens} vTokeninVariant={vTokeninVariant}
       />
       }
      

    </>
  )
};
