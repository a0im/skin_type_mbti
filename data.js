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
    section_name : "DRY",
    data : [
      {
        id: 1,
        question: "After cleansing and waiting for 2-3 hours without applying anything, how does your forehead and cheeks feel and look under bright light?",
        options: [
          {
            no: 1,
            option_text: "Very rough, bumpy, and with visible flakes."
          },
          {
            no: 2,
            option_text: "Tight."
          },
          {
            no: 3,
            option_text: "Not tight, doesn't appear dry, and doesn't feel oily."
          },
          {
            no: 4,
            option_text: "Appears shiny, as if reflecting light."
          },
        ]
      },
      {
        id: 2,
        question: "When taking a photo, does your skin appear shiny?",
        options: [
          {
            no: 1,
            option_text: "Not at all."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          }
        ]
      },
      {
        id: 3,
        question: "How is your makeup holding up 2-3 hours after applying foundation (without powder)?",
        options: [
          {
            no: 1,
            option_text: "Slightly bumpy with creases."
          },
          {
            no: 2,
            option_text: "Looks smooth."
          },
          {
            no: 3,
            option_text: "Appears shiny."
          },
          {
            no: 4,
            option_text: "Doesn't set and appears shiny."
          },
          {
            no: 5,
            option_text: "I don't wear facial foundation."
          }
        ]
      },
      {
        id: 4,
        question: "When your skin is dry and you don't use moisturizer, how does it feel?",
        options: [
          {
            no: 1,
            option_text: "Feels dry and might crack."
          },
          {
            no: 2,
            option_text: "Feels tight."
          },
          {
            no: 3,
            option_text: "Normal."
          },
          {
            no: 4,
            option_text: "Appears shiny, and I don't need moisturizer."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      },
      {
        id: 5,
        question: "When examined under a magnifying glass, do you have a lot of large pores?",
        options: [
          {
            no: 1,
            option_text: "No."
          },
          {
            no: 2,
            option_text: "Forehead and nose are pronounced."
          },
          {
            no: 3,
            option_text: "Quite a few."
          },
          {
            no: 4,
            option_text: "A significant number."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      },
      {
        id: 6,
        question: "How do you typically describe your skin type?",
        options: [
          {
            no: 1,
            option_text: "Dry."
          },
          {
            no: 2,
            option_text: "Normal."
          },
          {
            no: 3,
            option_text: "Combination."
          },
          {
            no: 4,
            option_text: "Oily."
          }
        ]
      },
      {
        id: 7,
        question: "How does your skin react when using a foaming cleanser?",
        options: [
          {
            no: 1,
            option_text: "It becomes dry and may crack."
          },
          {
            no: 2,
            option_text: "It becomes slightly dry but doesn't crack."
          },
          {
            no: 3,
            option_text: "It's normal."
          },
          {
            no: 4,
            option_text: "It quickly becomes oily."
          },
          {
            no: 5,
            option_text: "I don't use foaming cleansers (if it's due to skin dryness, choose option 1)."
          }
        ]
      },
      {
        id: 8,
        question: "Do you feel your skin tightening when you haven't applied moisturizer?",
        options: [
          {
            no: 1,
            option_text: "Always."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Rarely."
          },
          {
            no: 4,
            option_text: "Never."
          }
        ]
      },
      {
        id: 9,
        question: "Do you have whiteheads or blackheads?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Occasionally."
          },
          {
            no: 4,
            option_text: "Always."
          }
        ]
      },
      {
        id: 10,
        question: "Do you experience a shiny sensation on your forehead and nose?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          }
        ]
      },
      {
        id: 11,
        question: "How does the skin on your cheeks feel and look 2-3 hours after applying moisturizer?",
        options: [
          {
            no: 1,
            option_text: "Very rough, with flakes or peeling."
          },
          {
            no: 2,
            option_text: "Smooth."
          },
          {
            no: 3,
            option_text: "A bit shiny."
          },
          {
            no: 4,
            option_text: "Shiny and greasy."
          }
        ]
      }      
    ]
  },
  {
    section_id:"SR",
    section_name : "PART2",
    data : [
      {
        id: 1,
        question: "Do you have red pimples on your face?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Occasionally, at least once a month."
          },
          {
            no: 4,
            option_text: "Frequently, at least once a week."
          }
        ]
      },
      {
        id: 2,
        question: "Do you experience a rash, itching, or stinging sensation when you apply skincare products such as cleanser, toner, and moisturizer to your skin?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't use products."
          }
        ]
      },
      
      {
        id: 3,
        question: "Have you ever been diagnosed with acne or rosacea?",
        options: [
          {
            no: 1,
            option_text: "No."
          },
          {
            no: 2,
            option_text: "Others have mentioned it."
          },
          {
            no: 3,
            option_text: "Yes, to some extent."
          },
          {
            no: 4,
            option_text: "Yes, to a severe extent."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      },
      {
        id: 4,
        question: "How often do you get something on your skin where you wear accessories?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      },
      {
        id: 5,
        question: "Have you experienced itching, redness, or breakouts after using sunscreen?",
        options: [
{
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      },
      {
        id: 6,
        question: "Have you been diagnosed with atopic dermatitis, eczema, or contact dermatitis?",
        options: [
          {
            no: 1,
            option_text: "No."
          },
          {
            no: 2,
            option_text: "Others have mentioned it."
          },
          {
            no: 3,
            option_text: "Yes, to some extent."
          },
          {
            no: 4,
            option_text: "Yes, to a severe extent."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      }
      ,
      {
        id: 7,
        question: "Do you develop a rash in places where you wore rings?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't wear rings."
          }
        ]
      }
      ,
      {
        id: 8,
        question: "Have you ever experienced itching, dryness, or redness after using strongly scented skincare products?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't use strongly scented products."
          }
        ]
      }
      ,
      {
        id: 9,
        question: "Have you had no issues after using hotel-provided skincare products while traveling?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Rarely."
          },
          {
            no: 3,
            option_text: "Skin becomes itchy, red, or breaks out."
          },
          {
            no: 4,
            option_text: "I don't use them due to past issues."
          },
          {
            no: 5,
            option_text: "I usually bring my own products, so I'm not sure."
          }
        ]
      }
      ,
      {
        id: 10,
        question: "Do any of your family members have a history of atopic dermatitis, eczema, allergies, or asthma?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "One family member."
          },
          {
            no: 3,
            option_text: "Multiple family members."
          },
          {
            no: 4,
            option_text: "Many family members."
          },
          {
            no: 5,
            option_text: "I'm not sure."
          }
        ]
      }
      ,
      {
        id: 11,
        question: "How does your skin react when wearing clothes washed with fragrant detergents or anti-static agents?",
        options: [
          {
            no: 1,
            option_text: "It's fine."
          },
          {
            no: 2,
            option_text: "It's slightly dry."
          },
          {
            no: 3,
            option_text: "It itches."
          },
          {
            no: 4,
            option_text: "It itches, and I develop something."
          },
          {
            no: 5,
            option_text: "I don't use fragrant detergents or anti-static agents."
          }
        ]
      },
      {
        id: 12,
        question: "How often does your face and neck become red due to exercise, stress, or emotional changes?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          }
        ]
      },
      {
        id: 13,
        question: "How often does your skin become red or flush after drinking alcohol?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't drink alcohol."
          }
        ]
      },
      {
        id: 14,
        question: "How often does your skin become red or feel like it's burning after eating spicy or hot foods?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't eat spicy foods. (If the reason for this is the above-mentioned symptoms, please check 1.)"
          }
        ]
      },
      {
        id: 15,
        question: "How many noticeable areas of redness or dilated blood vessels do you have on your face, especially around the nose?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "Almost none (including 1-3 areas, including the nose)."
          },
          {
            no: 3,
            option_text: "Some (including 4-6 areas, including the nose)."
          },
          {
            no: 4,
            option_text: "Many (including 7 or more areas, including the nose)."
          }
        ]
      },
      {
        id: 16,
        question: "Does your face appear red in photos?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          }
        ]
      },
      {
        id: 17,
        question: "Do you appear to have sunburn even when you haven't worn sunscreen?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I never get sunburn."
          }
        ]
      },
      {
        id: 18,
        question: "Do you experience itching, swelling, or redness from skincare and makeup products?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't use products (if it's due to the mentioned symptoms, choose option 4)."
          }
        ]
      } 
    ]
  },
  {
    section_id:"PN",
    section_name : "PART3",
    data : [
      {
        id: 1,
        question: "Do you develop dark spots after having acne or ingrown hair?",
        options: [
          {
            no: 1,
            option_text: "None or never happened."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "No acne or ingrown hair."
          }
        ]
      }
      ,
      {
        id: 2,
        question: "After getting cut or injured, how long do dark or red marks usually last?",
        options: [
          {
            no: 1,
            option_text: "None or never happened."
          },
          {
            no: 2,
            option_text: "About a week."
          },
          {
            no: 3,
            option_text: "Several weeks."
          },
          {
            no: 4,
            option_text: "Several months."
          }
        ]
      }
      ,
      {
        id: 3,
        question: "How many areas of excessive pigmentation have you had due to pregnancy, birth control pills, or hormone replacement therapy?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "One area."
          },
          {
            no: 3,
            option_text: "Multiple areas."
          },
          {
            no: 4,
            option_text: "A significant number."
          },
          {
            no: 5,
            option_text: "Doesn't apply to me (if you're male or have never experienced pregnancy, birth control pills, or hormone replacement therapy)."
          }
        ]
      }
      ,
      {
        id: 4,
        question: "Do you have or have you had dark spots on your upper lip, cheeks, or other areas that were treated or removed through procedures?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "Not sure."
          },
          {
            no: 3,
            option_text: "Slightly noticeable."
          },
          {
            no: 4,
            option_text: "Multiple spots."
          }
        ]
      },
      {
        id: 5,
        question: "Do the dark areas on your skin worsen after prolonged sun exposure?",
        options: [
          {
            no: 1,
            option_text: "No dark patches."
          },
          {
            no: 2,
            option_text: "Not sure."
          },
          {
            no: 3,
            option_text: "Frequently."
          },
          {
            no: 4,
            option_text: "Always."
          },
          {
            no: 5,
            option_text: "I don't use such products (if it's due to the mentioned symptoms, choose option 1)."
          }
        ]
      },
      {
        id: 6,
        question: "Have you been diagnosed with melasma, light or dark brown or grayish spots on your face?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "Had them but don't have them now."
          },
          {
            no: 3,
            option_text: "Still have them."
          },
          {
            no: 4,
            option_text: "Severely affected."
          },
          {
            no: 5,
            option_text: "Not sure."
          }
        ]
      },
      {
        id: 7,
        question: "Do you have or have you had small brown spots on your face, chest, back, or arms?",
        options: [
          {
            no: 1,
            option_text: "None."
          },
          {
            no: 2,
            option_text: "A few (1-5)."
          },
          {
            no: 3,
            option_text: "Many (6-15)."
          },
          {
            no: 4,
            option_text: "A large number (16 or more)."
          }
        ]
      },
      {
        id: 8,
        question: "How does your skin react when exposed to sunlight for the first time in months?",
        options: [
          {
            no: 1,
            option_text: "It turns red."
          },
          {
            no: 2,
            option_text: "It turns red and then darkens."
          },
          {
            no: 3,
            option_text: "It gradually darkens."
          },
          {
            no: 4,
            option_text: "I'm not sure if my skin has become darker or not."
          }
        ]
      },
      {
        id: 9,
        question: "What happens if you continuously expose your skin to the sun for a few days?",
        options: [
          {
            no: 1,
            option_text: "You get sunburn and blisters but your skin color doesn't change."
          },
          {
            no: 2,
            option_text: "Your skin becomes slightly darker."
          },
          {
            no: 3,
            option_text: "Your skin becomes significantly darker."
          },
          {
            no: 4,
            option_text: "Your skin is already quite dark."
          },
          {
            no: 5,
            option_text: "Not sure."
          }
        ]
      },
      {
        id: 10,
        question: "What is your natural hair color when you haven't dyed it?",
        options: [
          {
            no: 1,
            option_text: "Blonde."
          },
          {
            no: 2,
            option_text: "Brown."
          },
          {
            no: 3,
            option_text: "Black."
          },
          {
            no: 4,
            option_text: "Red."
          }
        ]
      },
    ]
  },
  {
    section_id:"WT",
    section_name : "PART4",
    data : [
      {
        id: 1,
        question: "Do you have wrinkles on your face?",
        options: [
          {
            no: 1,
            option_text: "No, wrinkles do not appear even when you smile or frown."
          },
          {
            no: 2,
            option_text: "Wrinkles appear only when making expressions."
          },
          {
            no: 3,
            option_text: "Wrinkles appear when making expressions and even when not making expressions."
          },
          {
            no: 4,
            option_text: "There are many wrinkles present even without making any specific expressions."
          }
        ]
      }
      ,
      {
        id: 2,
        question: "How does your mother's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "She looks 5-10 years younger than her age."
          },
          {
            no: 2,
            option_text: "She looks her age."
          },
          {
            no: 3,
            option_text: "She looks about 5 years older."
          },
          {
            no: 4,
            option_text: "She looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      }
      ,
      {
        id: 3,
        question: "How does your father's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "He looks 5-10 years younger than his age."
          },
          {
            no: 2,
            option_text: "He looks his age."
          },
          {
            no: 3,
            option_text: "He looks about 5 years older."
          },
          {
            no: 4,
            option_text: "He looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      },
      {
        id: 4,
        question: "How does your maternal grandmother's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "She looks 5-10 years younger than her age."
          },
          {
            no: 2,
            option_text: "She looks her age."
          },
          {
            no: 3,
            option_text: "She looks about 5 years older."
          },
          {
            no: 4,
            option_text: "She looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      },
      {
        id: 5,
        question: "How does your maternal grandfather's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "He looks 5-10 years younger than his age."
          },
          {
            no: 2,
            option_text: "He looks his age."
          },
          {
            no: 3,
            option_text: "He looks about 5 years older."
          },
          {
            no: 4,
            option_text: "He looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      },
      {
        id: 6,
        question: "How does your paternal grandmother's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "She looks 5-10 years younger than her age."
          },
          {
            no: 2,
            option_text: "She looks her age."
          },
          {
            no: 3,
            option_text: "She looks about 5 years older."
          },
          {
            no: 4,
            option_text: "She looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      },
      {
        id: 7,
        question: "How does your paternal grandfather's skin age appear?",
        options: [
          {
            no: 1,
            option_text: "He looks 5-10 years younger than his age."
          },
          {
            no: 2,
            option_text: "He looks his age."
          },
          {
            no: 3,
            option_text: "He looks about 5 years older."
          },
          {
            no: 4,
            option_text: "He looks more than 5 years older."
          },
          {
            no: 5,
            option_text: "I don't know (adoption or memory loss)."
          }
        ]
      },
      {
        id: 8,
        question: "Have you ever tanned your skin for two weeks or more in your life? If yes, how many times have you done so?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Once or twice."
          },
          {
            no: 3,
            option_text: "About 5-10 times."
          },
          {
            no: 4,
            option_text: "More than 10 times."
          }
        ]
      },
      {
        id: 9,
        question: "Have you participated in tanning programs for two weeks or more based on the seasons?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "Once a month."
          },
          {
            no: 3,
            option_text: "Once a week."
          },
          {
            no: 4,
            option_text: "Every day."
          }
        ]
      },
      {
        id: 10,
        question: "How much sun exposure do you get on average in your daily living environment?",
        options: [
          {
            no: 1,
            option_text: "Almost none. I mostly stay indoors and don't get much sun."
          },
          {
            no: 2,
            option_text: "A little. I see the sun, but it's not very strong."
          },
          {
            no: 3,
            option_text: "Quite a bit. I'm exposed to the sun fairly regularly."
          },
          {
            no: 4,
            option_text: "A lot. I live in an area with strong sunlight, near the equator, for example."
          }
        ]
      },
      {
        id: 11,
        question: "In terms of your outward appearance, how old do you appear to be?",
        options: [
          {
            no: 1,
            option_text: "I look about 1-5 years younger than my age."
          },
          {
            no: 2,
            option_text: "I look my age."
          },
          {
            no: 3,
            option_text: "I look about 5 years older."
          },
          {
            no: 4,
            option_text: "I look more than 5 years older."
          }
        ]
      },
      {
        id: 12,
        question: "Have you exposed your skin to prolonged sunlight over the last five years due to outdoor sports or activities?",
        options: [
          {
            no: 1,
            option_text: "No."
          },
          {
            no: 2,
            option_text: "Once a month."
          },
          {
            no: 3,
            option_text: "Once a week."
          },
          {
            no: 4,
            option_text: "Every day."
          }
        ]
      },
      {
        id: 13,
        question: "If you get a tan, how often do you visit a tanning salon?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "1-5 times."
          },
          {
            no: 3,
            option_text: "5-10 times."
          },
          {
            no: 4,
            option_text: "Quite frequently."
          }
        ]
      },
      {
        id: 14,
        question: "Have you ever smoked? If you're a smoker, how often do you smoke, or how often are you exposed to a smoking environment?",
        options: [
          {
            no: 1,
            option_text: "Never."
          },
          {
            no: 2,
            option_text: "A few times."
          },
          {
            no: 3,
            option_text: "Multiple times."
          },
          {
            no: 4,
            option_text: "I smoke every day."
          },
          {
            no: 5,
            option_text: "I don't smoke, but I'm in an environment with smokers."
          }
        ]
      },
      {
        id: 15,
        question: "How polluted is the air in your living area?",
        options: [
          {
            no: 1,
            option_text: "Very clean and clear."
          },
          {
            no: 2,
            option_text: "It's clear sometimes, but not always."
          },
          {
            no: 3,
            option_text: "Slightly polluted."
          },
          {
            no: 4,
            option_text: "Highly polluted."
          }
        ]
      },
      {
        id: 16,
        question: "Have you used vitamin facial creams like retinol, Retin-A, or Differin for an extended period?",
        options: [
          {
            no: 1,
            option_text: "Yes, for several years consistently."
          },
          {
            no: 2,
            option_text: "Occasionally."
          },
          {
            no: 3,
            option_text: "Used them when I was younger due to acne."
          },
          {
            no: 4,
            option_text: "No, I haven't used them."
          }
        ]
      },
      {
        id: 17,
        question: "How often do you consume fruits and vegetables?",
        options: [
          {
            no: 1,
            option_text: "Every day."
          },
          {
            no: 2,
            option_text: "Once a day."
          },
          {
            no: 3,
            option_text: "Occasionally."
          },
          {
            no: 4,
            option_text: "I don't consume them at all."
          }
        ]
      },
      {
        id: 18,
        question: "What percentage of your daily food intake consists of fruits and vegetables?",
        options: [
          {
            no: 1,
            option_text: "75-100%."
          },
          {
            no: 2,
            option_text: "25-75%."
          },
          {
            no: 3,
            option_text: "10-15%."
          },
          {
            no: 4,
            option_text: "0-10%."
          }
        ]
      },
      {
        id: 19,
        question: "What is your natural skin tone?",
        options: [
          {
            no: 1,
            option_text: "Dark."
          },
          {
            no: 2,
            option_text: "Medium."
          },
          {
            no: 3,
            option_text: "Fair."
          },
          {
            no: 4,
            option_text: "Very fair."
          }
        ]
      },
      {
        id: 20,
        question: "What is your racial background?",
        options: [
          {
            no: 1,
            option_text: "African American."
          },
          {
            no: 2,
            option_text: "Asian."
          },
          {
            no: 3,
            option_text: "Latino/Hispanic."
          },
          {
            no: 4,
            option_text: "Caucasian."
          }
        ]
      }  
    ]
  },
]

