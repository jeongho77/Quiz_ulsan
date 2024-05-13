import { useEffect, useState, useRef } from "react";
import { LoadingText,Background,Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo_Mbti,StartLogo_motion,AnswerItemLayout,MbtiTitle,MbtiTitle1,QuestionItemLayout,QuestionLayout,QuestionList,ChatBox,ChatListLayout,ProfileImg,ProfileImg1,ProfileImg2, AchatBox, AnswerBox, StartLogo_1, StartLogo_motion_Wrapper, StartLogo_motion_spacebar, ChatBox_Btn, StartLogo_space, ChatBox_1, ProgressBar, Progress, QnaWrapper, ProgressWrapper, UniverLogo, Pen, StartBoard, Eraserbg, Eraser, Imagelogo, ImageLogo, ImageLogo1, Ballon, Speech} from "../styles/mbti_css";
import ConfettiExplosion from "react-confetti-explosion";
import theme from "../styles/theme";
import spinner from '../public/spinner/spinner.gif'

export default function App() {
    
    const [isExploding, setIsExploding] = useState(true);
    const [page,setPage] = useState(0);
    const [mbtiList , setMbtiList] = useState([ // 카운트가 제일 늘어난걸 기준으로 MBTI를 정할거임!
        {name:'O', count:0} , {name:'X' , count:0 } ]);
    const [mbtiContents, setMbtiContents] = useState([]);
    const [ratio, setRatio] = useState(0);
    const [pageList, setpageList] = useState(12);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setloading] = useState(true);
    const [score, setScore] = useState(0);
    const value = useRef(0); //useEffect를 멈출려면 필요함..
    const pa = useRef(0); //렌더링이 되어도 계속 유지가 된다!
    // useEffect(() => {
    //     if(ratio > 100){
    //         setPage[page+1];
    //     }
    // }, [ratio]);
    
    useEffect(() => {
        console.log(pa.current, page);
        value.current = 0;
        //시작 페이지시 로딩창키기
        if(page == pageList){ 
            setloading(true);
            setTimeout(() => {
                setloading(false);
            },10000); //2초후에 꺼주기
        }
        if(loading == true){
            setTimeout(() => {
                setloading(false);
            },2000);
        }
        // setTimeout(() => {
        //     setInterval(() => {
        //         // 이곳에 실행할 코드 작성
        //     }, 1000); // 1초마다 실행
        // }, 5000); // 5초 후에 시작

        // console.log("페이지: ",page);
        // console.log("페이지리스트: ",pageList);

        if(pageList != page && page != 0){
            if(pageList != page+1){
                let interval;
                setRatio(0);
                
                interval = setInterval(() => {
                    if (page == pa.current+1){    
                        //비동기적이라 콘솔이 출력이 안되는거같음.
                        // 0.3 , 33초 걸림
                        // console.log(value.current , "page : ", page);
                        value.current = value.current + 0.3;
                        setRatio(value.current);
                        
                        if(value.current > 103){
                            setPage(page+1);
                            pa.current = page;
                            value.current = 0;
                            clearInterval(interval);
                        }
                    }else{
                        clearInterval(interval);
                    }
                }, 100); // 1초마다 실행
            }
        }
        if(page == pageList-1){
            setRatio(100);
        }
    }, [page, pageList] );

    const setVh = () => {
        const vh = window.innerHeight * 0.01; 
        //현재 viewport 파악후 1/100 하기
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        //element 최상위 루트 요소의 스타일 '--vh'라는 변수 추가후 {vh}px 값 저장하기
    }
        useEffect(()=> {  //useEffect는 화면이 렌더링되는 순간 실행
            setVh() //화면이 켜지는순간 함수실행 height 스타일 변경
            function onResize() { //렌더링이 아니여도 창크기 변경시 대응하기 위한 함수생성
                setVh() 
            }
            window.addEventListener('resize' , onResize) 
            //브라우저 창크기가 변경될때마다 호출되는 함수
        } , [])
    
    const handleCkAnswer = (type,idx) => {
        let ls = mbtiList; //useState에 있는 mbtiList 들고오기.
        for(let i = 0; i < ls.length; i++){ //mbtiList 전체로 돌리기
            if(ls[i].name===type){ 
            //mbtiList의 name과 QuestionList의 type이 일치하면 i,e,s,n,t,f,p,j 에 1 더해주기
                ls[i].count = ls[i].count + 1;
            }
        }
        pa.current = page;
        setRatio(0);
        setActiveIndex(idx);
        value.current = 0;
        console.log("ls:",  ls[0].name,ls[0].count);
        // console.log(page,questionList.length)
        if(page+1 === questionList.length){  
            setMbti();
        }

        setTimeout(() => {
            
            setActiveIndex(null);
            setMbtiList(ls); //추가된 ls를 setmbti로 업데이트시키기
            setPage(page+1); //버튼이 클릭될때마다 페이지를 넘기는 로직! 
            
        //idx는 0부터 시작하고 객체는 1부터 시작함 페이지와 질문의 수를 맞춰야함으로 idx+1 해주기
        }, 10);

    }


    const questionList = [ //질문들
        {q:['지금 체험하고 있는 부스의 이름은 "컴퓨터야 놀아볼까"이다'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},

        {q:['IT의 약자는 Informainon Technology이다.'],
        a:[{type:'O' , text:'O'},
           {type:'X', text:'X'}]},
           
        {q:['1000원짜리 지폐에 계신 위인은 율곡 이황이다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},

        {q:['대한민국의 수도는 울산이다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},
           
        {q:['사흘은 4일을 의미한다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},

        {q:['세상에서 가장 많이 쓰이는 언어는 중국어이다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},
           
        {q:['줄넘기는 민속놀이이다.'],
        a:[{type:'O' , text:'O'},
           {type:'X', text:'X'}]},

        {q:['인구가 가장 많은 국가는 중국이다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},

        {q:['모든 혈액형에게 피를 수혈해줄수 있는 혈액형은 O형 이다.'],
        a:[{type:'O' , text:'O'},
           {type:'X', text:'X'}]},

        {q:['북극에는 펭귄이 산다.'],
        a:[{type:'X' , text:'O'},
           {type:'O', text:'X'}]},

        {q:['고생했어! 결과를 알려줄게!' ],
        a:[{type:'',text:'와줘서 고마워!'},
           {type:'',text:'결과 보러가기!'}]},
    ]    

    function setMbti() {
   
    const OCount = (mbtiList.find(data => data.name === 'O').count) * 10;
    setScore(OCount);
    console.log(score);
    }

    // function ChatBox_Btn_Onclick(event) {
       
    //     event.currentTarget.style.display = 'none'; 
    //     setTranslateY(0); // translateY 값을 토글
    // }


    return (
        
        <Mbti_Layout>    
            {loading ? (
            <Background>
                <LoadingText>잠시만 기다려 주세요.</LoadingText>
                <img src='./spinner/spinner.gif' alt="로딩 중" width="50%" />
            </Background>
            ) : (
                <>
            {page===0? 
            //삼항연산자를 사용하여 0일때 StartPageLayout까지 보여줌
            //버튼이 눌려질때까지 0페이지를 보여주고 1이 넘어가면 다음페이지를 보여줌!
            //삼항연산자를 이렇게도 사용할수 있다.
            
            <StartPageLayout>
                <StartLogo>
                    <StartLogo_Mbti>O-X 퀴즈</StartLogo_Mbti>
                    <StartLogo_1>▼</StartLogo_1>
                    <StartLogo_motion_Wrapper>
                    <StartLogo_motion>문</StartLogo_motion>
                    <StartLogo_motion>제</StartLogo_motion>
                    <StartLogo_motion>풀</StartLogo_motion>
                    <StartLogo_motion>고</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>상</StartLogo_motion>
                    <StartLogo_motion>품</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>받</StartLogo_motion>
                    <StartLogo_motion>아</StartLogo_motion>
                    <StartLogo_motion>가</StartLogo_motion>
                    <StartLogo_motion>요</StartLogo_motion>
                    <StartLogo_motion>!</StartLogo_motion>
                    </StartLogo_motion_Wrapper>
                </StartLogo>
                <ImageLogo src="./spinner/a.png" alt="Logo" />
                <StartButton onClick={()=> setPage(1)}> 시작하기 </StartButton>
                <StartBoard>
                    <Pen></Pen>
                    <Eraser>가온누리<Eraserbg></Eraserbg></Eraser>
                </StartBoard>
            </StartPageLayout>

            :page <= questionList.length? //페이지수보다 퀘스트리스트의 변수가 많다면 실행 즉, 페이지수에 객체수가 부족하면 끝!

            <QuestionLayout>
                <MbtiTitle>
                    <MbtiTitle1>OX 퀴즈</MbtiTitle1>
                    <div>{`${page} / ${questionList.length}`}</div> 
                    {/* 현재 페이지 / 전체 페이지 */}
                    
                </MbtiTitle>
                
                <ProgressWrapper>
                    <ProgressBar>
                        <Progress ratio={ratio} />
                    </ProgressBar>
                </ProgressWrapper>
                <QnaWrapper>
                {questionList.map((val,idx)=> 
                    <QuestionList style={{display:page===idx+1?'flex':'none'}} key={idx}>
                        
                            {/* <ProfileImg>
                                <ProfileImg1></ProfileImg1>
                                <ProfileImg2></ProfileImg2>
                            </ProfileImg> */}
                            <ChatListLayout>
                               {/* <ChatBox_Btn onClick={ChatBox_Btn_Onclick}>버튼을 눌려줘!</ChatBox_Btn> */}
                               <ChatBox_1>{idx+1}번</ChatBox_1>
                               {val.q.map((qval, qidx) => 
                                    <ChatBox key={qidx} >
                                        {/* <div>◀</div>  */}
                                        
                                        <div>{qval}</div> 
                                        {/* qval 은 문제를 가져옴! 왜냐하면
                                        val.q.map이기때문에 questionList.q에서 값을 qval에 넣고 qidx로 관리함
                                        */}
                                    </ChatBox>
                                )}  
                            </ChatListLayout>
                        
                            <AnswerItemLayout>
    
                                {val.a.map((aval , aidx)=> 
                                //val.a (질문리스트) 맵으로 받기!! 
                                //a 에 요소가 3개가있으면 3번씩 실행이 됨!
                                <AnswerBox 
                                    key={aidx} 
                                    isActive={activeIndex === null || activeIndex === aidx} // 클릭된 요소 또는 초기 상태인 경우에만 활성화
                                    onClick={()=>handleCkAnswer(aval.type,aidx)} >

                                    <div>{aval.text} </div>
                                    {/* 요소만큼 실행되기때문에 a가 2개이므로 2번 실행됨! */}
                                </AnswerBox>
                                )}
                            </AnswerItemLayout>
                    </QuestionList>
                )}
                
                </QnaWrapper>
                <StartBoard>
                    <Pen></Pen>
                    <Eraser>가온누리<Eraserbg></Eraserbg></Eraser>
                </StartBoard>
            </QuestionLayout>
            : //더이상 보여줄 pageList.length 가 없기때문에 결과페이지 보여주기!            
            <QuestionLayout>
                <MbtiTitle>
                    <MbtiTitle1>O-X 퀴즈</MbtiTitle1>
                    <div onClick={() => window.location.reload()}>다시하기</div> 
                    {/* 현재 페이지 / 전체 페이지 */}
                </MbtiTitle> 
                    <QuestionList style={{display: 'flex'}}>
                        
                            <ChatListLayout>
                                        {isExploding && (<ConfettiExplosion />)}
                                        {isExploding && (<ConfettiExplosion />)}

                                   
                                    <Ballon>
                                        
                                        <div>당신의 점수는 {score}점 입니다!</div> 
                                        
                                    </Ballon>
                                    <Speech></Speech>
                                    <ImageLogo1 height= "100%" src="./spinner/gaonlogo.png" alt="Logo">

                                    </ImageLogo1>

                                    
                                    
                                    {mbtiContents.contents && mbtiContents.contents.map((val,idx)=> 
                                        <ChatBox key={idx}> 
                                            <div>{val}</div> 
                                        </ChatBox>
                                    )}
                            </ChatListLayout>
                    </QuestionList>
            </QuestionLayout>
        }
        </> )}           
        
        </Mbti_Layout>
    
    );
    
}