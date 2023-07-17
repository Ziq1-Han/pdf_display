import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainedTextClick = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  return (
    <div className={styles.mainLaptopParent}>
      <div className={styles.mainLaptop}>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.headerItem} />
          <div className={styles.headerButtonP300}>
            <div className={styles.formButton}>
              <div className={styles.text}>Profile</div>
            </div>
          </div>
          <div className={styles.headerButtonP3001}>
            <div className={styles.formButton}>
              <div className={styles.text}>Logout</div>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.plantManagementSystem}>
              Plant management system
            </div>
            <img
              className={styles.danoneLogoHorizontal1Icon}
              alt=""
              src="/danone-logo-horizontal-1@2x.png"
            />
            <div className={styles.logoChild} />
          </div>
        </div>
        <div className={styles.backgroundFullPage}>
          <img
            className={styles.backgroundFullPage1}
            alt=""
            src="/background--full-page@2x.png"
          />
        </div>
        <div className={styles.verticalNavbarBody}>
          <div className={styles.verticalNavbarBodyChild} />
          <img
            className={styles.danoneHoldingDeviceAssets3Icon}
            alt=""
            src="/danone-holding-device-assets-311-rgb10-6@2x.png"
          />
          <img
            className={styles.danoneHoldingDeviceAssets3Icon1}
            alt=""
            src="/danone-holding-device-assets-311-rgb10-7@2x.png"
          />
          <img
            className={styles.danoneHoldingDeviceAssets3Icon2}
            alt=""
            src="/danone-holding-device-assets-311-rgb10-7@2x.png"
          />
          <div className={styles.identityManagementAnd}>
            Identity management and access management
          </div>
          <div className={styles.operatorsPerformance}>
            Operators performance
          </div>
          <div className={styles.anyOtherModule}>Any other module</div>
        </div>
        <img
          className={styles.closeLateralBar}
          alt=""
          src="/close-lateral-bar.svg"
        />
        <button
          className={styles.buttoncontainedText}
          onClick={onButtonContainedTextClick}
        >
          <b className={styles.button}>Display only</b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
