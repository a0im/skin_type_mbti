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
  reset : function(){for (key in this) this[key] = false},
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
    section_name : "section_name_A",
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
    section_id:"SR",
    section_name : "section_name_B",
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
    section_name : "section_name_C",
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
    section_name : "section_name_D",
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

