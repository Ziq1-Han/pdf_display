import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
//
interface ClickedPdf {
  index: number;
  name: string;
}
type JsonList = string[]; 
const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

  const [jsonList, setJsonList] = useState<JsonList>([]);
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");
  const [button5, setButton5] = useState("");
  const [button6, setButton6] = useState("");
  const [currentIndex,setCurrentIndex] = useState(-1);
  const [currentPdfName,setCurrentPdfName] = useState("");
  useEffect(() => {
    getPdfNameList(()=>{})
    const interval = setInterval(() => {
     getPdfNameList(loadPdfNameListCallback)

    }, 5000);
    return () => clearInterval(interval);
  }, []);
//
  // a new state to show and display
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  const loadPdfNameListCallback=(data:JsonList)=>{
    console.log(currentIndex +" " + currentPdfName)
    console.log(data)
    if(currentIndex >=0 ){
      if(data[currentIndex] !== currentPdfName){
        // ('a')
      }
    }
    
  }

  const getPdfNameList = (callback:Function) =>{
    fetch("http://127.0.0.1:5080/")
      .then((response) => response.json())
      .then((data: JsonList) => {
        setJsonList(data);
        setButton1(data[0] || "");
        setButton2(data[1] || "");
        setButton3(data[2] || "");
        setButton4(data[3] || "");
        setButton5(data[4] || "");
        setButton6(data[5] || "");
        callback(data)
        console.log("getPdfNameList success")
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }

  const onCloseLateralBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainedTextClick = useCallback(() => {
    navigate("/frame-2");
    // update to show the button
    setIsButtonsVisible(true);
  }, [navigate]);



  //proorder1 click
  const onProdOrd1Click = useCallback(() => {
    setCurrentIndex(0)
    setCurrentPdfName(button1)
    let width = 1280;
    let height = 800;
    if (window.screen.width <= 768) {
      width = 768;
      height = 1024;
    } else if (window.screen.width <= 568) {
      width = 568;
      height = 320;
    }
    const newWindow = window.open(
      "http://127.0.0.1:5001/api/pdf1",
      "_blank",
      `width=${width},height=${height}`
    );
  
    // Check if the new window has been successfully opened
    if (!newWindow) {
      const errorMessage = "Failed to open the PDF.";
      const errorWindow = window.open("", "_blank", `width=${width},height=${height}`);
      errorWindow?.document.write(`<h1>${errorMessage}</h1>`);
    }  
  }, []);



  // proorder 2 click
  const onProdOrdClick = useCallback(() => {
    let width = 1280;
    let height = 800;
    if (window.screen.width <= 768) {
      width = 768;
      height = 1024;
    } else if (window.screen.width <= 568) {
      width = 568;
      height = 320;
    }
    window.open("http://127.0.0.1:5002/api/pdf2", "_blank", `width=${width},height=${height}`);
    }, []);



  //sku 11 click
  const onskuNum2Click = useCallback(() => {
  let width = 1280;
  let height = 800;
  if (window.screen.width <= 768) {
    width = 768;
    height = 1024;
  } else if (window.screen.width <= 568) {
    width = 568;
    height = 320;
  }
  window.open("http://127.0.0.1:5011/api/pdf11", "_blank", `width=${width},height=${height}`);
  }, []);



// sku 12 click
  const onskuNum3Click = useCallback(() => {
  let width = 1280;
  let height = 800;
  if (window.screen.width <= 768) {
    width = 768;
    height = 1024;
  } else if (window.screen.width <= 568) {
    width = 568;
    height = 320;
  }
  window.open("http://127.0.0.1:5012/api/pdf12", "_blank", `width=${width},height=${height}`);
  }, []);



// sku 21 click
  const onskuNumClick = useCallback(() => {
    let width = 1280;
  let height = 800;
  if (window.screen.width <= 768) {
    width = 768;
    height = 1024;
  } else if (window.screen.width <= 568) {
    width = 568;
    height = 320;
  }
  window.open("http://127.0.0.1:5021/api/pdf21", "_blank", `width=${width},height=${height}`);
  }, []);
  


// sku 22 click
  const onskuNum1Click = useCallback(() => {
    let width = 1280;
  let height = 800;
  if (window.screen.width <= 768) {
    width = 768;
    height = 1024;
  } else if (window.screen.width <= 568) {
    width = 568;
    height = 320;
  }
  window.open("http://127.0.0.1:5022/api/pdf22", "_blank", `width=${width},height=${height}`);
  }, []);

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
          src="/close-lateral-bar1.svg"
          onClick={onCloseLateralBarClick}
        />

        <button
          className={styles.buttoncontainedText}
          onClick={onButtonContainedTextClick}
        >
          <b className={styles.button}>Display only</b>
        </button>
      </div>

{/*changing part*/}
    {isButtonsVisible && (
        <>
          <div className={styles.productionLine1}>Production Line 1</div>

        {/* prodord1 button */}
        <button 
          className={styles.frameChild1} 
          onClick={onProdOrd1Click}
        >
          {button1}
          </button>

        {/* skunum11 button */}
        <button 
          className={styles.frameChild2}
          onClick={onskuNum2Click} 
        >
        {button3}
        </button>
        {/* skunum12 button */}
        <button 
          className={styles.frameChild3}
          onClick={onskuNum3Click}
        >
        {button5}
        </button>

        <div className={styles.productionLine2}>production line 2</div>

        {/* proorder2 button */}
        <button 
          className={styles.frameChild11} 
          onClick={onProdOrdClick}
        >
        {button2}
        </button>
        {/* sku21 button */}
        <button 
          className={styles.frameChild12} 
          onClick={onskuNumClick}
        >
        {button4}
        </button>

        {/* sku22 button */}
        <button 
          className={styles.frameChild13} 
          onClick={onskuNum1Click}
        >
        {button6}
        </button>
      </>
    )}
  </div>
);
};

export default FrameComponent1;