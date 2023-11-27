import { Navigate } from "react-router-dom";

export type RouteProtectionProps = {
  children: JSX.Element;
  redirect: string;
  replace?: boolean;
  validations: Array<boolean | (() => boolean)>;
  onInValid?: () => void;
};

export const RouteProtection = ({
  children,
  redirect,
  replace,
  validations,
  onInValid,
}: RouteProtectionProps) => {
  const canReplace = typeof replace === "undefined" || replace;

  if (
    validations.length &&
    !validations.every((value) => {
      if (typeof value === "function") {
        return value();
      }
      return value;
    })
  ) {
    if (onInValid) {
      onInValid();
    }
    return <Navigate to={redirect} replace={canReplace} />;
  }

  return children;
};
