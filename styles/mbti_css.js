import styled from "@emotion/styled";

export const Mbti_Layout = styled.div`
    width : 100vw;
    font-size : 14px;
    display : flex;
    justify-content: center;
    background-color : honeydew;
    height:calc(var(--vh,1vh)*100);
    
    //layout의 높이를 다양한 화면기기 뷰포트에 알맞게끔 스타일 설정하기
    //var(변수값1 ,변수값2 ) 변수값 1이없으면 2로 설정하기
`

export const LoadingText = styled.div`
    text-align: center;
    font-size : 30px;
    color: white;
`

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    
    background: skyblue;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`



export const StartPageLayout = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width : 100%;
    max-width : 900px;
    height: 100%;
    color : #413730;
    padding: 50px 50px 0px 50px;
    border: 10px solid rgb(133, 77, 60);
    background-color: rgb(29,84,63);
`

export const StartLogo = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-weight:700;

`

export const UniverLogo = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("logo.png");
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    align-items: center;
    object-fit: cover;

`

export const StartLogo_Mbti = styled.div`
    background-color : #413730;
    color: paleturquoise;
    width : 300px;
    height: 100px;
    display : flex;
    align-items : center;
    justify-content : center;
    border-radius : 50px;
    font-size: 50px;
    animation: jittery 4s infinite;
    @keyframes jittery {
  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(0.9);
  }

  15% {
    transform: scale(1.15);
  }

  20% {
    transform: scale(1.15) rotate(-5deg);
  }

  25% {
    transform: scale(1.15) rotate(5deg);
  }

  30% {
    transform: scale(1.15) rotate(-3deg);
  }

  35% {
    transform: scale(1.15) rotate(2deg);
  }

  40% {
    transform: scale(1.15) rotate(0);
  }
}
`

export const StartLogo_1 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 15px;
    font-size: 50px;
    position: relative;
    transition: transform 1s ease;
`

export const StartLogo_motion_Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const StartLogo_motion = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 20px;
    margin-bottom: 25px;
    font-size: 30px;
    position: relative;
    transition: transform 0.3s ease;
    color:white;
    
    &:hover {
        transform: translateY(-20px);
    }
`
export const StartLogo_space = styled.div`
    padding : 10px;
`
export const StartLogo_motion_spacebar = styled.div`
    margin-top: 15px;
    font-size: 50px;
    position: absolute;
    left: -9999px; /* 왼쪽으로 화면 밖으로 이동 */
`
export const StartButton = styled.button`
    margin-top: 10px;
    width: 300px;
    height: 100px;
    border-radius: 50px;
    border : 5px solid yellow;
    background-color: orange;
    font-size: 45px;
    border-color: yellow;
    font-family: gaegu-bold, gaegu-light, sans-serif;
    color:white;

    background: linear-gradient(45deg, yellow 50%, transparent 50%);
    //45도 각도 
    background-position: 100%;
    background-size: 400%;

    transition: background 300ms ease-in-out;

    &:hover {
        background-position: 0;
        color:#D6589F;
        font-size:45px;
        transform: translateY(-4px);
    }

    &:active{
        background-color: white;
    }
`

export const StartBoard = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    height:100%;
    width:100%;
    align-items: flex-end;
`

export const ImageLogo = styled.img`
    width: 100%;
    height: 30%;
    object-fit: cover; /* 이 부분은 background-size: cover와 동일한 기능을 합니다. */
`;

export const Pen = styled.div`
    border: 3px solid white;
    position: relative;
    width:50px;
    height:1px;
`

export const Eraser = styled.div`
    background-color: navy;
    width: 110px;
    height: 50px;
    position: relative;
    border: 3px solid #000;
    border-radius: 10px;
    font-size: 15px;
    text-align: center;
    color:white;
`
export const Eraserbg = styled.div`
    background-color: darkorange;
    width: 110px;
    height: 20px;
    position: relative;
    left: -3px;
    border: 3px solid #000;
    border-radius: 0px 0px 10px 10px;
    font-size: 20px;
    text-align: left;

`



export const QuestionLayout = styled.div`
    display:flex;
    flex-direction: column;
    border: 10px solid rgb(133, 77, 60);
    background-color: rgb(29,84,63);
    width : 100%;
    max-width: 900px;
    height:100%;
    overflow: hidden;
`

export const MbtiTitle = styled.div`
    display : flex;
    flex-direction: row;
    width : 100%;
    align-items: center;
    padding : 15px;
    box-sizing :border-box;
    font-weight : 700;
    font-size: 35px;
    color:white;
`

export const MbtiTitle1 = styled.div`
    display : flex;
    flex  : 1;
`
export const ProgressWrapper = styled.div`
    width:100%;
    height:5%;
    margin: 0px 10px ;
`

export const ProgressBar = styled.div`
    width: 97%;
    height: 100%;
    background-color: #dedede;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 65px;
    display: flex;
`;

export const Progress = styled.div`
    height: 100%;
    width: ${({ ratio }) => `${ratio}%`}; /* 현재 페이지 대비 전체 페이지 비율에 따라 동적으로 조절됩니다. */
    padding: 0;
    text-align: center;
    background-color: skyblue;
    color: #111;
    transition: width 0.1s ease; /* 프로그레스 바가 부드럽게 변화하도록 설정합니다. */
`;

export const QuestionList = styled.div`
    flex-direction: column;
    overflow : scroll;
    scrollbar-width : none;
    `

export const AnswerItemLayout = styled.div`
    width: 100%;
    height:50%;
    margin-top: 3%;
    padding-bottom: 10px;
    display:flex;
    flex-direction: row;
`
export const ChatListLayout = styled.div`
    display: flex ; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
`
export const QnaWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 30px;

    animation: answer 1s running ease;
    @keyframes answer {
    0% {
        opacity : 0; // 에니메이션 투명하게

    }
    
    100% {
        opacity: 1; // 애니메이션 선명하게
    }
    }
   
`

export const ChatBox_1 = styled.div`
    color: white;
    font-size : 50px;
    margin-top: 8px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    animation: shasha 0.4s running ease; // 애니메이션

    @keyframes shasha {
        0% {
              opacity : 0; // 에니메이션 투명하게
              transform: scale(0.3) translateX(100%);
              // left: -100px;
            }
            
            100% {
              
              opacity: 1; // 애니메이션 선명하게
              transform: scale(1) translateX(0);
            }
    }
`

export const ChatBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin : 3px 0px 12px 0px;
    

    div:nth-child(1) {
        animation: shasha 0.7s running ease; // 애니메이
        /* 두 번째 자식 div 요소에 스타일을 적용합니다. */
        padding : 7px 10px 7px 10px;
        /* background-color: #FFF798; */
        margin-left : -4px;
        border-radius: 10px;
        text-align : left;
        font-size: 30px;
        color:white;
        width: auto;
        position: relative;
        display: flex;
    }
    div:nth-child(2) {
        /* 두 번째 자식 div 요소에 스타일을 적용합니다. */
        animation: shasha 1.1s running ease; // 애니메이션
        padding : 7px 10px 7px 10px;
        /* background-color: #FFF798; */
        margin-left : -4px;
        border-radius: 10px;
        text-align : left;
        font-size: 30px;
        color:white;
        width: auto;
        position: relative;
        display: flex;
    }

    div:nth-child(3) {
        /* 두 번째 자식 div 요소에 스타일을 적용합니다. */
        padding : 7px 10px 7px 10px;
        /* background-color: #FFF798; */
        margin-left : -4px;
        border-radius: 10px;
        text-align : left;
        font-size: 50px;
        color:white;
        width: auto;
        position: relative;
        display: flex;
        animation: shasha 1.1s running ease; // 애니메이션
    }

    @keyframes shasha {
        0% {
              opacity : 0; // 에니메이션 투명하게
              transform: scale(0.1) translateX(100%);
              // left: -100px;
            }
        
        70% {
              opacity : 0; // 에니메이션 투명하게
              transform: scale(0.1) translateX(100%);
              // left: -100px;
            }

        100% {
              
            opacity: 1; // 애니메이션 선명하게
              transform: scale(1) translateX(0);
        }
    }
     /* transform: translateY(-500px); 변형을 적용합니다. */
    transition:  transform 0.3s ease; /* 변형에 대한 트랜지션을 설정합니다. */
    
    
`
export const ChatBox_Btn = styled.div`
    background-color:yellow;
    height: 50px;
    width : 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 1px 1px 1px;
    font-size: 20px;
    cursor:pointer;
    transition : transform 0.3s ease;    
`

export const AchatBox = styled.div`
    display:flex;
    width : 100%;
    color: #969696;
    font-size : 10px;
    border-bottom : 1px solid #eee;
    margin-bottom : 25px;

    > div:nth-child(1) {
        display : flex;
        flex : 1;
        padding : 10px;
        box-sizing: border-box;
    }

    > div:nth-child(2) {
        padding: 10px;
    }
   
    
`

export const AnswerBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px;
    text-align: center;
    /* box-shadow : 2px 2px 0px #ededed; */
    margin : 0px 20px 15px 20px;
    border-radius: 15px;
    font-size : 20px;
    /* background-color: #F4E3B7; */
    position : relative;
    padding-bottom: 50%;

    transition:  opacity 0.6s ease;

    :nth-child(1){
        width: 50%;
        position: relative;
        display: flex;
        animation: shasha 1.2s running ease; // 애니메이션
        background-color: rgb(177, 49, 39);
    }
    :nth-child(2){

        width:50%;
        position: relative;
        display: flex;
        animation: shasha 1.4s running ease; // 애니메이션
        background-color: #4B89DC;
    }

    :hover {
        transform: translateY(-6px);
    }

    :active {
        transform: translateY(-5px) scale(1.1);
        transition: transform 2s;
    }

    transform: ${({ isActive }) => (!isActive ? 'scale(0.9)' : 'none' )}; 
    opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};

    @keyframes shasha {
        0% {
              opacity : 0; // 에니메이션 투명하게
              transform: scale(0.1) translateX(100%);
              // left: -100px;
            }
        
        70% {
              opacity : 0; // 에니메이션 투명하게
              transform: scale(0.1) translateX(100%);
              // left: -100px;
            }

        100% {
              
            opacity: 1; // 애니메이션 선명하게
              transform: scale(1) translateX(0);
        }
    }
    
`

