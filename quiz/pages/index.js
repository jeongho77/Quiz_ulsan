import { useEffect, useState, useRef } from "react";
import { LoadingText,Background,Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo_Mbti,StartLogo_motion,AnswerItemLayout,MbtiTitle,MbtiTitle1,QuestionItemLayout,QuestionLayout,QuestionList,ChatBox,ChatListLayout,ProfileImg,ProfileImg1,ProfileImg2, AchatBox, AnswerBox, StartLogo_1, StartLogo_motion_Wrapper, StartLogo_motion_spacebar, ChatBox_Btn, StartLogo_space, ChatBox_1, ProgressBar, Progress, QnaWrapper, ProgressWrapper, UniverLogo, Pen, StartBoard, Eraserbg, Eraser, Imagelogo, ImageLogo, ImageLogo1, Ballon, Speech, LevelSelectLayout, LevelBox2, LevelBox1, LevelBoxP, LevelInfo} from "../styles/mbti_css";
import ConfettiExplosion from "react-confetti-explosion";
import theme from "../styles/theme";
import spinner from '../public/spinner/spinner.gif'
import Head from 'next/head'; // next/head 모듈 임포트

export default function Home() {
    
    const [isExploding, setIsExploding] = useState(true);
    const [page,setPage] = useState(0);
    const [levelPage, setLevelPage] = useState(0);
    const [sourceType, setSourceType] = useState(''); // 'mentor' or 'track'
    const [mbtiList , setMbtiList] = useState([ // 카운트가 제일 늘어난걸 기준으로 MBTI를 정할거임!
        {name: true, count:0} , {name: false , count:0 } ]);
    
    const [questionList, setQuestionList] = useState([]) ;
    const [mbtiContents, setMbtiContents] = useState([]);
    const [ratio, setRatio] = useState(0);
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
        if(page == questionList.length+1){ 
            setloading(true);
            setTimeout(() => {
                setloading(false);
            },2000); //2초후에 꺼주기
        }
        if(loading == true){
            setTimeout(() => {
                setloading(false);
            },2000);
        }
        
        if(questionList.length+1 != page && page != 0){
            let interval;
            setRatio(0);
                
            interval = setInterval(() => {
                if (page == pa.current+1){    
                    //비동기적이라 콘솔이 출력이 안되는거같음.
                    // 0.3 , 33초 걸림
                    // console.log(value.current , "page : ", page);

                    
                    // value.current = value.current + 0.3;
                    // setRatio(value.current);
                        
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
        if(page == questionList.length+1){
            setRatio(100);
        }
    }, [page , levelPage, mbtiList] );

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

        var newList = mbtiList.map(item =>
            item.name === type ? { ...item, count: item.count + 1 } : item,
            
        );
        console.log("정답 카운트 : ", newList[0].count)

        setMbtiList(newList);
        pa.current = page;
        value.current = 0;
        setRatio(0);
        setActiveIndex(idx);
        console.log('questionList.length: ' , questionList.length);
        console.log('page: ', page);
        
        // console.log(page,questionList.length)
        if(page+1 === questionList.length){  
            let point = sourceType === 'mentor' ? 5 : 10;
            const OCount = (newList.find(data => data.name === true).count) * point;
            setScore(OCount);
        }

        setTimeout(() => {
            
            setActiveIndex(null);
            // setMbtiList(ls); //추가된 ls를 setmbti로 업데이트시키기
            setPage(page+1); //버튼이 클릭될때마다 페이지를 넘기는 로직! 
            
        //idx는 0부터 시작하고 객체는 1부터 시작함 페이지와 질문의 수를 맞춰야함으로 idx+1 해주기
        }, 10);

    }

    //트랙 페스타 질문
    const trackQuestionList = [ 
        {q:['트랙 페스타는 4학년을 위해서 시행했다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['사흘은 4일을 의미한다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},
           
        {q:['UCTL 마스코트의 이름은 두유다'],
        a:[{type:false , text:'O'},
           {type:true, text:'X'}]},

        {q:['대한민국의 수도는 강남이다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},
           
        {q:['UCTL은 학생학습개발센터이다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['세상에서 가장 많이 쓰이는 언어는 중국어이다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},
           
        {q:['줄넘기는 우리나라의 민속놀이이다.'],
        a:[{type:true , text:'O'},
           {type:false, text:'X'}]},

        {q:['인구가 가장 많은 국가는 중국이다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['모든 혈액형에게 피를 수혈해줄수 있는 혈액형은 O형 이다.'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},

        {q:['북극에는 펭귄이 산다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['고생했어! 결과를 알려줄게!' ],
        a:[{type:'none',text:'와줘서 고마워!'},
           {type:'none',text:'결과 보러가기!'}]},
    ]    

    //톡톡멘토단 질문
    const majorQuestionList = [ 

        {q:['패션의류학과 학생들은 시험 대신 패션쇼를 연다.'],
        a:[{type:false, text:'O'},
            {type:true, text:'X'}]},

        {q:['IT학과의 IT는 Information Television의 약자이다.'],
        a:[{type:false , text:'O'},
           {type:true, text:'X'}]},

        {q:['주거환경학과(현 실내건축학)에서 3D그래픽스를 전공으로 배운다.'],
        a:[{type:false , text:'O'},
           {type:true, text:'X'}]},

        {q:['국어국문학부는 외국인 유학생들이 전공하는 한국어 문학 전공이 있다'],
        a:[{type:true , text:'O'},
           {type:false, text:'X'}]},

        {q:['전기컴퓨터공학관(7호관)에는 지하벙커가 있으며, 독서실로 쓰이고 있다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['간호학과는 병원 뿐만 아니라 보건소 등에서도 실습을 한다.'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},
           
        {q:['산업경영공학부는 사람, 자재, 에너지등 시스템을 효율적으로 설계하고 운영하는것을 목표로 한다.'],
        a:[{type:true , text:'O'},
           {type:false, text:'X'}]},

        {q:['철학과 수업에서는 “내가 누구인가?”를 한 학기 내내 고민한다.'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},

        {q:['화학공학부는 계단식 강의실이 있다'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},
           
        {q:['첨단소재공학부는 다양한 분야로 취업이 가능하다.'],
        a:[{type:true , text:'O'},
           {type:false, text:'X'}]},

        {q:['식품영양학과는 학기마다 요리대회를 열고 우승하면 진짜 식당을 차릴 수 있다.'],
        a:[{type:false, text:'O'},
            {type:true, text:'X'}]},
            
        {q:['경영학부 시험은 진짜 회사 운영하듯이 조별과제로만 진행된다.'],
        a:[{type:false, text:'O'},
            {type:true, text:'X'}]},

        {q:['아동가정복지학과에서는 아동학, 가정복지학, 소비자학을 배운다.'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},

        {q:['건축관은 벚꽃피는 막동시즌에 학우들을 위해 화장실을 개방해준다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['회계학과는 숫자로 기업을 들여다보는 법을 배운다.'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},

        {q:['시각디자인과 수업 들어가기 전에 문 손잡이에 맥북을 가져다두면 문이 열린다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['해양학과는 모든 수업이 수영장에서 진행된다.'],
        a:[{type:false, text:'O'},
            {type:true, text:'X'}]},

        {q:['첨단소재공학부는 무거동에서만 수업을 듣는다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},

        {q:['국제관계학과에는 외국인 교수님 3분이 계신다.'],
        a:[{type:false, text:'O'},
           {type:true, text:'X'}]},
           
        {q:['산업공학의 아버지이자, 과학적 관리법을 창시한 사람은 프레드릭 테일러이다'],
        a:[{type:true, text:'O'},
           {type:false, text:'X'}]},

        {q:['고생했어! 결과를 알려줄게!' ],
        a:[{type:'none',text:'와줘서 고마워!'},
           {type:'none',text:'결과 보러가기!'}]},
    ]    

    // function ChatBox_Btn_Onclick(event) {
       
    //     event.currentTarget.style.display = 'none'; 
    //     setTranslateY(0); // translateY 값을 토글
    // }

    
    return (
        <Mbti_Layout>   
            <Head>
                <meta name="theme-color" content="#1d543f" />
                <meta name="color-scheme" content="only light" />
                <title>UCTL 트랙페스타 OX 퀴즈</title> {/* 페이지 제목 설정 */}
                <link rel="icon" href="./spinner/gaonlogo.png" /> {/* 아이콘 설정 */}
            </Head>
                {loading && (
                    <Background>
                        <LoadingText>잠시만 기다려 주세요.</LoadingText>
                        <img src='./spinner/spinner.gif' alt="로딩 중" width="50%" />
                    </Background>
                )}
                <>
                <StartPageLayout activate={levelPage < 3}>
                {levelPage === 0 && (
                //삼항연산자를 사용하여 0일때 StartPageLayout까지 보여줌
                //버튼이 눌려질때까지 0페이지를 보여주고 1이 넘어가면 다음페이지를 보여줌!
                //삼항연산자를 이렇게도 사용할수 있다.
                        <>
                            <StartLogo>
                                <StartLogo_Mbti>O-X 퀴즈</StartLogo_Mbti>
                                <StartLogo_1>▼</StartLogo_1>
                                <StartLogo_motion_Wrapper>
                                <StartLogo_motion>문</StartLogo_motion>
                                <StartLogo_motion>제</StartLogo_motion>
                                <StartLogo_motion>풀</StartLogo_motion>
                                <StartLogo_motion>고</StartLogo_motion>
                                <StartLogo_space></StartLogo_space>
                                <StartLogo_motion>키</StartLogo_motion>
                                <StartLogo_motion>트</StartLogo_motion>
                                <StartLogo_space></StartLogo_space>
                                <StartLogo_motion>받</StartLogo_motion>
                                <StartLogo_motion>아</StartLogo_motion>
                                <StartLogo_motion>요</StartLogo_motion>
                                <StartLogo_motion>!</StartLogo_motion>
                                </StartLogo_motion_Wrapper>
                            </StartLogo>
                            <ImageLogo src="./spinner/uctl.png" alt="Logo" />
                            {/* <StartButton onClick={()=> setPage(251)}> 시작하기 </StartButton> */}
                            <StartButton onClick={()=> setLevelPage(1)}> 시작하기 </StartButton>
                        </>   
                )}
                {levelPage === 1 && (
                    <LevelSelectLayout>
                        <LevelInfo>
                            문제를 선택해주세요!
                        </LevelInfo>
                        <LevelBox1 activate={true} onClick={()=>[setPage(1), setLevelPage(3), setSourceType('track') , setQuestionList(trackQuestionList)]}>
                            <LevelBoxP>트랙페스타 & 상식 문제</LevelBoxP>
                        </LevelBox1>
                        <LevelBox1 activate={false} onClick={()=>[setPage(1), setLevelPage(3), setSourceType('mentor') , setQuestionList(majorQuestionList)]}>
                            <LevelBoxP>톡톡멘토단이 낸 문제</LevelBoxP>
                        </LevelBox1>
                    </LevelSelectLayout>
                )}
                    <StartBoard activate={levelPage < 3}>
                                <Pen></Pen>
                                <Eraser>트랙페스타<Eraserbg></Eraserbg></Eraser>
                    </StartBoard>
                </StartPageLayout>
                
                {page <= questionList.length? //페이지수보다 퀘스트리스트의 변수가 많다면 실행 즉, 페이지수에 객체수가 부족하면 끝!

                    <QuestionLayout active={page >= 1}>
                        <MbtiTitle>
                            <MbtiTitle1>{sourceType === 'mentor' ? '멘토단 퀴즈' : '트랙페스타 퀴즈'}</MbtiTitle1>
                            <div>{`${page===questionList.length ? questionList.length-1 : page}  / ${questionList.length-1}`}</div> 
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
                                    <ChatBox_1>{idx+1 === questionList.length ? '' : `${idx+1}번`}</ChatBox_1>
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
                                                // 클릭된 요소 또는 초기 상태인 경우에만 활성화
                                                isActive={activeIndex === null || activeIndex === aidx}
                                                onClick={()=>handleCkAnswer(aval.type,aidx)} >

                                                <div>{aval.text} </div>
                                                {/* 요소만큼 실행되기때문에 a가 2개이므로 2번 실행됨! */}
                                            </AnswerBox>
                                        )}
                                    </AnswerItemLayout>
                            </QuestionList>)}
                        
                        </QnaWrapper>
                        <StartBoard>
                            <Pen></Pen>
                            <Eraser>트랙페스타<Eraserbg></Eraserbg></Eraser>
                        </StartBoard>

                    </QuestionLayout>
                    : //더이상 보여줄 pageList.length 가 없기때문에 결과페이지 보여주기!            
                    <QuestionLayout active={page >= 1}>
                        <MbtiTitle>
                            <MbtiTitle1>O-X 퀴즈</MbtiTitle1>
                            <div onClick={() => window.location.reload()}>다시하기</div> 
                            {/* 현재 페이지 / 전체 페이지 */}
                        </MbtiTitle> 
                            <QuestionList style={{display: 'flex'}}>
                                    <ChatListLayout>
                                                {!loading && (
                                                    <>
                                                        {isExploding && (<ConfettiExplosion />)}
                                                        {isExploding && (<ConfettiExplosion />)}
                                                    </>
                                                )}
                                        
                                            <Ballon>
                                                <div>당신의 점수는 {score}점 입니다!</div> 
                                            </Ballon>
                                            <Speech></Speech>
                                            <ImageLogo1 height= "100%" src="./spinner/oyoubg.png" alt="Logo">

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
            </>  
        </Mbti_Layout>
    );
    
}