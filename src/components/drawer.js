import React, {Fragment} from "react";
import {Box} from "theme-ui";
import RcDrawer from "rc-drawer";

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        className={`drawer ${className || ""}.trim()`}
        duration={"0.4s"}
        handler={false}
        level={null}
        open={open}
        placement={placement}
        width={width}
        onClose={toggleHandler}
        {...props}
      >
        {closeButton && (
          <Box as="div" sx={closeBtnStyle} onClick={toggleHandler}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box className="drawer__handler" style={{display: "inline-block"}} onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </Fragment>
  );
}

Drawer.defaultProps = {
  width: "320px",
  placement: "left",
};
