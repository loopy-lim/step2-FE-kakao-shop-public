import { FC } from "react";
import NavbarItem, { NavbarItemProps } from "./NavbarItem.component";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { setSignOut } from "@/store/signSlice";
import { SIGN } from "@/assets/sign.ko";
import { removeAuth } from "@/functions/auth";
import { URL } from "@/assets/url.ko";

const { SIGN_IN, SIGN_OUT } = SIGN;

const NavbarSignItem: FC<Omit<NavbarItemProps, "children" | "url">> = ({
  className,
}) => {
  const { isSignIn } = useAppSelector((state: RootState) => state.signSlice);
  const dispatch = useAppDispatch();

  const signOut = () => {
    removeAuth();
    dispatch(setSignOut());
  };

  const signString = isSignIn ? SIGN_OUT : SIGN_IN;
  const linkString = isSignIn ? URL.SIGN_OUT : URL.SIGN_IN;

  return (
    <NavbarItem
      url={linkString}
      className={className}
      children={signString}
      onClick={isSignIn ? signOut : undefined}
    />
  );
};

export default NavbarSignItem;
