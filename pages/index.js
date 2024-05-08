import { useEffect, useState } from "react";
import { LoadingText,Background,Mbti_Layout,StartLogo,StartPageLayout,StartButton,StartLogo_Mbti,StartLogo_motion,AnswerItemLayout,MbtiTitle,MbtiTitle1,QuestionItemLayout,QuestionLayout,QuestionList,ChatBox,ChatListLayout,ProfileImg,ProfileImg1,ProfileImg2, AchatBox, AnswerBox, StartLogo_1, StartLogo_motion_Wrapper, StartLogo_motion_spacebar, ChatBox_Btn, StartLogo_space, ChatBox_1, ProgressBar, Progress, QnaWrapper, ProgressWrapper, UniverLogo} from "../styles/mbti_css";
import ConfettiExplosion from "react-confetti-explosion";
import theme from "../styles/theme";
import spinner from '../public/spinner/spinner.gif'

export default function App() {
    
    const [isExploding, setIsExploding] = useState(true);
    const [translateY, setTranslateY] = useState(0);
    const [page,setPage] = useState(0);
    const [mbtiList , setMbtiList] = useState([ // 카운트가 제일 늘어난걸 기준으로 MBTI를 정할거임!
        {name:'I', count:0} , {name:'E' , count:0 } , {name:'S' , count:0} , {name:'N',count:0},
        {name:'F', count:0} , {name:'T' , count:0 } , {name:'P' , count:0} , {name:'J',count:0},
]);
    const [mbtiContents, setMbtiContents] = useState([]);
    const [ratio, setRatio] = useState(0);
    const [pageList, setpageList] = useState(3);
    const [activeIndex, setActiveIndex] = useState(null);
    const [loading, setloading] = useState(true);
    


    useEffect(() => {
        //페이지 리스트에 따라 로딩창이 뜨게한다.
        if(page == pageList){ 
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

        setRatio(0);
        const Timer = 0; // Timer 변수 선언

        const interval = setInterval(() => {
            if (Timer < 10) { // Timer가 10 미만인 동안에만 실행
                setRatio(ratio => ratio + 0.2); // ratio를 10씩 증가
            }

            if (Timer == 10) {

            }

        }, 100); // 1초마다 실행
        console.log("페이지: ",page);
        console.log("페이지리스트: ",pageList);
        if(page == pageList-1){
            setRatio(100);
        }
        

    }, [page, pageList]);

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

    const questionList = [ //질문들
        {q:['(동아리방에 도착했는데 아무도 없다.)'],
        a:[{type:'I' , text:'O'},
           {type:'E', text:'X'}]},

        {q:['(고생했어! 결과를 알려줄게!)' ],
        a:[{type:'',text:'결과 보러가기!'},
           ]},
    ]
    
    const handleCkAnswer = (type,idx) => {
        let ls = mbtiList; //useState에 있는 mbtiList 들고오기.
        for(let i = 0; i < ls.length; i++){ //mbtiList 전체로 돌리기
            if(ls[i].name===type){ 
            //mbtiList의 name과 QuestionList의 type이 일치하면 i,e,s,n,t,f,p,j 에 1 더해주기
                ls[i].count = ls[i].count + 1;
            }
        }
        setActiveIndex(idx);
        console.log(ls);
        console.log(page,questionList.length)
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


    function setMbti() {

    let mc = [
     {mbti:'ENTP',animal:'화려한 언변의',animal2:'앵무새',contents:['말을 잘해요','다재다능하고 재주가 많아요','평범한 거 싫어해요','모범생과는 거리가 좀 멀어요',
      '본인 스스로가 잘났다고 생각해요','이상한 말을 자주 해요','혼자서도 잘 해요']},
      
      {mbti:'INTP',animal:'뛰어난 전략가',animal2:'부엉이',contents:['분석, 추리하는 거 좋아해요','무뚝뚝한 편이고 잡담은 별로 좋아하지 않아요','팩폭을 잘해요','감수성이 풍부해요',
      '맞춤법에 예민해요','술자리 별로 안 좋아해요','주관이 뚜렷해요',]},

      {mbti:'ESFJ',animal:'다정다감 분위기메이커',animal2:'코끼리',contents:['남을 잘 챙겨요','눈치가 빨라요','새로운 사람과의 술자리를 좋아해요',
      '상대방에게 사랑을 주면 그만큼 돌려받고 싶어 해요','계획 틀어지면 예민해져요','눈물이 많아요','변화를 좋아하지 않아요']},

      {mbti:'ESTP',animal:'넘치는 에너지',animal2:'얼룩말',contents:['손재주가 좋아요','리더십이 있어요','표현을 아끼지 않아요','어른들이 좋아해요',
      '술자리 재미없으면 그냥 집에 가요','남한테 관심 없고 생각하는 것도 귀찮아요','스트레스를 잘 안 받아요']},

      {mbti:'ISFJ',animal:'온화하고 배려심깊은',animal2:'사슴',contents:['남 챙기는 거 좋아해요','공감 잘 해요','겉으론 무덤덤해 보여도 속으론 온갖 생각 다 해요',
      '살짝 비판적인 모습도 있어요','뒤끝 있어요','내가 싫은 건 남한테도 안 해요','나가는 건 귀찮은데 정작 나가면 잘 놀아요']},

      {mbti:'ISTP',animal:'관찰력이 뛰어난 재주꾼',animal2:'고양이',contents:['평소엔 조용한데 친해지면 말 많고 장난도 잘 쳐요','효율적인 거 좋아해요','관찰력이 뛰어나요',
      '기계조작 잘 하고 좋아해요','누가 내 욕해도 별로 신경 안 써요','만사가 귀찮아요','카톡 할 말 없으면 읽씹 잘해요']},

      {mbti:'ENFJ',animal:'애정이 넘치는 사랑둥이',animal2:'강아지',contents:['분위기 메이커예요','리액션을 잘 해요','남에게 싫은 소리를 잘 못해요','완벽한 척하지만 허당끼가 있어요',
      '센스 있고 눈치가 빨라요','지나치게 이상주의자예요','느긋해 보여요']},

      {mbti:'INFJ',animal:'조용하지만 강하다! 외유내강',animal2:'판다',contents:['집돌이/집순이 성향이 강해요','본인 스스로에게 엄격해요','사람을 보는 통찰력이 있어요',
      '주변 사람들의 기분을 금방 알아차려요','의미 없는 관계 맺기를 싫어해요','자신만의 철학이 있어요','삶과 죽음에 대해 많이 생각해요']},

      {mbti:'ENTJ',animal:'매혹적인 카리스마, 동물의 왕',animal2:'사자',contents:['털털하고 칠칠맞아 보이는데 은근 꼼꼼해요','강강약약 스타일이에요','반복되는 실수를 참지 못해요',
      '직감이 좋은 편이에요','주변 사람을 잘 챙겨요','4차원이라는 소리 은근 들어요','열등감이 없어요',]},
      
      {mbti:'INTJ',animal:'철저하고 예리한 사냥꾼',animal2:'호랑이',contents:['혼자있는거 좋아해요','돈관리 잘해요','공상 많이해요','남 눈치 안 봐요',
      '평소엔 조용하지만 관심있거나 아는 주제로 토론할땐 적극적이에요','감정에 휘둘리는거 싫어해요','이성적인데 또 은근 감성적이에요',]},
      
      {mbti:'ENFP',animal:'재기발랄 귀염둥이',animal2:'돌고래',contents:['소통과 공감을 잘 해요','은근 독립적인 성격이에요','생각을 많이 해요','감정 표현이 풍부해요',
      '감동을 잘 받아요','오지라퍼 소리를 종종 들어요','즉흥적이에요']},
      
      {mbti:'INFP',animal:'수줍음 많은 예술가',animal2:'토끼',contents:['MBTI 정말 좋아해요','미룰 수 있는 건 끝까지 미뤄요','벼락치기 많이 하는데 은근 성적이 잘 나와요','호불호가 명확해요',
      '남에게 폐 끼치는 거 싫어해요','게으른데 완벽주의자예요','내 방식에 이래라저래라 하는 거 정말 싫어해요']},

      {mbti:'ESFP',nimal:'재치쟁이 자유로운 영혼의',animal2:'여우',contents:['사람의 단점보단 장점을 보려고 노력해요','사교성이 좋아요','자존감이 높아요','상처 잘 받는데 또 잘 풀려요',
      '덜렁거린다는 이야기 많이 들어요','얼굴에 표정이 잘 드러나는 편이에요','성격이 급해요']},

      {mbti:'ISFP',animal:'평화를 사랑하는 느긋한',animal2:'코알라',contents:['갈등이 발생하는 걸 정말 싫어해요','노는 거 은근 좋아해요','근데 집에 있는 것도 좋아요',
      '화났어도 시간 지나면 왜 화났었는지 잘 기억이 안 나요','마이웨이 성향이 강해요','고집쟁이인데 고집 세 보이는 건 싫어해요',
      '참견하는 거, 참견받는 거 싫어해요']},

      {mbti:'ESTJ',animal:'위풍당당, 믿음직 스러운',animal2:'곰',contents:['계획을 잘 세우고 또 잘 지켜요','필요한 물건 바리바리 챙겨 다니는 스타일이에요','호불호가 명확하고 단호해요',
      '공감 능력 없어서 위로를 잘 못해요','기억력이 좋아요','완벽주의자 기질이 있어요','약속 어기는 거 싫어해요']},
 
      {mbti:'ISTJ',animal:'우직함이 매력적인 은근한 강자',animal2:'하마',contents:['모든 일을 냉정하고 객관적으로 바라봐요','원리원칙적이에요','즉흥적인 거 싫어해요','철벽을 잘 쳐요',
      '거짓말을 안 해요','장남/장녀 같다는 이야기 많이 들어요','융통성 없다는 얘기 종종 들어요']},]

    let IorE =
            mbtiList.find(function(data){return data.name === 'I'}).count >
            mbtiList.find(function(data){return data.name === 'E'}).count?'I':'E'
    let SorN = 
            mbtiList.find(function(data){return data.name === 'S'}).count >
            mbtiList.find(function(data){return data.name === 'N'}).count?'S':'N'
    let ForI = 
            mbtiList.find(function(data){return data.name === 'T'}).count >
            mbtiList.find(function(data){return data.name === 'F'}).count?'T':'F'
    let PorJ = 
            mbtiList.find(function(data){return data.name === 'P'}).count >
            mbtiList.find(function(data){return data.name === 'J'}).count?'P':'J'
    
    let mbti = IorE + SorN + ForI + PorJ

        console.log(mbti);
        setMbtiContents(mc.filter(val=>val.mbti === mbti)[0])
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
                    <StartLogo_motion>당</StartLogo_motion>
                    <StartLogo_motion>신</StartLogo_motion>
                    <StartLogo_motion>은</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>어</StartLogo_motion>
                    <StartLogo_motion>떤</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>M</StartLogo_motion>
                    <StartLogo_motion>B</StartLogo_motion>
                    <StartLogo_motion>T</StartLogo_motion>
                    <StartLogo_motion>I</StartLogo_motion>
                    <StartLogo_motion>를</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>가</StartLogo_motion>
                    <StartLogo_motion>지</StartLogo_motion>
                    <StartLogo_motion>고</StartLogo_motion>
                    <StartLogo_space></StartLogo_space>
                    <StartLogo_motion>있</StartLogo_motion>
                    <StartLogo_motion>나</StartLogo_motion>
                    <StartLogo_motion>요</StartLogo_motion>
                    <StartLogo_motion>?</StartLogo_motion>
                    </StartLogo_motion_Wrapper>
                </StartLogo>
                <StartButton onClick={()=> setPage(1)}> 시작하기 </StartButton>
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
                                    <ChatBox>
                                        <div>당신의 MBTI는 {mbtiContents.mbti}입니다!</div> 
                                    </ChatBox>
                                    <ChatBox>
                                        <div>{mbtiContents.mbti}는요! </div> 
                                    </ChatBox>
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