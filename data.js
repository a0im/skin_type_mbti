const COOKIE_OPTION = {
  history : {
    name : "history-data",
    time : 2
  },
  result : {
    name : "result-type",
    time : 5
  }
}

const THEME_COLOR = {
  OD : '#007bff',
  SR : '#28a745',
  PN : '#ffc107',
  WT : '#dc3545',
}

const QUESTION_SCORE = {
  1 : 1,
  2 : 2,
  3 : 3,
  4 : 4,
  5 : 2.5
}

const QUESTION_PROGRESS_STATE = {
  OD : false,
  SR : false,
  PN : false,
  WT : false,
  //reset : function(){for (key in this){key !== "reset" && (this[key] = false)}},
}

const QUESTION_TYPE_IMAGE = {
  DRPT : "./img/004DSNT.jpg",
  DRNT : "./img/004DSNT.jpg",
  DSPT : "./img/004DSNT.jpg",
  DSNT : "./img/004DSNT.jpg",
  DRNW : "./img/004DSNT.jpg",
  DRPW : "./img/004DSNT.jpg",
  DSPW : "./img/004DSNT.jpg",
  DSNW : "./img/004DSNT.jpg",
  ORPT : "./img/004DSNT.jpg",
  ORNT : "./img/004DSNT.jpg",
  OSPT : "./img/004DSNT.jpg",
  OSNT : "./img/004DSNT.jpg",
  ORPW : "./img/004DSNT.jpg",
  ORNW : "./img/004DSNT.jpg",
  OSPW : "./img/004DSNT.jpg",
  OSNW : "./img/004DSNT.jpg",
}

const QUESTION_TYPE = {
  OD : (score)=>(score >= 27 ? "O" : "D") ,
  SR : (score)=>(score >= 30 ? "S" : "R"),
  PN : (score)=>(score >= 31 ? "P" : "N"),
  WT : (score)=>(score >= 41 ? "W" : "T"),
}

const QUESTION_DATA = [
  {
    section_id:"OD",
    section_name : "PART1",
    data : [
      {
        id:1,
        question : "클렌징 후에 아무것도 바르지않고 2~3시간 후에 밝은 빛 아래에서 거울을 보세요 이마와 볼이 어떻다고 느껴지십니까?",
        option  : [
          {
            no:1,
            option_text: "매우 거칠고 비석같이 느껴집니다"
          },
          {
            no:2,
            option_text: "당깁니다"
          },
          {
            no:3,
            option_text: "당기지않고 건조해보이고 번들거리지 않습니다"
          },
          {
            no:4,
            option_text: "밝은 빛에 반사 되는듯이 번들거립니다"
          },
          {
            no:5,
            option_text: "어쩌구저ㅈ쩌구"
          },
        ]
      },
      {
        id:2,
        question : "PART2",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:3,
        question : "test_inquery_id_3",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:4,
        question : "test_inquery_id_4",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:5,
        question : "test_inquery_id_5",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:6, 
        question : "test_inquery_id_6",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:7,
        question : "test_inquery_id_7",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:8,
        question : "test_inquery_id_8",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:9,
        question : "test_inquery_id_9",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:10,
        question : "test_inquery_id_10",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
    ]
  },
  {
    section_id:"SR",
    section_name : "PART2",
    data : [
      {
        id:1,
        question : "test_inquery_id_1",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:2,
        question : "test_inquery_id_2",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:3,
        question : "test_inquery_id_3",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:4,
        question : "test_inquery_id_4",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:5,
        question : "test_inquery_id_5",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:6, 
        question : "test_inquery_id_6",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:7,
        question : "test_inquery_id_7",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:8,
        question : "test_inquery_id_8",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:9,
        question : "test_inquery_id_9",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:10,
        question : "test_inquery_id_10",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
    ]
  },
  {
    section_id:"PN",
    section_name : "PART3",
    data : [
      {
        id:1,
        question : "test_inquery_id_1",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:2,
        question : "test_inquery_id_2",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:3,
        question : "test_inquery_id_3",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:4,
        question : "test_inquery_id_4",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:5,
        question : "test_inquery_id_5",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:6, 
        question : "test_inquery_id_6",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:7,
        question : "test_inquery_id_7",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:8,
        question : "test_inquery_id_8",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:9,
        question : "test_inquery_id_9",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:10,
        question : "test_inquery_id_10",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
    ]
  },
  {
    section_id:"WT",
    section_name : "PART4",
    data : [
      {
        id:1,
        question : "test_inquery_id_1",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:2,
        question : "test_inquery_id_2",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:3,
        question : "test_inquery_id_3",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:4,
        question : "test_inquery_id_4",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:5,
        question : "test_inquery_id_5",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:6, 
        question : "test_inquery_id_6",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:7,
        question : "test_inquery_id_7",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:8,
        question : "test_inquery_id_8",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:9,
        question : "test_inquery_id_9",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
      {
        id:10,
        question : "test_inquery_id_10",
        option  : [
          {
            no:1,
            option_text: "option-text-1"
          },
          {
            no:2,
            option_text: "option-text-2"
          },
          {
            no:3,
            option_text: "option-text-3"
          },
          {
            no:4,
            option_text: "option-text-4"
          },
          {
            no:5,
            option_text: "option-text-5"
          },
        ]
      },
    ]
  },
]

