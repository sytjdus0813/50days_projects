const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click',() => boxesContainer.classList.toggle('big'));

function createBoxes() {
    for (let i = 0; i<4; i++){
        for(let j =0; j<4; j++){
            const box = document.createElement('div');
            /*const boxContainer = document.getElementById('boxes')*/
            box.classList.add('box');
            box.style.backgroundPosition= `${-j *125}px ${-i *125}px`;
            boxesContainer.appendChild(box);
        }
    }
}
createBoxes()

/*
1. let vs const
    let은 값이 변할 수 있는 변수, const는 값이 변하지 않을 변수
    let count = 0
    count = count+1 -> 가능
    const name = 'A'
    name = 'B" -> 불가능

2. document.getElementById 
    document 객체의 method(함수) querySelector 와 기능은 비슷하나, id 값을 불러오고 싶을때 사용함.
    id 전용 빠른 찾기 함수. () 안에 id 이름만 넣으면 됨. 해당 id 요소 1개를 반환함.
    **함수니까 () 의 형태로 생김.
3. addEventListener
    변수로 지정한 btn을 앞에 적음. 
    이 요소에 어떤일이 일어났을 때 그때 코드를 실행하라.
    괄호안에는 두 가지 요소를 넣음 1> 'click'이벤트 종류 2>실행할 코드 (클릭시 실행할 함수)
        'click' 은 이벤트 이름. 이외에도 'mouseover' 'keydown' 'scroll' 같은것도 있음
         () => 은 arrow function 이라고 함. 클릭했을 때 구체적인 동작을 정한 것,
         boxesContainer 는 위에 변수로 정의한 것
4. .classList
    HTML 요소의 class 속성들을 제어할 수 있는 객체
    예를 들어 class = "apple banna mango" 라고 적혀있으면,
    .classList 에는 ["apple","banna","mango"] 가 들어 있음.
    위의 경우에는 boxes 와 big 이 있음
5. .toggle('big')
    스위치처럼 작동하는 함수
    만약 boxContainer 에 big 클래스가 없으면 추가
    있으면 제거, 한 번 클릭할 때마다 big 클래스를 추가 제거를 반복함.

        “버튼(btn)을 클릭하면,
        박스 묶음(boxesContainer)의 클래스 목록에서
        'big' 이라는 클래스를 켜거나 끈다(toggle)!”

6. for 문
    for문은 반복문(loop) 다. 즉, 같은 코드를 여러번 실행해주는 코드다.
    while : 언제 멈출지 조건으로 제어할 때 사용. 몇 번 반복할지 딱 정해지지 않았을 때 사용!
    for : 횟수가 정해져 있을 때 사용. 반복횟수가 명확할때! 사용
        이 코드의 경우 i 가 행을 뜻하고, 4*4 의 네모박스를 만들고 싶음. 즉 정해져있는 반복이기에
        for 문을 사용함.
7. document 란?
    HTML 문서 전체를 대표하는 객체.
8. creatElement('div') 
    HTML 태그를 새로 만드는 함수 'div' 라고 적으면 새로운 <div>요소를 만들어줌.
    => 메모리 속에 만들어진 눈에 아직 안보이는 새로운 상자
    이렇게 만든 새로운 요소를 box 라는 변수안에 담음

9. 변수 선언
    왜 위에서 한 선언을 함수안에서 다시 선언했는가?
    원래 함수 밖에서 선언하면 전역변수가 되어서 함수 안에서도 그 변수로 사용 가능
    함수 안에서 선언하면 지역변수가 되어서 함수 안에서만 작동함.
    근데 위의 예제를 설명을 위해 재선언을 한 것으로 보임. 필요하지 않은 코드!
    */

