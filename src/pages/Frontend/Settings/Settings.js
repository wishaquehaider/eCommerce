import React from "react";
import Topbar from "../Components/Topbar/Topbar";
import Iconsbar from "../Components/IconsBar/Iconsbar";
import HeaderBar from "../Components/HeaderBar/HeaderBar";
import balance from "../../../accests/images/balanceIcon.svg";
import payment from "../../../accests/images/paynment.svg";
import contact from "../../../accests/images/contact.svg";
import postage from "../../../accests/images/postage.svg";
import order from "../../../accests/images/order.svg";
import support from "../../../accests/images/support.svg";
import purchase from "../../../accests/images/perchace.svg";
import moreinfo from "../../../accests/images/moreinformation.svg";
import bid from "../../../accests/images/bid.svg";
import logout from "../../../accests/images/logout.svg";

import SettingCard from "../Components/SettingCard/SettingCard";
export default function Settings() {
  return (
    <>
      <Topbar />
      <Iconsbar />
      <HeaderBar title="Settings" />
      <div className="">
        <div className="flex justify-center flex-wrap gap-[64px] my-[41px]">
      <SettingCard herf="/" text="Balance" icon={balance}/>
      <SettingCard herf="/" text="Payment" icon={payment}/>
      <SettingCard herf="/" text="Contacts" icon={contact}/>
      <SettingCard herf="/" text="Postage" icon={postage}/>
      <SettingCard herf="/" text="Order & Receipts" icon={order}/>
      <SettingCard herf="/" text="Support" icon={support}/>
      <SettingCard herf="/" text="Purchases" icon={purchase}/>
      <SettingCard herf="/" text="More information" icon={moreinfo}/>
      <SettingCard herf="/" text="Bids Won" icon={bid}/>
      <SettingCard herf="/" text="Logout" icon={logout}/>
        </div>
      </div>
    </>
  );
}
